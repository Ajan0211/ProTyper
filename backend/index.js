const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const ClientModel = require("./models/client");
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
    // Later add logic to check blacklist for token

    return await new Promise((resolve, reject) => {
      jwt.verify(token, JWT_KEY, {}, (err, user) => {
        if (err) reject(err);
        ClientModel.findOne({ email: user.email }).then((userRecord) => {
          resolve(userRecord);
        });
      });
    });
  }

  return null;
};

app.post("/checkout", (req, res) => {
  const { bag } = req.body;

  checkLoggedIn(req).then((user) => {
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
