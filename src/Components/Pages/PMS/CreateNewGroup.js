import { setDoc, addDoc, arrayUnion, collection, doc } from 'firebase/firestore';
import React, {useState} from 'react'
import { auth, db } from '../../../firebase';
import Modal from '../SMS/Todo/Modal';
import GroupForm from './GroupForm';

const CreateNewGroup = () => {
    const [showModal, setShowModal] = useState(false);
    const [groupName, setGroupName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if ( groupName ) {
            const groupRef = collection(db, 'groups');
            const groupDoc = doc(groupRef)
            addDoc(groupRef, {
                name : groupName,
                groupId : groupDoc.id,
                users : [auth.currentUser.uid]
            })
            setShowModal(false);
            setGroupName('');
        }
    }
  return (
    <div className='CreateNewGroup'>
        <div className='btn' onClick={() => setShowModal(true)}>
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
