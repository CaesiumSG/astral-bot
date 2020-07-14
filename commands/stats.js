const fetch = require("node-fetch")
const Discord = require('discord.js')

module.exports = {
    name: 'stats',
    description: 'bot owner channls stats',
    cooldown: 6,
    async execute (message) {
        const data = await fetch('https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCWFBwi8xj23GzE5SW3rlD1Q&key=AIzaSyAItQnNWtapE__x7mmhesqKXQ_CMioWm0M').then(response => response.json());
        const monembed = new Discord.MessageEmbed()
            .setColor('#ff0800')
            .setAuthor('developers channel stats', 'https://yt3.ggpht.com/a-/AOh14Gi-829RSqheoVoa4wmjaDyxlW65JFw6rDTpPcTKoA=s88-c-k-c0xffffffff-no-rj-mo')
           
                        .addFields(
                { name: 'subs count', value: data.items[0].statistics.subscriberCount, inline: true },
                { name: 'total video', value: data.items[0].statistics.videoCount, inline: true },
                { name: ' channel views', value: data.items[0].statistics.viewCount, inline: true },
            )
            .setTimestamp()
            .setFooter('go sub right now gamers');

        message.channel.send(monembed);
    }
        
    }