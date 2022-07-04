import React, { useState, useEffect } from 'react';
import { auth, db } from '../../../../../firebase';
import { query, onSnapshot, addDoc, orderBy, startAt, endAt, collection, doc, where} from 'firebase/firestore';

export const useTodos = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const todosQuery = query(collection(db, 'todos'), where("userUID", "==", auth.currentUser.uid))
        let unsubscribe = onSnapshot(todosQuery, snapshot => {
            const data = snapshot.docs.map( doc => {
                return {
                    id : doc.id,
                    checked: doc.get('checked'),
                    color: doc.get('color'),
                    date: doc.get('date'),
                    day: doc.get('day'),
                    projectName: doc.get('projectName'),
                    text: doc.get('text'),
                    time: doc.get('time'),
                    userUID: doc.get('userUID')
                }
            })
            setTodos(data);
        })
        return () => unsubscribe();
    }, [])
    return todos;
}


export function useFilterTodos(todos, selectedProject) {
    const [filteredTodos, setFilteredTodos] = useState([]);

    useEffect( () => {
        let data;
        const todayDateFormated = new Date(); 
        if (selectedProject === 'today') {
            data = todos.filter( todo => todo.date === todayDateFormated)
        } else if (selectedProject === 'all days') {
            data = todos;
        } else {
            data = todos.filter(todo => todo.projectName === selectedProject)
        }
        setFilteredTodos(data);
    }, [todos, selectedProject])

    return filteredTodos;
}


export const useProjects = (todos) => {
    const [projects, setProjects] = useState([]);
    


    useEffect(() => {
        const projectsQuery = query(collection(db, 'projects'), where("userUID", "==", auth.currentUser.uid)) 
        let unsubscribe = onSnapshot(projectsQuery, (snapshot) => {
            const data = snapshot.docs.map((doc) => {
                return {
                    id: doc.id,
                    name: doc.get('name'),
                    userUID : doc.get('userUID')
                }
            })
            setProjects(data)
        })
        return () => unsubscribe();
    }, [])
    return projects;

}


export const useProjectsWithStats = (projects, todos) => {
    const [projectsWithStats, setProjectsWithStats] = useState([]);

    useEffect( () => {
        const data = projects.map((project) => {
            return {
                numOfTodos : todos.filter( todo => todo.projectName === project.name && !todo.checked ).length,
                ...project
            }
        })
        setProjectsWithStats(data)
    }, [todos, projects])

    return projectsWithStats; 
}
 