let vm = new Vue({
    el: '#app3',
    data: {
        success: false,
        message: ''
    },
    computed: {  //gros avantage sur performances /!\ - met en "cache" les valeurs (methode computed) par defaut que des geter - on ne peut pas redefinir variable cls
        cls: function(){

            console.log('cls called')

            return this.success === true ? 'success' : 'error'
        }
    }
})