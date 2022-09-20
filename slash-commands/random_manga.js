//comando per un manga a caso in base al genere scelto
const { SlashCommandBuilder,EmbedBuilder } = require('discord.js');

const { request } = require('undici');
//const trim = (str, max) => (str.length > max ? `${str.slice(0, max - 3)}...` : str);
module.exports = {
	data: new SlashCommandBuilder()
    .setName('random_manga')
    .setDescription('B&L ti suggerisce un manga ')
    .addStringOption(option =>
      option.setName('scegli')
            .setDescription('Elenco dei generi.')
            .setRequired(true)
            .addChoices(
                        { name: 'Comedy', value: 'Comedy' },
                        { name: 'Action', value: 'Action' },
                        { name: 'Romance', value: 'Romance' },
                        { name: 'Adventure', value: 'Adventure' },
                        { name: 'Supernatural', value: 'Supernatural' },
                        { name: 'Slice of Life', value: 'Slice of Life' },
                        { name: 'Horror', value: 'Horror' },
                        { name: 'Drama', value: 'Drama' },
                        { name: 'Sci-Fi', value: 'Sci-Fi' },
                        { name: 'Mystery', value: 'Mystery' },
                        { name: 'Fantasy', value: ' Fantasy' },
                      )),
    async execute(interaction) {
      await interaction.deferReply();
      const scelta = interaction.options.getString('scegli')
        async function getJSONResponse(body) {
            let fullBody = '';
        
            for await (const data of body) {
                fullBody += data.toString();
            } return JSON.parse(fullBody);
        }
       var timer = 0;
       var risultato = 0;
       while(timer !=1){
            const dict = await request(`https://api.jikan.moe/v4/random/manga`);
            const { data } = await getJSONResponse(dict.body);

            const generi = []
            for(var i = 0; i < data.genres.length; i++){
              generi[i] = data.genres[i].name
              console.log(generi[i]+i)
              if(generi[i] == scelta)   risultato = 1;
              if(generi[i] == "Hentai"|| generi[i] == "Boys Love"|| generi[i] == "Ecchi"|| generi[i] == "Erotica"|| generi[i] == "Girls Love")   risultato = 0;
              console.log(risultato)              
            }
            const generiEmbed = generi.join(", ");
           if(risultato == 1){
           
                  const embed = new EmbedBuilder()
                  .setColor(0xEFFF00)
                  .setTitle(data.titles[0].title)
                  .setURL(data.url)
                  .setThumbnail(data.images.jpg.image_url)
                  .addFields({ name: 'Tipo ', value: generiEmbed },
                            { name: 'Titolo originale', value: data.titles[1].title }, 
                            { name: 'Autore', value: data.authors[0].name  },
                          )
                  .setTimestamp()
                  .setFooter({ text: 'BotB&L', iconURL: 'https://i.postimg.cc/6qgtCDPG/Bot-Book-4.png' });
             /* if (data.genres[0].name == "Hentai"|| data.genres[0].name == "Boys Love"|| data.genres[0].name == "Ecchi") 
                      return interaction.reply("C'è stato un errore. Digita nuovamente il comando")*/
             // await interaction.deferReply();
              //await wait(4000);
              await interaction.editReply({ embeds: [embed] });
              timer ++;
              console.log(timer)
              }
        }
      }
};