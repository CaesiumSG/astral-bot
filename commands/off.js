let { botowner } = require('../config.json');

module.exports = {
    name: "off",
    description: "turn the bot off (OWNER ONLY dont try :))",
    execute(message) {
       const client = message.client
        const Discord = require('discord.js');
        const { description } = require("./fkick");
const channel = client.channels.cache.get('706152605574889584');
        if (message.author.id === `${botowner}`){
            message.channel.send(`goodbye ${message.author}`)
            
// inside a command,g event listener, etc.
const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#ff0000')
    .setAuthor('astral status', 'https://cdn.discordapp.com/attachments/675371978386833428/704717055877972038/4a425077ed2809403254ffec40454752.png')
    .setDescription('astral have been disconnected by an admin !')
    .setTimestamp()
	.setFooter('astral beta build', 'https://cdn.discordapp.com/avatars/674611545279299598/d0fa76ad86b1966a4a4995b49009bf3d.webp?size=128');

channel.send(exampleEmbed);
setTimeout(() => {
    process.exit();
},5)
    } else message.reply('only the bot owner can do that')

}
}