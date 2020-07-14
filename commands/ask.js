module.exports = {
    name: "ask",
    cooldown: 3,
    description: ":)",
    usage: '[question]',
    execute(message) {
    	const answers = [
            "I guess",
            "ask me later",
            "no", 
            "yes", 
            "..."
        ]
        const answer = answers[Math.floor(Math.random() * answers.length)];
 
    	const { MessageEmbed} = require("discord.js");
    const question = message.content.split(' ').slice(1).join(' ')
    if(!question) return message.reply(`please put a question ${message.author.username} !`)
    const embed =  new MessageEmbed()
    .setColor("RANDOM")
    .setTitle(`${message.author.username} question`)
    .addFields(
    {name: 'question', value: question },
		{ name: 'answer', value: answer }
		)
    .setTimestamp()
    .setFooter("astral");
               message.channel.send('loading answer...')
.then((msg)=> {
  setTimeout(function(){
    msg.edit(embed);
  }, 3500) 
}); 
    }
}