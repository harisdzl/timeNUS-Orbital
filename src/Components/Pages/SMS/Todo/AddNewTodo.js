import React, {useState} from 'react';
import Modal from './Modal';
import { Bell, CalendarDay, Clock, Palette, X} from 'react-bootstrap-icons';
import { LocalizationProvider } from '@mui/x-date-pickers';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import TodoForm from './TodoForm';
import { useContext } from 'react';
import { TodoContext } from '../../../../Context/TodoContext';
import { useEffect } from 'react';
import { calendarItems, weekday } from '../Constants';
import { db } from '../../../../firebase';
import { query, onSnapshot, addDoc, orderBy, startAt, endAt, collection, doc, setDoc, Timestamp } from 'firebase/firestore';
import randomColor from 'randomcolor';

const AddNewTodo = () => {
    //CONTEXT
    const { projects, selectedProject } = useContext(TodoContext);

    const [showModal, setShowModal] = useState(false);
    const [text, setText] = useState("");
    const [day, setDay] = useState(new Date());
    const [time, setTime] = useState(new Date());

    //STATE
    const [todoProject, setTodoProject] = useState(selectedProject);
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

    const handleSubmit =  (e) => {
        e.preventDefault();

        if (text && !calendarItems.includes(todoProject)) {
            const collectionRef = collection(db, 'todos');
            const payload = {
                text : text,
                date : day.toDateString(), 
                day: weekday[day.getDay()], 
                time : convertToTimeFormat(time.getHours(), time.getMinutes()),
                checked : false,
                color : randomColor(),
                projectName : todoProject
            }
            addDoc(collectionRef, payload);
            setShowModal(false);
            setText('');
            setDay(new Date())
            setTime(new Date())
        }
    }

    useEffect(() => {
        setTodoProject(selectedProject)
    }, [selectedProject])
    
  return (
    <div className='AddNewTodo'>
        <div className='btn' onClick={() => setShowModal(true)}>
            <button>
                + New Todo
            </button>
        </div>
        <Modal showModal={showModal} setShowModal={setShowModal} >
            <TodoForm 
                handleSubmit={handleSubmit}
                heading = 'Add new to do!'
                text = {text}
                setText = {setText}
                day = {day}
                setDay = {setDay}
                time = {time}
                setTime = {setTime}
                todoProject = {todoProject}
                setTodoProject = {setTodoProject}
                projects = {projects}
                showButtons = {true}
                setShowModal = {setShowModal}
            />
        </Modal>
    </div>
  )
}

export default AddNewTodo; 
