const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

const cooldowns = new Discord.Collection();



client.on("ready", async => {
    console.log(`${client.user.tag} is ready`)
	client.user.setStatus("dnd")
	const channel = client.channels.cache.get('706152605574889584');
	const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#0099ff')
  .setAuthor('astral status', 'https://cdn.discordapp.com/attachments/675371978386833428/704717055877972038/4a425077ed2809403254ffec40454752.png')
  .setDescription('astral is now online !')
.setTimestamp()
.setFooter('logs plugin', 'https://cdn.discordapp.com/attachments/675371978386833428/704717055877972038/4a425077ed2809403254ffec40454752.png')
channel.send(exampleEmbed);
    setTimeout(() => {
        setInterval(function() {
			let Statuses = [
			  "Beta build 0.0.1",
			  "version rewrite",
			  "I can milk you XD",
			  "a.help for help !"
			]
			let status = Statuses[Math.floor(Math.random() * Statuses.length)];
				client.user.setActivity( status , { type : "LISTENING"})}, 7000)
		  return
		  //dnd = ne pas deranger
		  //idle = inactif
		  //online = actif
		  //invisible = hors-ligne
    }, 60)
});


client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const commandName = args.shift().toLowerCase();

	const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;

	if (command.guildOnly && message.channel.type !== 'text') {
		return message.reply('I can\'t execute that command inside DMs!');
	}

	if (command.args && !args.length) {
		let reply = `You didn't provide any arguments, ${message.author}!`;

		if (command.usage) {
			reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
		}

		return message.channel.send(reply);
	}

	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Discord.Collection());
	}

	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 3) * 1000;

	if (timestamps.has(message.author.id)) {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000;
			return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
		}
	}

	timestamps.set(message.author.id, now);
	setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

	try {
		command.execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});

client.login(token)