import React from 'react'
import { useContext } from 'react';
import Next7Days from './Next7Days';
import TodoComponent from './TodoComponent';
import { TodoContext } from '../../../../Context/TodoContext';

const Todos = () => {
    const { todos, selectedProject } = useContext(TodoContext); 
    
  return (
    <div className='Todos'>
        <div className='selected-project'>
            {selectedProject}
        </div>
        <div className='todos'>
            {
                selectedProject === 'next 7 days' ?
                <Next7Days todos={todos} />
                :
                todos.map( (todo) => 
                    (<TodoComponent todo={todo} key={todo.id} />))
            }
        </div>
    </div>
  )
}


export default Todos;
