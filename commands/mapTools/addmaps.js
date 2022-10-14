const { SlashCommandBuilder, ModalBuilder, ActionRowBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('addmap')
        .setDescription('Add new map to set.'),
    async execute(interaction, client) {
        const modal = new ModalBuilder()
        .setCustomId(`add-maps`)
        .setTitle(`Add map.`);

        const textInput = new TextInputBuilder()
        .setCustomId(`mapInput`)
        .setLabel(`Which map to add?`)
        .setRequired(true)
        .setStyle(TextInputStyle.Short);

        modal.addComponents(new ActionRowBuilder().addComponents(textInput));

        await interaction.showModal(modal);
    }
}
