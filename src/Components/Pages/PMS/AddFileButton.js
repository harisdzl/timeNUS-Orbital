import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileUpload } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { storage } from '../../../firebase';
import { useContext } from 'react';
import { PmsContext } from '../../../Context/PmsContext';
import { uploadBytes, ref, uploadBytesResumable} from 'firebase/storage';

const AddFileButton = () => {
    const { selectedGroup } = useContext(PmsContext);

    const handleUpload = (e) => {
        e.preventDefault();
        const file = e.target[0].files[0];
        const fileRef = ref(storage, `files/${file.name}`)
        uploadBytesResumable(fileRef, file);
    }
  return (
    <label className='btn btn-outline-sucess btn-sm m-0 mr-2' >
        <input 
            className="form-control"
            type="file"
            id="formFileMultiple" multiple 
        />
        <input class="form-control" type="submit" onClick={handleUpload} />

    </label>
  )
}

export default AddFileButton;