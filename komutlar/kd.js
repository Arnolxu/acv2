const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json') 

exports.run = async (client, message, args) => {
        let embed = new Discord.MessageEmbed()
            .setTitle("Kus Dili")
            .setDescription("Ceviri yontemi ve cevirilecek metni gir!")
            .setColor("#cdf785");
        if(!args[1]) return message.channel.send(embed);

        let ceviriYontem = args[0];
        let metin = args.slice(1).join(" ");

        embed = new Discord.MessageEmbed()
            .setTitle("Kus Dili")
            .setDescription("Girdigin ceviri yontemi gecersiz! 'kd' ya da 'tr' gir.")
            .setColor("#cdf785");
        if(!["tr", "kd"].includes(ceviriYontem)) return message.channel.send(embed);

        if(ceviriYontem=="tr"){
            embed = new Discord.MessageEmbed()
                .setTitle("Kus Dili")
                .setDescription(metin.replace(/a/g, "aga").replace(/e/g, "ege").replace(/i/g, "igi").replace(/o/g, "ogo").replace(/u/g, "ugu").replace(/ı/g, "ıgı").replace(/ö/g, "ögö").replace(/ü/g, "ügü").replace(/A/g, "AGA").replace(/E/g, "EGE").replace(/I/g, "IGI").replace(/Ö/g, "ÖGÖ").replace(/U/g, "UGU").replace(/İ/g, "İGİ").replace(/ö/g, "Ü").replace(/Ü/g, "ÜGÜ"))
                .setColor("#cdf785");
            return message.channel.send(embed);
        } else if(ceviriYontem=="kd"){
            embed = new Discord.MessageEmbed()
                .setTitle("Kus Dili")
                .setDescription(metin.replace(/aga/g, "a").replace(/ege/g, "e").replace(/igi/g, "i").replace(/ogo/g, "o").replace(/ugu/g, "u").replace(/ıgı/g, "ı").replace(/ögö/g, "ö").replace(/ügü/g, "ü").replace(/AGA/g, "A").replace(/EGE/g, "E").replace(/IGI/g, "I").replace(/ÖGÖ/g, "Ö").replace(/UGU/g, "U").replace(/İ/g, "Gİİ").replace(/ö/g, "Ü").replace(/Ü/g, "ÜGÜ"))
                .setColor("#cdf785");
            return message.channel.send(embed);
        }
      }


exports.conf = {
    aliases: ['kusdili', 'kd'],
    permLevel: 0,
    kategori: "Eglence"
};

exports.help = {
    name: "kd",
    description: "Metni Turkce'den Kugus Digiligine/Kugus Digiliginden Turkce'ye cevirir.",
    usage: "kd <ceviri yontemi> <metin>"
};

