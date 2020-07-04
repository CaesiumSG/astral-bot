module.exports = {
    name: "kick",
    usage: "[user mention]",
    description: "kick the mentioned user",
    execute(message, args) {

        let reson = message.content.split(" ").slice(1).join(" ");
        const rreson = message.content.split(" ").slice(1).join(" ");

        if (message.member.hasPermission("KICK_MEMBERS")) {
            if (!args[0]) return message.reply("you need to tag a user to kick !");
            const member = message.mentions.members.first();
            try{
member.kick(rreson);
}catch (error) {
    console.error(error);
    message.reply('there was an error trying to execute that command!');
}
            message.channel.send(`I sucessful kicked the user \n reason: ${reson} (if the user is not kicked that mean the bot cant kick that user)`)
        }else return message.channel.send("you need the permission ``KICK_MEMBERS`` for this command")
    }
} 