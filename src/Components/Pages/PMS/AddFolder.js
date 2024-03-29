import React, { useState, useEffect } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faFolderPlus } from '@fortawesome/free-solid-svg-icons';
import db from '../../../firebase';
import { addDoc, onSnapshot } from 'firebase/firestore';

const AddFolderButton = () => {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState("");
    const openModal = () => {
        setOpen(true);
    };

    const closeModal = () => {
        setOpen(false);
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        /*
        // Adding a folder
        const folderRef = collection(db, 'folders');
        const groupDoc = doc(folderRef);
        addDoc(groupDoc, {
        
        })
        */
        setName("")
        closeModal()
    }
  return (
      <>
        <Button onClick={openModal} variant="outline-success"
        size="sm">
            <FontAwesomeIcon icon={faFolderPlus}/>
        </Button>
        <Modal show={open} onHide={closeModal}>
            <Form onSubmit={handleSubmit}>
                <Modal.Body>
                    <Form.Group>
                        <Form.Label>
                            Folder Name
                        </Form.Label>
                        <Form.Control
                            type="text"
                            required
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal}>
                        Close
                    </Button>
                    <Button variant="success" type="submit">
                        Add Folder
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>    
      </>

    )
}


export default AddFolderButton; 
