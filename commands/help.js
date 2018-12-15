const settings = require('../settings.json');
const Discord = require('discord.js');
exports.run = (client, message, params) => {
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    let h = `[Use ${settings.prefix}help <commandname> for more details]\n\n${client.commands.map(c => `**__${settings.prefix}${c.help.name}__**${' '.repeat(longest - c.help.name.length)} : **${c.help.description}**`).join('\n')}`;
    const emb = new Discord.RichEmbed()
    .setTitle('My Commands')
    .setDescription(h)
    .setColor("RANDOM")
    .setTimestamp()
    .setFooter(`Requested By ${message.author.username}`)
    message.channel.send(emb);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      let he = `**__${command.help.name}__** \n**${command.help.description}**\n**Usage: ${command.help.usage}**`;
      let e = new Discord.RichEmbed()
      .setTitle("Hi I'm Here To Help You!")
      .setDescription(he)
      .setColor("RANDOM")
      .setTimestamp()
      .setFooter(`Requested By ${message.author.username}`)
      message.channel.send(e);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp'],
  permLevel: 0
};

exports.help = {
  name: 'help',
  description: 'Displays all the available commands for your permission level.',
  usage: 'help [command]'
};
