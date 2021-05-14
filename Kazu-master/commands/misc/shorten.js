const shorten = require("isgd");
const errors = require("../../util/error");
const { MESSAGES } = require("../../util/constants");
const chalk = require("chalk");
module.exports.run = async (client, message, args) => {
  if (!args[1]) {
    message.delete();
    shorten.shorten(args[0], function (res) { if (res.startsWith("Error:")) return errors.valideURL(message, "Valide URL"); message.channel.send(`Here is your shortened link: **<${res}>**`); });
  } else {
    shorten.custom(args[0], args[1], function (res) { if (res.startsWith("Error:")) return message.channel.send(`**<${res}>**`); message.channel.send(`**<${res}>**`); });
  }
  console.log(`${chalk.bgGreen.underline(message. author. tag)}  use cmd shorten in ${chalk.bgGreen.underline(message.guild.name)} server !`);
};
module.exports.help = MESSAGES.COMMANDS.MISC.SHORTEN;