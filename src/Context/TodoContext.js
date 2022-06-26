import React, {createContext} from 'react'
import { useState } from 'react';
import { useTodos, useProjects, useFilterTodos, useProjectsWithStats } from '../Components/Pages/SMS/Todo/TodoHooks';


const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
    const defaultProject = 'today'
    const [selectedProject, setSelectedProject] = useState(defaultProject);
    const [selectedTodo, setSelectedTodo] = useState(undefined)
    const todos = useTodos();
    const projects = useProjects();
    const projectsWithStats = useProjectsWithStats(projects, todos)
    // const filteredTodos = useFilterTodos(todos, selectedProject);
    return (
        <TodoContext.Provider 
            value = {
                {
                    defaultProject,
                    selectedProject,
                    setSelectedProject,
                    todos,
                    projects : projectsWithStats,
                    selectedTodo, 
                    setSelectedTodo
                }
            }
        >
            {children}
        </TodoContext.Provider>
    )
}

export {TodoContextProvider, TodoContext};