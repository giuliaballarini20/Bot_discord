// comando per ricerca libri per editore

const { SlashCommandBuilder,EmbedBuilder } = require('discord.js');
const libri = require("../libri.json");

module.exports = {
	data: new SlashCommandBuilder()
    .setName('editore')
      .setDescription('Ricerca libri per editore')
      .addStringOption(option =>
              option.setName('scegli')
			              .setDescription('Elenco degli editori, se non è tra le possibii scelte clicca "altro".')
			              .setRequired(true)
			              .addChoices(
                                { name: 'Feltrinelli', value: 'feltrinelli' },
                                { name: 'Mondadori', value: 'mondadori' },
                                { name: 'Einaudi', value: 'einaudi' },
                                { name: 'Newton Compton Editori', value: 'newton compton editori' },
                                { name: 'Adelfi', value: 'adelfi' },
                                { name: 'Star Comics', value: 'star comics' },
                                { name: 'Bao publishing', value: 'bao publishing' },
                                { name: 'Altro', value: 'altri' },
                              )),
    async execute(interaction) {
        const scelta = interaction.options.getString('scegli')
      
        var risultato = 0 
        
        if (scelta == "altri"){
            for (var i = 0; i < libri.length; i ++){
                if(libri[i].IdEditore == "1"){
                    risultato ++
                    if( risultato == 1){
                        await interaction.reply({ content: "Ecco i risulati della ricerca " + scelta });
                    }
                    const altroEditore = new EmbedBuilder()
                        .setColor(0x61A6AB)
                        .setTitle(libri[i].Titolo )
                        .setDescription("Autore: " + libri[i].AutoreNome + " " + libri[i].AutoreCognome+ 
                                        "\nNumero pagine: " + libri[i].nPagine + 
                                        "\nEditore: " + libri[i].Editore + 
                                        "\n Genere: " + libri[i].Genere )
                        .setThumbnail(libri[i].Immagine)
                        .setTimestamp()
                        .setFooter({ text: 'BotB&L', iconURL: 'https://i.postimg.cc/6qgtCDPG/Bot-Book-4.png' });

                    await interaction.followUp({ embeds: [altroEditore]})
                } 
            }
        } else {
            for (var i = 0; i < libri.length; i ++){
                if(libri[i].Editore == scelta){
                    risultato ++
                    if( risultato == 1){
                            await interaction.reply({ content: "Ecco i risulati della ricerca " + scelta });
                    }
                    const embed = new EmbedBuilder()
                        .setColor(0x00D166)
                        .setTitle(libri[i].Titolo )
                        .addFields({ name: 'Autore ', value: libri[i].AutoreNome + " " + libri[i].AutoreCognome},
                                   { name: 'Genere ', value: libri[i].Genere})
                        .setDescription("Numero pagine: " + libri[i].nPagine )
                        .setThumbnail(libri[i].Immagine)
                        .setTimestamp()
                        .setFooter({ text: 'BotB&L', iconURL: 'https://i.postimg.cc/6qgtCDPG/Bot-Book-4.png' });
                    await interaction.followUp({ embeds: [embed]})
                    }
                } 
            }   
    }
};