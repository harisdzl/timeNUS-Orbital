import React, {useState} from "react";
import { Button, Nav, Navbar, NavDropdown, Container, Modal, Form } from "react-bootstrap";
import { useUserAuth } from "../../Context/UserAuthContext";
import { Link } from "react-router-dom";
import { query, onSnapshot, collection, where, updateDoc } from "firebase/firestore";
import { auth, db } from "../../firebase";
//import "../Pages/styles.css";


const NavbarComponent = () => {
    const [course, setCourse] = useState('');
    const [username, setUsername] = useState('');
    const queryUser = query(collection(db, 'users'), where("uID", "==", auth.currentUser.uid));
    const unsubscribe = onSnapshot(queryUser, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const course = doc.data().course;
            const userName = doc.data().username;
            setCourse(course)
            setUsername(userName)
        })
    })

    

    const email = auth.currentUser.email;
    const { user, logOut} = useUserAuth();
    const handleLogOut = async () => {
        try {
            await logOut();
        } catch (err) {
            console.log(err.message);
        }
    };

    //MODAL STATES]
    const [open, setOpen] = useState(false);
    const openModal = () => {
        setOpen(true);
    };
    const closeModal = () => {
        setOpen(false);
    }

    return (
        <>
        <Navbar collapseOnSelect bg="dark" variant="dark" expand="sm" sticky="top" >
                    
                    <Navbar.Brand as={Link} to="/home" className="d-grid p-2 ml-3 mt-1">
                        <h1>
                            timeNUS
        
                        </h1>
                        
                    </Navbar.Brand>
        
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavDropdown title="SMS" style={{ fontSize: `130%` }} id="style.sms-dropdown" className="d-grid m-1 p-2">
                                <NavDropdown.Item 
                                    as={Link} to="/Sms/Todo"> 
                                    To-do 
                                </NavDropdown.Item>
                                <NavDropdown.Item 
                                    as={Link} to="/Sms/Calendar"> 
                                    Calendar 
                                </NavDropdown.Item>
                            </NavDropdown>
        
                            <Nav className="d-grid m-1 p-2">
                                <Nav.Link as={Link} to="/Pms" style={{ fontSize: `130%` }}>PMS</Nav.Link>
                            </Nav>
                        </Nav>
                        <Nav className="d-grid m-1 p-2">
                            <Button variant = "outline-secondary" onClick={ openModal } >Profile</Button>
                        </Nav>
                        <Nav className="d-grid m-2 p-2">
                            <Button variant = "outline-secondary" onClick={ handleLogOut } >Log Out </Button>
                        </Nav>            
                </Navbar.Collapse>
            </Navbar> 
            <Modal
            show={open} 
            onHide={closeModal}
            centered
            >
          <Modal.Header closeButton>
            <Modal.Title> View your profile! </Modal.Title>
          </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className='mb-3'>
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            value={username}
                            disabled
                        />
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            required
                            type="email"
                            value={email}
                            disabled
                        />
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>Course</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            value={course}
                            disabled
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>

            <Modal.Footer>
              <Button variant='secondary' onClick={closeModal}>
                Close
              </Button>
            </Modal.Footer>
        </Modal>
        </>

            
    )
}

export default NavbarComponent;
