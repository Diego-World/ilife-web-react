import React from 'react';
import './App.css';
import RegisterForm from './Components/RegisterForm/RegisterForm'
import LoginForm from './Components/LoginForm/LoginForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
/* import { useQuery } from '@tanstack/react-query'; */

function App() {


  /*
  const {data} = useQuery("ping", ()=>{
    return axios.get("http://localhost8080/pong")
  }); */
  
  return (
  <Router>
      <div className="App">
        <Routes>
          <Route path="/register" element={<RegisterForm/ >}/>
          <Route exact path="/" element={<LoginForm/ >}/>
        </Routes>
    </div>
  </Router>
  );
}

export default App;
