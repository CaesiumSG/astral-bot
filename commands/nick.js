module.exports = {
    name: "nick",
    cooldown: 10,
    usage: '[user tag], [nick]',
    description: "change someone nick",
    execute(message){

        if (message.member.hasPermission("MANAGE_NICKNAMES")) {
            const guild = message.guild;
            const user = message.mentions.users.first();
            let nick = message.content.split(" ").slice(2).join(" ");
            try{
            guild.members.cache.get(user.id).setNickname(`${nick}`); 
        }catch (error) {
                console.error(error);
                message.reply('there was an error trying to execute that command!');
            }
            message.channel.send(`username sucessful set to *${nick}*`) 
        }
    }
}