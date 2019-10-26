const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("608735629731430460")
setInterval(function() {
channel.send(`hi @everyone for..`);
}, 30)
})

client.login(process.env.BOT_TOKEN);