// comando per ottenere un libro a caso 
const { SlashCommandBuilder,EmbedBuilder } = require('discord.js');
const libri = require("../libri.json");

module.exports = {
	data: new SlashCommandBuilder()
    .setName('random_libri')
    .setDescription('B&L ti suggerisce un libro a caso tra quelli salvati nel file "libri"'),
    async execute(interaction) {
        const i = Math.floor(Math.random() * libri.length)+1
        const random = new EmbedBuilder()
                        .setColor(0xCC7900)
                        .setTitle(libri[i].Titolo )
                        .setDescription("Autore: " + libri[i].AutoreNome + " " + libri[i].AutoreCognome+ 
                                        "\nNumero pagine: " + libri[i].nPagine + 
                                        "\nEditore: " + libri[i].Editore + 
                                        "\n Genere: " + libri[i].Genere )
                        .setThumbnail(libri[i].Immagine)
                        .setTimestamp()
                        .setFooter({ text: 'BotB&L', iconURL: 'https://i.postimg.cc/6qgtCDPG/Bot-Book-4.png' });
        await interaction.reply({ embeds: [random]})
    }
};