import React, {useState, useContext, useEffect } from 'react';
import { TodoContext } from '../../../../Context/TodoContext';
import TodoForm from './TodoForm';
import { db } from '../../../../firebase';
import { query, onSnapshot, addDoc, orderBy, startAt, endAt, collection, doc, setDoc, Timestamp, deleteDoc, getDocs, where, updateDoc} from 'firebase/firestore';
import { weekday } from '../Constants';


const EditTodo = () => {
    const { selectedTodo : todo , projects } = useContext(TodoContext)


    const [text, setText] = useState('');
    const [day, setDay] = useState(new Date());
    const [time, setTime] = useState(new Date());
    const [todoProject, setTodoProject] = useState('');
    
    const convertToTimeFormat= (hours, mins) => {
        if (mins < 10) {
            return (`${hours}:0${mins}`);
        }

        if (hours < 12) {
            if (mins < 10) {
                return (`0${hours}:0${mins}`)
            }
            return (`0${hours}:${mins}`)
        }
        return (`${hours}:${mins}`); 
    }
    //CONTEXT
    useEffect( () => {
        if (todo) {
            setText(todo.text);
            setDay(todo.date);
            setTime(todo.time);
            setTodoProject(todo.projectName);
        }
    }, [todo])
    /*
    useEffect( () => {
        if (todo) {
            const collectionRef = collection(db, 'todos');
            const todoDoc = doc(collectionRef, todo.id);
            updateDoc(todoDoc, {
                text,
                date : day.toDateString, 
                day: weekday[day.getDay], 
                time : convertToTimeFormat(time.getHours, time.getMinutes),
                projectName : todoProject
            });
        }
    }, [text, day, time, todoProject])
    */

    const handleSubmit = (e) => {
        
    }
  return (
      <div>
        {
        todo && 
        <div className='EditTodo'>
        <div className='header'>
            Edit Todo
        </div>
        <div className='container'>
            <TodoForm 
                    handleSubmit={handleSubmit}
                    text = {text}
                    setText = {setText}
                    day = {day}
                    setDay = {setDay}
                    time = {time}
                    setTime = {setTime}
                    todoProject = {todoProject}
                    setTodoProject = {setTodoProject}
                    projects = {projects}
                />
        </div>
        </div>
        }
      </div>

  )
}


export default EditTodo; 
