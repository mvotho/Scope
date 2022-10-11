const { SlashCommandBuilder } = require('discord.js');
const Map = require("../../models/map")

module.exports = {
	data: new SlashCommandBuilder()
		.setName('deletemaps')
		.setDescription('Delete map from rotation'),
	async execute(interaction) {
		return interaction.reply();
	},
};