module.exports = async (client, guild, settings) => {
  const newGuild = {
    guildID: guild.id,
  };
  await client.createGuild(newGuild);
  var name = settings.logChannel;
  await guild.channels.create(name, { type: "text", reason: "Log Channel" });
};
