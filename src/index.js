import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { TodoContextProvider } from './Context/TodoContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router> 
  </React.StrictMode>
);
