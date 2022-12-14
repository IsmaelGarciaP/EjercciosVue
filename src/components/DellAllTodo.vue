<template>
    <button @click="delTodos">Borrar todos</button> 
</template>

<script>
import { store } from '../Store'
export default {
    methods:{
        delTodos(){
            store.delTodos();
        }
    }
  }
</script>

