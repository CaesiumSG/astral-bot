module.exports = {
    name: "name",
    cooldown: 20,
    usage: "[name]",
    description: "set the bot username",
    execute(message) {
const guild = message.guild;
        const client = message.client;
        let name = message.content.split(" ").slice(1).join(" ");
        try{
        guild.members.cache.get(client.user.id).setNickname(`${name}`);
    }catch (error) {
        console.error(error);
        message.reply('there was an error trying to execute that command!');
    }
        message.channel.send(`username set to ${name}`)
    }
}