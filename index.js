require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.DISCORD_APP_TOKEN;

client.on('message', async message => {
    // Voice only works in guilds, if the message does not come from a guild, we ignore it
    if (!message.guild) return;

    if (message.content === '/express') {
        // Only try to join the sender's voice channel if they are in one themselves
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();
            connection.play('https://stream.expres.sk/128.mp3');
        } else {
            message.reply('You need to join a voice channel first!');
        }
    }
});

client.login(token);
