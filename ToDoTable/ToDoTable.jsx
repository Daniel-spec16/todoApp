import React, {useState} from 'react'
import ToDoForm from '../ToDoForm/ToDoForm';
import ToDoComponent from '../ToDoComponent/ToDoComponent';
import classes from './ToDoTable.module.css'

const ToDoTable = () => {

    const [toDos, setToDos] = useState([
        {
        text: 'Make bed',
        isCompleted: false,
      },
      {
        text: 'Clean room',
        isCompleted: false,
      },
      {
        text: 'Do Homework',
        isCompleted: false,
      },])

    const addToDo = (text) => {
        const newToDos = [...toDos, { text: text, isCompleted: false }];
        setToDos(newToDos);
    };

    const removeToDo = (index) => {
        const tempArr = [...toDos];
        tempArr.splice(index, 1); 
        setToDos(tempArr);
      };

  return (
    <div className='to-do-table'>
        <div className="title">ToDo List</div>

        {toDos.map((toDo, i) => (
          <ToDoComponent index={i} key={i} todo={toDo} remove={removeToDo} />
        ))}
        <ToDoForm addToDo={addToDo} />
    </div>
  )
}

export default ToDoTable