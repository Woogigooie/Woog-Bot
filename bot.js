const Discord = require('discord.js');
const client = new Discord.Client();

bot.registry.registerGroup('random', 'Random');
bot.registry.registerCommandsIn(__dirname + "/commands");

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
