let vm = new Vue({
    el: '#app3',
    data: {
        success: false
    },
    methods: {
        cls: function(){
            
            console.log('cls called')

            return this.success === true ? 'success' : 'error'
        }
    }
})