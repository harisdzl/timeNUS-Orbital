import React, {createContext} from 'react'
import { useState } from 'react';
import { useGroups } from '../Components/Pages/PMS/PmsHooks';

const PmsContext = createContext();

const PmsContextProvider = ({ children }) => {
    const [selectedGroup, setSelectedGroup] = useState(undefined);
    const groups = useGroups();

    return (
        <PmsContext.Provider
            value = {
                {
                    selectedGroup,
                    setSelectedGroup,
                    groups
                }
            }
        >
            {children}
        </PmsContext.Provider>
    )
}


export {PmsContextProvider, PmsContext};