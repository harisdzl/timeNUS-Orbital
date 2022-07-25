import React from 'react';
import Modal from './Modal';
import { Bell, CalendarDay, Clock, Palette, X, Check} from 'react-bootstrap-icons';
import { LocalizationProvider } from '@mui/x-date-pickers';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { Button } from 'react-bootstrap';


const TodoForm = (
    {
        handleSubmit,
        heading = false,
        text, setText,
        day, setDay,
        time, setTime,
        todoProject, setTodoProject,
        projects, 
        showButtons = false,
        setShowModal = false
    }
) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
        <form onSubmit={handleSubmit} className='TodoForm'>
            <div className='text'>
                {
                    heading &&
                    <h3>{heading}</h3>
                }
                
                <input 
                    type='text'
                    value={text}
                    onChange={e => setText(e.target.value)}
                    placeholder='To do...'
                    autoFocus
                />
            </div>

            <div className='pick-day'>
                <div className='title'>
                    <CalendarDay />
                    <p>Choose a day</p>
                </div>
                <DesktopDatePicker
                label="Date"
                inputFormat="MM/dd/yyyy"
                value={day}
                onChange={day => setDay(day)}
                renderInput={(params) => <TextField {...params} />}
                />
            </div>
            <div className='pick-time'>
                <div className='title'>
                    <Clock />
                    <p>Choose a time</p>
                </div>
                <TimePicker
                label="Time"
                value={time}
                onChange={time => setTime(time)}
                renderInput={(params) => <TextField {...params} />}
                />
            </div>
            <div className='pick-project'>
                <div className='title'>
                    <Palette />
                    <p>Choose a folder</p>
                </div>
                <div 
                    className='projects'
                >
                    {
                        projects.length > 0 ?
                        projects.map( project => 
                            <div 
                                className={`project ${todoProject === project.name ? "active" : ""}`}
                                key={project.id}
                                onClick={() => setTodoProject(project.name)}
                            >
                                {project.name}
                            </div>
                        )
                        :
                        <div style={{color:'#ff0000'}}>
                            Please add a folder before proceeding!
                        </div>
                    }
                </div>
            </div>
            {
                showButtons 
                &&
                <div>
                    <div className='cancel' onClick={() => setShowModal(false)}>
                        <X size='40px'/>
                    </div>
                    <div className='confirm'>
                        <button>+ Add to do</button>
                    </div>
                </div>

            }

        </form>
    </LocalizationProvider>
  )
}

export default TodoForm; 
