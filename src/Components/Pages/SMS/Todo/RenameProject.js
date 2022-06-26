import React, { useContext } from 'react';
import { useState } from 'react';
import ProjectForm from './ProjectForm';
import { db } from '../../../../firebase';
import { query, onSnapshot, addDoc, orderBy, startAt, endAt, collection, doc, setDoc, Timestamp, deleteDoc, getDocs, where, updateDoc} from 'firebase/firestore';
import { TodoContext } from '../../../../Context/TodoContext';


const RenameProject = ({project, setShowModal}) => {
  const [newProjectName, setNewProjectName] = useState(project.name)
  //CONTEXT
  const { selectedProject, setSelectedProject } = useContext(TodoContext);
  
  //rename project
  const renameProject = (project, newProjectName) => {
    const projectRef = collection(db, 'projects');
    const todosRef = collection(db, 'todos');
    const { name : oldProjectName} = project;

    const qProject = query(projectRef, where('name', '==', newProjectName));
    getDocs(qProject).then( (querySnapshot) => {
      if (!querySnapshot.empty) {
        alert('Project with the same name already exists')
      } else {
        const projectDoc = doc(projectRef, project.id)
        updateDoc(projectDoc, {
          name : newProjectName
        })
        .then( () => {
          const qTodos = query(todosRef, where('projectName', '==', oldProjectName));
          getDocs(qTodos).then( (querySnapshot) => {
            querySnapshot.forEach( (doc) => {
              updateDoc(doc.ref, {
                projectName : newProjectName
              })
            })
          })
        })
        .then( () => {
          if (selectedProject == oldProjectName) {
            setSelectedProject(newProjectName);
          }
        })
      }
    })

  }
  const handleSubmit = (e) => {
    e.preventDefault();

    renameProject(project, newProjectName);
    setShowModal(false)

  }
  return (
    <div className='RenameProject'>            
      <ProjectForm 
        handleSubmit={handleSubmit}
        heading='Edit project name!'
        value={newProjectName}
        setValue={setNewProjectName}
        setShowModal={setShowModal}
        confirmButtonText='confirm'
      />
    </div>
  )
}


export default RenameProject; 
