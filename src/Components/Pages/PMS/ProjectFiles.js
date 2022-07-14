import React from 'react'
import AddFileButton from './AddFileButton';
import { Button } from 'react-bootstrap';
import { Upload } from 'react-bootstrap-icons';

const ProjectFiles = () => {
  return (
    <div className='ProjectFiles'>
        <div className='title'>
          Project Files
          <span className='upload-btn'>
            <Button>
                <Upload />
            </Button>            
          </span>
        </div>
        {/* <div>
          <AddFileButton />
        </div> */}
    </div>
  )
}

export default ProjectFiles; 
