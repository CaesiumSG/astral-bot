module.exports = {
    name: "invite",
    cooldown: 4,
    description: "invite the bot to your server",
    execute(message) {
        const Discord = require('discord.js')
        const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#0099ff')
  .setTitle('invite me')
  .setURL('https://discordapp.com/api/oauth2/authorize?client_id=674611545279299598&permissions=1544551671&scope=bot')
    .setAuthor('bot invite', 'https://cdn.discordapp.com/attachments/675371978386833428/704717055877972038/4a425077ed2809403254ffec40454752.png')
  .setDescription('hey u want to invite me? good here my invite [add me to ur server](https://discordapp.com/api/oauth2/authorize?client_id=674611545279299598&permissions=1544551671&scope=bot)')

.setTimestamp()
.setFooter('thx for support me :)', 'https://cdn.discordapp.com/attachments/675371978386833428/704717055877972038/4a425077ed2809403254ffec40454752.png');

message.channel.send(exampleEmbed);
}}
