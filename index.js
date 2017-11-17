const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {
  
  if(message.content == 'w!ping') {
    // message.reply('pong');
    message.channel.sendMessage('Pong!')
  }
  
});

bot.on('disconnect', function(msg, code) {
    if (code === 0) return console.error(msg);
    bot.connect();
});

bot.login('MzgwOTM2MTE5OTIxMDE2ODQy.DPAAaw.ZcTv8RBWuRBVus-G8kWhc5WK2SA');
