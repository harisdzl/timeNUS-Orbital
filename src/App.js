import React from "react"
import { Routes, Route } from 'react-router-dom'
import { Container, Row, Col, Navbar, Nav} from 'react-bootstrap'
import Login from "./Components/Login";
import Signup from "./Components/Signup"
import Home from "./Components/Pages/Dashboard/Home"
import { UserAuthContextProvider } from "./Context/UserAuthContext";
import ProtectedRoute from "./Components/ProtectedRoute";
import PMSHome from "./Components/Pages/PMS/PmsHome";
import Calendar from "./Components/Pages/SMS/Calendar";
import Todo from "./Components/Pages/SMS/Todo";
import { TodoContextProvider } from "./Context/TodoContext";
import { db } from "./firebase";

function App() {
  return (
    <UserAuthContextProvider>
      <Routes>
        {/* Authentication Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* App Routes */}
        <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />


        {/* SMS Routes */}
        <Route path="/Sms/Calendar" element={<ProtectedRoute><Calendar /></ProtectedRoute>} />
        <Route path="/Sms/Todo" element={<ProtectedRoute><Todo /></ProtectedRoute>} />

        {/* PMS Routes */}
        <Route path="/Pms" element={<ProtectedRoute><PMSHome/></ProtectedRoute>} />

      </Routes>
    </UserAuthContextProvider>



  )
}

export default App;
