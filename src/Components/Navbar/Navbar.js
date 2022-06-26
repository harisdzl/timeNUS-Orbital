import React from "react";
import { Button, Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import { useUserAuth } from "../../Context/UserAuthContext";
import { Link } from "react-router-dom";
//import "../Pages/styles.css";


const NavbarComponent = () => {
    const { user, logOut} = useUserAuth();
    const handleLogOut = async () => {
        try {
            await logOut();
        } catch (err) {
            console.log(err.message);
        }
    };
    return (
        <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg" sticky="top" >
                    
            <Navbar.Brand as={Link} to="/home" className="d-grid p-2">
                <h1>
                    timeNUS

                </h1>
                
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />

            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <NavDropdown title="SMS" style={{ fontSize: `130%` }} id="style.sms-dropdown" className="d-grid m-1 p-2">
                        <NavDropdown.Item 
                            as={Link} to="/Sms/Calendar"> 
                            Calendar 
                        </NavDropdown.Item>
                        <NavDropdown.Item 
                            as={Link} to="/Sms/Todo"> 
                            To-do 
                            </NavDropdown.Item>
                    </NavDropdown>

                    <Nav className="d-grid m-1 p-2">
                        <Nav.Link as={Link} to="/Pms" style={{ fontSize: `130%` }}>PMS</Nav.Link>
                    </Nav>
                </Nav>

                <Nav className="d-grid m-2 p-2">
                    <Button variant = "outline-secondary" onClick={ handleLogOut } >Log Out </Button>
                </Nav>            
            </Navbar.Collapse>
            
        </Navbar>        
    )
}

export default NavbarComponent;
