const { MESSAGES } = require("../../util/constants");
const { MessageEmbed } = require("discord.js");
const chalk = require("chalk");
module.exports.run = async (client, message, args) => {

    const embed = new MessageEmbed() 
    .setDescription("**Click on this link for invite GraphShare**")
   .setAuthor("Invite GraphShare", "https://img.icons8.com/ultraviolet/2x/email-open--v2.gif")
.setColor('8B0000')
.setTitle( 'Invite Link ' )
.setURL("https://discord.com/api/oauth2/authorize?client_id=841035034608533514&permissions=4228906231&redirect_uri=https%3A%2F%2Fdiscord.gg%2F7DS9UUh3cU&scope=bot")
.setFooter("© GraphShare 2021")
.setThumbnail("https://t3.ftcdn.net/jpg/01/42/10/18/360_F_142101834_KSJkFUnftOgJ4DPoTs6hQw5trqWCDlZN.jpg")
     message.channel.send(embed);

  console.log(`${chalk.bgGreen.underline(message. author. tag)}  use cmd invite in ${chalk.bgGreen.underline(message.guild.name)} server !`);
};
module.exports.help = 
{
  name: ('invite')
}