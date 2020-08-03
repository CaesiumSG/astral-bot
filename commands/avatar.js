module.exports = {
    name: "avatar",
    cooldown: 9,
    aliases: ['icon', 'pfp'],
    description: "show user avatar",
    usage: "[user mention] (optionel)",
    execute(message) {
        const Discord = require('discord.js')
        if (!message.mentions.users.size) {
            const exampleEmbed = new Discord.MessageEmbed()
            .setTitle(`${message.author.username} avatar`)
            .setURL(`${message.author.displayAvatarURL({ format: "png", dynamic: true })}`)
            .setColor('RANDOM')
            .setTimestamp()
             .setImage(`${message.author.displayAvatarURL({ format: "png", dynamic: true })}`);       
               message.channel.send(exampleEmbed)
             
        }

    
        const avatarList = message.mentions.users.map(user => {
           if(message.mentions.users > 3) return message.reply('hey chill dont putore than 3 user')
            const exampleEmbed2 = new Discord.MessageEmbed()
            .setTitle(`${user.username} avatar`)
            .setURL(`${user.displayAvatarURL({ format: "png", dynamic: true })}`)
            .setColor('RANDOM')
            .setTimestamp()
             .setImage(`${user.displayAvatarURL({ format: "png", dynamic: true })}`)
             .setFooter("something coming soon")
             message.channel.send(exampleEmbed2)
        });
    
        // send the entire array of strings as a message
        // by default, discord.js will `.join()` the array with `\n`
    }
    } 