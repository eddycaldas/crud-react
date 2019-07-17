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
    console.log(event.target.value)
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
