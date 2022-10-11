const { SlashCommandBuilder } = require('discord.js');
const Map = require("../../models/map")

module.exports = {
	data: new SlashCommandBuilder()
		.setName('addmaps')
		.setDescription('Add map to rotation'),
	async execute(interaction, client) {
		return interaction.reply("test");
	},
};