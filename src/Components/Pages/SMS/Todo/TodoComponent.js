import React, { useContext } from 'react'
import { useState } from 'react';
import { ArrowClockwise, CheckCircleFill, Circle, Trash } from 'react-bootstrap-icons';
import { db } from '../../../../firebase';
import { query, onSnapshot, addDoc, orderBy, startAt, endAt, collection, doc, setDoc, Timestamp, deleteDoc, updateDoc } from 'firebase/firestore';
import { TodoContext } from '../../../../Context/TodoContext';

const TodoComponent = ({todo}) => {
    //STATE
    const [hover, setHover] = useState(false);

    //CONTEXT
    const { selectedTodo, setSelectedTodo } = useContext(TodoContext)

    const deleteTodo = () => {
        const collectionRef = collection(db, 'todos');
        const todoDoc = doc(collectionRef, todo.id);
        deleteDoc(todoDoc);
    }

    const checkTodo = (todo) => {
        const collectionRef = collection(db, 'todos');
        const todoDoc = doc(collectionRef, todo.id);
        updateDoc(todoDoc, {
            checked: !todo.checked
        });
    }

    const handleDelete = (todo) => {
        deleteTodo(todo);

        if (selectedTodo === todo ) {
            setSelectedTodo(undefined);
        }
    }

  return (
    <div className='TodoComponent'>
        <div 
        className='todo-container'
        onMouseEnter = {() => setHover(true)}
        onMouseLeave = {() => setHover(false)}
        >
            <div className='check-todo' onClick={() => checkTodo(todo)}>
                {
                    todo.checked ?
                    <span className='checked'>
                        <CheckCircleFill color='#bebebe' />
                    </span>
                    :
                    <span className='unchecked'>
                        <Circle color={todo.color} />
                    </span>
                }
            </div>
            <div className='text' onClick={() => setSelectedTodo(todo)}>
                <p style={{color : todo.checked ? '#bebebe' : '#000000'}}>{todo.text}</p>
                <span>({todo.date.toString()}) : {todo.time.toString()} - {todo.projectName}</span>
                <div className={`line ${todo.checked ? 'line-through' : ''}`}></div>
            </div>
            <div className='add-to-next-day'>
                {
                    todo.checked &&
                    <span>
                        <ArrowClockwise />
                    </span>
                }
            </div>
            <div className='delete-todo' onClick={() => handleDelete(todo)}>
                {
                    (hover || todo.checked) &&
                    <span>
                        <Trash />
                    </span>
                }
            </div>
        </div>
    </div>
  )
}


export default TodoComponent; 