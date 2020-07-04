module.exports = {
    name: "support",
    cooldown: 5,
    description: "link to our support server",
    execute(message) {
        const Discord = require('discord.js')
        const supEmbed = new Discord.MessageEmbed()
   .setColor('#8B0000')
   .setTitle('bot support')
   .setURL('https://discord.gg/NCwH84h')
   .setDescription('if you have a question or want to sugest something and send feedback \n join our server [astral support playground](https://discord.gg/NCwH84h)')
   .setTimestamp()
   .setFooter('astral support', 'https://cdn.discordapp.com/attachments/675371978386833428/704717055877972038/4a425077ed2809403254ffec40454752.png');
   message.channel.send(supEmbed);
    }
}