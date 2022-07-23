import React, { useState, useEffect } from 'react';
import FullCalendar, { DatesSetArg, EventClickArg } from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';
import { auth, db } from '../../../../firebase';
import { query, onSnapshot, addDoc, orderBy, startAt, endAt, collection, deleteDoc, doc, where} from 'firebase/firestore';
import Modal from '../Todo/Modal';
import CalendarForm from './CalendarForm';
import '../../styles.css';


interface VisibleDates {
  start:Date;
  end:Date;
}

const CalendarComponent = () => {
  
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState<any[]>([]);
  const [text, setText] = useState("");

  const [range, setRange] = useState<VisibleDates>({
    start:new Date(),
    end: new Date()
  })
  
  useEffect(() => {
    //mounts
    const q = query(collection(db, 'calendar'), where("userUID", "==", auth.currentUser.uid));
    const unsub = onSnapshot(q, (snap) => {
      const array: any[]=snap.docs.map(doc => {
        return {
          id: doc.id,
          title: doc.get('title'),
          start: doc.get('start').toDate(),
          allDay: doc.get('allDay'),
          userUID : doc.get('userUID')
        }
      })
      setData([...array]);

    })
    //unmounts
    return () => {
      unsub()
    }
  }, [range])
  const handleDateClick = (e:DateClickArg) => {
    const title = prompt('Enter Title', e.dateStr);
    if (title) {
      const event = {
        title: title,
        start: e.date,
        allDay:true,
        userUID: auth.currentUser.uid
      }
      addDoc(collection(db, 'calendar'), event)
    }

  }

  const handleEventClick = (e:EventClickArg) => {
    const deleteEvent = window.confirm('Delete Event?');
    if (deleteEvent) {
      const eventDoc = doc(collection(db, 'calendar'), e.event.id)
      deleteDoc(eventDoc)
    }

  }

  
  const handleDatesSet = (e:DatesSetArg) => {
    setRange({start:e.start, end:e.end})
  }



  
  return (
    <div className='FullCalendar'>
      <div className='calendar'>
        <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]} 
        dateClick={handleDateClick}
        eventClick={handleEventClick}
        initialView="dayGridMonth"
        events={data}
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
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <CalendarForm 
                handleSubmit={handleDateClick}
                text = {text}
                setText = {setText}
                showButtons = {true}
                setShowModal = {true}
        />
      </Modal>

    </div>

  )

  
}


export default CalendarComponent; 