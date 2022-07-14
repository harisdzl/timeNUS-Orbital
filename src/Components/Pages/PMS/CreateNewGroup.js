import { setDoc, addDoc, arrayUnion, collection, doc } from 'firebase/firestore';
import React, {useState} from 'react'
import { auth, db } from '../../../firebase';
import Modal from '../SMS/Todo/Modal';
import GroupForm from './GroupForm';
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import { useContext } from 'react';
import { PmsContext } from '../../../Context/PmsContext';


const CreateNewGroup = () => {
    const [showModal, setShowModal] = useState(false);
    const [groupName, setGroupName] = useState('');
    const { setSelectedGroup } = useContext(PmsContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        if ( groupName ) {
            // group collection 
            const groupRef = collection(db, 'groups');
            const groupDoc = doc(groupRef)
            addDoc(groupRef, {
                name : groupName,
                groupId : groupDoc.id,
                users : [auth.currentUser.uid]
            })

            const agendaRef = collection(db, 'agendas');
            addDoc(agendaRef, {
                groupId : groupDoc.id
            })
            


            setShowModal(false);
            setGroupName('');
        }
    }

    const handleClick = (e) => {
        e.preventDefault();
        setSelectedGroup('');
        setShowModal(true);
    }
  return (
    <div className='CreateNewGroup'>
        <div className='btn' onClick={handleClick}>
            <button>
                + Create Group
            </button>
        </div>
        <Modal showModal={showModal} setShowModal={setShowModal} >
            <GroupForm 
                handleSubmit={handleSubmit}
                heading='Create New Group'
                value={groupName}
                setValue={setGroupName}
                setShowModal={setShowModal}
                confirmButtonText='+ Create Group'
            />
        </Modal>
    </div>
  )
}



export default CreateNewGroup;
