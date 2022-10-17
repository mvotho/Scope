const { SlashCommandBuilder } = require('discord.js');
const Team = require("../../models/team")

module.exports = {
	data: new SlashCommandBuilder()
		.setName('teams')
		.setDescription('List all teams'),
	async execute(interaction, client) {
		const teams = await Team.find({});
		const teamOutput = []
		teams.map((t) => {
			let str = t.teamName;
			let str2 = t.teamName.charAt(0).toUpperCase() + str.slice(1);
			teamOutput.push( " "+ str2);
		})
		return interaction.reply(teamOutput.toString());
	},
};
