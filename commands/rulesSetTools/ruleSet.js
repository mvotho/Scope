const { SlashCommandBuilder } = require('discord.js');
const RuleSet = require("../../models/ruleSet")
const { EmbedBuilder } = require('discord.js');
const maps = require('../mapTools/maps');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('rs')
        .setDescription('Rule sets'),
    async execute(interaction, client) {
        const gmEmbeds = []
        await RuleSet.findOne({})
            .populate({
                path: "gameModes",
                populate: {
                    path: "maps"
                }
            })
            .exec()
            .then((gm => {
                gm.gameModes.map((mode) => {
                    console.log(mode.gameMode)
                    mode.maps.map((m)=>{
                        console.log("----")
                        console.log(m.name)
                    })
                })
             }));
        return interaction.reply("test");

    },
};
