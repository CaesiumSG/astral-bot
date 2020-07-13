module.exports = {
    name: "achi",
    cooldown: 5,
    description: "make your own achivement",
    execute (message) {
    	
    const tips = [
    "dont forget milk good for you",
    "2.2 when?",
    "there is a lot of random 'tips' on this cmd",
    "keep your diamond it's usefull",
    "minecraft or geometry dash",
    "easy to make right", 
    ":)",
    " you can make whatever you want with the achivement command" ]
    const tip = tips[Math.floor(Math.random() * tips.length)];
    const { MessageEmbed} = require("discord.js");	
    
    	const min=1; 
    const max=39; 
    
    
    const logo = Math.floor(Math.random() * (+max - +min)) + +min;
    
    
        let achi = message.content.split(" ").slice(1).join("+");
        if(!achi)return message.reply("you need to put something")
        if (achi.length  > 24) return message.reply('You can`t put more than 25 letter!');
        let achiem = new MessageEmbed()
    .setColor("RANDOM")
    .setTitle("new achivement")
    .setDescription(tip)
    .setImage(`https://minecraftskinstealer.com/achievement/${logo}/Achievement+Get%21/${achi}`)
    .setTimestamp()
    .setFooter(`${message.author.username} achievement`);
 
    message.channel.send(achiem);
        message.delete();
         
            }
    
}