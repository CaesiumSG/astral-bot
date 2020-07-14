module.exports = {
    name: "react",
    cooldown: 5,
    description: "react to your message",
    usage: "[emoji] ",
    execute(message) {
    	let emoji = message.content.split(" ").slice(1)
    if (!emoji) {
			return message.reply('you need to put a emoji duh');
		}
		message.react(`${emoji}`)
		}
		}