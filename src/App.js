import React from 'react';
import './App.css';
import LoginForm from './Components/LoginForm/LoginForm';
import RegisterForm from './Components/RegisterForm/RegisterForm'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

function App() {


  {/*
  const {data} = useQuery("ping", ()=>{
    return axios.get("http://localhost8080/pong")
  });
  */}
  
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
