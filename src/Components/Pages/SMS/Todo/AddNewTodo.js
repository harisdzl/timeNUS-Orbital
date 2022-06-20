import React, {useState} from 'react';
import Modal from './Modal';
import { Bell, CalendarDay, Clock, Palette, X} from 'react-bootstrap-icons';
import { LocalizationProvider } from '@mui/x-date-pickers';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';


const AddNewTodo = () => {
    const [showModal, setShowModal] = useState(false);
    const [text, setText] = useState("");
    const [day, setDay] = useState(new Date());
    const [time, setTime] = useState(new Date());
  return (
    <div className='AddNewTodo'>
        <div className='btn' onClick={() => setShowModal(true)}>
            <button>
                + New Todo
            </button>
        </div>
        <Modal showModal={showModal} setShowModal={setShowModal}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <form>
                    <div className='text'>
                        <h3>Add new to do!</h3>
                        <input 
                            type='text'
                            value={text}
                            onChange={e => setText(e.target.value)}
                            placeholder='To do...'
                            autoFocus
                        />
                    </div>
                    <div className='remind'>
                        <Bell />
                        <p>Remind me!</p>
                    </div>
                    <div className='pick-day'>
                        <div className='title'>
                            <CalendarDay />
                            <p>Choose a day</p>
                        </div>
                        <DesktopDatePicker
                        label="Date desktop"
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
                            <p>Choose a project</p>
                        </div>
                        <div className='projects'>
                            <div className='project-active'>
                                personal
                            </div>
                            <div className='project'>
                                work
                            </div>
                        </div>
                    </div>
                    <div className='cancel' onClick={() => setShowModal(false)}>
                        <X size='40px'/>
                    </div>
                    <div className='confirm'>
                        <button>+ Add to do</button>
                    </div>
                </form>
            </LocalizationProvider>

        </Modal>
    </div>
  )
}

export default AddNewTodo; 
