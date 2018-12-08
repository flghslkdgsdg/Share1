const Discord = require('discord.js');
const client = new Discord.Client();

client.on('guildMemberAdd', async member => {
  let msg = '**تنورنا ي عمري https://discord.gg/KbU5WAK **';
  member.send(msg);

  }

});

client.login(process.env.BOT_TOKEN);
