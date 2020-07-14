module.exports = {
	name: 'ping',
	cooldown: 5,
	description: 'Ping!',
	execute(message) {
		var ping = Date.now() - message.createdTimestamp + " ms";
		const client = message.client
		message.channel.send("my ping is `" + `${Date.now() - message.createdTimestamp}` + " ms`");

  }
};