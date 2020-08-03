module.exports = {
    name: "setup",
    description: "setup bot channel",
    execute(message) {
    	const client = message.client
    const guild = message.guild
  if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) { return message.reply("I need the permission ``MANAGE_CHANNELS`` for this command")
  }
    if (message.member.hasPermission("MANAGE_GUILD")) {
    	if (!guild.channels.cache.find(channel => channel.name === 'astral-joiner')) {
    	    	guild.channels.create('astral-joiner', {
    type: 'text',
    permissionOverwrites: [
        {
            id: message.guild.id,
            deny: ['SEND_MESSAGES'],
        },
        {
            id: message.guild.me.id,
            allow: ['SEND_MESSAGES'],
        },
    ],
});
    message.channel.send("astral-joiner created")
    }else message.channel.send("the channel ``astral-joiner`` is already here")
    
    if (!guild.channels.cache.find(channel => channel.name === 'astral-leaver')) {
    	guild.channels.create('astral-leaver', {
    type: 'text',
    permissionOverwrites: [
        {
            id: message.guild.id,
            deny: ['SEND_MESSAGES'],
        },
        {
            id: message.guild.me.id,
            allow: ['SEND_MESSAGES'],
        },
    ],
});
    message.channel.send("astral-leaver created")
    }else {message.channel.send("the channel ``astral-leaver`` is already here")
    }
    if (!guild.channels.cache.find(channel => channel.name === 'chat-logs')) {
    	guild.channels.create('chat-logs', {
    type: 'text',
    permissionOverwrites: [
        {
            id: message.guild.id,
            deny: ['SEND_MESSAGES'],
        },
        {
            id: message.guild.me.id,
            allow: ['SEND_MESSAGES'],
        },
    ],
});
    message.channel.send("chat-logs created")
    }else {message.channel.send("the channel ``astral-leaver`` is already here")
    }
    }else return message.reply("you need the permission ``MANAGE_GUILD`` for this command")
    }
    }