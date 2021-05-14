const Discord = require('discord.js')
const fetch = require('node-fetch');
const chalk = require("chalk");
module.exports.run = async (client, message, args)  => {
    fetch("https://shiro.gg/api/images/wallpapers")
        .then((res) => res.json())
        .then((body) => {
            let embed = new Discord.MessageEmbed()
              .setColor("#8B0000")
              .setImage(body.url)
           message.channel.send(embed)
        })
        
    console.log(`${chalk.bgGreen.underline(message. author. tag)}  use cmd wallpaper in ${chalk.bgGreen.underline(message.guild.name)} server !`);
    
};
module.exports.help = {
  name: ("wallpaper")
}