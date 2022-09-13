require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = "!";

client.on('ready', () => {
    console.log('${client.user.tag} est prêt')
})

client.on('message', (message) => {

    if(!message.content.startsWith(prefix)) return;
    let [cmd,...args] = message.content.substring(prefix.length).split('');

    if(cmd.toLowerCase() === 'Help') {
        return message.reply("message reçu");
    }
})

client.login(process.env.token)