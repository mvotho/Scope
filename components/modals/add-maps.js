module.exports = {
    data: {
        name: `add-maps`
    },

    async execute(interaction, client){
        await interaction.reply({
            content: `You added ${interaction.fields.getTextInputValue("memberInput")} as a map.`
        });
    }
}