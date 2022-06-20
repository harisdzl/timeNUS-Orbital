import React from 'react'
import Next7Days from './Next7Days';
import TodoComponent from './TodoComponent';

const Todos = () => {
  return (
    <div className='Todos'>
        <TodoComponent />
        <Next7Days />
    </div>
  )
}


export default Todos;
