import React from "react";
import { Button, Nav} from "react-bootstrap";
import { useUserAuth } from "../Context/UserAuthContext";
import { Link } from "react-router-dom";


const Navbar = () => {
    const { user, logOut} = useUserAuth();
    const handleLogOut = async () => {
        try {
            await logOut();
        } catch (err) {
            console.log(err.message);
        }
    };

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

export default Navbar;

