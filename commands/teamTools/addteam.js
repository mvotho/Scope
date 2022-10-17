const { SlashCommandBuilder, ModalBuilder, ActionRowBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('addteam')
        .setDescription('Add new team'),
    async execute(interaction, client) {
        const modal = new ModalBuilder()
        .setCustomId(`add-team`)
        .setTitle(`Add team.`);

        const textInput = new TextInputBuilder()
        .setCustomId(`teamInput`)
        .setLabel(`Name team`)
        .setRequired(true)
        .setStyle(TextInputStyle.Short);

        modal.addComponents(new ActionRowBuilder().addComponents(textInput));

        await interaction.showModal(modal);
    }
}
