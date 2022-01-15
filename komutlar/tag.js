const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
  return message.channel.send("ᴵᵀ");
}

exports.conf = {
  aliases: ['tag'],
  permLevel: 0,
  kategori: "Sunucu"
};

exports.help = {
  name: "tag",
  description: "Tagi gonderir.",
  usage: "tag"
};

