const mongoose = require("mongoose");

const BlacklistSchema = new mongoose.Schema({
  token: String,
});

const BlacklistModel = mongoose.model("blacklist", BlacklistSchema);
module.exports = BlacklistModel;
