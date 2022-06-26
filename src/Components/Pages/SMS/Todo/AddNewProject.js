import React, { useState }from 'react';
import Modal from './Modal';
import { Plus } from 'react-bootstrap-icons';
import ProjectForm from './ProjectForm';
import { db } from '../../../../firebase';
import { query, onSnapshot, addDoc, orderBy, startAt, endAt, collection, doc, setDoc, where, getDocs, getDoc } from 'firebase/firestore';

const AddNewProject = () => {
    const [showModal, setShowModal] = useState(false);
    const [projectName, setProjectName] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        if ( projectName ) {
            const projectRef = collection(db, 'projects');
            // const q = query(collection(db, 'projects'), where('name', '==', projectName));
            // have not handle duplicates
            addDoc(projectRef, { name : projectName});
            setShowModal(false);
            setProjectName('');
        }
    }
  return (
    <div className='AddNewProject'>
        <div className='add-button'>
            <span onClick={() => setShowModal(true)}>
                <Plus size='20'/>
            </span>
        </div>
        <Modal showModal={showModal} setShowModal={setShowModal}>
            <ProjectForm 
                handleSubmit={handleSubmit}
                heading='New Project!'
                value={projectName}
                setValue={setProjectName}
                setShowModal={setShowModal}
                confirmButtonText='+ Add Project'
            />
        </Modal>

    </div>
  )
}

export default AddNewProject; 
