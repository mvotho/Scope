const { SlashCommandBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js');

module.exports = {
    data: {
        name: `disband-team`
    },
    async execute(interaction, client) {

        const buttonDisbandTeam = new ButtonBuilder()
            .setCustomId("confirmation")
            .setLabel("Yes")
            .setStyle(ButtonStyle.Danger);

        const buttonCancel = new ButtonBuilder()
            .setCustomId("cancel")
            .setLabel("Cancel")
            .setStyle(ButtonStyle.Danger);

        await interaction.reply({
            content: `Disband the team?`,
            components: [
                new ActionRowBuilder().addComponents(buttonDisbandTeam),
                new ActionRowBuilder().addComponents(buttonCancel)]
        })
    }
}