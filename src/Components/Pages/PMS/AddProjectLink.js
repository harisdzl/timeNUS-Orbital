import { collection, onSnapshot, query, where, getDocs, setDoc, getDoc, addDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import { useContext } from 'react';
import { Button, Modal, Form, Table } from 'react-bootstrap';
import { PlusSquare } from 'react-bootstrap-icons';
import { PmsContext } from '../../../Context/PmsContext';
import { auth, db } from '../../../firebase';


const AddProjectLink = () => {

  //CONTEXT
  const { selectedGroup } = useContext(PmsContext); 

  const [open, setOpen] = useState(false);
  const [name, setName] = useState(''); 
  const [link, setLink] = useState('');

  const openModal = () => {
    setOpen(true);
  };
  //STATE
  const closeModal = () => {
    setOpen(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (link && name) {
      const linksRef = collection(db, 'links');
      addDoc(linksRef, {
        groupId : selectedGroup,
        name : name, 
        link : link
      })
    }
    setLink('');
    setName('');
    closeModal();
  }
  return (
    <div className='AddProjectLink'>
      <div className='add-btn'>
        <Button onClick={openModal}>
          <PlusSquare />
        </Button>
      </div>
      <Modal 
          show={open} 
          onHide={closeModal}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title> Upload your links! </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className='mb-3' controlId='textForm.ControlTextarea1'>
                <Form.Label> Display Name </Form.Label>
                <Form.Control 
                  required 
                  type='text' 
                  placeholder='Enter Name' 
                  value={name} 
                  onChange={e => setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label> Link </Form.Label>
                <Form.Control 
                  required 
                  type='link' 
                  placeholder='Insert Link' 
                  value={link}
                  onChange={e => setLink(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={closeModal}>
              Close
            </Button>
            <Button variant='primary' onClick={handleSubmit}>
              Upload Link
            </Button>
          </Modal.Footer>
        </Modal>
    </div>
  )
}


export default AddProjectLink;
