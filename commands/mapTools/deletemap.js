const { SlashCommandBuilder, ActionRowBuilder, SelectMenuBuilder, SelectMenuOptionBuilder, messageLink } = require('discord.js');
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
				maps.map((m) => {
					return {
						label: m.name,
						description: m.name,
						value: m.name
					}
				})
			)
			.setPlaceholder("Pick the map to remove.")

		return interaction.reply({
			components: [new ActionRowBuilder().addComponents(menu)]
		});
	},
};