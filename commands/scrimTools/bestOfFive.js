const { SlashCommandBuilder } = require('discord.js');
const RuleSet = require("../../models/ruleSet")

module.exports = {
	data: new SlashCommandBuilder()
		.setName('bestoffive')
		.setDescription('Best Of Five'),
	async execute(interaction, client) {
		
		const replyArr = [];
		const scrim = await RuleSet.find({}).populate({
			path: "gameModes",
			populate: {
				path: "maps"
			}
		});

		for (let index = 0; index < 5; index++) {

			const gameType = Math.floor(Math.random() * scrim[0].gameModes.length);
			const map = Math.floor(Math.random() * scrim[0].gameModes[gameType].maps.length)

			const reply = scrim[0].gameModes[gameType].gameMode + ": " + scrim[0].gameModes[gameType].maps[map].name;
			replyArr.push(reply)
		}
		console.log(replyArr)

		return interaction.reply({
			content: `\n` + replyArr[0] + `,\n` + replyArr[1] + `,\n` + replyArr[2] + `,\n` + replyArr[3] + `,\n` + replyArr[4]
		})
	},
};
