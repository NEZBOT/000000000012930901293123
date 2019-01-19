const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.'
 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`!!help I By MJH-OoL`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});
 

client.on('message', message => {
             if (!message.channel.guild) return;
     if(message.content =='$members')
     var IzRo = new Discord.RichEmbed()
     .setThumbnail(message.author.avatarURL)
     .setFooter(message.author.username, message.author.avatarURL) 
     .setTitle('🌷| Members info')
     .addBlankField(true)
     .addField('📗| Online ',
     `${message.guild.members.filter(m=>m.presence.status == 'online').size}`)
     .addField('📕| DND',`${message.guild.members.filter(m=>m.presence.status == 'dnd').size}`)
     .addField('📙| idle',`${message.guild.members.filter(m=>m.presence.status == 'idle').size}`)
     .addField('📓| Offline ',`${message.guild.members.filter(m=>m.presence.status == 'offline').size}`)
     .addField('Members Count',`${message.guild.memberCount}`)
     message.channel.send(IzRo);
   });

client.login(process.env.BOT_TOKEN);
