 //import discord library
const Discord = require('discord.js');

//create discord client 
const client = new Discord.Client(); 

//event listeners based on client 
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)
});

client.on('message', async msg => {
    if(msg.content.startsWith('!Appointment')) {
        msg.reply('What date would you like to schedule for?')
    }
});

client.login('ODIzNTUzMDg1MzQzMDA2NzYx.YFiflA.x7AIJekNmNb7jBqiM1vxb-DKCYI');