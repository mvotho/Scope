const { SlashCommandBuilder } = require('discord.js');
const RuleSet = require("../../models/ruleSet")

module.exports = {
	data: new SlashCommandBuilder()
		.setName('bestofone')
		.setDescription('Best Of One'),
	async execute(interaction, client) {

        const scrim = await RuleSet.find({}).populate('gameModes');
        console.log(scrim[0].gameModes);

		return interaction.reply({
            content: `Bo1`}
        );
	},
};
