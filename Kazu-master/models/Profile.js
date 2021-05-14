const mongoose = require("mongoose");

const profileSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    guildID: String,
    profileID: String,
    class: String,
    experience: {
        type: Number,
        default: 0,
    },
    level: {
        type: Number,
        default: 1,
    },
    wins: {
        type: Number,
        default: 0
    },
    losses: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model("Profile", profileSchema);
