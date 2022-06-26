import React, { useState, useEffect } from 'react';
import FullCalendar, { DatesSetArg } from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';
import { db } from '../../../../firebase';
import { query, onSnapshot, addDoc, orderBy, startAt, endAt, collection } from 'firebase/firestore';
import Modal from '../Todo/Modal';
import TodoForm from '../Todo/TodoForm';
import '../../styles.css';


interface VisibleDates {
  start:Date;
  end:Date;
}

const CalendarComponent = () => {
  
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState<any[]>([]);
  
  const [range, setRange] = useState<VisibleDates>({
    start:new Date(),
    end: new Date()
  })
  
  useEffect(() => {
    //mounts
    const q = query(collection(db, 'non_existent'));
    const unsub = onSnapshot(q, (snap) => {
      const array: any[]=snap.docs.map(doc => {
        return {
          id: doc.id,
          title: doc.get('title'),
          start: doc.get('start').toDate(),
          allDay: doc.get('allDay')
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
    const event = {
      title: title ? title : e.dateStr,
      start: e.date,
      allDay:true
    }
    addDoc(collection(db, 'non_existent'), event)
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
        initialView="dayGridMonth"
        events={data} 
        customButtons={{
          new: {
            text: 'new',
            click: () => console.log('new event'),
          },
        }}
        headerToolbar={{
          center: 'dayGridMonth,timeGridWeek,timeGridDay listDay',
        }}
        />
      </div>

    </div>

  )

  
}


export default CalendarComponent; 