import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { Plus } from 'react-bootstrap-icons';
import { auth, db } from '../../../firebase';

const AddModuleButton = () => {
    //STATES
    const [open, setOpen] = useState(false);
    const [module, setModule] = useState(''); 
    const [lecture, setLecture] = useState(''); 
    const [tutorial, setTutorial] = useState(''); 
    const [midterms, setMidterms] = useState(''); 
    const [finals, setFinals] = useState(''); 

    const openModal = () => {
        setOpen(true);
    };

    //STATE
    const closeModal = () => {
        setOpen(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if ( module && lecture && 
            tutorial &&
            midterms && finals ) {
                const dashboardRef = collection(db, 'dashboard');
                addDoc(dashboardRef, {
                    userUID : auth.currentUser.uid,
                    module : module, 
                    lecture : lecture,
                    tutorial : tutorial,
                    midterms : midterms,
                    finals : finals
                })
                setModule('');
                setLecture('');
                setTutorial('');
                setMidterms('');
                setFinals('');
                closeModal()
            }
        

    }
  return (
    <div className='AddModuleButton'>
        <Button className='w-100' variant="secondary" onClick={openModal}>
            <Plus />
        </Button>
        <Modal
          show={open} 
          onHide={closeModal}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title> Upload your module information! </Modal.Title>
          </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className='mb-3'>
                  <Form.Label>Module Code</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    onChange={e => setModule(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className='mb-3'>
                  <Form.Label>Lecture (Day & Time)</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    onChange={e => setLecture(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className='mb-3'>
                  <Form.Label>Tutorial (Day & Time)</Form.Label>
                  <Form.Control
                    required
                    type="text"s
                    onChange={e => setTutorial(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className='mb-3'>
                  <Form.Label>Midterms</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    onChange={e => setMidterms(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className='mb-3'>
                  <Form.Label>Finals</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    onChange={e => setFinals(e.target.value)}
                  />
                </Form.Group>
              </Form>
            </Modal.Body>



            <Modal.Footer>
              <Button variant='secondary' onClick={closeModal}>
                Close
              </Button>
              <Button variant='primary' onClick={handleSubmit}>
                Upload Module
              </Button>
            </Modal.Footer>

        </Modal>
    </div>
  )
}



export default AddModuleButton;
