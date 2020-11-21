var app = new Vue({
    el:'#app',
    data:
    {   circle:true,
        // box:false,
        title:'Style with Vue',
        styleObject:
        {
            backgroundColor:'red',
            border:'5px solid black',
        }
    },
    methods:
    {
        changeShape()
        {
            this.circle  = !this.circle
            // this.box = !this.box
        }
    }
})