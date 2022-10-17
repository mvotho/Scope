const Team = require("../../models/team")

module.exports = {
    data: {
        name: `add-team`
    },

    async execute(interaction, client){
        await Team.create({teamName: interaction.fields.getTextInputValue("teamInput")})
        //input this person into that team
        await interaction.reply({
            content: `You are leader of:  ${interaction.fields.getTextInputValue("teamInput")}`
        });
    }
}