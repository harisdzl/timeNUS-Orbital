import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Palette, PencilFill, CaretUp } from 'react-bootstrap-icons';
import { TodoContext } from '../../../../Context/TodoContext';
import AddNewProject from './AddNewProject';
import Project from './Project';
import { useSpring, animated } from 'react-spring';

const Projects = () => {
    const [showMenu, setShowMenu] = useState(true);
    const [edit, setEdit] = useState(false);
    const pencilColor = edit ? "#1EC94C" : "#000000";

    //CONTEXT 
    const { projects } = useContext(TodoContext);
    //ANIMATION
    const spin = useSpring({
      transform : showMenu ? 'rotate(0deg)' : 'rotate(180deg)',
      config : { friction: 10 }
    })
  
    const menuAnimation = useSpring({
      display : showMenu ? 'block' : 'none',
      lineHeight : showMenu ? 1.2 : 0
    })

  return (
    <div className='Projects'>
        <div className='header'>
            <div className='title'>
                <Palette size='18' />
                <p>Folders</p>
            </div>
            <div className='btns'>
                { showMenu 
                    && projects.length > 0 &&
                    <span className='edit' onClick={() => setEdit(edit => !edit)}>
                        <PencilFill size='15' color={pencilColor}/>
                    </span>
                }

                <AddNewProject />
                <animated.span style={spin} onClick={() => setShowMenu(!showMenu)}>
                    <CaretUp size='20' />
                </animated.span>
            </div>
        </div>
        <animated.div style={menuAnimation} className='items'>
            {
                projects.map( project =>
                    <Project 
                        project={project}
                        key={project.id}
                        edit={edit}
                    /> )
            }
        </animated.div>
    </div>
  )
}

export default Projects; 
