const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    guildID: String,
    userID: String,
    username: String,

    //* Data for level
    experience: {
        type: Number,
        default: 0,
    },
    level: {
        type: Number,
        default: 1,
    }
});

module.exports = mongoose.model("User", userSchema);
