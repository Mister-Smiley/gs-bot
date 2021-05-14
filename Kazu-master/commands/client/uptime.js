const { MessageEmbed } = require("discord.js");
const { MESSAGES } = require("../../util/constants");
const chalk = require("chalk");

module.exports.run = async (client, message, args) => {
  function duration(ms) {
    const sec = Math.floor((ms / 1000) % 60).toString();
    const min = Math.floor((ms / (1000 * 60)) % 60).toString();
    const hrs = Math.floor((ms / (1000 * 60 * 60)) % 60).toString();
    const days = Math.floor((ms / (1000 * 60 * 60 * 24)) % 60).toString();
    return `${days.padStart(1, "0")} days, ${hrs.padStart(2, "0")} hours, ${min.padStart(2, "0")} minutes, ${sec.padStart(2, "0")} seconds, `;
  }
  const upEmbed = new MessageEmbed()
    .setColor("#8B0000")
    .setDescription(`I've been online since: ${duration(client.uptime)}`)
    .setTimestamp();
  message.channel.send(upEmbed);

console.log(`${chalk.bgGreen.underline(message. author. tag)}  use cmd uptime  in ${chalk.bgGreen.underline(message.guild.name)} server !  (${duration(client.uptime) }) `);
};
module.exports.help = MESSAGES.COMMANDS.CLIENT.UPTIME;