import React, {createContext} from 'react'
import { useState } from 'react';
import { useDashboard } from '../Components/Pages/Dashboard/DashboardHooks';


const DashboardContext = createContext();

const DashboardContextProvider = ({ children }) => {
    const dashboard = useDashboard();
    return (
        <DashboardContext.Provider 
            value = {
                {
                    dashboard
                }
            }
        >
            {children}
        </DashboardContext.Provider>
    )
}

export {DashboardContextProvider, DashboardContext};