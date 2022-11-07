const Team = require("../../models/team")

module.exports = {
    data: {
        name: `premote-leader`
    },

    async execute(interaction, client) {
        console.log("test"+interaction.values[0])
        const teams = await Team.findOne({ members: { $elemMatch: { name: interaction.values[0] } } });
        console.log(teams)
        await interaction.reply({
            content: `You promoted ${interaction.values[0]}`
        });
    }
}