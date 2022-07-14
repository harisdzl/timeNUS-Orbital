import { collection, deleteDoc, doc } from 'firebase/firestore';
import React, { useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import { Trash } from 'react-bootstrap-icons';
import { db } from '../../../firebase';

const LinkComponent = ({ link }) => {
  const [hover, setHover] = useState(false);


  const handleDelete = (link) => {
    const linkRef = collection(db, 'links');
    const linkDoc = doc(linkRef, link.id);
    deleteDoc(linkDoc);
  }

  return (
    <div className='Link'>
      <div className='link-container align-components-center d-flex align-items-center'
        onMouseEnter = {() => setHover(true)}
        onMouseLeave = {() => setHover(false)}
      >
        <ListGroup className="d-flex justify-content-between align-items-start my-2 w-100">
          <ListGroup.Item action href={link.link} variant='primary' target="_blank">
            {link.name}
          </ListGroup.Item>
        </ListGroup>
        <div className='delete-link' onClick={() => handleDelete(link)}>
          {
            hover &&
            <span role='button'>
              <Trash size='20' className='ms-5' />
            </span>
          }
          </div>
      </div>


    </div>
  )
}

export default LinkComponent;