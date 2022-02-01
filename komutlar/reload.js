const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
  let embed = new Discord.MessageEmbed()
    .setTitle("Reload")
    .setDescription("Bu komutu sadece sahibim kullanabilir..")
    .setColor("#ff0000");
  if (message.author.id !== ayarlar.sahip) return message.channel.send(embed);

  if (!args[0]) return message.channel.send("Bir komut ismi gir!")

  let komutİsim = args[0]

  try {

    delete require.cache[require.resolve(`./${komutİsim}.js`)]
    const pull = require(`./${komutİsim}.js`)
    client.commands.set(pull.help.name, pull)
    message.channel.send(`Yeniden Başlatıldı: \`${komutİsim}\``)
  }

  catch (e) {
    console.log(e)
    return message.channel.send(`Komut Yeniden Yüklenemedi: ${komutİsim} \n${e}`)
  }


}


exports.conf = {
  aliases: ['reload'],
  permLevel: 0,
  kategori: "Sahip"
};

exports.help = {
  name: "reload",
  description: "Belirttiğiniz komutu yeniden başlatır.",
  usage: "reload <komut>"
};

