const { description } = require("./fkick");
let { version } = require('../config.json')
let { prefix } = require('../config.json')

module.exports = {
	
	name: "info",
	cooldown: 9,
    description: "bot information",
    execute(message) {
        const Discord = require('discord.js');

// inside a command, event listener, etc.
const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Some title')
	.setAuthor('astral info', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
	.addFields(
		{ name: 'bot version', value: `${version}` },
		{ name: 'total server', value: 'Some value here', inline: true },
		{ name: 'prefix', value: `${prefix}`, inline: true },
	)
	.setTimestamp()
	.setFooter('astral beta build', 'https://cdn.discordapp.com/avatars/674611545279299598/d0fa76ad86b1966a4a4995b49009bf3d.webp?size=128');

message.channel.send(exampleEmbed);
    }

}