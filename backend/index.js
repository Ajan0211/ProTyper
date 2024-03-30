/**
 * @author Ajanthapan Agilaruben
 * This File contains the routing functions for all the GET and POST requests.
 *
 * It also contains some utility functions that can be reused within each route
 * (i.e. a function for checking if a user is logged in for protected routes. )
 *
 * @date 29/03/2024 - 15:39:28 PM
 *
 */

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const ClientModel = require("./models/client");
const BlacklistModel = require("./models/blacklist");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const { hashPword, comparePword } = require("./password/authenticate");
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/client");

const JWT_KEY = "dummy-secret-key";

/**  This checks if the user is logged in using the session token.
 *
 * @returns and asyncrunus promise containing the users information using cookies.
 */
const checkLoggedIn = async (req) => {
  const { token } = req.cookies;
  if (token) {
    return await new Promise((resolve, reject) => {
      BlacklistModel.findOne({ token }).then((alreadyBlacklisted) => {
        if (alreadyBlacklisted) {
          resolve(null);
        } else {
          jwt.verify(token, JWT_KEY, {}, (err, user) => {
            if (err) reject(err);
            ClientModel.findOne({ email: user.email }).then((userRecord) => {
              resolve(userRecord);
            });
          });
        }
      });
    });
  }

  return null;
};

/** This is the function that checks if the user has logged out of their account by removing the cookie
 *
 * @returns error if the user was not able to be logged out.
 */
app.get("/logout", (req, res) => {
  checkLoggedIn(req).then(() => {
    const { token } = req.cookies;
    if (token) {
      BlacklistModel.findOne({ token }).then((alreadyBlacklisted) => {
        if (alreadyBlacklisted) {
          return res.sendStatus(500); // send error
        } else {
          BlacklistModel.create({ token })
            .then(() => {
              // res.setHeader("Clear-Site-Data", "cookies");
              res.status(200).json({ message: "You are logged out!" });
            })
            .catch((err) => res.json(err));
        }
      });
    }
  });
});

// This functions handles how the user would checkout when purchasing coins
const checkoutForCoins = (bag, user, res) => {
  let purchased_balance = 0;
  bag.forEach((element) => {
    if (element) {
      if (element.type == "coin") {
        purchased_balance += element.quantity;
      }
    }
  });

  let current_balance = 0;

  if (user?.coinbalance) {
    current_balance = user.coinbalance;
  }

  /**
   * This is the function that updates the balance on the database.
   */
  const new_balance = purchased_balance + current_balance;
  const query = { email: user.email };
  const newData = { coinbalance: new_balance };
  ClientModel.findOneAndUpdate(query, newData, {
    upsert: true,
    returnNewDocument: true,
  }).then((updatedDoc) => {
    if (!updatedDoc) return res.send(500, { error: err });
    return res.send("Successfully updated coin balance");
  });
};

/**
 * This function is that checks out for the skins and themes in shop and ensures that
 * the user has enough coins to buy items
 * @param {bag, user, res}
 * @returns the status code
 *
 */
const checkoutForItems = (bag, user, res) => {
  let items_cost = 0;
  bag.forEach((element) => {
    if (element) {
      if (element.type != "coin") {
        items_cost += element.price;
      }
    }
  });

  let current_balance = 0;

  if (user?.coinbalance) {
    current_balance = user.coinbalance;
  }

  if (current_balance < items_cost) {
    /**  This sends an error code if user doesnt have enough coins otherwise it would return the
     *   new balance which would have been took away from the cost of the items bought in the database.
     *
     */
    return res.send(401, { message: "Insufficient coin balance!" });
  } else {
    const new_balance = current_balance - items_cost;
    const query = { email: user.email };

    let current_items = [];
    if (user?.items) {
      current_items = user.items;
    }

    const newData = {
      coinbalance: new_balance,
      items: [...current_items, ...bag],
    };
    /**This adds the item to the database to the list of items. */
    ClientModel.findOneAndUpdate(query, newData, {
      upsert: true,
      returnNewDocument: true,
    }).then((updatedDoc) => {
      if (!updatedDoc) return res.send(500, { error: err });
      return res.send("Successfully purchased items!");
    });
  }
};

app.post("/checkout", (req, res) => {
  const { bag, type } = req.body;

  checkLoggedIn(req).then((user) => {
    if (type == "coin") {
      return checkoutForCoins(bag, user, res);
    } else if (type == "item") {
      return checkoutForItems(bag, user, res);
    }
  });
});

app.post("/save-race", (req, res) => {
  checkLoggedIn(req).then((user) => {
    let current_races = [];
    if (user?.races) {
      current_races = [...user.races];
    }

    const { speed } = req.body;
    const query = { email: user.email };
    const newData = { races: [...current_races, { speed }] };

    ClientModel.findOneAndUpdate(query, newData, {
      upsert: true,
      returnNewDocument: true,
    }).then((updatedDoc) => {
      if (!updatedDoc) return res.send(500, { error: err });
      return res.send("Successfully saved race!");
    });
  });
});

/**This is the function that aggregates the racing data for each user and calculates the leadboard and returns it  */
app.post("/leaderboard", async (req, res) => {
  try {
    const leaderboard = await ClientModel.aggregate([
      {
        $addFields: {
          races: {
            $ifNull: ["$races", []], // Making sure races is an array if it's null or missing.
          },
        },
      },
      {
        $project: {
          _id: 0,
          firstname: 1,
          lastname: 1,
          wpm: {
            $cond: {
              if: { $eq: [{ $size: "$races" }, 0] }, // Check if races is empty.
              then: 0,
              else: { $avg: "$races.speed" }, // Calculate the average speed if not empty.
            },
          },
        },
      },
      { $sort: { wpm: -1 } }, // Sort by WPM in descending order (since it's a leaderboard).
    ]);

    return res.json({ leaderboard });
  } catch (error) {
    console.error(error);
    return res.status(500).send(error);
  }
});

/**  Th */
app.post("/Login", (req, res) => {
  const { email, password } = req.body;
  ClientModel.findOne({ email: email }).then((user) => {
    if (user) {
      comparePword(password, user.password).then((isCorrect) => {
        if (isCorrect) {
          // res.json("Success");
          jwt.sign(
            {
              email: user.email,
              id: user._id,
              firstname: user.firstname,
              lastname: user.lastname,
            },
            JWT_KEY, // for testing purposes
            {},
            (err, token) => {
              if (err) throw err;
              res.cookie("token", token).json(user);
            }
          );
        } else {
          res.json("the password is incorrect");
        }
      });
    } else {
      res.json("No record existed");
    }
  });
});
app.post("/SignUp", (req, res) => {
  ClientModel.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      res.json({ message: "That email is already being used!", error: true });
    } else {
      hashPword(req.body.password).then((hashedPW) => {
        ClientModel.create({ ...req.body, password: hashedPW, coinbalance: 0 })
          .then((clients) =>
            res.json({
              message: `Successfully signed up as ${req.body.email}!`,
              error: false,
            })
          )
          .catch((err) => res.json(err));
      });
    }
  });
});

app.get("/profile", (req, res) => {
  checkLoggedIn(req).then((user) => {
    res.json(user);
  });
});
// This is the function that manages the changes inputted by the user and updates it in the database.
app.post("/account-changes", (req, res) => {
  checkLoggedIn(req).then((user) => {
    ClientModel.findOne({ email: req.body.email }).then((other_user) => {
      // This also checks if the email has already been used and sends an error message if it is.
      if (other_user) {
        res.json({ message: "That email is already being used!", error: true });
      } else {
        const query = { email: user.email };
        const updateData = Object.entries(req.body).reduce(
          (acc, [key, value]) => {
            if (value !== "") {
              acc[key] = value;
            }
            return acc;
          },
          {}
        );
        /**This adds the hashed version of the password to the database */
        if (updateData.password) {
          hashPword(updateData.password).then((hashedPW) => {
            let actualUpdate = {};
            actualUpdate = { ...updateData, password: hashedPW };
            ClientModel.findOneAndUpdate(query, actualUpdate, {
              upsert: true,
              returnNewDocument: true,
            }).then((updatedDoc) => {
              if (!updatedDoc) return res.send(500, { error: err });
              return res.json({
                message: "Successfully updated account details!",
                error: false,
              });
            });
          });
        } else {
          console.log(updateData);
          console.log(query);
          ClientModel.findOneAndUpdate(query, updateData, {
            upsert: true,
            returnNewDocument: true,
          }).then((updatedDoc) => {
            if (!updatedDoc) return res.send(500, { error: err });
            return res.json({
              message: "Successfully updated account details!",
              error: false,
            });
          });
        }
      }
    });
  });
});

app.listen(3001, () => {
  console.log("server is running");
});
