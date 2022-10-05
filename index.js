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
  

client.once('ready', () => {
	connectDB();
	console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});

client.login(process.env.TOKEN);
