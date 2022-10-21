const Team = require("../../models/team")

module.exports = {
    data: {
        name: `remove-member`
    },

    async execute(interaction, client){
        await interaction.reply({
            content: `You deleted summet`
        });
    }
}