module.exports = {
    data: {
        name:`confirmation`
    },
    async execute(interaction, client){
        
        console.log(interaction.message.content)

        if(interaction.message.content =='Leave the team?'){
            await interaction.reply({
                content: `You have left the team.`
            })
        }else if(interaction.message.content =='Disband the team?'){
            await interaction.reply({
                content: `You have disbanded the team.`
            })
        }
    }
}