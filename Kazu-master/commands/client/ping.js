const { MESSAGES } = require("../../util/constants");
const { MessageEmbed } = require("discord.js");
const chalk = require("chalk");
module.exports.run = async (client, message, args) => {
  try {
    const msg = await message.channel.send("Ping!");
    const pingEmbed = new MessageEmbed()
      .setColor("#010C79")
      .setTitle("《 Response time 》")
      .setThumbnail("https://media.giphy.com/media/l41lIvPtFdU3cLQjK/giphy.gif")
      .setDescription(
        `
        **Pinging...**
        \n➝ BOT: \`${msg.createdTimestamp - message.createdTimestamp}ms\`
        \n➝ API: \`${Math.round(client.ws.ping)}ms\``
      )
      .setTimestamp()
      .setFooter(message.author.tag);
    msg.delete().then(() => message.channel.send(pingEmbed));
  } catch (e) { console.log(e); }

console.log(`${chalk.bgGreen.underline(message. author. tag)}  use cmd ping in ${chalk.bgGreen.underline(message.guild.name)} server !`);
};
module.exports.help = MESSAGES.COMMANDS.CLIENT.PING;