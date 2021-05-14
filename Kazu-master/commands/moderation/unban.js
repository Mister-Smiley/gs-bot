const { MESSAGES } = require("../../util/constants");
const { MessageEmbed } = require("discord.js");
const { user, noPerm, botPerm, NaN } = require("../../util/error");

const chalk = require("chalk");

module.exports.run = async (client, message, args, settings) => {
    const banhamer = client.emojis.cache.find(e => e.id === "728623639293067264");

    let member = await client.users.fetch(args[0]);
    if (!message.member.hasPermission('BAN_MEMBERS'))
        return noPerm(message, "no perm");
    if (!parseInt(args[0])) return NaN(message, "not a number");
    if (!member)
        return user(message, "user don't exist");
    if (!message.guild.me.hasPermission("BAN_MEMBERS"))
        return botPerm(message, "bot don't have perm");

    message.guild.members.unban(member);

    

    const unbanEmbed = new MessageEmbed()
        .setColor("#16c60c")
        .setTitle(`${banhamer} UNBAN`)
        .setDescription(`${member} has been unbaned`)
        .setFooter(`${message.author.tag}(ID: ${message.author.id})`, `${message.author.avatarURL()}`)
        .setTimestamp();

    
    message.channel.send(unbanEmbed);
    



console.log(`${chalk.bgGreen.underline(message. author. tag)}  use cmd unban in ${chalk.bgGreen.underline(message.guild.name)} server !  (Unban ${member} ) `);

};
module.exports.help = MESSAGES.COMMANDS.MODERATION.UNBAN;