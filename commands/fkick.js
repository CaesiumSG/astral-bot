module.exports = {
    name: "fkick",
    description: "a troll kick cmd",
    usage: '[user mention]',
    execute(message) {
		if (!message.mentions.users.size) {
			return message.reply('you need to tag a user to kick');
		}

		const taggedUser = message.mentions.users.first();

        if(taggedUser.tag === "astral#4352") {
         message.channel.send('why do you want to kick me TwT')
         message.react('😂')
        }else{
            message.channel.send(`${taggedUser.username} have been kicked`);
            message.react('727970264159223899')
         
        }
	},
};