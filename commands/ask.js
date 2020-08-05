const { sname } = require('../sq.json')

module.exports = {
    name: "ask",
    cooldown: 3,
    description: ":)",
    usage: '[question]',
    execute(message) {
         // answer for basic question
         
   	const answers = [
            "I guess",
            "ask me later",
            "no", 
            "yes", 
            "..."
        ]
        // take a random answer
        const answer = answers[Math.floor(Math.random() * answers.length)];
 
 // class for the question nice logo
const logoo = ['ayy',
              'very nice logo',
              'ni e nice nice nice']
              
              // take a random answer for the nice logo
              const logo = logoo[Math.floor(Math.random() * logoo.length)];
  // embed            
    	const { MessageEmbed} = require("discord.js");
    const question = message.content.split(' ').slice(1).join(' ')
    if(!question) return message.reply(`please put a question ${message.author.username} !`)
    const embed =  new MessageEmbed()
    embed.setColor("RANDOM")
    embed.setTitle(`${message.author.username} question`)
    embed.addField('question', question)
    if(!sname.includes(question)) {
		embed.addField('answer', answer )
    }
		if(question === "never gonna give you up") {
		embed.addField('answer', 'never gonna let you down')    
		  
		}
		if(question === 'nice logo') {
		     embed.addField('answer', logo)
		}
    
    embed.setTimestamp()
    embed.setFooter("astral");
    
    // send a loading message
    
               message.channel.send('loading answer...')
.then((msg)=> {
  setTimeout(function(){
    msg.edit(embed);
  }, 3500) 
}); 
// ^ edit the message with the embed of the answer
    }
}