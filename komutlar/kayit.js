const Discord = require('discord.js');
exports.run = (client, message, args) => {
  const kayitroles = {
    "m": "897183478871916604",
    "e": "895339339293261875"
  }
  if (!message.member.roles.cache.some(role => role.id === '894180435976912966')) return message.reply('**Bunun icin gerekli iznin bulunmamaktadir.**');
  let guild = message.guild;
  let rol = message.guild.roles.cache.find(role => role.id === kayitroles[args[1]]);
  let user = message.mentions.members.first();

  if (!user) return message.reply('**Kimi kayit edecegini belirt!**').catch(console.error);
  user.roles.add(rol); // Member

  const embed = new Discord.MessageEmbed()
    .setTitle("Kayit")
    .setDescription(`${user} adli uye basariyla kaydedildi!`)
    .setFooter(`${message.author.username} tarafindan kaydedildi.`, message.author.avatarURL)
    .setColor("#ff0000")
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
  usage: 'kayit @Uye <m/e>'
};