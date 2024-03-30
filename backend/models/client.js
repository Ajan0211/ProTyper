/**
 * @author Ajanthapan Agilaruben
 * This File contains the Schema for the Mongo DB table that houses user account details, inventory and coin balance.
 *
 * @date 29/03/2024 - 15:40:28 PM
 *
 */

const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  password: String,

  coinbalance: Number,
  items: Array,
  races: Array,
});

const ClientModel = mongoose.model("clients", ClientSchema);
module.exports = ClientModel;
