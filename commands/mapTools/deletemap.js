const { SlashCommandBuilder, ActionRowBuilder, SelectMenuBuilder, SelectMenuOptionBuilder} = require('discord.js');
const Map = require("../../models/map")

module.exports = {
	data: new SlashCommandBuilder()
		.setName('deletemap')
		.setDescription('Delete map from rotation'),
	async execute(interaction, client) {
		const maps = await Map.find({});
		

		const menu = new SelectMenuBuilder()
			.setCustomId("delete-maps")
			.setMinValues(1)
			.setMaxValues(1)
			.setOptions(
				{
					label: `scrapyard`,
					description: 'scrapyard',
					value: 'scrapyard',
				}	
				)
			.setPlaceholder("Pick the map to remove.")

		return interaction.reply({
			components:[new ActionRowBuilder().addComponents(menu)]
		});
	},
};