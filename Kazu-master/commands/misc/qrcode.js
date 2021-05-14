const qrcode = require("qrcode");
const tempy = require("tempy");
const { MESSAGES } = require("../../util/constants");
const chalk = require("chalk");
module.exports.run = async (client, message, args) => {
  const qrOutput = tempy.file({ extension: "png" });
  message.channel.startTyping();
  if (args.length > 0) {
    qrcode.toFile(qrOutput, args.join(" "), { margin: 1 }, (error) => {
      if (error) throw new Error(error);
      message.channel.stopTyping();
      message.channel.send(`**Here is your QR Code under the link of:**: ${args}`);
      message.channel.send({ files: [{ attachment: qrOutput, name: `${Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)}.png`, },], });
    });
    console.log(`${chalk.bgGreen.underline(message. author. tag)}  use cmd qrcode in ${chalk.bgGreen.underline(message.guild.name)} server !`);
  }
};
module.exports.help = MESSAGES.COMMANDS.MISC.QRCODE;