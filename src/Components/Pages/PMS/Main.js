import React from 'react';
import { useContext } from 'react';
import { PmsContext } from '../../../Context/PmsContext';


const Main = ({ children, group}) => {
  const { selectedGroup, selectedGroupName } = useContext(PmsContext)
  return (
    selectedGroup &&
    <>

      <div className='Main-pms'>
        { children }
        <div className='heading'>
          { selectedGroupName }
        </div>
      </div>
      
    </>

  )
}


export default Main; 