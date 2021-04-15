
 const Discord = require('discord.js');
 const client = new Discord.Client(); 

const Spurwing = require('spurwing')
const PID = '13498c08-3ce8-4141-b7ca-aa2e9bfd7181';
let sp = new Spurwing();


const moment = require('moment');

const prefix = "!";



 //event listeners based on client 
 client.on('ready', () => {
     console.log(`Logged in as ${client.user.tag}!`)
 });
 
const chrono = require('chrono-node');

 client.on("message", async function(message) {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    const cmd = message.content.slice(prefix.length).toLowerCase();

    let date = cmd.split('book ')[1];

    if (date) {
      date = chrono.parseDate(date)
      console.log(date);

      const appointment_type_id = 'c72ced97-f672-4ec4-ac28-7202b6cccac0';

      let D = await sp.complete_booking(PID, appointment_type_id, 'ilya2@nevolin.be', 'Ilya', 'Nevo', date, 'Test booking');
      
      console.log(D)



    }

    const args = cmd.split(' ');
    const command = args.shift().toLowerCase();
  
    if (cmd === "appointment") {
      message.reply('When would you like to schedule the appointment for? Reply with !book date and time');
    }
    else if (cmd === "book") {
        message.reply(`Your appointment is scheduled for ${cmd}`);
    }
    




    // const commandBody = message.content.slice(prefix.length);
    // const args = commandBody.split(' ');

 });



 
 client.login('ODIzNTUzMDg1MzQzMDA2NzYx.YFiflA.x7AIJekNmNb7jBqiM1vxb-DKCYI');