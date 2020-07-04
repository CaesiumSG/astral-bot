
module.exports = {
    name: "say",
    cooldown: 5,
    description: "make the bot say something cuz that cool",
    execute (message) {
        let MSG = message.content.split(" ").slice(1).join(" ");
        if(!MSG)return message.channel.send("no message found")
        message.channel.send(MSG)
        message.delete();


     }
    
}