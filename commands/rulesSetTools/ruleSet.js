const { SlashCommandBuilder } = require('discord.js');
const RuleSet = require("../../models/ruleSet")
const { EmbedBuilder } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('rs')
        .setDescription('Rule sets'),
    async execute(interaction, client) {
        const gmEmbeds = []
        await RuleSet.find({})
            .populate({
                path: "gameModes",
                populate: {
                    path: "maps"
                }
            })
            .exec()
            .then((gm => {
                gm?.map((r) => {
                    console.log(r.ruleSet)
                    r.gameModes?.map((gm => {
                        console.log(gm.gameModeRules)
                        console.log(gm.maps) 
                    }))
                })
            }));
        return interaction.reply("test");

    },
};
