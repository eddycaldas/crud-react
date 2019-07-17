import React, {Component} from 'react';
import './App.css';

class App extends Component {
  state = {
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
render() {
  return (
    <div className="container">
      <h2 className='text-center p-4'>To Do's App</h2>
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
