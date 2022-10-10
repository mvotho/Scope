const { SlashCommandBuilder } = require('discord.js');
const Map = require("../models/map")

module.exports = {
	data: new SlashCommandBuilder()
		.setName('maps')
		.setDescription('List all maps'),
	async execute(interaction, client) {
		const maps = await Map.find({});
		const mapOutput = []
		maps.map((map) => {
			let str = map.map;
			let str2 = map.map.charAt(0).toUpperCase() + str.slice(1);
			mapOutput.push(str2 + " ");
		})
		return interaction.reply(mapOutput.toString());
	},
};
