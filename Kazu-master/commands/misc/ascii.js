const figlet = require('figlet');
const { MESSAGES } = require("../../util/constants");
const chalk = require("chalk");
module.exports.run = (client, message, args) => {
    message.delete();
    if (args.join(' ').length > 100) return message.channel.send(`The max length is 100!`)
    figlet(`${args.join(' ')}`, function (err, data) {
        if (err) { console.log('Something went wrong...'); console.dir(err); return; }
        message.channel.send(`${data}`, { code: 'AsciiArt' });
    });
    console.log(`${chalk.bgGreen.underline(message. author. tag)}  use cmd acii in ${chalk.bgGreen.underline(message.guild.name)} server !`);
};
module.exports.help = MESSAGES.COMMANDS.MISC.ASCII;