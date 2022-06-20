import React from "react"
import { Routes, Route } from 'react-router-dom'
import { Container, Row, Col, Navbar, Nav} from 'react-bootstrap'
import Login from "./Components/Login";
import Signup from "./Components/Signup"
import Home from "./Components/Pages/Home"
import { UserAuthContextProvider } from "./Context/UserAuthContext";
import ProtectedRoute from "./Components/ProtectedRoute";
import PMS from "./Components/Pages/PMS/Pms";
import SMS from "./Components/Pages/SMS/Sms";
import Calendar from "./Components/Pages/SMS/Calendar";
import Todo from "./Components/Pages/SMS/Todo";

function App() {
  return (
    <UserAuthContextProvider>
      <Routes>

        {/* App Routes */}
        <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />

        {/* SMS Routes */}
        <Route path="/Sms" element={<ProtectedRoute><SMS /></ProtectedRoute>} />
        <Route path="/Sms/Calendar" element={<ProtectedRoute><Calendar /></ProtectedRoute>} />
        <Route path="/Sms/Todo" element={<ProtectedRoute><Todo /></ProtectedRoute>} />

        {/* PMS Routes */}
        <Route path="/Pms" element={<ProtectedRoute><PMS /></ProtectedRoute>} />

        {/* Authentication Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </UserAuthContextProvider>



  )
}

export default App;
