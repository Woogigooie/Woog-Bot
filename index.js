const Discord = require('discord.js');
const bot = new Discord.Client();

client.on('message', (message) => {
  
  if(message.content == 'w!ping') {
    message.reply('pong');
  }
  
});

bot.login('BOT_TOKEN');
