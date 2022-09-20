// comando per ricerca libri per genere
const { SlashCommandBuilder,EmbedBuilder } = require('discord.js');
const libri = require("../libri.json");

module.exports = {
	data: new SlashCommandBuilder()
    .setName('genere')
      .setDescription('Ricerca libri per genere')
      .addStringOption(option =>
        option.setName('scegli')
              .setDescription('Elenco dei generi principali, se non è tra le possibii scelte clicca "altro".')
              .setRequired(true)
              .addChoices(
                          { name: 'Classici', value: 'classici' },
                          { name: 'Gialli, thriller, horror', value: 'gialli, thriller, horror' },
                          { name: 'Fantasy e fantascienza', value: 'fantasy e fantascienza' },
                          { name: 'Fumetti e graphic novels', value: 'fumetti e graphic novels' },
                          { name: 'Ingegneria e informatica', value: 'ingegneria e informatica' },
                          { name: 'Romanzi rosa', value: 'romanzi rosa' },
                          { name: 'Bambini e Ragazzi', value: 'bambini e Ragazzi' },
                          { name: 'Altro', value: 'altro' },
                        )),
    async execute(interaction) {
        const scelta = interaction.options.getString('scegli')
        
        var risultato = 0 
        if (scelta == "altro"){
            for (var i = 0; i < libri.length; i ++){
                if(libri[i].IdGenere == "1"){
                    risultato ++
                    if( risultato == 1){
                        await interaction.reply({ content: "Ecco i risulati della ricerca " + scelta });
                    }
                    const altroEditore = new EmbedBuilder()
                        .setColor(0x00D166)
                        .setTitle(libri[i].Titolo )
                        .setDescription("Autore: " + libri[i].AutoreNome + " " + libri[i].AutoreCognome+ 
                                        "\nNumero pagine: " + libri[i].nPagine + 
                                        "\n Editore: " + libri[i].Editore + 
                                        "\n Genere: " + libri[i].Genere )
                        .setThumbnail(libri[i].Immagine)
                        .setTimestamp()
                        .setFooter({ text: 'BotBook', iconURL: 'https://i.postimg.cc/6qgtCDPG/Bot-Book-4.png' });

                    await interaction.followUp({ embeds: [altroEditore]})
                } 
            }
        } else {
        for (var i = 0; i < libri.length; i ++){
            
            if(libri[i].Genere.startsWith(scelta)){
                risultato ++
                if( risultato == 1){
                    await interaction.reply({ content: "Ecco i risulati della ricerca " + scelta });
               }
                const embed = new EmbedBuilder()
                    .setColor(0x00D166)
                    .setTitle(libri[i].Titolo )
                    .setDescription("Autore: "+ libri[i].AutoreNome + " " + libri[i].AutoreCognome+ 
                                    "\nNumero pagine: " + libri[i].nPagine +  
                                    "\n Editore: " + libri[i].Editore )
                    .setThumbnail(libri[i].Immagine)
                    .setTimestamp()
                    .setFooter({ text: 'BotBook', iconURL: 'https://i.postimg.cc/6qgtCDPG/Bot-Book-4.png' });
                await interaction.followUp({ embeds: [embed]})

            }
        }
        if (risultato == 0) return  interaction.reply("Nessuna corrispondenza")
        }
    }
};