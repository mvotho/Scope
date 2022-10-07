const { SlashCommandBuilder } = require('discord.js');
const Map = require("../models/map")

module.exports = {
	data: new SlashCommandBuilder()
		.setName('game')
		.setDescription('Best of 1'),
	async execute(interaction) {

		const test = await Map.find({});
		console.log(test)
		return interaction.reply('Pong!');
	},
};
