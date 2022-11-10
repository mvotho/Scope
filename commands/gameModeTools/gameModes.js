const { SlashCommandBuilder } = require('discord.js');
const GameMode = require("../../models/gameMode")
const { EmbedBuilder } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('gm')
        .setDescription('Game Modes'),
    async execute(interaction, client) {

        const gm = await GameMode.find({})
        const gmEmbeds = []
        gm.map((g) => {
            const exampleEmbed = new EmbedBuilder()
                .setColor(0x0099FF)
                .setTitle(g.gameMode)
                .setDescription('Gameplay settings for ' + g.gameMode)
                .setThumbnail('https://i.imgur.com/AfFp7pu.png')
                .addFields(
                    { name: 'Regular field title', value: 'Some value here' },
                    { name: '\u200B', value: '\u200B' },
                    { name: 'Inline field title', value: 'Some value here', inline: true },
                    { name: 'Inline field title', value: 'Some value here', inline: true },
                )
                .addFields({ name: 'Inline field title', value: 'Some value here', inline: true })
                .setImage('https://i.imgur.com/AfFp7pu.png')
                .setTimestamp()
                .setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });
            gmEmbeds.push(exampleEmbed);
        }

        )
        return interaction.reply({
            embeds: gmEmbeds
        }
        );

    },
};
