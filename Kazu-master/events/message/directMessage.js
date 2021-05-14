const { Collection, MessageEmbed } = require("discord.js");
const { PREFIX } = require("../../config");
const { readdirSync } = require("fs");
const categoryList = readdirSync("./commands");

module.exports = async (client, message) => {
  if (message.author.bot) return;
  message.channel.send("This options is not available");
};
