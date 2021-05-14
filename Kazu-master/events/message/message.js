const { Collection, MessageEmbed } = require('discord.js');

module.exports = async (client, message) => {
  const settings = await client.getGuild(message.guild);
  const dbUser = await client.getUser(message.member);
  const dbProfile = await client.getProfile(message.member);

  if (message.channel.type === "dm") return client.emit("directMessage", message);
  if (message.author.bot) return;

  if (!dbUser) await client.createUser({
    guildID: message.member.guild.id,
    userID: message.member.id,
    username: message.author.tag,
    colorCard: "ef9175",
    bgCard: "191819"
  });

  const expCd = Math.floor(Math.random() * 19) + 1;
  const expToAdd = Math.floor(Math.random() * 25) + 10;

  if (!message.content.startsWith(settings.prefix)) {
    return;
  } else {
    if (expCd >= 8 && expCd <= 11) {
      await client.addExp(client, message.member, expToAdd);
    }
  }
  const userLevel = Math.floor(0.1 * Math.sqrt(dbUser.experience));
  if (dbUser.level < userLevel) {
    client.updateUser(message.member, { level: userLevel });
    if (settings.levelMessage) {
      message.channel.send(settings.levelMessage)
    } else {
      return;
    }
  }

  const args = message.content.slice(settings.prefix.length).split(/ +/);
  const commandName = args.shift().toLowerCase();

  const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(commandName));
  if (!command) return;

  if (command.help.args && !args.length) {
    let noArgsReply = `I need arguments for this command, ${message.author} :x:`;

    if (command.help.usage) noArgsReply += `\nPlease use the command like this: \`${settings.prefix}${command.help.name} ${command.help.usage}\``;

    return message.channel.send(noArgsReply);
  };

  if (!client.cooldowns.has(command.help.name)) {
    client.cooldowns.set(command.help.name, new Collection());
  };

  const timeNow = Date.now();
  const tStamps = client.cooldowns.get(command.help.name);
  const cdAmount = (command.help.cooldown || 5) * 1000;

  if (tStamps.has(message.author.id)) {
    const cdExpirationTime = tStamps.get(message.author.id) + cdAmount;

    if (timeNow < cdExpirationTime) {
      timeLeft = (cdExpirationTime - timeNow) / 1000;
      let cooldownEmbed = new MessageEmbed()
        .setColor("RED")
        .setDescription(`Please wait \`${timeLeft.toFixed(0)}\` second(s) before reusing the command \`${command.help.name}\`.`)
      return message.channel.send(cooldownEmbed).then(m => m.delete({ timeout: 10000 }))
    }
  }

  tStamps.set(message.author.id, timeNow);
  setTimeout(() => tStamps.delete(message.author.id), cdAmount);

  command.run(client, message, args, settings, dbUser, dbProfile);
}