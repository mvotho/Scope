const Team = require("../../models/team");
module.exports = {
    data: {
        name:`confirmation`
    },
    async execute(interaction, client){
        
        
        const teams = await Team.findOne({ members: { $elemMatch: { name: interaction.user.tag } } });
        console.log(teams)
        if(interaction.message.content =='Leave the team?'){
            await Team.findOneAndUpdate({teamName: teams.teamName}, {$pull: {members: {name: interaction.user.tag}}})
            await interaction.reply({
                content: `You have left the team.`
            })
        }else if(interaction.message.content =='Disband the team?'){
            await Team.deleteOne({teamName: teams.teamName})
            await interaction.reply({
                content: `You have disbanded the team.`
            })
        }
    }
}