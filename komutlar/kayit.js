const Discord = require('discord.js');
exports.run = (client, message, args) => {
  //                                Moderator
  if (!message.member.roles.cache.some(role => role.id === '923161165155151953')) return message.reply('**Bunun icin gerekli iznin bulunmamaktadir.**');
  let guild = message.guild;
  let rol = message.mentions.roles.first();
  let user = message.mentions.members.first() ;

  if (!user) return message.reply('**Kimi kayit edecegini belirt!**').catch(console.error);
  user.roles.add(message.guild.roles.cache.find(role => role.id === "904420698259333120")); // Member
  
   const embed = new Discord.MessageEmbed()
        .setTitle("Kayit")
        .setDescription(`${user} adli uye basariyla kaydedildi!`)
        .setFooter(`${message.author.username} tarafindan kaydedildi.`, message.author.avatarURL)
        .setColor("#cdf785")
        .setTimestamp();
    message.channel.send(embed);
};

exports.conf = {
aliases: ['kayit', 'k'],
permLevel: 0, 
kategori: 'Sunucu'
};

exports.help = {
  name: 'kayit', 
  description: 'Uyeyi kaydeder.',
  usage: 'kayit @Uye <m/h>'
};