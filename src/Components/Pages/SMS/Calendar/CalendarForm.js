import React from 'react';
import { Bell, CalendarDay, Clock, Palette, X} from 'react-bootstrap-icons';
import { LocalizationProvider } from '@mui/x-date-pickers';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';


const CalendarForm = (
    {
        handleSubmit,
        heading = false,
        text, setText,
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
                    placeholder='Add Event...'
                    autoFocus
                />
            </div>
            <div className="remind">
                <Bell/>
                <p>Remind me!</p>
            </div>
            {
                showButtons 
                &&
                <div>
                    <div className='confirm'>
                        <button>ADD EVENT</button>
                    </div>
                </div>

            }

        </form>
    </LocalizationProvider>
  )
}

export default CalendarForm; 
