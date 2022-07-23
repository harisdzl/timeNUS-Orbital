import React, {useState} from 'react';
import FullCalendar, { DatesSetArg, EventClickArg } from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';
import { Modal, Form, Button } from 'react-bootstrap';
import { LocalizationProvider } from '@mui/x-date-pickers';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTime } from 'luxon';

const CalendarComponent = () => {

    //STATE FOR MODAL
    const [open, setOpen] = useState(false);
    const openModal = () => {
        setOpen(true);
    };
    const closeModal = () => {
        setOpen(false);
    }

    //STATES for dates
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date()); 
    const [showEndTime, setShowEndTime] = useState(true);

    //STATES for time
    const [startTime, setStartTime] = useState(new Date());
    const [endTime, setEndTime] = useState(new Date());
    const [allDay, setAllDay] = useState(false);


    const handleAllDay = () => {
        if (showEndTime === true) {
            setShowEndTime(false)
        } else {
            setShowEndTime(true)
        }
    }
    const handleDateClick = (e) => {
        openModal();

    }
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
        <div className='CalendarComponent'>
            <FullCalendar 
                plugins={[dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]} 
                dateClick={handleDateClick}
                // eventClick={handleEventClick}
                initialView="dayGridMonth"
                // events={data}
                selectable={true}
                editable={true}
                headerToolbar={{
                start: 'dayGridMonth,timeGridWeek,timeGridDay listDay',
                center : 'title'
                }}
                handleWindowResize={true}
                contentHeight={675}
                aspectRatio={2}
            />
            

            <Modal 
                show={open} 
                onHide={closeModal}
                centered
                >
            <Modal.Header closeButton>
                <Modal.Title> Add Event </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                <Form.Group className='mb-3' controlId='textForm.ControlTextarea1'>
                    <Form.Label> Event Title </Form.Label>
                    <Form.Control 
                    required 
                    type='text' 
                    placeholder='Event...' 
                    />
                </Form.Group>

                <Form.Group className='mt-3'>
                    <DesktopDatePicker
                        label="Start Date"
                        inputFormat="MM/dd/yyyy"
                        value={startDate}
                        onChange={startDate => setStartDate(startDate)}
                        renderInput={(params) => <TextField {...params} />}
                        
                    />
                </Form.Group>
                <Form.Group className='mt-4'>
                    <DesktopDatePicker
                        label="End Date"
                        inputFormat="MM/dd/yyyy"
                        value={endDate}
                        onChange={startDate => setEndDate(startDate)}
                        renderInput={(params) => <TextField {...params} />}
                        
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Check type="checkbox" label="All day?" onClick={handleAllDay} className='mt-3'/>
                </Form.Group>
                {
                    !showEndTime && 
                    <Form.Group className='mt-4 d-flex align-items-center'>
                        <TimePicker
                        label="Start Time"
                            value={startTime}
                            onChange={startTime => setStartTime(startTime)}
                            renderInput={(params) => <TextField {...params} />}
                        />
                        <TimePicker
                        label="End Time"
                            value={endTime}
                            onChange={endTime => setEndTime(endTime)}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </Form.Group>
                }




                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='secondary' onClick={closeModal}>
                Close
                </Button>
                <Button variant='primary'>
                Add Event
                </Button>
            </Modal.Footer>
            </Modal>
        </div>
    </LocalizationProvider>

    

  )
}



export default CalendarComponent; 
