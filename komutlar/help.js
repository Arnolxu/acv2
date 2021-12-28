const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json') 

exports.run = async (client, message, args) => {
    var prefix = ayarlar.prefix;

//GENEL KOMUTU
    if(args[0] === "Genel" || args[0] === "genel" || args[0] === "General" || args[0] === "general") {
              let Genel = new Discord.MessageEmbed()
  .setAuthor('Genel', message.author.displayAvatarURL())
  .setColor('#ff0000')
  .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.displayAvatarURL())
   .setDescription(client.commands.filter(cmd => cmd.conf.kategori === 'Genel').map(cmd => `:white_small_square: - **${prefix}${cmd.help.name}** ${cmd.help.description}`).join("\n "))
        .addField("» Linkler", ` [Davet Et](https://discord.com/oauth2/authorize?client_id=925093532740489306&scope=bot&permissions=8)` + "** | **" + `[Destek Sunucusu](https://camroku.xyz/invite)`  + "** | **" + `[Web Sitesi](https://ac.camroku.xyz)  `, false)
              return message.channel.send(Genel)
         
       
       return;
    }
    //SUNUCU KOMUTU
      if(args[0] === "Sunucu" || args[0] === "sunucu") {
              let Sunucu = new Discord.MessageEmbed()
  .setAuthor('Sunucu', message.author.displayAvatarURL())
  .setColor('#ff0000')
  .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.displayAvatarURL())
   .setDescription(client.commands.filter(cmd => cmd.conf.kategori === 'Sunucu').map(cmd => `:white_small_square: - **${prefix}${cmd.help.name}** ${cmd.help.description}`).join("\n "))
        .addField("» Linkler", ` [Davet Et](https://discord.com/oauth2/authorize?client_id=925093532740489306&scope=bot&permissions=8)` + "** | **" + `[Destek Sunucusu](https://camroku.xyz/invite)`  + "** | **" + `[Web Sitesi](https://ac.camroku.xyz)  `, false)
              return message.channel.send(Sunucu)
         
      

       return;
    }
//Eglence KOMUTU
  if(args[0] === "Eglence" || args[0] === "Eglence" || args[0] === "Fun" || args[0] === "fun") {
   let Eglence = new Discord.MessageEmbed()
  .setAuthor('Eglence', message.author.displayAvatarURL())
  .setColor('#ff0000')
  .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.displayAvatarURL())
   .setDescription(client.commands.filter(cmd => cmd.conf.kategori === 'Eglence').map(cmd => `:white_small_square: - **${prefix}${cmd.help.name}** ${cmd.help.description}`).join("\n "))
        .addField("» Linkler", ` [Davet Et](https://discord.com/oauth2/authorize?client_id=925093532740489306&scope=bot&permissions=8)` + "** | **" + `[Destek Sunucusu](https://camroku.xyz/invite)`  + "** | **" + `[Web Sitesi](https://ac.camroku.xyz)  `, false)
   return message.channel.send(Eglence)
  
      
           return;
  }
  //MODERASYON KOMUTU
  if(args[0] === "Moderasyon" || args[0] === "moderasyon" || args[0] === "moderation" || args[0] === "Moderation") {
   let Moderasyon = new Discord.MessageEmbed()
  .setAuthor('Moderasyon', message.author.displayAvatarURL())
  .setColor('#ff0000')
  .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.displayAvatarURL())
   .setDescription(client.commands.filter(cmd => cmd.conf.kategori === 'Moderasyon').map(cmd => `:white_small_square: - **${prefix}${cmd.help.name}** ${cmd.help.description}`).join("\n "))
        .addField("» Linkler", ` [Davet Et](https://discord.com/oauth2/authorize?client_id=925093532740489306&scope=bot&permissions=8)` + "** | **" + `[Destek Sunucusu](https://camroku.xyz/invite)`  + "** | **" + `[Web Sitesi](https://ac.camroku.xyz)  `, false)
   return message.channel.send(Moderasyon)
             
       
               return;
  }
     //SAHİP KOMUTU
  if(args[0] === "Sahip" || args[0] === "sahip" ) {
    let Sahip = new Discord.MessageEmbed()
   .setAuthor('Sahip', message.author.displayAvatarURL())
   .setColor('#ff0000')
   .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.displayAvatarURL())
   .setDescription(client.commands.filter(cmd => cmd.conf.kategori === 'Sahip').map(cmd => `:white_small_square: - **${prefix}${cmd.help.name}** ${cmd.help.description}`).join("\n "))
         .addField("» Linkler", ` [Davet Et](https://discord.com/oauth2/authorize?client_id=925093532740489306&scope=bot&permissions=8)` + "** | **" + `[Destek Sunucusu](https://camroku.xyz/invite)`  + "** | **" + `[Web Sitesi](https://ac.camroku.xyz)  `, false)
    return message.channel.send(Sahip)
              
        
                return;
   }

//YARDIM KOMUTU
  
  let embed = new Discord.MessageEmbed()
  .setAuthor('Komutlar', message.author.displayAvatarURL())
  .setThumbnail(client.user.avatarURL())
  .setColor('#ff0000')
  .setDescription(`**Örnek Kullanım:** \`${prefix}help Kategori\` \n **Örnek:** \`${prefix}help Genel\``)
  .addField('Kategoriler:', `
  **${prefix}help Genel** 
  **${prefix}help Eglence**
  **${prefix}help Moderasyon**
  **${prefix}help Sunucu**
  **${prefix}help Sahip**
  `)
  .addField("» Linkler", ` [Davet Et](https://discord.com/oauth2/authorize?client_id=925093532740489306&scope=bot&permissions=8)` + "** | **" + `[Destek Sunucusu](https://camroku.xyz/invite)`  + "** | **" + `[Web Sitesi](https://ac.camroku.xyz)  `, false)

  .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.displayAvatarURL())
  message.channel.send(embed)

  
}

  exports.conf = {
    aliases: ['help'],
    permLevel: 0, //Komutun kimler kullanacağını belirtir (bot.js dosyasından en aşağı inerseniz gerekli yeri görürsünüz)
    kategori: "Genel" //help komutunda hangi kategoride gözükeceğini ayarlarsınız

  };

  exports.help = {
    name: 'help',  //adını belirtin (kullanmak için gereken komut) Örneğin Otorol
    description: 'Komutlar hakkında bilgi verir.', //Komutun açıklaması
    usage: 'help', //Komutun kullanım şekli (örneğin !otorol <@rol> <#kanal>)
  };
