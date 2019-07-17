import React, {Component} from 'react';
import './App.css';

class App extends Component {
  state = {
    newTodo: '',
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
              onClick={this.addTodo}>Add Todo</button>

      <ul className='list-group'>
          {this.state.todos.map((item) => {
            return <li className='list-group-item' key={item.id}>{item.name}</li>
          })}
        
      </ul>
    </div>
  )
}
}



export default App;
