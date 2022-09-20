// comando per ricerca libri in base al titolo
const { SlashCommandBuilder,EmbedBuilder } = require('discord.js');
const libri = require("../libri.json");

module.exports = {
    data: new SlashCommandBuilder()
	.setName('titolo')
    .setDescription('Ricerca libri per titolo')
    .addStringOption(option =>
      option.setName('inserisci')
        .setDescription('Inserisci il Titolo che vuoi cercare, anche solo l\'inizio')
        .setRequired(true)),
    
        async execute(interaction) {
            const string = interaction.options.getString('inserisci').toUpperCase();
            var risultato = 0 
           
            for (var i = 0; i < libri.length; i ++){
                
                if((libri[i].Titolo.startsWith(string))){
                    risultato ++
                    if( risultato == 1){
                        await interaction.reply({ content: "Ecco i risulati:" });
                   }
                    const embed = new EmbedBuilder()
                        .setColor(0xA62019)
                        .setTitle(libri[i].Titolo )
                        .setDescription("Autore: " + libri[i].AutoreNome + " " + libri[i].AutoreCognome+ 
                                        "\nNumero pagine: " + libri[i].nPagine + 
                                        "\nEditore: " + libri[i].Editore + 
                                        "\n Genere: " + libri[i].Genere )
                        .setThumbnail(libri[i].Immagine)
                        .setTimestamp()
                        .setFooter({ text: 'BotB&L', iconURL: 'https://i.postimg.cc/6qgtCDPG/Bot-Book-4.png' });
                    await interaction.followUp({ embeds: [embed]})
    
                }
            }
            if (risultato == 0) return  interaction.reply("Nessuna corrispondenza")
    }
};