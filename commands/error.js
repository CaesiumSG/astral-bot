module.exports = {
    name: "error",
    cooldown: 5,
    description: "make your own error",
    execute (message) {
        let error = message.content.split(" ").slice(1).join(" ");
        if(!error)return message.channel.send("no message found")
        message.reply(error)
         


     }
    
}