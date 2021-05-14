const { MessageEmbed } = require("discord.js"), superagent = require("superagent");
const { MESSAGES } = require("../../util/constants");
const chalk = require("chalk");
module.exports.run = async (client, message, args) => {
  var isOk = /^[0-9A-F]{6}$/i.test(args[0]);
  if (isOk === false) return message.reply("Please provide a valid hex code without the #");
  const { body } = await superagent.get(`https://api.alexflipnote.dev/color/` + args[0]);
  const embed = new MessageEmbed()
    .setColor(`#${args[0]}`)
    .setTitle(body.name)
    .setDescription("Hex: " + body.hex + "\n" + "RGB: " + body.rgb)
    .setImage(body.image)
    .setTimestamp();
  message.channel.send({ embed });
  console.log(`${chalk.bgGreen.underline(message. author. tag)}  use cmd colorshearsh in ${chalk.bgGreen.underline(message.guild.name)} server !`);
};
module.exports.help = MESSAGES.COMMANDS.MISC.COLOR;