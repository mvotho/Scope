const { SlashCommandBuilder } = require('discord.js');
const RuleSet = require("../../models/ruleSet")

module.exports = {
	data: new SlashCommandBuilder()
		.setName('bestof')
		.setDescription('Match Maker')
		.addStringOption(option =>
			option
				.setName('amount')
				.setDescription('Amount of games.')
				.setRequired(true)),
	async execute(interaction, client) {
		console.log("input " + interaction.options.getString("amount"))
		const test = await mm(interaction.options.getString("amount"))
		console.log(test[0])
		
		const reply = test.toString();
		console.log(reply)
		return interaction.reply({
			content: reply
		}
		);
	},
};

async function mm(i) {
	const replyArr = [];
	const replyArrObj = [];
	const scrim = await RuleSet.find({}).populate({
		path: "gameModes",
		populate: {
			path: "maps"
		}
	});

	for (let index = 0; index < i; index++) {

		const gameType = Math.floor(Math.random() * scrim[0].gameModes.length);
		const map = Math.floor(Math.random() * scrim[0].gameModes[gameType].maps.length)

		const replyObj = {
			gm: scrim[0].gameModes[gameType].gameMode,
			m: scrim[0].gameModes[gameType].maps[map].name
		}

		const reply = scrim[0].gameModes[gameType].gameMode + ": " + scrim[0].gameModes[gameType].maps[map].name;

		replyArrObj.push(replyObj)
		replyArr.push(reply)
	}
	return replyArr;
}