const {ActionRowBuilder, SelectMenuBuilder} = require('discord.js');
const Team = require("../../models/team")

module.exports = {
    data: {
        name:`remove-member`
    },
    async execute(interaction, client){

        const teams = await Team.findOne({ members: { $elemMatch: { name: interaction.user.tag } } });

        const menu = new SelectMenuBuilder()
			.setCustomId("remove-member")
			.setMinValues(1)
			.setMaxValues(1)
			.setOptions(
                teams.members.map((m)=>{
                    return{
                        label: m.name,
                        value: m.name
                    }
                })
				
			)
			.setPlaceholder("Pick the member to remove")


        await interaction.reply({
            content: `Remove member.`,
            components: [new ActionRowBuilder().addComponents(menu)]
        })
    }
}