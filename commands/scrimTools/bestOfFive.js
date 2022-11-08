const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('bestoffive')
		.setDescription('Best Of Five'),
	async execute(interaction, client) {
		
		return interaction.reply({
            content: `Bo5`}
        );
	},
};
