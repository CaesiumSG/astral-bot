module.exports = {
    name: "google",
    cooldown: 5,
    description: "google your message",
    usage: "[message]",
    execute(message) {
        const Discord = require ('discord.js')
        let MSG = message.content.split(" ").slice(1).join("+");
        let MS = message.content.split(" ").slice(1).join(" ");
        if(!MSG)return message.channel.send("you didn't put any word to google !")
        
        const google = new Discord.MessageEmbed()
        .setColor('#4287f5')
        .setAuthor('google search', "https://cdn.arstechnica.net/wp-content/uploads/2018/07/Chrome-Logo-800x652.png")
        .setDescription(`search: ${MS}`)
        .addField('link', `[google search](https://www.google.com/search?q=${MSG}&oq=go&aqs=chrome.1.69i57j69i59l3j69i60l4.5136j0j7&sourceid=chrome&ie=UTF-8)`)
message.channel.send(google)
    }
}