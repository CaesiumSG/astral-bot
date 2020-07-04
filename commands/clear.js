module.exports = {
    name: "clear",
    cooldown: 4,
    description: "clear some message",
    usage: "[number of message]",
    execute(message, async) {
        const args = message.content.split(' ').slice(1)
        let clear = message.content.split(" ").slice(1);
        const amount = args.join(' ');

        if (message.member.hasPermission("MANAGE_MESSAGES")) {
            if (!amount) return message.reply('You haven\'t given an amount of messages which should be deleted!'); // Checks if the `amount` parameter is given
if (isNaN(amount)) return message.reply('The amount parameter isn`t a number!');
if (amount > 100) return message.reply('You can`t delete more than 100 messages at once!'); // Checks if the `amount` integer is bigger than 100
if (amount < 1) return message.reply('You have to delete at least 1 message!');
 // Fetches the messages
    message.channel.bulkDelete(amount)
    message.channel.send(`I sucessful delete ${clear} message !`)
}else return message.channel.send("you need the permission ``MANAGE_MESSAGES`` for this command")
    }
}