let vm = new Vue({
    el: '#app',
    data: {
        message: 'salut les gens !',
        link: 'http://grafikart.fr',
        //success: true,
        cls: 'success',
        persons: ['john', 'françois', 'marion', 'caroline', 'jean', 'lucy']
    },

    /*methods: {
        close: function(){
            this.success = false
        },*/
    methods: {
        addPerson: function (){
            this.persons.push('jojo') 
        },
    }
    
})