import React from "react";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../Context/UserAuthContext";

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
        <img src="/images/timenus-cropped-logo.png" alt="timeNUS logo"/>
            <div className="p-4 box mt-3 text-center">
                Hello Welcome to timeNUS!
                <br />
                Here you would have access to:
                <br />
                - Dashboard
                <br />
                - Schedule Management System
                <br />
                - Project Management System
                <br />
                {user && user.email}
                </div>
            <div className="d-grid gap-2">
                <Button variant = "primary" onClick={ handleLogOut }>Log Out</Button>
            </div>
        </>
        
    )
}

export default Home;