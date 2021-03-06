const myApp = new Vue({
    el : "#container",
    data : {
        user:{
            name: 'Mirko',
            image:"img/user.png",
            },
        contacts: [
            {
                name: 'Michele',
                image:"img/michele.png",
                avatar: '_1',
                visible: false,
                search : true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent',
                        dropdown: false
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di stendere i panni',
                        status: 'sent',
                        dropdown: false
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received',
                        dropdown: false
                    }
                ],
            },
            {
                name: 'Fabio',
                image: "img/fabio.png",
                avatar: '_2',
                visible: false,
                search : true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent',
                        dropdown: false
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received',
                        dropdown: false
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent',
                        dropdown: false
                    }
                ],
            },
            {
                name: 'Samuele',
                image: "img/samuele.png",
                avatar: '_3',
                visible: false,
                search : true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received',
                        dropdown: false
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent',
                        dropdown: false
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received',
                        dropdown: false
                    }
                ],
            },
            {
                name: 'Alessandro B.',
                image: "img/alessandro.png",
                avatar: '_4',
                visible: false,
                search : true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent',
                        dropdown: false
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received',
                        dropdown: false
                    }
                ],
            },
            {
                name: 'Alessandro L.',
                image: "img/alessandro-l.png",
                avatar: '_5',
                visible: false,
                search : true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Ricordati di chiamare la nonna',
                        status: 'sent',
                        dropdown: false
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Va bene, stasera la sento',
                        status: 'received',
                        dropdown: false
                    }
                ],
            },
            {
                name: 'Claudia',
                image: "img/claudia.png",
                avatar: '_6',
                visible: false,
                search : true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Ciao Claudia, hai novit???',
                        status: 'sent',
                        dropdown: false
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Non ancora',
                        status: 'received',
                        dropdown: false
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        text: 'Nessuna nuova, buona nuova',
                        status: 'sent',
                        dropdown: false
                    }
                ],
            },
            {
                name: 'Federico',
                image: "img/federico.png",
                avatar: '_7',
                visible: false,
                search : true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Fai gli auguri a Martina che ?? il suo compleanno!',
                        status: 'sent',
                        dropdown: false
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received',
                        dropdown: false
                    }
                ],
            },
            {
                name: 'Davide',
                image: "img/davide.png",
                avatar: '_8',
                visible: false,
                search : true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received',
                        dropdown: false
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'No, l\'ho gi?? mangiata ieri, ordiniamo sushi!',
                        status: 'sent',
                        dropdown: false
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        text: 'OK!!',
                        status: 'received',
                        dropdown: false
                    }
                ],
               
            }
        ],
        //messaggio inviato dal' utente 
        newMessage: {
            date: new Date().toLocaleString(),
            text: '',
            status: 'sent',
        },
        //messaggio di risposta automatico
        respMessage: {
            date: new Date().toLocaleString(),
            text: 'OK!!!',
            status: 'received',
        },
        //  box ricerca vuoto
        searchName : "",
        
        
    },
    methods : {
        //al click sul utente cambia il valore di visible(utilizatto per stampare i messaggi del relativo contatto)
        userChat(index){
            if (this.contacts[index].visible === false) {
                for (let i = 0; i < this.contacts.length; i++) {
                    this.contacts[i].visible = false;
                }
                this.contacts[index].visible = true;
            }
        },
       //funzione che controlla l'invio del messaggio del utente e pusha il messaggio nella chat con visible : true, con funzione che pusha il messaggio di risposta.
       sendMessagge(){
        if (this.newMessage.text[0] !== "" && this.newMessage.text.length > 0) {
            this.contacts.find((element) => {
                if(element.visible === true) {
                    element.messages.push(this.newMessage);
                    this.newMessage = {date: new Date().toLocaleString(), text: '', status: 'sent'};
                    setTimeout(() => element.messages.push(this.respMessage), 1000);
                    this.respMessage = {date: new Date().toLocaleString(), text: 'Ok!', status: 'received'};
                }
            })
           
        }
        
       },

       //funzione che cicla in contatti e con il valore presente nel v-model, ricerca l'elemento nel array e se lo trova gli assegna il valore true se non lo trova li assegna il valore false 
       searchUser(){

        for (let i = 0; i < this.contacts.length; i++){
            //filtro che rende il testo delle stringhe maiuscolo
            filterName = this.searchName.toUpperCase();

            if (this.contacts[i].name.toUpperCase().indexOf(filterName) > -1) {
                this.contacts[i].search = true;
            } else {
                this.contacts[i].search = false;
            }
       }
    },

    //funzione che cambia il valore di (dropdown in true) se il valore di visible e true.
    optionMess(index, message){
        if (this.contacts[index].visible === true) {
            if (!this.contacts[index].messages[message].dropdown) {
                this.contacts[index].messages[message].dropdown = true;
            } else {
            this.contacts[index].messages[message].dropdown = false;
            }

    }
    },
    
    //elimina messaggio
    deleteMessage(index,message){
      this.contacts[index].messages.splice(message,1)
    },

    //elimina la data di invio e rimane l'orario di invio
    time(message){
        const timeArray = message.date.split(" ")[1].split(":");
        return timeArray[0] + ":" + timeArray[1];
    }
 
}
}) 




