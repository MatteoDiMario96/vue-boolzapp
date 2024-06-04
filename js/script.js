const { createApp } = Vue

createApp({
    data() {
        return {
            contacts: [
                {
                    name: 'Michele',
                    avatar: './img/avatar_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './img/avatar_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './img/avatar_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './img/avatar_6',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './img/avatar_7',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './img/avatar_8',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],
            profiloAttivoBoolzapp: {
                name: 'Matteo',
                avatar: './img/avatar_io.jpg',
            },
            chatAttiva: 0,
            testoNuovoMessaggio: '',
            filtraChat: '',
        }
    },
    methods:{
        cambiaChatAttiva: function(chatClickata, contatto){
            this.chatAttiva = chatClickata;
            console.log(`Clickato come chatAttiva ${this.contacts[chatClickata].name}!`)
        },
        nuovoMessaggioInviato: function(){
            const newMessage = {
                date: '04/06/2024 10:14:52',
                message: this.testoNuovoMessaggio,
                status: 'sent',
            }
            if(this.testoNuovoMessaggio.length > 1){
                this.contacts[this.chatAttiva].messages.push(newMessage);
                console.log("ENTER, Messaggio inviato!")
                setTimeout(this.nuovoMessaggioRicevuto, 1000)
                this.pulisciInput();
            }else{
                console.warn("Scrivi qualcosa prima di inviare!")
            }
        },
        nuovoMessaggioRicevuto: function(){
            const newMessageReceived = {
                date: '04/06/2024 10:14:53',
                message: 'Ok, amico!',
                status: 'received',
            }
            this.contacts[this.chatAttiva].messages.push(newMessageReceived)
            console.log("Ti hanno risposto!")
            
        },
        pulisciInput: function(){
            this.testoNuovoMessaggio = '';
        },
        filtraListaChat: function(indiceElemento){
            const contactsLowerCase = this.contacts.map((elemento) => {
                return{
                    name: elemento.name.toLowerCase()
                }
            })
            const contactsUpperCase = this.contacts.map((elemento) => {
                return{
                    name: elemento.name.toUpperCase()
                }
            })
            if(contactsLowerCase[indiceElemento].name.includes(this.filtraChat)){
                return true
            }else if(contactsUpperCase[indiceElemento].name.includes(this.filtraChat)){
                return true
            }
            return false 
        },
        orarioMessaggi: function(indiceElemento){
            //Mi sono creato un array con le date modificate ma cosi mi sembra impossibile assegnarle senza creare altri v-for
            const orariMessaggiMappati = this.contacts.map(elemento => {
                elemento.messages.map((message) => {
                    return {
                        date: message.date.slice(10, 16)
                    }
                });
            }) 
        },
        cancellaMessaggio: function(indiceElemento){
            this.contacts[this.chatAttiva].messages.splice(indiceElemento, 1)
        },
        aggiungiRimuoviClasse: function(elemento){
            elemento.classList.remove("no-display");
            elemento.classList.add("inline-block");
        }
    }
}).mount('#app')



