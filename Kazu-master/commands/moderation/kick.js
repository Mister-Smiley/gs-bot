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

        member.kick(reason).catch(error => message.channel.send(`Sorry ${message.author} I couldn't kick *${member.username}* because of : \`${error}\``));
        let logsEmbed = new MessageEmbed()
            .setColor("#DC5817")
            .setTitle(`${banhamer} KICK`)
            .setDescription(`
            Member: ${member}(ID: ${member.id})
            Reason: \`${reason}\`
            `)
            .setFooter(`${message.author}(ID: ${message.author.id})`, `${message.author.avatarURL()}`)
            .setTimestamp();

        let banEmbed = new MessageEmbed()
            .setColor("#DC5817")
            .setTitle(`${banhamer} KICK`)
            .setDescription(`${member}(ID: ${member.id}) has been kicked\nReason: \`${reason}\``)
            .setFooter(`${message.author.tag}`, `${message.author.avatarURL()}`)
            .setTimestamp();
        
        message.channel.send(banEmbed);
        
        }
    
    


console.log(`${chalk.bgGreen.underline(message. author. tag)}  use cmd kick in ${chalk.bgGreen.underline(message.guild.name)} server !   (Kick ${member} ) `);

};



module.exports.help = MESSAGES.COMMANDS.MODERATION.KICK;