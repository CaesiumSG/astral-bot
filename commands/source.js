const Discord = require('discord.js')

module.exports = {
    name: "source",
    cooldown: 5,
    description: "bot source code",
    execute (message) {
    const exampleEmbed = new Discord.MessageEmbed()
            .setTitle('source code')
            .setColor('RANDOM')
            .setDescription('if you want to see the code of the bot check our [source code](https://github.com/Glitchdev-official/astral-bot)')
            .setFooter("astral source")
            message.channel.send(exampleEmbed)
     }
    
}