module.exports = {
	name: "user",
	cooldown: 4,
	description: "user info",
	execute(message) {
		const Discord = require('discord.js')
		let user = message.mentions.members.first();
		if (!user) {
            const exampleEmbed = new Discord.MessageEmbed()
            .setTitle('user info')
            .setColor('RANDOM')
            .addFields(
		{ name: 'name', value: `${message.author.username}`,  inline: true },
		{ name: 'id', value: `${message.author.id}`,  inline: true },
		{name: 'status', value: `${message.author.presence.status}`, inline: false},
		{name: 'current activity', value: `${message.author.presence.activity}`, inline: false}
		
	)
            .setTimestamp()      
               message.channel.send(exampleEmbed)
               }else {
      const exampleEmbed2 = new Discord.MessageEmbed()
            .setTitle('user info')
            .setColor('RANDOM')
            .addFields(
		{ name: 'name', value: `${user}`,  inline: true },
		{ name: 'id', value: `${user.id}`,  inline: true },
		{name: 'status', value: `${user.presence.status}`, inline: false},
		{name: 'current activity', value: `${user.presence.activity}`, inline: false}
	)
            .setTimestamp()      
               message.channel.send(exampleEmbed2)
               }
         
	 }}
	
	