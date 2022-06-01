import React from "react";
import { Button, Nav } from "react-bootstrap";
import { useUserAuth } from "../Context/UserAuthContext";
import Navbar from "./Navbar";

const Home = () => {
    return (
        <>
            <Navbar> </Navbar>
            <h1>Home</h1>
        </>
    )
}

export default Home;