import React from "react";
import { Button, Nav} from "react-bootstrap";
import { useUserAuth } from "../../../Context/UserAuthContext";
import NavbarComponent from "../../Navbar/Navbar";

import { TodoContextProvider } from '../../../Context/TodoContext';
import ModuleSummary from "./ModuleSummary";
import NumTodo from './NumTodo'; 
import NumProjects from './NumProjects'; 
import SemesterProgressBar from "./SemesterProgressBar";
import AddModuleButton from "./AddModuleButton";
import { DashboardContextProvider } from "../../../Context/DashboardContext";
import { PmsContextProvider } from "../../../Context/PmsContext";
import './styles.css';


const Home = () => {   
    return (
        <DashboardContextProvider>
            <PmsContextProvider>
                <TodoContextProvider>
                    <NavbarComponent/>
                    <div className = "main-home">
                        <AddModuleButton />
                        <ModuleSummary />
                        <NumTodo />
                        <NumProjects />
                        <SemesterProgressBar />
                    </div>
                </TodoContextProvider>                   
            </PmsContextProvider>

        </DashboardContextProvider>
 
    ) 
}

export default Home; 