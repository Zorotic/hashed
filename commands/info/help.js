const Discord = require('discord.js');
module.exports = {
	name: 'help',
	description: 'Help Command...',
	run: async (bot, message, args)=>{

        const helpEmbed = new Discord.MessageEmbed()
        .setColor('#1303fc')
        .setTitle('Help')
        .addField('Naah, you don\'t deserve any help...')
        .setTimestamp();

        message.channel.send(helpEmbed)
        }
    };