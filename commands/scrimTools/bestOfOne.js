const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('bestofone')
		.setDescription('Best Of One'),
	async execute(interaction, client) {
		
		return interaction.reply({
            content: `Bo1`}
        );
	},
};
