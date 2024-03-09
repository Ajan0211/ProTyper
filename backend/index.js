const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const ClientModel = require("./models/client");
const BlacklistModel = require("./models/blacklist");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/client");

const JWT_KEY = "dummy-secret-key";

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
    return res.send(401, { message: "Insufficient coin balance!" });
  } else {
    const new_balance = current_balance - items_cost;
    const query = { email: user.email };

    let current_items = [];
    if (user?.items) {
      current_items = user.items;
    }

    // also need to do logic for checking if user already has item

    const newData = {
      coinbalance: new_balance,
      items: [...current_items, ...bag],
    };

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

app.post("/Login", (req, res) => {
  const { email, password } = req.body;
  ClientModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
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
    } else {
      res.json("No record existed");
    }
  });
});
app.post("/SignUp", (req, res) => {
  ClientModel.create({ ...req.body, coinbalance: 0 })
    .then((clients) => res.json(clients))
    .catch((err) => res.json(err));
});

app.get("/profile", (req, res) => {
  checkLoggedIn(req).then((user) => {
    res.json(user);
  });
});

app.listen(3001, () => {
  console.log("server is running");
});
