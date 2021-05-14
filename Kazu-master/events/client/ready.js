const chalk = require("chalk");
const { DEFAULTSETTINGS } = require("../../config");
module.exports = async (client, settings) => {
  var jeu = [`${DEFAULTSETTINGS.prefix}help`, `on ${client.guilds.cache.size} guild`, `Watch ${client.guilds.cache.reduce((prev, guild) => prev + guild.memberCount, 0)} users!`] ;
  setInterval(function () { var jeux = jeu[Math.floor(Math.random() * jeu.length)]; client.user.setActivity(jeux, { type: "STREAMING", url: "https://www.twitch.tv/buggasbot", }); }, 10000);
  client.infoApp = await client.fetchApplication();
  setInterval(async () => { client.infoApp = await client.fetchApplication(); }, 3600000);
  console.log(`${chalk.bgBlue.underline(client.user.username)} est en ligne !`);
};