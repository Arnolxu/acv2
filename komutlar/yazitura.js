const Discord = require('discord.js');

const cevaplar = [
	"tura",
	"yazi"
];

exports.run = async (client, message, args) => {
	var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];
    if(args[0] == cevap) {
        cevap = "Attim ve **" + cevap + "** geldi, yani kazandin.";
    } else {
        cevap = "Attim ve **" + cevap + "** geldi, yani kazanamadin.";
    }

    let embed = new Discord.MessageEmbed()
    .setTitle("Yazitura")
    .setDescription(cevap)
    .setColor("#cdf785");
	message.channel.send(embed);
		

};  

exports.conf = {
aliases: ['yazitura'],
permLevel: 0, 
kategori: 'Eglence'
};

exports.help = {
  name: 'yazitura', 
  description: 'Yazı-tura atar.',
  usage: 'yazitura'
};