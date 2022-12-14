<script setup>
import appTodo from './components/AppTitle.vue'
import ShowList from './components/ShowList.vue'
import AddTitle from './components/AddTodo.vue'
import DelTodo from './components/DellAllTodo.vue'
</script>

<template>
    <div id="app">
        <div>
          <appTodo title="Cosas a hacer"></appTodo>
          <ShowList></ShowList>
          <AddTitle></AddTitle>
          <DelTodo></DelTodo>
        </div>
    </div>
</template>

