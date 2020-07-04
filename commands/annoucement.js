module.exports = {
    name: "news",
    description: "official bot news",
    usage: '[message]',
    execute(message) {
        const client = message.client
        const { MessageEmbed} = require("discord.js");
        const { description } = require("./fkick");
const channel = client.channels.cache.get('706152508879536208');
        if (message.author.id === '362991657236561923') {
        let MSG = message.content.split(" ").slice(1).join(" ");
        if(!MSG)return message.channel.send("no message found")
        let embedhug = new MessageEmbed()
    .setColor("RANDOM")
    .setTitle("astral news")
    .setDescription(MSG)
    .addField('news by', `${message.author}`, false)
    .setTimestamp()
    .setFooter("astral news");
 
channel.send(embedhug);
 
    message.delete();
 
 
    }
    }
}