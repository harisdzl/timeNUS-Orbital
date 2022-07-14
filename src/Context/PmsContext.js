import React, {createContext} from 'react'
import { useState } from 'react';
import { useAgenda, useFilteredGroups, useGroups, useLinks } from '../Components/Pages/PMS/PmsHooks';

const PmsContext = createContext();

const PmsContextProvider = ({ children }) => {
    const [selectedGroup, setSelectedGroup] = useState('');
    const [selectedGroupName, setSelectedGroupName] = useState('');
    const [selectedGroupId, setSelectedGroupId] = useState('')

    const groups = useGroups();
    const links = useLinks(selectedGroup);
    const agendas = useAgenda(selectedGroup);

    return (
        <PmsContext.Provider
            value = {
                {
                    selectedGroup,
                    setSelectedGroup,
                    selectedGroupName,
                    setSelectedGroupName,
                    selectedGroupId,
                    setSelectedGroupId,
                    groups,
                    links,
                    agendas
                
                }
            }
        >
            {children}
        </PmsContext.Provider>
    )
}


export {PmsContextProvider, PmsContext};