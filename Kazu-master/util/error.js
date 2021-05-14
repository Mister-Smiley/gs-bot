const { MessageEmbed } = require("discord.js");

module.exports.botPerm = (message, perm) => {
  let botPerm = new MessageEmbed()
    .setColor("RED")
    .setTitle("Error")
    .setDescription(
      "I can not do that! Do they have a higher role?\n Do I have ban permissions?"
    )
    .setTimestamp();
  message.channel.send(botPerm).then((msg) => msg.delete({ timeout: 10000 }))
};

module.exports.noPerm = (message, perm) => {
  let noPerm = new MessageEmbed()
    .setColor("RED")
    .setTitle("Error")
    .setDescription("You don't have permission to do this :x:")
    .setTimestamp();
  message.channel.send(noPerm).then((msg) => msg.delete({ timeout: 10000 }));
};

module.exports.noUser = (message, perm) => {
  let noUser = new MessageEmbed()
    .setColor("RED")
    .setTitle("Error")
    .setDescription("Please specify a user :x:")
    .setTimestamp();
  message.channel.send(noUser).then((msg) => msg.delete({ timeout: 10000 }));
};

module.exports.user = (message, perm) => {
  let user = new MessageEmbed()
    .setColor("RED")
    .setTitle("Error")
    .setDescription(
      "The user does not exist :x:"
    )
    .setTimestamp();
  message.channel.send(user).then((msg) => msg.delete({ timeout: 10000 }))
};

module.exports.UserIsAuthor = (message, perm) => {
  let UserIsAuthor = new MessageEmbed()
    .setColor("RED")
    .setTitle("Error")
    .setDescription("You can't use this command on yourself")
    .setTimestamp();
  message.channel
    .send(UserIsAuthor)
    .then((msg) => msg.delete({ timeout: 10000 }));
};

module.exports.Perm = (message, perm) => {
  let Perm = new MessageEmbed()
    .setColor("RED")
    .setTitle("Error")
    .setDescription("You cannot do this to this user :x:")
    .setTimestamp();
  message.channel.send(Perm).then((msg) => msg.delete({ timeout: 10000 }));
};

module.exports.GuidUser = (message, perm) => {
  let GuidUser = new MessageEmbed()
    .setColor("RED")
    .setTitle("Error")
    .setDescription("The user mentioned is not on this server :x:")
    .setTimestamp();
  message.channel.send(GuidUser).then((msg) => msg.delete({ timeout: 10000 }));
};

module.exports.NoReason = (message, perm) => {
  let NoReason = new MessageEmbed()
    .setColor("RED")
    .setTitle("Error")
    .setDescription("Please give a reason :x:")
    .setTimestamp();
  message.channel.send(NoReason).then((msg) => msg.delete({ timeout: 10000 }));
};

module.exports.voiceConnected = (message, perm) => {
  let voiceConnected = new MessageEmbed()
    .setColor("RED")
    .setTitle("Error")
    .setDescription("I am already connecting to a channel")
    .setTimestamp();
  message.channel
    .send(voiceConnected)
    .then((msg) => msg.delete({ timeout: 10000 }));
};

module.exports.noArgs = (message, perm) => {
  let noArgs = new MessageEmbed()
    .setColor("RED")
    .setTitle("Error")
    .setDescription("Please give valid arguments to this command :x:")
    .setTimestamp();
  message.channel.send(noArgs).then((msg) => msg.delete({ timeout: 10000 }));
};

module.exports.valideURL = (message, perm) => {
  let valideURL = new MessageEmbed()
    .setColor("RED")
    .setTitle("Error")
    .setDescription("Please enter a valid url")
    .setTimestamp();
  message.channel.send(valideURL).then((msg) => msg.delete({ timeout: 10000 }));
};

module.exports.noLogChannel = (message, perm) => {
  let noLogChannel = new MessageEmbed()
    .setColor("RED")
    .setTitle("Error")
    .setDescription(
      "please"
    )
    .setTimestamp();
  message.channel.send(noLogChannel).then((msg) => msg.delete({ timeout: 10000 }))
};

module.exports.noArgs = (message, perm) => {
  let noArgs = new MessageEmbed()
    .setColor("RED")
    .setTitle("Erreur")
    .setDescription(
      "No argument is needed for this command: x:"
    )
    .setTimestamp();
  message.channel.send(noArgs).then((msg) => msg.delete({ timeout: 10000 }))
};

module.exports.NaN = (message, perm) => {
  let NaN = new MessageEmbed()
    .setColor("RED")
    .setTitle("Error")
    .setDescription(
      "Please enter a valid number :x:"
    )
    .setTimestamp();
  message.channel.send(NaN).then((msg) => msg.delete({ timeout: 10000 }))
};

module.exports.correcttime = (message, perm) => {
  let correcttime = new MessageEmbed()
    .setColor("RED")
    .setTitle("Error")
    .setDescription(
      "Please enter a valid time like: [s | m | h | d]"
    )
    .setTimestamp();
  message.channel.send(correcttime).then((msg) => msg.delete({ timeout: 10000 }))
};