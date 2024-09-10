import React, {useState} from 'react'
import TodoForm from './TodoForm'

import uuidv4 from React
const TodoWrapper = () => {
  const [todos, setTodos] =useState([])
  const addTodo = todo =>{
    setTodos([...todos, {id: uuidv4(), task: todo, 
      completed: false, isEditing: false
    }])
  }
  return (
    <div className='TodoWrapper'>
      <TodoForm addTodo= {addTodo}/>
    </div>
  )
}

export default TodoWrapper
