const { Collection, Client, Discord } = require('discord.js');
const fs = require('fs');

const bot = new Client({
	disableEveryone: true,
});

bot.commands = new Collection();
bot.aliases = new Collection();
bot.categories = fs.readdirSync('./commands/');
const config = require('./config.json');

bot.on('ready', () => {
	console.log('Oog Boog I\'m Alive');
	bot.user.setActivity(`over ${bot.users.cache.size} Members`, { type: 'WATCHING' });
});

bot.on('message', async message => {
    if(message.author.bot) return;
    
	if(!message.content.startsWith(config.prefix)) return; 
	const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
	const cmd = args.shift().toLowerCase();
	let command = bot.commands.get(cmd);
	if(!command) command = bot.commands.get(bot.aliases.get(cmd));
    if(command) command.run(bot, message, args);
    
    if (cmd === "ping") return message.channel.send("Shut up.").then(message=>message.delete({ timeout: 5000 }));
});

bot.login(config.token);