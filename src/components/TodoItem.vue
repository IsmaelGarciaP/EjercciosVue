
<template>
    <li @dblclick="delTodo(item.id)">
    <input type="checkbox" v-model="item.done">
    <del v-if="item.done" :item="item">{{item.text}}</del>
    <span v-else>{{item.text}}</span>
    </li>
</template>

<script>
   export default {
    props:{
        item: Object,
    },
    methods:{
      delTodo(){
        this.$emit('delTodo', this.item.id);
      }
    }
  }
</script>