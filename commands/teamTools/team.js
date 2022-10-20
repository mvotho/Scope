const { SlashCommandBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js');
const Team = require("../../models/team")
module.exports = {
    data: new SlashCommandBuilder()
        .setName('team')
        .setDescription('Team management'),
    async execute(interaction, client) {
        const teams = await Team.findOne({ members: { $elemMatch: { name: interaction.user.tag } } });

        if (teams == null) {
            await interaction.reply({
                content: `You are not in a team, create or join a team`
            });
        } else {
            if (teams.members[0].name == interaction.user.tag && teams.members[0].leader == true) {

                const buttonAddMember = new ButtonBuilder()
                    .setCustomId("add-member")
                    .setLabel("Add member")
                    .setStyle(ButtonStyle.Primary);

                const buttonRemoveMemeber = new ButtonBuilder()
                    .setCustomId("remove-member")
                    .setLabel("Remove member")
                    .setStyle(ButtonStyle.Primary);

                const buttonPremoteLeader = new ButtonBuilder()
                    .setCustomId("premote-leader")
                    .setLabel("Premote Leader")
                    .setStyle(ButtonStyle.Primary);

                const buttonLeaveTeam = new ButtonBuilder()
                    .setCustomId("leave-team")
                    .setLabel("Remove member")
                    .setStyle(ButtonStyle.Danger);

                const buttonDisbandTeam = new ButtonBuilder()
                    .setCustomId("disband-team")
                    .setLabel("Disband Team")
                    .setStyle(ButtonStyle.Danger);

                await interaction.reply({
                    components: [
                        new ActionRowBuilder().addComponents(buttonAddMember),
                        new ActionRowBuilder().addComponents(buttonRemoveMemeber),
                        new ActionRowBuilder().addComponents(buttonPremoteLeader),
                        new ActionRowBuilder().addComponents(buttonLeaveTeam),
                        new ActionRowBuilder().addComponents(buttonDisbandTeam)
                    ]
                });
            } else {
                await interaction.reply({
                    content: `Team found but you are not leader`
                });
            }

        }
        console.log(teams)
        //message with buttons
        //remove member
        //change name
        //promte to leader
        //leave
        //disband team
        //if member proudce other outcome

    }
}
