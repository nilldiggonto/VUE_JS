var app = new Vue({
    el: '#app',
    data:{
        title: 'Method And Event',
        counter:0,
    },
    methods:{
        incrementCounter(){
            this.counter +=1;
            console.log(this.counter);
            if (this.counter===10){
                alert('Enough Counting')
            }
        },
        buttonCount(){
            console.log('Is it a button?')
        },
    },
})