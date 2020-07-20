const { sayn } = require('../config.json');
module.exports = {
    name: "say",
    cooldown: 5,
    description: "make the bot say something cuz that cool",
    execute (message) {
        let MSG = message.content.split(" ").slice(1).join(" ");
        if(message.content.includes(`@everyone`) ) {
        	message.delete()
return message.reply("no everyone")
}
        
      if(message.content.includes(`@here`)) 
{ message.delete()
return message.reply("no here")
}
      
    
       
        if(!MSG)return message.channel.send("no message found")
        message.channel.send(MSG)
        message.delete();


     }
}