// comando per stampa citazione
const { SlashCommandBuilder,EmbedBuilder } = require('discord.js');

const { request } = require('undici');

module.exports = {
	data: new SlashCommandBuilder()
    .setName('got_quotes')
    .setDescription('Una citazione (in lingua originale) per i fan di Game of Thrones'),
    async execute(interaction) {
        
        async function getJSONResponse(body) {
            let fullBody = '';
        
            for await (const data of body) {
                fullBody += data.toString();
            } return JSON.parse(fullBody);
        }
            const dict = await request(`https://got-quotes.herokuapp.com/quotes`);
            const { quote , character } = await getJSONResponse(dict.body);
           // const { character } = await getJSONResponse(dict.body);
           
           
            
		interaction.reply({ content: quote + " -cit. "+  character});

           // console.log("Autore: " + trim(risposta.author, 1024) );
   
   
   
    }

}