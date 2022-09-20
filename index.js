// Bot per discord per la ricerca di libri da un file JSON e librerie in Rimini, Pesaro e Urbino da file JSON

const { Client, Collection, GatewayIntentBits } = require('discord.js');

const { token } = require('./config.json')

const fs = require('node:fs');
const path = require('node:path');

global.fs = require("fs");

global.client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers] });



//inizializzazione per Command handling per slash commands
client.commands = new Collection();
global.commandsPath = path.join(__dirname, 'slash-commands');
global.commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	client.commands.set(command.data.name, command);
}

//inizializzazione per Command handling per uso di bottoni 
client.bottoni = new Collection();

const bottoniFiles = fs.readdirSync("./bottoni").filter(file =>file.endsWith(".js"))

for (const file of bottoniFiles) {
	const bottone = require(`./bottoni/${file}`);
	client.bottoni.set(bottone.name, bottone);
}

client.once('ready', () => {
	console.log('Bot in azione!');
});

//interazione in caso di slash commands (usati,principalemnte, per ricerca di libri)
client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'Errore nell\'esecuzione del comando', ephemeral: true });
	}
});

//interazione in caso di bottoni (usati per la ricerca di librerie)
client.on("interactionCreate", interaction => {
    
    if(!interaction.isButton()) return;

    const button = interaction.customId;
    try{

    client.bottoni.get(button).execute(interaction);
    }catch(error){
        console.error(error);
        interaction.reply("C'è stato un errore nell'esecuzione del bottone");
    }
});

client.on("guildMemberAdd", function(member){
    console.log(`a user joins a guild: ${member.tag}`);
	
});

client.login(token);