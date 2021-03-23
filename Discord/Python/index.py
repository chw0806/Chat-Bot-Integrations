import json
import os
import discord
from discord.ext import commands

client = discord.Client()

@client.event
async def on_ready():
    print('We have logged in as {0.user}'.format(client))

@client.event
async def on_message(message):
    if message.author == client.user:
        return

    if message.content.startswith('!help'):
        await message.channel.send('Commands:')
    
    if message.content.startswith('!Appointment'):
        cmd = message.content.split()
        if(len(cmd) < 2 or len(cmd) > 2):
            await message.channel.send('Invalid Appointment Schedule')
            await message.channel.send('To make an appointment, please enter as !Appointment MM/DD/YYYY')
            return
        else:
            date = cmd[1]
            MonDayYear = date.split('/')
            if(len(MonDayYear) != 3):
                await message.channel.send('Invalid Date format. Enter as MM/DD/YYYY')
                return
            try:
                Month = int(MonDayYear[0])
                if(Month < 1 or Month > 12):
                    await message.channel.send('Invalid Month. Month values can only by 1-12')
                    return
                Day = int(MonDayYear[1])
                if(Day < 1 or Day > 31):
                     await message.channel.send('Invalid Day. Day values can only by 1-31')
                     return
                Year = int(MonDayYear[2])
                if(len(str(Year)) != 4):
                    await message.channel.send('Invalid Year. Years are 4 digits long')
                    return
            except:
                await message.channel.send('Invalid Date format. Enter as MM/DD/YYYY')
                return
            await message.channel.send('Appointment to be booked for:')
            await message.channel.send(date)
            
        
client.run('ODIyMTYxMTIxMTAzMzE0OTU1.YFOPNg.zptOYcPu7DNikgmuKfchE3FymTU')
