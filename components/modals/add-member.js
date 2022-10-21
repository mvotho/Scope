module.exports = {
    data: {
        name: `add-member`
    },

    async execute(interaction, client){
        await interaction.reply({
            content: `You added ${interaction.fields.getTextInputValue("memberInput")} as a member.`
        });
    }
}