const Map = require("../../models/map")

module.exports = {
    data: {
        name: `delete-maps`
    },

    async execute(interaction, client){
        await Map.deleteOne({map: interaction.values[0]})
        console.log(interaction.values[0])
        await interaction.reply({
            content: `You deleted ${interaction.values[0]}`
        });
    }
}