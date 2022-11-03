const Team = require("../../models/team")

module.exports = {
    data: {
        name: `remove-member`
    },

    async execute(interaction, client){
        console.log(interaction.values[0])
        await interaction.reply({
            content: `You deleted summet`
        });
    }
}