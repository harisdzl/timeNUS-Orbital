import { collection, deleteDoc, doc } from 'firebase/firestore';
import { deleteObject, ref } from 'firebase/storage';
import React, { useContext, useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import { Trash } from 'react-bootstrap-icons';
import { PmsContext } from '../../../Context/PmsContext';
import { db, storage } from '../../../firebase';

const FileComponent = ({ file }) => {
  const [hover, setHover] = useState(false);
  //CONTEXT
  const { selectedGroup } = useContext(PmsContext);


  const handleDelete = (file) => {
    const fileRef = collection(db, 'files');
    const fileDoc = doc(fileRef, file.id);
    deleteDoc(fileDoc);
    const fileStorageRef = ref(storage, `${selectedGroup}/${file.name}`);
    deleteObject(fileStorageRef)
  }

  return (
    <div className='Link'>
      <div className='link-container align-components-center d-flex align-items-center'
        onMouseEnter = {() => setHover(true)}
        onMouseLeave = {() => setHover(false)}
      >
        <ListGroup className="d-flex justify-content-between align-items-start my-2 w-100">
          <ListGroup.Item action href={file.url} variant='info' target="_blank">
            {file.name}
          </ListGroup.Item>
        </ListGroup>
        <div className='delete-file' onClick={() => handleDelete(file)}>
          {
            hover &&
            <span role='button'>
              <Trash size='20' className='ms-5' />
            </span>
          }
          </div>
      </div>


    </div>
  )
}

export default FileComponent;