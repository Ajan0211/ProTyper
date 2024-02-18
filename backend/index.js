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
  ClientModel.create(req.body)
    .then((clients) => res.json(clients))
    .catch((err) => res.json(err));
});

app.get("/profile", (req, res) => {
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, JWT_KEY, {}, (err, user) => {
      if (err) throw err;
      res.json(user);
    });
  } else {
    res.json(null);
  }
});

app.listen(3001, () => {
  console.log("server is running");
});
