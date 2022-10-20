const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('team')
        .setDescription('Team management'),
    async execute(interaction, client) {
        //sub commands, add players/remove players
    }
}
