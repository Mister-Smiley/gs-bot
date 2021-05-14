const { MessageEmbed } = require("discord.js");
const { MESSAGES } = require("../../util/constants");
const chalk = require("chalk");
module.exports.run = (client, message, args) => {
  const user = message.mentions.users.first() ? message.mentions.users.first() : message.author;
  let image = user.avatarURL({ dynamic: true, format: "png", size: 4096, });
  const embed = new MessageEmbed()
    .setColor("#8B0000")
    .setTitle(`Voici l'avatar de **${user.tag}** :`)
    .setImage(image)
    .setTimestamp();
  message.channel.send(embed);

console.log(`${chalk.bgGreen.underline(message. author. tag)}  use cmd avatar in ${chalk.bgGreen.underline(message.guild.name)} server !`);
};
module.exports.help = MESSAGES.COMMANDS.IMAGE.PDP;