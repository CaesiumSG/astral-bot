const { prefix } = require('../config.json');
module.exports = {
    name: 'help',
    description: 'List all of my commands or info about a specific command.',
    usage: '[command name]',
    execute(message, args) {
        const data = [];
        const { commands } = message.client
        const Discord = require("discord.js")

        if (!args.length) {
            const supEmbed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("help")
            .setDescription('Here\'s a list of all my commands')
            .addField('\u200B', '\u200B' )
            .addField("command", commands.map(command => command.name).join(', '), true)
            .setFooter(`\nYou can send \`${prefix}help [command name]\` to get info on a specific command!`);

            return message.channel.send(supEmbed)
        }

        const name = args[0].toLowerCase();
        const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

        if (!command) {
            return message.reply('this command dont exist');
        }
        const supEmbe = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("command info")
        .addField("**Name:**", `${command.name}`, true)
        if (command.aliases) supEmbe.addField("**Aliases:**", `${command.aliases.join(', ')}`, true)
        if (command.description) supEmbe.addField("**Description:**", ` ${command.description}`, true)
        if (command.usage) supEmbe.addField("**usage**", `${prefix}${command.name} ${command.usage}`, true)
        .addField(`**Cooldown:**`, `${command.cooldown || 3} second(s)`, true)

     message.channel.send(supEmbe)
    },
}