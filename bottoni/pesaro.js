//const fs = require("fs")
const Discord = require("discord.js");
const { Client, GatewayIntentBits, EmbedBuilder, MessageFlags, InteractionCollector } = require('discord.js');
const librerie = require("../librerie.json");
module.exports = {
    name: "pesaro",
    description: "bottone ",
    async execute(interaction){    //nome per richiamere il comando
        //interaction.deferUpdate()
        interaction.deferUpdate()
        interaction.message.reply({ content: "Ecco le librerie a Pesaro"})
        
       // const risultato = 0
       for (var i = 0; i < librerie.length; i ++){    
            if(librerie[i].id.startsWith("p")){
            
         //   risultato ++
            const embed = new EmbedBuilder()
                .setColor(0x61A6AB)
                .setTitle(librerie[i].Nome )
                .setDescription("Indirizzo: " + librerie[i].Indirizzo + 
                                "\n Catena: " + librerie[i].Catena + 
                                "\n Numero di telefono: " + librerie[i].nTelefono)
                .setThumbnail(librerie[i].Immagine)
                .setTimestamp()
                .setFooter({ text: 'BotBook', iconURL: 'https://i.postimg.cc/6qgtCDPG/Bot-Book-4.png' });
            const button = new Discord.ButtonBuilder()
                .setLabel("Maps")
                .setStyle(Discord.ButtonStyle.Link)
                .setURL(librerie[i].mappa)
        
            const row = new Discord.ActionRowBuilder()
                .addComponents(button)
                
            
            interaction.message.reply({ embeds: [embed], components: [row]})
            } 
        } 
    }
       
      
}

