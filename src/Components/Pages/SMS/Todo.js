import React from 'react';
import Navbar from '../../Navbar/Navbar';
import AddNewTodo from './Todo/AddNewTodo';
import Main from './Todo/Main';
import CalendarTodo from './Todo/CalendarTodo';
import Projects from './Todo/Projects';
import Todos from './Todo/Todos'
import EditTodo from './Todo/EditTodo'
import Sidebar from './Todo/Sidebar';
import '../../../App.css';
import { TodoContextProvider } from '../../../Context/TodoContext';


const Todo = () => {
  return (
    <TodoContextProvider>
      <div>
        <Navbar />
        <div className='Todo'>
          <Sidebar>
            <AddNewTodo />
            <CalendarTodo />
            <Projects />
          </Sidebar>
          <Main>
            <Todos />
            <EditTodo /> 
          </Main>
        </div>    
      </div>
    </TodoContextProvider>

  )
}


export default Todo;
