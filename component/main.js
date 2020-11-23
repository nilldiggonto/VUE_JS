//todo component
Vue.component('to-do',{
    props:{
        tasks:{
            type:Array,
            required:true,
        },
        remaining:{
            type:Number,
            required:true,
        }
    },
    data(){
        return {
            new_task : null,
            error: null,
        }
    },
    methods:{
        submitTask(){
            if (this.new_task){
                this.$emit('add-task',this.new_task);
                this.new_task = null;
                if(this.error){
                    this.error= null;
                }
            }
            else{

                this.error = 'Write your task!!'
            }
        },
        removeTask(task){
            this.$emit('remove-task',task);
        }
    },
    template:`
    <div class="cotainer p-4 mt-2 mb-2">

    <div class="alert alert-dismissible alert-primary">
    Tasks Remain: <strong>{{remaining}} task!</strong> 
    </div>

        <div class="form-group">
  
        <input v-model="new_task" @keyup.enter="submitTask"
         type="text" class="form-control" id="" placeholder="Mention your task!">
        
        </div>

        <hr/>

      <div v-for="(task,index) in tasks" :task="task" :key="index">
      <button @click="removeTask(task)" type="button" class="btn btn-primary btn-lg btn-block">{{task}}</button>
      </div>

      <p v-if="error">{{error}}</p>
      <p v-if="remaining == 0 ">Write something to add task </p>

      </div>
    `
})




var app = new Vue({
    el:'#app',
    data:{
        tasks:[],
    },
    computed:{
        taskCount(){
            return this.tasks.length;
        }
    },
    methods:{
        addNewTask(new_task){
            this.tasks.push(new_task);
        },
        removeTask(task){
            this.tasks.splice(this.tasks.indexOf(task),1);
        }
    }
})