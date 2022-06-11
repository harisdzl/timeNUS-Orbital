import React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { useUserAuth } from "../../Context/UserAuthContext";
import { Link } from "react-router-dom";



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
        <>
            <Navbar bg="light" variant="light" expand="lg">
                <Navbar.Brand as={Link} to="/home">
                    <img src="/images/timenus-logo.png" height="50" width="50" alt="timeNUS logo"/>
                </Navbar.Brand>
                <Nav className="me-auto">
                </Nav>
                <Nav>
                    <Nav.Link as={Link} to="/Sms">
                        SMS
                    </Nav.Link>
                    <Nav.Link as={Link} to="/Pms">
                        PMS
                    </Nav.Link>
                    <div className="d-grid gap-2">
                        <Button variant = "primary" onClick={ handleLogOut }>Log Out</Button>
                    </div>
                </Nav>
            </Navbar>        
        </>

    )
}

/*
const Navbar = () => {


    return (
        <nav className="nav">
            <Link to="/home" className="site-title">         
                <img src="/images/timenus-logo.png" height="75" width="75" alt="timeNUS logo"/>
            </Link>
            <ul>
                <li>
                    <Link to="/sms">SMS</Link>
                </li>
                <li>
                    <Link to="/pms">PMS</Link>
                </li>
            </ul>
            <div className="d-grid gap-2">
                <Button variant = "primary" onClick={ handleLogOut }>Log Out</Button>
            </div>
        </nav>
    )
}
*/

export default NavbarComponent;