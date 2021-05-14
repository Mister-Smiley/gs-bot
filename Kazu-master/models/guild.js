const mongoose = require("mongoose");
const { DEFAULTSETTINGS: defaults } = require("../config");
const guildSchma = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  guildID: String,
  prefix: { type: String, default: defaults.prefix, },
  logChannel: { type: String, default: defaults.logChannel, required: false },
  levelMessage: { type: String, default: false, },
  welcomeMessage: { type: String, default: false, required: false }
});
module.exports = mongoose.model("Guild", guildSchma);
