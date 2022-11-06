const Team = require("../../models/team")

module.exports = {
    data: {
        name: `add-member`
    },

    async execute(interaction, client){
        const teams = await Team.findOne({ members: { $elemMatch: { name: interaction.user.tag } } });
        
        const newMember = {
            name: interaction.fields.getTextInputValue("memberInput"),
            leader: false
        }
        
        await Team.findOneAndUpdate({teamName: teams.teamName}, {$push: {members: newMember}})
        
        await interaction.reply({
            content: `You added ${interaction.fields.getTextInputValue("memberInput")} as a member.`
        });
    }
}