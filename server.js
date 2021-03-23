 //import discord library
 const Discord = require('discord.js');

 //create discord client 
 const client = new Discord.Client(); 
 

 const prefix = "!";


 //event listeners based on client 
 client.on('ready', () => {
     console.log(`Logged in as ${client.user.tag}!`)
 });
 
 client.on("message", function(message) {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
  
    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();
  
    if (command === "appointment") {
      message.reply('What date would you like to schedule for? Reply with !date MM/DD/YYYY');
    }
    else if (command === "date") {
        message.reply(`Your appointment is scheduled for ${args}`);
    }
  
 });
 
 client.login('ODIzNTUzMDg1MzQzMDA2NzYx.YFiflA.x7AIJekNmNb7jBqiM1vxb-DKCYI');









// client.on('message', async msg => {
    //     if (msg.author.bot) return;
    //     if (!msg.content.startsWith(prefix)) return;
      
    //     const commandBody = msg.content.slice(prefix.length);
    //     const args = commandBody.split(' ');
    //     const command = args.shift().toLowerCase();
    
    //     if (command === "!appointment") {
    //     msg.reply('What date would you like to schedule for? Reply with !date MM/DD/YYY');                   
    //     }   
    //     else if (command === "!date") {
    //         msg.reply(`Your appointment is scheduled for ${commandBody}`);                      
    //         }   
    //   });

