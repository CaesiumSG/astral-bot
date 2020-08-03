const { sayn } = require('../config.json');
module.exports = {
    name: "say",
    cooldown: 5,
    usage: "[message]",
    description: "make the bot say something cuz that cool",
    execute (message) {
       
        let MSG = message.content.split(" ").slice(1).join(" ");
        if(message.content.includes(`@everyone`) ) {     
return message.reply("no everyone")
if(message.guild.me.hasPermission("MANAGE_MESSAGES")) { message.delete()
}
}
        
      if(message.content.includes(`@here`)) 
{
return message.reply("no here") 
if(message.guild.me.hasPermission("MANAGE_MESSAGES")) { message.delete()
}

}
      
    
       
        if(!MSG)return message.channel.send("no message found")
        message.channel.send(MSG)
        
if(message.guild.me.hasPermission("MANAGE_MESSAGES")) { message.delete()
}


     }
}