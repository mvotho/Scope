const fs = require('node:fs');
const path = require('node:path');
const mongoose = require('mongoose')
const { Client, Collection, GatewayIntentBits } = require('discord.js');
require('dotenv').config();

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
console.log(commandsPath)
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	client.commands.set(command.data.name, command);
	console.log(client.commands)
}


const connectDB = async () => {
	try {
	  await mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true });
  
	  console.log("Successfully connected to mongodb database");
  
	  return mongoose.connection;
	} catch (err) {
	  console.log("Could not connect to mongodb database" + err);
	}
  };
  

  const eventsPath = path.join(__dirname, 'events');
  const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));
  
  for (const file of eventFiles) {
	  const filePath = path.join(eventsPath, file);
	  const event = require(filePath);
	  if (event.once) {
		  client.once(event.name, (...args) => event.execute(...args, client));
	  } else {
		  client.on(event.name, (...args) => event.execute(...args, client));
	  }
  }

// connectDB();
client.login(process.env.TOKEN);
