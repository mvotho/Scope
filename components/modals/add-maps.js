const Map = require("../../models/map")

module.exports = {
    data: {
        name: `add-maps`
    },

    async execute(interaction, client){
        await Map.create({map: interaction.fields.getTextInputValue("mapInput")})
        await interaction.reply({
            content: `You added ${interaction.fields.getTextInputValue("mapInput")} as a map.`
        });
    }
}