import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export class APIService {
    constructor(){
    }
    getTodos() {
      return axios.get('/todos')
    }
    delTodo(id){
      return axios.delete('/todos/'+id)
    }
    addTodo(newTodo) {
      return axios.post('/todos', newTodo)
    }
    toogleDone(todo) {
      return axios.put('/todos/'+todo.id, {
        id: todo.id, 
        title: todo.title, 
        done: !todo.done
      })
    }
  }
  