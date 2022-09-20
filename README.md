# Progetto PDGT a.a. 2021/2022

Nome, Cognome e Matricola: Giulia Ballarini 298983

## Bot di Archivio Libri e Ricerca Librerie

## Descrizione del Bot

Il progetto ha come fine principale la realizzazione di un bot, chiamato **B&L Books and Library**, sulla piattaforma Discord. 

L'utilità del bot si divide in due funzioni principali di ricerca: il primo legato ai libri, il secondo legato alle librerie (come suggerisce il nome Books and Library).
Per la parte di libri il bot è in grado di permettere all'utente di accedere ad un archivio di libri (file libri.json) per cercarli in base a genere, autore, editore e titolo. Inoltre l'utente può anche aggiungere nuovi libri sempre tramite l'uso del bot. 
Una funzione secondaria è il suggerimento di una lettura di un manga, di cui l'utente può scegliere il genere.

Per la ricerca di librerie è possibile scegliere tra le città di Pesaro, Urbino e Rimini e ottenere informazioni delle librerie del luogo scelto.

È presente anche una funzione secondaria non legata a nessuno dei due scopi principali, ma aggiunta per rendere il bot più versatile e ludico: l'utente può ottenere una citazione (in lingua originale) appartenente al mondo di Game of Thrones.


## Scelte implementative
Il programma è scritto interamente in Javascript

I package utilizzati per l'implementazione sono: node.js, discord.js, undici

Per le funzioni di suggerimento di un manga e di stampa di una citazione sono state usate due API, rispettivamente: 
- Jikan Unofficial MyAnimeList REST API v3.0

  API Endpoint: https://api.jikan.moe/v3
  
  API Portal / Home Page: https://jikan.moe
  
  In particolare il bot utilizza https://api.jikan.moe/v4/random/manga
  
- Game of Thrones Quotes REST API
  API Endpoint: https://got-quotes.herokuapp.com/quotes
  
  API Portal / Home Page: Game of Thrones Quotes https://github.com/wsizoo/game-of-thrones-quotes
  
### Descrizione delle modalità della messa online del servizio
Per accedere al bot è necessario avere accesso al URL del bot generato in modo automatico da Discord, una volta autorizzato e portato il bot sul proprio server tutti i comandi sono eseguibili.
Il bot non è sempre attivo, ma deve essere attivato da terminale tramite "node ."  

## Utilizzo del Bot Discord B&L
Per accedere ai comandi l'utente deve accedere a un server in cui tra i membri è presente il bot.
I comandi sono accessibile tramite l'icona "+" (Usa comando slash) presente nel server Discord oppure si possono trovare digitando "/" e selezionare, in entrambi i casi, il comando che si desidera eseguire.
Ogni comando ha una azione specifica: 

/aggiungi_libro : l'utente compila i campi necessari per la registrazione sul file di un nuovo libro e in automatico in base al genere viene attribuita un immagine (PUT);

/autore : la ricerca viene effettuata tramite autore in cui è necessario immettere i campi Cognome e Nome, se non si ricordano è sufficiente digitare "-" per il campo che andrebbe lasciato vuoto (GET);

![Immagine 2022-09-20 154856](https://user-images.githubusercontent.com/80909302/191276099-39586bd2-a899-4e9b-9e60-56ba8ead8884.png)


/editore : in questo caso non è necessario digitare l'editore ma si può selezionare il genere da un menu (GET);

![Immagine 2022-09-20 155004](https://user-images.githubusercontent.com/80909302/191276037-3477580b-c01f-4993-ab64-83c1d6a95415.png)


/genere : (come sopra);

/got_quotes : stampa nel canale una citazione di Game of Thrones in lingua originale (GET);

/help : viene stampata nel canale una presenzione dell'uso del bot (GET);

/random : stampa un libro a caso tra quelli presenti nel file (GET);

/random_manga : propone all'utente un manga generato casualmente in base al genere che l'utente sceglie (GET);

![Immagine 2022-09-20 154733](https://user-images.githubusercontent.com/80909302/191275944-e26d4f7f-f900-488a-b77b-96af8ae92b1a.png)

/ricerca_librerie : questo comando permette di accedere a dei bottoni per scegliere la città, una volta scelta vengono restituite tutte le librerie del posto (GET);   

![Immagine 2022-09-20 154707](https://user-images.githubusercontent.com/80909302/191275895-5a79ec82-8ae5-4d80-a36b-9e087e7cf68f.png)


/titolo : l'utente digita il titolo che vuole cercare o può digitare anche solo l'incipit (GET).


