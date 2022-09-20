const { SlashCommandBuilder,EmbedBuilder } = require('discord.js');
const fs = require("fs");
const books = require("../libri.json");

module.exports = {
	data: new SlashCommandBuilder()
    .setName('aggiungi_libro')
      .setDescription('Inserisci un nuovo libro al file JSON')
      .addStringOption(option =>
                option.setName('nome_autore')
                    .setDescription('Inserisci il nome dell\'autore o "-" se non lo conosci')
                    .setRequired(true))
    .addStringOption(option =>
                option.setName('cognome_autore')
                    .setDescription('inserisci il cognome dell\'autore')
                    .setRequired(true))
    .addStringOption(option =>
                option.setName('titolo')
                    .setDescription('inserisci il titolo')
                    .setRequired(true))
    .addStringOption(option =>
                option.setName('editore')
                      .setDescription('inserisci l\'editore')
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
                        ))
    .addStringOption(option =>
                option.setName('numero_pagine')
                      .setDescription('inserisci il nome il numero delle pagine o "-" se non lo conosci')
                      .setRequired(true))
    .addStringOption(option =>
                option.setName('genere')
                      .setDescription('inserisci genere del libro')
                      .setRequired(true)
                      .addChoices(
                        { name: 'Classici', value: 'classici' },
                        { name: 'Gialli, thriller, horror', value: 'gialli, thriller, horror' },
                        { name: 'Fantasy e fantascienza', value: 'fantasy e fantascienza' },
                        { name: 'Fumetti e graphic novels', value: 'fumetti e graphic novels' },
                        { name: 'Ingegneria e informatica', value: 'ingegneria e informatica' },
                        { name: 'Romanzi rosa', value: 'romanzi rosa' },
                        { name: 'Bambini e ragazzi', value: 'bambini e ragazzi' },
                        { name: 'Altro', value: 'altro' },
                       )), 

    async execute(interaction) {

      
        const cognome = interaction.options.getString('cognome_autore').toUpperCase();
        const nome = interaction.options.getString('nome_autore').toUpperCase();
        const titolo = interaction.options.getString('titolo').toUpperCase();
        const editore = interaction.options.getString('editore').toLowerCase();
        const pagine = interaction.options.getString('numero_pagine').toUpperCase();
        const genere = interaction.options.getString('genere').toLowerCase();

        // controllo che il libro non sia gia presente
        var risultato = 0
        for (var i = 0; i < books.length; i ++){
            if(books[i].Titolo == titolo){
                risultato ++
                console.log(risultato)
                if( risultato == 1){
                    return interaction.reply({ content: "Il Titolo che vuoi inserire esiste già,se si dedidera "+ 
                                                       +"aggiungere una nuova edizione aggiungere nel titolo 'Nuova ED'" });
                }
            }
        }

        var idG = 0
        if(genere == "altro")  idG ++
        var idE = 0
        if(editore == "altri") idE ++
    
        var foto 
        if (genere == "classici") foto = "https://i.postimg.cc/j2qFMxJj/B-classici.png";
        else if (genere == "gialli, thriller, horror") foto = "https://i.postimg.cc/BvMYXWz9/B-gialli.png";
        else if (genere == "fantasy e fantascienza") foto = "https://i.postimg.cc/QNFDZD4T/B-fanta.png";
        else if (genere == "ingegneria e informatica") foto = "https://i.postimg.cc/GhnFnLL7/B-ing.png";
        else if (genere == "fumetti e graphic novels") foto = "https://i.postimg.cc/WpwR04Hg/B-fumetti.png";
        else if (genere == "romanzi rosa") foto = "https://i.postimg.cc/6QrKSQTV/B-rosa.png";
        else if (genere == "bambini e ragazzi") foto = "https://i.postimg.cc/cL4ZjWwP/B-bambini.png";
        else  foto = "https://i.postimg.cc/9M5bnWsh/B-altro.png";


               
        idCodice = books.length +1

        let book = {
            id: idCodice,
            Titolo: titolo,
            AutoreNome: nome,
            AutoreCognome: cognome,
            nPagine:pagine,
            Genere: genere,
            IdGenere: idG,
            Editore: editore,
            IdEditore: idE,
            Immagine: foto
      
        };

        books.push(book);

        fs.writeFile("libri.json", JSON.stringify(books), err => {
            if (err) throw err; 
        });      
       
        await interaction.reply({ content: "Libro inserito con successo!"});
        
    }
};
