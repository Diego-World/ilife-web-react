import React from 'react';
import './App.css';
import LoginForm from './Components/LoginForm/LoginForm';
import RegisterForm from './Components/RegisterForm/RegisterForm'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
  <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<LoginForm/ >}/>
          <Route path="/register" element={<RegisterForm/ >}/>
        </Routes>
    </div>
  </Router>
  );
}

export default App;
