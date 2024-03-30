/**
 * @author Ajanthapan Agilaruben
 * This File contains the Schema for the Mongo DB table that houses expired session tokens.
 *
 * @date 29/03/2024 - 15:39:28 PM
 *
 */
const mongoose = require("mongoose");

const BlacklistSchema = new mongoose.Schema({
  token: String,
});

const BlacklistModel = mongoose.model("blacklist", BlacklistSchema);
module.exports = BlacklistModel;
