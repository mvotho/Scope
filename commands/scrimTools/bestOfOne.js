const { SlashCommandBuilder } = require('discord.js');
const RuleSet = require("../../models/ruleSet")

module.exports = {
	data: new SlashCommandBuilder()
		.setName('bestofone')
		.setDescription('Best Of One'),
	async execute(interaction, client) {

        const scrim = await RuleSet.find({}).populate({
			path: "gameModes",
			populate: {
				path: "maps"
			}
		});

		// const gm = getRandomArbitrary(0, scrim[0].gameModes.length);
		// const map = getRandomArbitrary(0, scrim[0].gameModes[gm].maps.length );
        // console.log(gm + ", " + scrim[0].gameModes[gm]);
		// console.log(map + ", " + scrim[0].gameModes[gm].maps[map])

		return interaction.reply({
            content: `Bo1`}
        );
	},
};

function getRandomArbitrary(min, max) {
	return Math.random() * (max - min) + min;
  }
  