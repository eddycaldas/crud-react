import React from 'react'

const ListItem = (props) => {
    return (
        <li className='list-group-item'>
        <button className='btn-info btn-small mr-4 btn'
            onClick={props.editTodo}
        >Update</button> 
        {props.item.name}
        <button className='btn-danger btn-small ml-4 btn'
            onClick={props.deleteTodo}
        >Delete</button> 
    </li>
    )
  
}

export default ListItem;