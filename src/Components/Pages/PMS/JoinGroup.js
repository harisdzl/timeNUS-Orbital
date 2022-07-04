import { setDoc, addDoc, arrayUnion, collection, doc, updateDoc, query, where, getDocs, onSnapshot, getDoc } from 'firebase/firestore';
import React, {useState} from 'react'
import { auth, db } from '../../../firebase';
import Modal from '../SMS/Todo/Modal';
import GroupForm from './GroupForm';

const JoinGroup = () => {
    const [showModal, setShowModal] = useState(false);
    const [groupId, setGroupId] = useState('');

    
    const handleSubmit = async (e, id) => {
        e.preventDefault();
        
        if ( groupId ) {
            const groupRef = collection(db, 'groups');
            const groupQuery = query(groupRef, where("groupId", "==", groupId));
            getDocs(groupQuery).then((querySnapshot) => {
                querySnapshot.forEach( (doc) => {
                    updateDoc(doc.ref, {
                        users : arrayUnion(auth.currentUser.uid)
                    })
                })
            })
            
            setShowModal(false);
            setGroupId('');
        }
        
    }
    
  return (
    <div className='JoinGroup'>
        <div className='btn' onClick={() => setShowModal(true)}>
            <button>
                Join Project Group
            </button>
        </div>
        <Modal showModal={showModal} setShowModal={setShowModal} >
            <GroupForm 
                handleSubmit={handleSubmit}
                heading='Join Project Group'
                value={groupId}
                setValue={setGroupId}
                setShowModal={setShowModal}
                confirmButtonText='Join Group'
            />
        </Modal>
    </div>
  )
}



export default JoinGroup;
