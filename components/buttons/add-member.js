const { ModalBuilder, ActionRowBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');

module.exports = {
    data: {
        name:`add-member`
    },
    async execute(interaction, client) {
        const modal = new ModalBuilder()
        .setCustomId(`add-member`)
        .setTitle(`Add member.`);

        const textInput = new TextInputBuilder()
        .setCustomId(`memberInput`)
        .setLabel(`Add member`)
        .setRequired(true)
        .setStyle(TextInputStyle.Short);

        modal.addComponents(new ActionRowBuilder().addComponents(textInput));

        await interaction.showModal(modal);
    }
}

