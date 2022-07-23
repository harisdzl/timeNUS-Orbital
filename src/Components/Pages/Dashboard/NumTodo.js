import React, { useContext } from 'react';
import { TodoContext, TodoContextProvider } from '../../../Context/TodoContext';
import { db } from '../../../firebase';

const NumTodo = () => {
    const { todos } = useContext(TodoContext); 
    let numOfUnchecked = 0;
    todos.map((todo) => {
        if (!todo.checked) {
            numOfUnchecked += 1; 
        }
    })

    return (
    <div className='NumTodo'>
        <h1>
            To-dos
        </h1>
        <div className='NumTodo-num'>
            <h1>
                {
                    numOfUnchecked
                }
            </h1>
        </div>


    </div>
  )
}

export default NumTodo; 