const { SlashCommandBuilder } = require('discord.js');
const GameMode = require("../../models/gameMode")
const { EmbedBuilder } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('gm')
        .setDescription('Game Modes'),
    async execute(interaction, client) {
        const gmEmbeds = []
        await GameMode.find({})
        .populate("maps")
        .exec()
        .then((maps => {
            maps?.map((g) => {
                console.log(g)
                const exampleEmbed = new EmbedBuilder()
                    .setColor(0x0099FF)
                    .setTitle(g.gameMode)
                    .setDescription('Gameplay settings for ' + g.gameMode)
                    .addFields(
                        { name: 'Maps', value: 'test'},
                        { name: '\u200B', value: '\u200B' },
                        { name: 'Inline field title', value: 'Some value here', inline: true },
                        { name: 'Inline field title', value: 'Some value here', inline: true },
                    )
                    .addFields({ name: 'Inline field title', value: 'Some value here', inline: true })
                    .setImage('https://i.imgur.com/AfFp7pu.png')
                    .setTimestamp()
                    .setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });
                gmEmbeds.push(exampleEmbed);
            })
        }));
        return interaction.reply({
            embeds: gmEmbeds
        }
        );

    },
};
