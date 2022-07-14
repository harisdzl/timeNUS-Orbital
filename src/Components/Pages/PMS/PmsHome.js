import React from 'react'
import Navbar from '../../Navbar/Navbar';
import AddFolderButton from './AddFolder';
import {Container} from 'react-bootstrap'; 
import Sidebar from './Sidebar';
import Groups from './Groups';
import Agenda from './Agenda';
import ProjectFiles from './ProjectFiles';
import ProjectLinks from './ProjectLinks';
import Main from './Main';
import './styles.css'
import CreateNewGroup from './CreateNewGroup';
import JoinGroup from './JoinGroup';
import { PmsContextProvider } from '../../../Context/PmsContext';

const PMSHome = () => {
  return (
    <PmsContextProvider>
      <div>
        <Navbar />
      </div>
      <div className='PMS'>
        <Sidebar>
          <CreateNewGroup />
          <JoinGroup />
          <Groups />
        </Sidebar>
        <Main>
          <Agenda />
          <ProjectFiles />
          <ProjectLinks />
        </Main>
      </div>    
    </PmsContextProvider>
  );
}

export default PMSHome;