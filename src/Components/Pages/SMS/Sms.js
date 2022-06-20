import React from 'react'
import Navbar from '../../Navbar/Navbar';
import { Button, Nav } from "react-bootstrap"; 
import { Link } from "react-router-dom";
import Calendar from './Calendar';


const SMS = () => {
  return (
    <>
      <Navbar />
      <Nav>
        <Button as={Link} to="./Calendar">Calendar</Button>
        <Button as={Link} to="./Todo">ToDo</Button>
      </Nav>
      <h2>
        SMS dashboard
      </h2>
    </>
  )
}

export default SMS;