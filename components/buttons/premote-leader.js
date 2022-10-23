const { ActionRowBuilder, SelectMenuBuilder } = require('discord.js');
const Team = require("../../models/team")

module.exports = {
    data: {
        name: `premote-leader`
    },
    async execute(interaction, client) {

        const teams = await Team.findOne({ members: { $elemMatch: { name: interaction.user.tag } } });

        const menu = new SelectMenuBuilder()
            .setCustomId("premote-leader")
            .setMinValues(1)
            .setMaxValues(1)
            .setOptions(
                teams.members.map((m) => {
                    return {
                        label: m.name,
                        value: m.name
                    }
                })

            )
            .setPlaceholder("Pick the member to premote")

        await interaction.reply({
            content: `Premote Leader.`,
            components: [new ActionRowBuilder().addComponents(menu)]
        })
    }
}