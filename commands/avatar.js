module.exports = {
    name: "avatar",
    cooldown: 9,
    description: "show user avatar",
    usage: "[user mention] (optionel)",
    execute(message) {
        const Discord = require('discord.js')
        if (!message.mentions.users.size) {
            const exampleEmbed = new Discord.MessageEmbed()
            .setTitle('avatar')
            .setColor('RANDOM')
            .setTimestamp()
             .setImage(`${message.author.displayAvatarURL({ format: "png", dynamic: true })}`);       
               message.channel.send(exampleEmbed)
             
        }

    
        const avatarList = message.mentions.users.map(user => {
            const exampleEmbed2 = new Discord.MessageEmbed()
            .setTitle('avatar')
            .setColor('RANDOM')
            .setTimestamp()
             .setImage(`${user.displayAvatarURL({ format: "png", dynamic: true })}`);
             message.channel.send(exampleEmbed2)
        });
    
        // send the entire array of strings as a message
        // by default, discord.js will `.join()` the array with `\n`
    }
    } 