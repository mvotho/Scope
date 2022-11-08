const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('bestofthree')
		.setDescription('Best Of three'),
	async execute(interaction, client) {
		
		return interaction.reply({
            content: `Bo2`}
        );
	},
};
