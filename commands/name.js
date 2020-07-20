module.exports = {
    name: "name",
    cooldown: 20,
    usage: "[name]",
    description: "set the bot username",
    execute(message, async) {
        const args = message.content.split(' ').slice(1)
        
        const amount = args.join(' ');
const guild = message.guild;
        const client = message.client;
        if (!amount) return message.reply('You haven\'t given a name!'); // Checks if the `amount` parameter is given
     if (amount.length  > 31) return message.reply('You can`t put more than 32 letter!'); // Checks if the `amount` integer is bigger than 100
     
        try{
        guild.members.cache.get(client.user.id).setNickname(`${amount}`);
    }catch (error) {
        console.error(error);
       return  message.reply('there was an error trying to execute that command!');
    }
        message.channel.send(`username set to ${args}`)
    }
}