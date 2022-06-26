import React from "react";
import { Button, Nav} from "react-bootstrap";
import { useUserAuth } from "../../Context/UserAuthContext";
import NavbarComponent from "../Navbar/Navbar";
import "./styles.css"


const Home = () => {
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
        <NavbarComponent/>
        <div className = "main-home">
            <h1>Home</h1>
            
        </div>
        </>
    )
}

export default Home; 