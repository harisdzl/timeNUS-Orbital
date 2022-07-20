import { ref } from 'firebase/storage';
import React from 'react'
import { useContext } from 'react';
import { Button, ListGroup} from 'react-bootstrap';
import { Upload } from 'react-bootstrap-icons';
import { PmsContext } from '../../../Context/PmsContext';
import { storage } from '../../../firebase';
import AddProjectFile from './AddProjectFile';
import FileComponent from './FileComponent';

const ProjectFiles = () => {

  //CONTEXT
  const { files, selectedGroup } = useContext(PmsContext);

  return (
    <div className='ProjectFiles'>
        <div className='title'>
          Project Files
          <span className='upload-btn'>
            <AddProjectFile />
          </span>
        </div>
        {
          files.map( file => 
            <FileComponent
              file={file}
              key={file.id}
            />
          )
        }

    </div>
  )
}

export default ProjectFiles; 
