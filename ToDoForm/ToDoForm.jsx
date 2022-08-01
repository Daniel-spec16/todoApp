import React, {useState} from 'react'
import classes from './ToDoForm.module.css'

const ToDoForm = ({addToDo}) => {

    const [toDo, setToDo] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        if (!toDo) return;
        addToDo(toDo);
        setToDo('');

    }

  return (
    <form onSubmit={handleSubmit}>
        <input
        className="inputForm"
        type="text"
        todo={toDo}
        placeholder="Add item..."
        onChange={(e) => setToDo(e.target.value)}
      />
    </form>
  )
}

export default ToDoForm