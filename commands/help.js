const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("Get help for all the commands."),
  async execute(interaction) {
    await interaction;
  },
};
