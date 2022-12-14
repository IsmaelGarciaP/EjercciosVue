import { reactive } from 'vue';
let id = 0;
export const store={
  debug: true,
  state: reactive({
    todos: [
        {
            id: id++,
            text: "hola",
            done: true,
        },
        {
            id: id++,
            text: "adios",
            done: true,
        },
        {
            id: id++,
            text: "cosa",
            done: false,
        }
    ]
  },),
    addTodo(newTodo){
        this.state.todos.push({id: id++, text: newTodo, done:false})
    },
    delTodos(){
        this.state.todos.splice(0, this.state.todos.length);
    },
    delTodo(id1){
        this.state.todos.splice(this.state.todos.findIndex(todo=> todo.id ==id1), 1);
        //this.state.todos = this.state.todos.filter((i) => i.id != id1);
    }
  
}
