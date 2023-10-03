//! Création d'une instance Vue c'est notre application

Vue.createApp({
    //! Dans une fonction data on va retourner un objet qui contiendra les variables de l'application
    //! Toutes les data seront contenues dans this
    data() {
        return {
            uneString1:'',
            uneString2:'',
    };
    },
    methods: {
        capterInput(event){
            this.uneString1 = event.target.value;
        },
        capterInputEsc(event){
            this.uneString2 = event.target.value;
        },
        btnAlerte(){
            alert("ALERTE GENERALE");
        }
    },

    //! L'application est montée sur la balise HTML qui possède l'id app
    }).mount('#app');