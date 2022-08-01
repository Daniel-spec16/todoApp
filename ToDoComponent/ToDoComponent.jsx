import React from 'react'
import styles from './ToDoComponent.module.css'

const ToDoComponent = ({todo, index, remove}) => {
    const handleRemove = () => {
        remove(index)
    }

  return (
    <div className="todo-item">
         <div>{todo.text}</div>
         <button type="button" className="btn-close" onClick={handleRemove}></button>
    </div>
  )
}

export default ToDoComponent



