let vm = new Vue({
    el: '#app2',
    data: {
        seconds: 0
    },

    mounted: function(){
        this.$interval = setInterval(() => {  /* =>  comme setInterval(function(){}*/
            console.log('Time')
            this.seconds++
        }, 1000)
    },

    destroyed: function(){
        clearInterval(this.$interval)
    }
})