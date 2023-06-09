/**
 * Milestone 1
Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto

 * 
 * 
 */


const { createApp } = Vue;

createApp({
  data() {
    return {
      searchTerm: '',

      moment: moment,
      
      contacts: [
        {
            name: 'Michele',
            avatar: './img/avatar_1.jpg',
            visible: true,
            messages: [
                {
                    date: '2020/01/10 15:30:55',
                    message: 'Hai portato a spasso il cane?',
                    status: 'sent'
                },
                {
                    date: '2020/01/10 15:50:00',
                    message: 'Ricordati di stendere i panni',
                    status: 'sent'
                },
                {
                    date: '2020/01/10 16:15:22',
                    message: 'Tutto fatto!',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Fabio',
            avatar: './img/avatar_2.jpg',
            visible: true,
            messages: [
                {
                    date: '2020/03/20 16:30:00',
                    message: 'Ciao come stai?',
                    status: 'sent'
                },
                {
                    date: '2020/03/20 16:30:55',
                    message: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                },
                {
                    date: '2020/03/20 16:35:00',
                    message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'sent'
                }
            ],
        },
        {
            name: 'Samuele',
            avatar: './img/avatar_3.jpg',
            visible: true,
            messages: [
                {
                    date: '2020/03/28 10:10:40',
                    message: 'La Marianna va in campagna',
                    status: 'received'
                },
                {
                    date: '2020/03/28 10:20:10',
                    message: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                },
                {
                    date: '2020/03/28 16:15:22',
                    message: 'Ah scusa!',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Alessandro B.',
            avatar: './img/avatar_4.jpg',
            visible: true,
            messages: [
                {
                    date: '2020/01/10 15:30:55',
                    message: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                },
                {
                    date: '2020/01/10 15:50:00',
                    message: 'Si, ma preferirei andare al cinema',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Alessandro L.',
            avatar: './img/avatar_5.jpg',
            visible: true,
            messages: [
                {
                    date: '2020/01/10 15:30:55',
                    message: 'Ricordati di chiamare la nonna',
                    status: 'sent'
                },
                {
                    date: '2020/01/10 15:50:00',
                    message: 'Va bene, stasera la sento',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Claudia',
            avatar: './img/avatar_5.jpg',
            visible: true,
            messages: [
                {
                    date: '2020/01/10 15:30:55',
                    message: 'Ciao Claudia, hai novità?',
                    status: 'sent'
                },
                {
                    date: '2020/01/10 15:50:00',
                    message: 'Non ancora',
                    status: 'received'
                },
                {
                    date: '2020/01/10 15:51:00',
                    message: 'Nessuna nuova, buona nuova',
                    status: 'sent'
                }
            ],
        },
        {
            name: 'Federico',
            avatar: './img/avatar_7.jpg',
            visible: true,
            messages: [
                {
                    date: '2020/01/10 15:30:55',
                    message: 'Fai gli auguri a Martina che è il suo compleanno!',
                    status: 'sent'
                },
                {
                    date: '2020/01/10 15:50:00',
                    message: 'Grazie per avermelo ricordato, le scrivo subito!',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Davide',
            avatar: './img/avatar_8.jpg',
            visible: true,
            messages: [
                {
                    date: '2020/01/10 15:30:55',
                    message: 'Ciao, andiamo a mangiare la pizza stasera?',
                    status: 'received'
                },
                {
                    date: '2020/01/10 15:50:00',
                    message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                    status: 'sent'
                },
                {
                    date: '2020/01/10 15:51:00',
                    message: 'OK!!',
                    status: 'received'
                }
            ],
            
            
            
            
        }
        
    ],
    filteredContacts: [], // Array per i contatti filtrati
 
    newListMessage: {
      date: '2020/01/10 15:50:00',
      message: '',
      status: 'sent',
    },
    newListAnswerMessage: {
      date: '2020/01/10 15:50:00',
      message: '',
      status: 'received',
    },

    selectedContactIndex: 0,
    searchTerm: '',

 
    };
  },
  methods: {


    
      researchContact() {
          this.filteredContacts = this.contacts.filter(contact => {
              // Confronta il nome del contatto con l'input di ricerca ignorando maiuscolo/minuscolo
              return contact.name.toLowerCase().includes(this.searchTerm.toLowerCase());
          });
      },

    onEnter() {
      const newMessage = {

        date: '2020/01/10 15:50:00',
        message: this.newListMessage.message,
        status: 'sent',

      };
        if( this.newListMessage.message !== ''){
        this.contacts[this.selectedContactIndex].messages.push(newMessage);

        this.newListMessage.message = '';

        setTimeout(() => {

          const newAnswerMessage = {

            date: '2020/01/10 15:50:00',
            message: 'ok',
            status: 'received',
    
          };
          this.contacts[this.selectedContactIndex].messages.push(newAnswerMessage);

          this.newListMessage.message = '';

          
        }, 1000);
      }
    },



    selectContact(index) {
      if (this.selectedContactIndex === index) {
        this.selectedContactIndex = 0; // Deseleziona il contatto se è già selezionato
      } else {
        this.selectedContactIndex = index; // Seleziona il nuovo contatto
      }
    },
    isContactSelected(index) {
      return this.selectedContactIndex === index;
    }
  }

}).mount('#app');