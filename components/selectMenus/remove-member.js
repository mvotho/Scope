const Team = require("../../models/team")

module.exports = {
    data: {
        name: `remove-member`
    },

    async execute(interaction, client){
        const teams = await Team.findOne({ members: { $elemMatch: { name: interaction.user.tag } } });
        console.log(interaction.values[0])
        await Team.findOneAndUpdate({teamName: teams.teamName}, {$pull: {members: {name: interaction.values[0]}}})
        await interaction.reply({
            content: `You deleted summet`
        });
    }
}