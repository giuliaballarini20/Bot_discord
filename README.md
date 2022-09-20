##Progetto PDGT a.a. 2021/2022

Nome, Cognome e Matricola: Giulia Ballarini 298983

##Bot di Archivio Libri e Ricerca Librerie

#Descrizione del Bot

Il progetto ha come fine principale la realizzare di un bot, chiamato **B&L Books and Library**, sulla piattaforma Discord. 

L'utilità del bot si divide in due funzioni princilali di ricerca: il primo legato ai libri, il secondo legato alle librerie (come suggerisce il nome Books and Library).
Per la parte di libri il bot è in grado di permettere all'utente di accedere ad un archivio di libri (file libri.json) per cercarli in base a genere, autore, editore e titolo. Inoltre l'utetne può anche aggiungere nuovi libri sempre tramite l'uso del bot. 
Una funzione secodaria è il suggerimento di una lettura di un manga, di cui l'utente può scegliere il genere.

Per la ricerca di librerie è possibile scegliere tra le città di Pesaro, Urbino e Rimini e ottenere informazioni delle librerie del luogo scelto.

È presente anche una funzione secondaria non legata a nessuno dei due scopi princilali, ma aggiunta per rendere il bot più versatile e ludico: l'utente può ottenere una citazione (in lingua originale) appartenente al mondo di Game of Thrones.


#Scelte implementative
Il progamma è scritto interamente in Javascript
I package utilizzati per l'implementazione sono: node.js, discord,js, undici

Per le funzioni di suggerimento di un manga e di stampa di una citazione sono state usate due API rispettivamente: https://api.jikan.moe/v4/random/manga e https://got-quotes.herokuapp.com/quotes

#Utilizzo del Bot Discord B&L
Per accedere ai comandi l'utente deve accedere a un server in cui tra i membri è presente il bot.
I comandi sono accessibile tramite l'icona "+" (Usa comando slash) presente nel server Discord oppure si possono trovare digitando "/" e selezionare, in entrambi i casi, il comando che si desidera eseguire.
Ogni comando ha una azione speecifca: 
/aggiungi_libro : l'utente compila i campi necessari per la registrazione sul file di un nuovo libro e in automatico in base al genere viene attribuita un immagine;
/autore : la ricerca viene effettuata tramite autore in cui è necessario immettere i campi Cognome e Nome, se non si ricordano è sufficente digitare "-" per il campo che andrebbe lasciato vuoto;
/editore : in questo caso non è necessario digitare l'editore ma si può selezionare il genere da un menu;
/genere : (come sopra);
/got_quotes : stampa nel canale una citazione di Game of Thrones in lingua originale;
/help : viene stampata nel canale una presenzione dell'uso del bot;
/random : stampa un libro a caso tra quelli presenti nel file;
/random_manga : propone all'utente un manga generato casualmente in base al genere che l'utente sceglie;
/ricerca_librerie : questo comando permette di accedere a dei bottoni per scegliere la città, una volta scelta vengono restituite tutte le librerie del posto;
/titolo : l'utente digita il titolo che vuole cercare o può digitare anche solo l'incipit.



#   P r o g e t t o P D T G  
 