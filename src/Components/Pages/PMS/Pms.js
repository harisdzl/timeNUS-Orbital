import React from 'react'
import Navbar from '../../Navbar/Navbar';
import AddFolderButton from './AddFolder';
import {Container} from 'react-bootstrap'; 
const PMS = () => {
  return (
    <>
      <Navbar />
      <br/>
      <Container fluid>
        <AddFolderButton/>
      </Container>
    </>
  )
}

export default PMS;