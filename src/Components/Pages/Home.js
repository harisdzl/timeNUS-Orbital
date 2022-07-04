import React from "react";
import { Button, Nav} from "react-bootstrap";
import { useUserAuth } from "../../Context/UserAuthContext";
import NavbarComponent from "../Navbar/Navbar";
import DashboardInfo from "./DashboardInfo";
import Main from '../Pages/SMS/Todo/Main';
import Todos from '../Pages/SMS/Todo/Todos';
import "./styles.css"
import { TodoContextProvider } from '../../Context/TodoContext';


const Home = () => {
    const { user, logOut} = useUserAuth();
    const handleLogOut = async () => {
        try {
            await logOut();
        } catch (err) {
            console.log(err.message);
        }
    };
    
    return (
        <>
        <NavbarComponent/>
        <div className = "main-home">
            <p>

            </p>
            <DashboardInfo/>
        </div>
        </>
    ) 
}

export default Home; 