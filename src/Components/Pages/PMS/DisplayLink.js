import { collection, onSnapshot, query, where } from 'firebase/firestore';
import React from 'react'
import { useContext, useState } from 'react';
import { PmsContext } from '../../../Context/PmsContext';
import { db } from '../../../firebase';
import GroupForm from './GroupForm';

const DisplayLink = ({group, setShowModal}) => {

    //CONTEXT 
    const { selectedGroup, setSelectedGroup } = useContext(PmsContext);

    //STATE
    const [ groupLink, setGroupLink ] = useState('');

    const queryLink = query(collection(db, 'groups'), where('groupId', "==", group.groupId));
    const unsubscribe = onSnapshot(queryLink, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const link = doc.data().groupId;
            setGroupLink(link); 
        })
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowModal(false)

    }

  return (
    <div className='DisplayLink'>
        <GroupForm 
            handleSubmit={handleSubmit}
            heading='Send this link to your friends!'
            value={groupLink}
            setValue={setGroupLink}
            setShowModal={setShowModal}
            confirmButtonText='confirm'
        />
    </div>
  )
}




export default DisplayLink;
