import React from "react";
import { Button, Nav} from "react-bootstrap";
import { useUserAuth } from "../../Context/UserAuthContext";
import NavbarComponent from "../Navbar/Navbar";


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
                <h1>Home</h1>

        </>
    )
}

export default Home;