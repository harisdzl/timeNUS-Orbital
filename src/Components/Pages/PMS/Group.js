import React from 'react';
import { useContext, useState} from 'react';
import { PmsContext } from '../../../Context/PmsContext';
import { PersonPlus, XCircle } from 'react-bootstrap-icons';
import { query, onSnapshot, addDoc, orderBy, startAt, endAt, collection, doc, setDoc, Timestamp, where, updateDoc, arrayRemove} from 'firebase/firestore';

import DisplayLink from './DisplayLink';
import { Modal, Form, Button, Alert } from 'react-bootstrap';
import { auth, db } from '../../../firebase';

const Group = ({group, edit}) => {
    //CONTEXT
    const { 
        selectedGroup, 
        setSelectedGroup, 
        selectedGroupName, 
        setSelectedGroupName,
        setSelectedGroupId
    } = useContext(PmsContext); 

    //STATE
    //const [showModal, setShowModal] = useState(false);

    const [open, setOpen] = useState(false);
    const openModal = () => {
        setOpen(true);
    };

    const closeModal = () => {
        setOpen(false);
        setCopySuccess(false);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Create a folder in the database
        closeModal()
    }

    const [copySuccess, setCopySuccess] = useState(false);
    const handleCopy = (e) => {
        e.preventDefault();
        navigator.clipboard.writeText(group.groupId);
        setCopySuccess(true);
    }

    const handleClick = (e) => {
        e.preventDefault();
        setSelectedGroup(group.groupId);
        setSelectedGroupName(group.name);
        setSelectedGroupId(group.id);

    }


    const deleteGroup = () => {
        const groupRef = collection(db, 'groups');
        const groupDoc = doc(groupRef, group.id);
        updateDoc(groupDoc, {
            users : arrayRemove(auth.currentUser.uid)
        }).then(() => {
            setSelectedGroup('');
            setSelectedGroupName('');
        })
        
    }
    return (
        <div className='Group'>
            <div
                className="name"
                onClick={handleClick}
            >
                {group.name}
            </div>
            
            <div className="btns">
                {
                    edit  && 
                    <div className="edit-delete">
                        <span
                            className="edit"
                            onClick={ openModal }
                        >
                            <PersonPlus size="18" />
                        </span>
                        <span className="delete" onClick={() => deleteGroup(group)}>
                            <XCircle size="13" />
                        </span>
                    </div>
                }
            </div> 
            <Modal show={open} onHide={closeModal}>
                <Form onSubmit={handleSubmit}>
                    <Modal.Body>
                        <Form.Group>
                            <Form.Label>
                                Send this code to your friends!
                            </Form.Label>
                            <br />
                            <Form.Text>
                                {group.groupId} 
                            </Form.Text>
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={closeModal}>
                            Close
                        </Button>
                        <Button 
                        variant="success" 
                        type="submit" 
                        onClick={handleCopy}>
                            Copy Link
                        </Button>
                        {
                            copySuccess &&
                            <Alert variant="success">
                                Copied!
                            </Alert>
                        }
                    </Modal.Footer>
                </Form>
            </Modal>
            



        </div>
    )
    
}


export default Group; 