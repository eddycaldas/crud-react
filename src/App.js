import React, {Component} from 'react';
import './App.css';

class App extends Component {
  state = {
    newTodo: '',
    editing: false,
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

  addTodo = () => {
    const newTodo = {
      name: this.state.newTodo,
      id: this.state.todos[this.state.todos.length-1].id + 1
    }
    const todos = this.state.todos
    todos.push(newTodo)
    this.setState({
      todos: todos,
      newTodo: ''
    })
  }

  deleteTodo = (id) => {
    // console.log(id)
    const todos = this.state.todos
    delete todos[id]
    this.setState({
      todos: todos
    })
  }

  editTodo = (index) => {
    const theTodo = this.state.todos[index]
    this.setState({
      editing: true,
      newTodo: theTodo.name
      
    })
  }

  updateTodo = () => {

  }

render() {
  return (
    <div className="container">
      <input type='text'
            name='todo'
            className='my-4 form-control'
            placeholder='Add new todo'
            value={this.state.newTodo}
            onChange={this.handleChange}/>

      <button className='btn-info form-control mb-4'
              onClick={this.state.editing ? this.updateTodo : this.addTodo}>
                {this.state.editing ? 'Update Todo' : 'Add Todo'}
      </button>

      {
        !this.state.editing ?
      

      <ul className='list-group'>
          {this.state.todos.map((item, index) => {
            return <li className='list-group-item' key={item.id}>
                      <button className='btn-info btn-small mr-4 btn'
                          onClick={() => { this.editTodo(index) }}
                      >Update</button> 
                      {item.name}
                      <button className='btn-danger btn-small ml-4 btn'
                            onClick={() => { this.deleteTodo(index) }}
                      >Delete</button> 
                  </li>
          })}
        
      </ul> : null

        }

    </div>
  )
}
}



export default App;
