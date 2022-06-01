import React from "react"
import "./App.css";
import { Routes, Route } from 'react-router-dom'
import { Container, Row, Col, Navbar} from 'react-bootstrap'
import Login from "./Components/Login";
import Signup from "./Components/Signup"
import Home from "./Components/Home"
import { UserAuthContextProvider } from "./Context/UserAuthContext";
import ProtectedRoute from "./Components/ProtectedRoute";
import PMS from "./Components/Pms";
import SMS from "./Components/Sms";

function App() {
  return (
  <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vH" }}
    >
      <Row>
        <Col>
          <UserAuthContextProvider>
            <Routes>
              <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
              <Route path="/Sms" element={<ProtectedRoute><SMS /></ProtectedRoute>} />
              <Route path="/Pms" element={<ProtectedRoute><PMS /></ProtectedRoute>} />
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>    
          </UserAuthContextProvider>

        </Col>
      </Row>
  </Container>


  )
}

export default App;
