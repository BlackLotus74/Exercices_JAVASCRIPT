let vm = new Vue({
    el: '#app3',
    data: {
        /*success: false,
        message: '',*/
        firstname: 'Jean',
        lastname: 'DelaTour'
    },

    computed: { //gros avantage sur performances /!\ - met en "cache" les valeurs (methode computed) par defaut que des geter - on ne peut pas redefinir variable cls
        fullName: {
            get: function () {
                return this.firstname + ' ' + this.lastname
            },

            set: function (value) {
                console.log(value)
                let parts = value.split(' ')
                this.firstname = parts[0]
                this.lastname = parts[1]
            }
        }
    }

    /*cls: function(){

        console.log('cls called')

        return this.success === true ? 'success' : 'error'
    }*/

})