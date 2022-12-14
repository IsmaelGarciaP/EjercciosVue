<template>
  <template v-if="todos.length">
    <ul>
      <todo-item
        v-for="todo in todos"
        :key="todo.id"
        :item="todo"
        @delTodo="delTodo"
      ></todo-item>
    </ul>
    <p>Total de cosas: {{todos.length}}</p>
  </template>
  <p v-else>No hay tareas</p>
</template>

<script>
import { store } from '../Store'
import TodoItem from './TodoItem.vue'




export default {
    data(){
        return{
            todos: store.state.todos
          }
    },
    components:{
      TodoItem,
    },
    mounted() {
        store.getTodos();
      },
    methods:{
      delTodo(id){
        store.delTodo(id);
        }
    }
  }
</script>
