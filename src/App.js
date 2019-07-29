import React, {Component} from 'react';
import './App.css';
import ListItem from './ListItem'

class App extends Component {
  state = {
    newTodo: '',
    notification: null,
    editing: false,
    editingIndex: null, //this is used for update function
    todos: [
  {
  id: 1,
  name: 'Make Breakfast'
  },
  {
    id: 2,
    name: 'Walk Max'
  },
  {
    id: 3,
    name: 'Do some schooling'
  },
  {
    id: 4, 
    name: 'Go to work'
  }]
  }

  handleChange = (event) => {
    this.setState({
      newTodo: event.target.value
    })
  }

  updatingId = () => {
    const myId = this.state.todos[this.state.todos.length - 1]
    if (myId) {
      return myId.id + 1
    } else {
      return 1
    }
  }

  addTodo = () => {
    const newTodo = {
      name: this.state.newTodo,
      id: this.updatingId()
    }
    const todos = this.state.todos
    todos.push(newTodo)
    this.setState({
      todos: todos,
      newTodo: ''
    })
    this.alert("todo addeed successfully.")
  }

  deleteTodo = (id) => {
    // console.log(id)
    const todos = this.state.todos
    delete todos[id]
    this.setState({
      todos: todos
    })
    this.alert("todo deleted successfully.")
  }

  editTodo = (index) => {
    const theTodo = this.state.todos[index]
    this.setState({
      editing: true,
      newTodo: theTodo.name,
      editingIndex: index //used on the update function
      
    })
  }

  updateTodo = () => {
    const todo = this.state.todos[this.state.editingIndex]
    todo.name = this.state.newTodo

    const todos = this.state.todos
    todos[this.state.editingIndex] = todo
    this.setState({
      todos: todos,
      editing: false,
      editingIndex: null,
      newTodo: ''
    })
    this.alert("todo updated successfully.")
  }

  alert = (notification) => {
    this.setState({
      notification
    })
    setTimeout(() => {
      this.setState({
        notification: null
      })
    }, 2000)
  }

render() {
  return (
    <div className="container">
      {
        this.state.notification &&
          <div className='alert mt-3 alert-success'>
            <p className='text-center'>{this.state.notification}</p>
          </div>
      }
      <input type='text'
            name='todo'
            className='my-4 form-control'
            placeholder='Add new todo'
            value={this.state.newTodo}
            onChange={this.handleChange}/>

      <button className='btn-success form-control mb-4'
              onClick={this.state.editing ? this.updateTodo : this.addTodo}
              disabled={this.state.newTodo.length < 3}>
              {this.state.editing ? 'Update Todo' : 'Add Todo'}
              
      </button>

      {
        !this.state.editing ?
      

      <ul className='list-group'>
          {this.state.todos.map((item, index) => {
              return (
                <ListItem 
                key={item.id}
                item={item}
                editTodo={() => {this.editTodo(index)}}
                deleteTodo={() => {this.deleteTodo(index)}}/>
              )
                
          })}
        
      </ul> : null

        }

    </div>
  )
}
}



export default App;
