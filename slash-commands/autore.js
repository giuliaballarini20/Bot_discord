// comando per ricerca libri per autore

const { SlashCommandBuilder,EmbedBuilder } = require('discord.js');
const libri = require("../libri.json");
const { request } = require('undici');

module.exports = {
	data: new SlashCommandBuilder()
        .setName('autore')
        .setDescription('Ricerca libri per autore: inserisci Nome e/o Cognome dell\'autore che vuoi cercare')
        .addStringOption(option =>
            option.setName('nome')
                .setDescription('Inserisci il Nome e il Cognome (se non ti ricordi uno dei due puoi digitare "-")')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('cognome')
                .setDescription('Inserisci il Cognome dell\'autore che vuoi cercare')
                .setRequired(true)),
           
        async execute(interaction) {
            const string1 = interaction.options.getString('cognome').toUpperCase();
            const string2 = interaction.options.getString('nome').toUpperCase();
          
            var risultato = 0

            for (var i = 0; i < libri.length; i ++){        
                if(libri[i].AutoreCognome == string1 || string1 == "-"){
                        
                        if(libri[i].AutoreNome == string2 || string2 == "-" ){
                            
                            risultato ++
                            const embed = new EmbedBuilder()
                                .setColor(0xF93A2F)
                                .setTitle(libri[i].Titolo )
                                .setDescription("Numero pagine: " + libri[i].nPagine + 
                                                "\n Editore: " + libri[i].Editore + 
                                                "\n Genere: " + libri[i].Genere)
                                .setThumbnail(libri[i].Immagine)
                                .setTimestamp()
                                .setFooter({ text: 'BotB&L', iconURL: 'https://i.postimg.cc/6qgtCDPG/Bot-Book-4.png' });
                            
                            if (string1 == "-" || string2 == "-")  {
                                if( risultato == 1){
                                
                                await interaction.reply({ content: "La tua ricerca ha prodotto i seguenti risulati: " });    
                               }
                               
                               await interaction.followUp({  content: "Scritto da "+libri[i].AutoreNome+" "+libri[i].AutoreCognome, embeds: [embed]})
                               
                            } else {
                                if( risultato == 1){
                                    await interaction.reply({ content: libri[i].AutoreNome+" "+libri[i].AutoreCognome+ " ha scritto:" });
                                }
                                await interaction.followUp({ embeds: [embed]})
                            }
                        } 
                }
            }
            if( risultato == 0 ) return  interaction.reply("Nessuna corrispondenza")     
    }
}