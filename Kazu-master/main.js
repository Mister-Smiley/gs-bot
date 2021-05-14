// https://discordapp.com/oauth2/authorize?client_id=717005856633520128&scope=bot&permissions=8

const { Client, Collection } = require('discord.js');
const { loadCommands, loadEvents } = require("./util/loader");
const { DISCORD_TOKEN } = require("./credentials")

const client = new Client();
require("./util/functions")(client);
client.config = require("./config");
client.mongoose = require("./util/mongoose");
["commands", "cooldowns"].forEach(x => client[x] = new Collection());

loadCommands(client);
loadEvents(client);
client.mongoose.init();

client.login(DISCORD_TOKEN);