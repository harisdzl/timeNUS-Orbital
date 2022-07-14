import React from 'react';
import { CaretUp, PeopleFill, PencilFill, GearFill, PersonPlus} from 'react-bootstrap-icons';
import { useContext, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { PmsContext } from '../../../Context/PmsContext';
import Group from './Group';

const Groups = () => {

  const [showMenu, setShowMenu] = useState(true);
  const [edit, setEdit] = useState(false); 
  const gearColour = edit ? "#1EC94C" : "#000000";

  //CONTEXT
  const { groups, filteredGroups } = useContext(PmsContext)

  //ANIMATION
  const spin = useSpring({
    transform : showMenu ? 'rotate(0deg)' : 'rotate(180deg)',
    config : { friction: 10}
  })

  const menuAnimation = useSpring({
    display : showMenu ? 'block' : 'none',
    lineHeight : showMenu ? 1.2 : 0
  })

  return (
    <div className='Groups'>
        <div className='header'>
            <div className='title'>
                <PeopleFill size='18' />
                <p>Groups</p>
            </div>
            <div className='btns'>
                { showMenu 
                    && groups.length > 0 &&
                    <span className='edit' onClick={() => setEdit(edit => !edit)}>
                        <GearFill size='15' color={gearColour}/>
                    </span>
                }

                <animated.span style={spin} onClick={() => setShowMenu(!showMenu)}>
                    <CaretUp size='20' />
                </animated.span>
            </div>
        </div>
        <animated.div style={menuAnimation} className='items'>
            {
              groups.map(group => 
                <Group 
                  group = {group}
                  key = {group.id}
                  edit = {edit}
                />
                
                )
                  
            }
        </animated.div>
    </div>
  )
}

export default Groups;