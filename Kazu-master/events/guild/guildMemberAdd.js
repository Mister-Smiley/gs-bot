const { GuildMember } = require("discord.js");

module.exports = async (client, member) => {
    await client.createUser({
        guildID: member.guild.id,
        userID: member.id,
        username: member.user.username
    });
};
