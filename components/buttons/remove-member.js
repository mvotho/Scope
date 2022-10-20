const {ActionRowBuilder, SelectMenuBuilder} = require('discord.js');

module.exports = {
    data: {
        name:`remove-member`
    },
    async execute(interaction, client){
        const menu = new SelectMenuBuilder()
			.setCustomId("remove-member")
			.setMinValues(1)
			.setMaxValues(1)
			.setOptions(
				{label: "test",
                value: "test"}
			)
			.setPlaceholder("Pick the member to remove")


        await interaction.reply({
            content: `Add member placeholder`,
            components: [new ActionRowBuilder().addComponents(menu)]
        })
    }
}