import { reactive } from 'vue';
import { APIService } from './axiosApi';
import axios from 'axios'
const Api = new APIService();
let id = 0;
export const store={
  debug: true,
  state: reactive({
    todos: []
  },),

    addTodo(newTodo) {
        axios.post('http://localhost:3000/todos', {text: newTodo, done: false}).
        then(response => this.state.todos.push(response.data)
        )
        .catch(response => alert('Error: no se ha añadido el registro. '+response.message))
    },
    delTodos(){
        this.state.todos.forEach((todo, index) =>{
            axios.delete('http://localhost:3000/todos/'+this.state.todos[index].id)
            .then(response => this.state.todos.splice(index, 1))
            .catch(response => alert('Error: no se ha borrado el registro. '+response.message))
        })
    },
    delTodo(id1){
        axios.delete('http://localhost:3000/todos/'+id1)
        .then(response => this.state.todos.splice(this.state.todos.findIndex(todo=> todo.id ==id1), 1) )
        .catch(response => alert('Error: no se ha borrado el registro. '+response.message))
    },
    getTodos(){
        axios.get('http://localhost:3000/todos')
        .then(response => {
            response.data.forEach(element => {
            this.state.todos.push(element);
        }
    )})
        .catch(error => console.error(error))
    },

  
}
