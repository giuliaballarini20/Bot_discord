// comando di presenzazione e spiegazione del bot
const { SlashCommandBuilder,EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
            .setName('help')
            .setDescription('Per conoscere meglio B&L'),
        async execute(interaction) {

        const immagine = new EmbedBuilder()
            .setColor(0xA652BB)
            .setTitle('Libri e Librerie')
            .setAuthor({ name: 'B&L'})
            .setDescription('Ciao ' + interaction.user.username + ', sei un lettore? '
                            + '\nQui puoi cercare informazioni sui tuoi libri preferiti o su quelli che ti piacerebbe acquistare!'
                            + '\nPuoi inoltre cercare librerie nelle città di Rimini, Pesaro e Urbino.'
                            + '\nPer trovare i comandi ti basta premere "/" e potrai scegliere cosa fare. '
                            + '\nInizia subito a provarlo!' )
            .setThumbnail('https://i.postimg.cc/6qgtCDPG/Bot-Book-4.png')
            .setTimestamp()
            .setFooter({ text: 'BotB&L', iconURL: 'https://i.postimg.cc/6qgtCDPG/Bot-Book-4.png' });

        interaction.reply({ embeds: [immagine]});
        }
    };