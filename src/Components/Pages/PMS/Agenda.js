import React, { useState } from 'react'
import { useContext } from 'react';
import { PmsContext } from '../../../Context/PmsContext';
import EditAgenda from './EditAgenda';

 

const Agenda = () => {
  const { agendas } = useContext(PmsContext);
  return (
    
    <div className='Agenda'>
        <div className='title'>
          Agenda
        </div>
        <div className='agenda-display'>
          <EditAgenda />
        </div>
        <div>

        </div>
    </div>
  )
}

export default Agenda; 
