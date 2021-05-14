const { MessageEmbed } = require("discord.js");
const { MESSAGES } = require("../../util/constants");
const errors = require("../../util/error");
const chalk = require("chalk");

module.exports.run = async (client, message, args, settings) => {
    const banhamer = client.emojis.cache.find(e => e.id === "728623639293067264");
    if (message.guild === null) return;
    {
        if (!message.member.hasPermission('BAN_MEMBERS'))
            return errors.noPerm(message, "no perm");

        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if (!member)
            return errors.user(message, "no user");
        if (!member.bannable) errors.botPerm(message, "bot don't have perm");
        let reason = args.slice(1).join(' ');
        if (!reason) reason = "no reason"

        let errorsEmbed = new MessageEmbed()
            .setColor("#ff0000")
            .setTitle("Error")
            .setTimestamp();
        member.ban(reason).catch(error => errorsEmbed.setDescription(`Sorry ${message.author} I couldn't ban because of : \`${error}\``).then(() => message.channel.send(errorsEmbed) && message.delete({ timeout: 10000 })));

       
        let banEmbed = new MessageEmbed()
            .setColor("#FF0000")
            .setTitle(`${banhamer} BAN`)
            .setDescription(`${member}(ID: ${member.id}) has been banned\nReason: \`${reason}\``)
            .setFooter(`${message.author.tag}`, `${message.author.avatarURL()}`)
            .setTimestamp();
        message.channel.send(banEmbed);
        
    }
console.log(`${chalk.bgGreen.underline(message. author. tag)}  use cmd ban in ${chalk.bgGreen.underline(message.guild.name)} server !  (Ban ${member}) `);

};

module.exports.help = MESSAGES.COMMANDS.MODERATION.BAN;