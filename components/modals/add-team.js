const Team = require("../../models/team")

module.exports = {
    data: {
        name: `add-team`
    },

    async execute(interaction, client) {

        const teamTest = await Team.find({ teamName: interaction.fields.getTextInputValue("teamInput") })

        if (!teamTest[0]?.teamName) {
            await Team.create({
                teamName: interaction.fields.getTextInputValue("teamInput"),
                members: [{ name: interaction.user.tag, leader: true }]
            })

            await interaction.reply({
                content: `You are leader of:  ${interaction.fields.getTextInputValue("teamInput")}`
            });
        } else {
            await interaction.reply({
                content: `The team ${interaction.fields.getTextInputValue("teamInput")} already exists.`
            });

        }

    }
}