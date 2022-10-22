const { ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js');

module.exports = {
    data: {
        name:`leave-team`
    },
    async execute(interaction, client){
        const buttonLeaveTeam = new ButtonBuilder()
            .setCustomId("confirmation")
            .setLabel("Yes")
            .setStyle(ButtonStyle.Danger);

        const buttonCancel = new ButtonBuilder()
            .setCustomId("cancel")
            .setLabel("Cancel")
            .setStyle(ButtonStyle.Danger);

        await interaction.reply({
            content: `Are you sure you want to leave the team?`,
            components: [
                new ActionRowBuilder().addComponents(buttonLeaveTeam),
                new ActionRowBuilder().addComponents(buttonCancel)]
        })
    }
}