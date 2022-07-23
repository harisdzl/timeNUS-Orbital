import { collection, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import React, {useState} from 'react'
import { Table, Modal, Form, Button } from 'react-bootstrap'
import { db } from '../../../firebase';

const TableRowComponent = ({item}) => {
    //STATES
    const [module, setModule] = useState(item.module); 
    const [lecture, setLecture] = useState(item.lecture); 
    const [tutorial, setTutorial] = useState(item.tutorial); 
    const [midterms, setMidterms] = useState(item.midterms); 
    const [finals, setFinals] = useState(item.finals); 
    const [open, setOpen] = useState(false);


    const openModal = () => {
        setOpen(true);
    };

    //STATE
    const closeModal = () => {
        setOpen(false);
    }

    const handleClick = (e) => {
        e.preventDefault();
        openModal();
    }

    const handleDelete = (e) => {
        e.preventDefault();
        const moduleRef = collection(db, 'dashboard');
        const moduleDoc = doc(moduleRef, item.id);
        deleteDoc(moduleDoc);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const moduleRef = collection(db, 'dashboard');
        const moduleDoc = doc(moduleRef, item.id);
        updateDoc(moduleDoc, {
            module : module, 
            lecture : lecture,
            tutorial : tutorial,
            midterms : midterms,
            finals : finals
        })
        closeModal();
    }

  return (
    <>
        <tr onClick={handleClick}>
            <td>{item.module}</td>
            <td>{item.lecture}</td>
            <td>{item.tutorial}</td>
            <td>{item.midterms}</td>
            <td>{item.finals}</td>
        </tr>
        <Modal
          show={open} 
          onHide={closeModal}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title> Edit your module information! </Modal.Title>
          </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className='mb-3'>
                  <Form.Label>Module Code</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    value={module}
                    onChange={(e) => setModule(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className='mb-3'>
                  <Form.Label>Lecture (Day & Time)</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    value={lecture}
                    onChange={(e) => setLecture(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className='mb-3'>
                  <Form.Label>Tutorial (Day & Time)</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    value={tutorial}
                    onChange={(e) => setTutorial(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className='mb-3'>
                  <Form.Label>Midterms</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    value={midterms}
                    onChange={(e) => setMidterms(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className='mb-3'>
                  <Form.Label>Finals</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    value={finals}
                    onChange={(e) => setFinals(e.target.value)}
                  />
                </Form.Group>
              </Form>
            </Modal.Body>



            <Modal.Footer>
              <Button variant='secondary' onClick={handleDelete}>
                Delete Module
              </Button>
              <Button variant='primary' onClick={handleSubmit}>
                Edit Module
              </Button>
            </Modal.Footer>

        </Modal>
    </>


  )
}


export default TableRowComponent