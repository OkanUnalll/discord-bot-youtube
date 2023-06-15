const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`${client.user.tag} aktif edildi!`)
})

client.on('message', (msg) => {
    const prefix = "!testbot"

    if (msg.content === 'merhaba') {
        msg.reply('selam!');
    }
    if (msg.content === `${prefix} ben-kimim`) {
        msg.reply(`Senin şu anki takma ismin ${msg.author.tag} olarak geçmektedir.`);
    }
    if (msg.content === `${prefix} avatarim-ne`) {
        msg.reply(msg.author.displayAvatarURL());
    }
})

client.login("BURAYA VIDEO'DA BELİRTİLEN TOKEN'I GİRİNİZ")