import React, { useContext } from 'react';
import { PmsContext } from '../../../Context/PmsContext';
import { db } from '../../../firebase';

const NumProjects = () => {
    const { groups } = useContext(PmsContext); 

    return (
    <div className='NumProjects'>
        <h1 >
            Projects
        </h1>
        <div className='NumProjects-groups'>
            <h1>
                {
                    groups.length
                }
            </h1>
        </div>


    </div>
  )
}

export default NumProjects; 