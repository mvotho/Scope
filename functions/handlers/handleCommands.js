const { REST } = require('discord.js');
const {Routes} = require('discord-api-types/v10')
const fs = require('fs');

module.exports = (client) => {
    client.handleCommands = async () => {
        const commandFolders = fs.readdirSync('./commands');
        for (const folder of commandFolders) {
            const commandFiles = fs
                .readdirSync(`./commands/${folder}`)
                .filter((file) => file.endsWith('.js'));

            const { commands, commandArray } = client;
            for (const file of commandFiles) {
                const command = require(`../../commands/${folder}/${file}`);
                commands.set(command.data.name, command);
                commandArray.push(command.data.toJSON());
            }
        }

        const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);
        try {
            console.log("starting refresh of commands")
            await rest.put(Routes.applicationGuildCommands(process.env.CLIENTID, process.env.GUILDID), 
            { body: client.commandArray });
            console.log("done loading commands")
        } catch (error) {
            console.error(error)
        }
    };
};
