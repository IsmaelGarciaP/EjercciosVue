<template>
    <form @submit.prevent="addTodo">
        <input v-model="newTodo">
        <button>Add Todo</button>    
    </form>
</template>

<script>
import { store } from '../Store'
export default {
    data(){
        return{
            newTodo:'',
            todos: store.state.todos,
            id: store.id
        }
    },
    methods:{
        addTodo(){
            store.addTodo(this.newTodo);
            this.newTodo = "";
    },
    }
  }
</script>