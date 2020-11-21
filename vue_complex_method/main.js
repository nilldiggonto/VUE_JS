var app = new Vue({
    el:'#app',
    data:
    {
        title:'Computed Method',
        first_name:'Someone',
        last_name:'notknown,'
    },
    computed:
    {
        getRandomComputed()
        {
            return Math.random()
        },
        fullName()
        {
            return `${this.first_name} ${this.last_name}`;
        },
        reverseName()
        {
            first = this.first_name.split('').reverse().join('');
            last = this.last_name.split('').reverse().join('');
            return `${first} ${last}`;
        }
    },
    methods:
    {
        getRandomNumber()
        {
            return Math.random()
        }
    },
})