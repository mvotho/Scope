const Maps = require("../../models/map")

module.exports = {
    data: {
        name: `add-maps`
    },

    async execute(interaction, client){

        const newMap = interaction.fields.getTextInputValue("mapInput");
        await Maps.create({name: newMap})
        await interaction.reply({
            content: `You added ${newMap} as a map.`
        });
    }
}