module.exports = {
	name: 'ping',
	cooldown: 5,
	description: 'Ping!',
	execute(message) {
		var ping = Date.now() - message.createdTimestamp + " ms";
		const client = message.client
		message.channel.send("pong !`" + `${Date.now() - message.createdTimestamp}` + " ms`");

  }
};