const { MESSAGES } = require("../../util/constants");
const { noPerm } = require("../../util/error");
const chalk = require("chalk");
module.exports.run = (client, message, args) => {
  let msg;
  if (message.member.hasPermission('MANAGE_MESSAGES')) { let chan = message.mentions.channels.first(); if (chan) { msg = args.splice(1).join(" "); message.delete(); return chan.send(msg); } else { msg = args.join(" "); message.delete(); return message.channel.send(msg); } } else { if (chan) return noPerm(message, "no perm"); msg = args.join(" "); message.delete(); return message.channel.send(msg); }
  console.log(`${chalk.bgGreen.underline(message. author. tag)}  use cmd say in ${chalk.bgGreen.underline(message.guild.name)} server !`);
};
module.exports.help = MESSAGES.COMMANDS.MISC.SAY;