let vm = new Vue({
    el: '#app4',
    data: {
        firstname: 'françois',
        lastname: 'lancian',
        fullname: ''
    },

    watch: {
        fullName: function(value) {

        }
    }

    /*computed: {
        fullName: {
            get: function () {
                return this.firstname + ' ' + this.lastname
            },

            set: function(value) {
                let parts = value.split(' ')
                this.firstname = parts[0]
                this.lastname = parts[1]
            }
        }
    }*/

})