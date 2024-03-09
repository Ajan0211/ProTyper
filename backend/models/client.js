const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  password: String,
  coinbalance: Number,
});

const ClientModel = mongoose.model("clients", ClientSchema);
module.exports = ClientModel;
