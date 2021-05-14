const { MessageEmbed } = require("discord.js");
const { MESSAGES } = require("../../util/constants");
const errors = require("../../util/error");
const chalk = require("chalk");

module.exports.run = async (client, message, args, settings) => {
  try {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
      return errors.noPerm(message, "no perm");
    }

    const user = message.guild.member(message.mentions.users.first());
    let amount = !!parseInt(message.content.split(" ")[1])
      ? parseInt(message.content.split(" ")[1])
      : parseInt(message.content.split(" ")[2]);

    if (isNaN(amount)) return errors.NaN(message, "not a number");
    let tomany = new MessageEmbed()
      .setColor("RED")
      .setTitle("ERROR")
      .setDescription("please enter a number between 1 and 100")
      .setTimestamp();
    if (amount > 100) return message.channel.send(tomany).then(m => m.delete({ timeout: 10000 }))

    await message.channel.messages
      .fetch({
        limit: amount,
      })
      .then((messages) => {
        if (user) {
          const filterby = user ? user.id : client.user.id;
          messages = messages
            .filter((m) => m.author.id === filterby)
            .array()
            .slice(0, amount);
        }
        message.channel.bulkDelete(messages);
      });

    if (!user) {
      let delEmbed = new MessageEmbed()
        .setColor("#010C79")
        .setAuthor(`${message.author.username}`, `${message.author.avatarURL()}`)
        .setDescription(`${amount} messages have been deleted`)
        .setTimestamp();

      message.channel.send(delEmbed).then((m) => m.delete({ timeout: 10000 }));
    } else if (user) {
      let newdelEmbed = new MessageEmbed()
        .setColor("#010C79")
        .setAuthor(`${message.author.username}`, `${message.author.avatarURL()}`)
        .setDescription(`${amount} messages have been deleted`)
        .setTimestamp();

      message.channel.send(newdelEmbed).then((m) => m.delete({ timeout: 10000 }));
    }
    

  } catch (error) {
    
  }

console.log(`${chalk.bgGreen.underline(message. author. tag)}  use cmd clear in ${chalk.bgGreen.underline(message.guild.name)} server !  (Clear ${amount} msg ) `);

};

module.exports.help = MESSAGES.COMMANDS.MODERATION.CLEAR;