const { prefix } = require('../ayarlar.json');

module.exports = client => {

  // Oynuyor Kismi

  var actvs = [
    `${prefix}help | ${client.guilds.cache.size} sunucu`,
    `${prefix}help | ${client.users.cache.size} uye`,
    `${prefix}help`
  ];


  client.user.setActivity(actvs[Math.floor(Math.random() * actvs.length)], { type: 'PLAYING' });

  setInterval(() => {
    client.user.setActivity(actvs[Math.floor(Math.random() * actvs.length)], { type: 'PLAYING' });
  }, 15000);


  console.log('-----------------------------------------');
  console.log(`| Kullanici Adi      | ${client.user.username}`);
  console.log(`| Sunucular          | ${client.guilds.cache.size}`);
  console.log(`| Kullanicilar       | ${client.users.cache.size}`);
  console.log(`| Prefix             | ${prefix}`);
  console.log('-----------------------------------------');
};
