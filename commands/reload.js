module.exports = {
    name: 'reload',
    description: 'Reloads a command',
    usage: "[command name]",
	execute(message, args) {
        if (message.author.id === '362991657236561923') {
        const commandName = args[0].toLowerCase();
		const command = message.client.commands.get(commandName)
			|| message.client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

		if (!command) {
			return message.channel.send(`There is no script with name or alias \`${commandName}\`, ${message.author}!`);
		}

		delete require.cache[require.resolve(`./${command.name}.js`)];

		try {
			const newCommand = require(`./${command.name}.js`);
			message.client.commands.set(newCommand.name, newCommand);
			message.channel.send(`\`${command.name}.js\` was reloaded!`);
		} catch (error) {
			console.log(error);
			message.channel.send(`There was an error while reloading \`${command.name}.js\`:\n\`${error.message}\``);
		}
    }
},
};