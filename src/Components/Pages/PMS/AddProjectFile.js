import React, { useState } from 'react';
import { useContext } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { Upload } from 'react-bootstrap-icons';
import { PmsContext } from '../../../Context/PmsContext';
import { db, storage } from '../../../firebase';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { addDoc, collection } from 'firebase/firestore';

const AddProjectFolder = () => {

  //CONTEXT
  const { selectedGroup } = useContext(PmsContext);

  //STATES
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);

  const openModal = () => {
    setOpen(true);
  };
  //STATE
  const closeModal = () => {
    setOpen(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if ( file ) {
      const fileRef = ref(storage, `${selectedGroup}/${file.name}`);
      uploadBytes(fileRef, file).then(() => {
          getDownloadURL(fileRef).then((url) => {
            const fileCollection = collection(db, 'files');
            addDoc(fileCollection, {
              groupId : selectedGroup,
              name : file.name,
              url : url
            })
          })
          
          closeModal();
          setFile(null);
      });
    }


  }
  return (
    <div className='AddProjectFolder'>
        <div className='add-btn'>
            <Button onClick={openModal}>
                <Upload />
            </Button>    
        </div>
        <Modal
          show={open} 
          onHide={closeModal}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title> Upload your files! </Modal.Title>
          </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className='mb-3' controlId='formFile'>
                  <Form.Label>Browse File</Form.Label>
                  <Form.Control
                    required
                    type="file"
                    onChange={e => setFile(e.target.files[0])}
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant='secondary' onClick={closeModal}>
                Close
              </Button>
              <Button variant='primary' onClick={handleSubmit}>
                Upload File
              </Button>
            </Modal.Footer>

        </Modal>
    </div>
  )
}


export default AddProjectFolder; 