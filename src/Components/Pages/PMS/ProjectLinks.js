import React from 'react';
import { useContext } from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { PlusSquare } from 'react-bootstrap-icons';
import { PmsContext } from '../../../Context/PmsContext';
import AddProjectLink from './AddProjectLink';
import LinkComponent from './LinkComponent';

const ProjectLinks = () => {
  const { links } = useContext(PmsContext);
  return (
    <div className='ProjectLinks'>
        <div className='title'>
          Project Links
          <span className='add-btn'>
            <AddProjectLink />          
          </span>
        </div>
        <div className='links'>
          {
            links.map( link => 
              <LinkComponent
                link={link}
                key={link.id}
              />
            )
          }

        </div>
    </div>
  )
}

export default ProjectLinks; 
