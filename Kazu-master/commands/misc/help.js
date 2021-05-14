const { MESSAGES } = require("../../util/constants");
const { MessageEmbed } = require("discord.js");
const chalk = require("chalk");
module.exports.run = async (client, message, args) => {

    const pingEmbed = new MessageEmbed()
     .setTitle("GraphShare ")
.setURL("https://t3.ftcdn.net/jpg/01/42/10/18/360_F_142101834_KSJkFUnftOgJ4DPoTs6hQw5trqWCDlZN.jpg")

.setColor('8B0000')
.setDescription("__**Help commands list **__ \n**GraphShare commands **\n**Moderation commands **\n**Misc commands **")
.setFooter("© GraphShare 2021")
.setImage("https://t3.ftcdn.net/jpg/01/42/10/18/360_F_142101834_KSJkFUnftOgJ4DPoTs6hQw5trqWCDlZN.jpg")
    message.channel.send(pingEmbed);
console.log(`${chalk.bgGreen.underline(message. author. tag)}  use cmd help in ${chalk.bgGreen.underline(message.guild.name)} server !`);
 
};
module.exports.help = 
{
  name: ('help')
}