module.exports = {
    data: {
        name:`confirmation`
    },
    async execute(interaction, client){
        await interaction.reply({
            content: `confirmation`
        })
    }
}