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
		
		const gameType = Math.floor(Math.random() * scrim[0].gameModes.length);
		const map = Math.floor(Math.random() * scrim[0].gameModes[gameType].maps.length)

		const reply = scrim[0].gameModes[gameType].gameMode + ": " + scrim[0].gameModes[gameType].maps[map].name;

		return interaction.reply({
            content: reply}
        );
	},
};
  
function mapRnd (scrim){
    const gameType = Math.floor(Math.random() * scrim[0].gameModes.length);
    const map = Math.floor(Math.random() * scrim[0].gameModes[gameType].maps.length)

    const reply = scrim[0].gameModes[gameType].gameMode + ": " + scrim[0].gameModes[gameType].maps[map].name;
    return reply;
}