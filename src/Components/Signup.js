import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert} from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../Context/UserAuthContext";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [course, setCourse] = useState("");
  const { signUp } = useUserAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password, username, course);
      navigate("/");
    } catch(err) {
      setError(err.message);
    }
  };
    return (
        <>
        <img src="/images/timenus-cropped-logo.png" alt="timeNUS logo"/>
          <div className="p-4 box">
            <h2 className="mb-3">Sign Up</h2>
            {error && <Alert variant="danger">{ error }</Alert>}
            <Form onSubmit={ handleSubmit }>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Email address"
                  onChange={ (e) => setEmail(e.target.value)}
                />
              </Form.Group>
    
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={ (e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Control
                  type="Username"
                  placeholder="Username"
                  onChange={ (e) => setUsername(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCourse">
                <Form.Control
                  type="Course"
                  placeholder="Course"
                  onChange={ (e) => setCourse(e.target.value)}
                />
              </Form.Group>
    
              <div className="d-grid gap-2">
                <Button variant="primary" type="Submit">
                  Sign Up
                </Button>
              </div>
            </Form>
            <hr />
          </div>
          <div className="p-4 box mt-3 text-center">
            Already have an account? <Link to="/">Log In</Link>
          </div>
        </>
      );
    };

export default Signup