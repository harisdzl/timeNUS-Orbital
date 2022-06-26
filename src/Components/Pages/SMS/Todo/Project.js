import Modal from './Modal';
import React, { useContext } from 'react'
import { Pencil, XCircle } from 'react-bootstrap-icons';
import RenameProject from './RenameProject';
import { useState } from 'react';
import { TodoContext } from '../../../../Context/TodoContext';
import { db } from '../../../../firebase';
import { query, onSnapshot, addDoc, orderBy, startAt, endAt, collection, doc, setDoc, Timestamp, deleteDoc, getDocs, where} from 'firebase/firestore';

const Project = ({project, edit}) => {

    //CONTEXT
    const { defaultProject, selectedProject, setSelectedProject } = useContext(TodoContext);

    //STATE
    const [showModal, setShowModal] = useState(false);

    const deleteProject = () => {
        const collectionRef = collection(db, 'projects');
        const projectDoc = doc(collectionRef, project.id);
        deleteDoc(projectDoc).then( () => {
            const q = query(collection(db, 'todos'), where('projectName', '==', project.name))
            getDocs(q).then(
                (querySnapshot) => {
                    querySnapshot.forEach( (doc) => {
                        deleteDoc(doc.ref);
                    })
                }
            )
        }).then( () => {
            if ( selectedProject === project.name) {
                setSelectedProject(defaultProject)
            }
        })
    }
    return (
        <div className='Project'>
            <div
                className="name"
                onClick={ () => setSelectedProject(project.name)}
            >
                {project.name}
            </div>
            <div className="btns">
                {
                    edit ?
                    <div className="edit-delete">
                        <span
                            className="edit"
                            onClick={ () => setShowModal(true)}
                        >
                            <Pencil size="13" />
                        </span>
                        <span className="delete" onClick={() => deleteProject(project)}>
                            <XCircle size="13" />
                        </span>
                    </div>
                    :
                    project.numOfTodos === 0 ?
                    ""
                    :
                    <div className="total-todos">
                        {project.numOfTodos}
                    </div>
                }
            </div>
            <Modal showModal={showModal} setShowModal={setShowModal}>
                <RenameProject project={project} setShowModal={setShowModal}/>
            </Modal>
        </div>
    )
}

export default Project