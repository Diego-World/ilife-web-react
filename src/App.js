import React, {useState} from 'react';
import './App.css';
import RegisterForm from './Components/RegisterForm/RegisterForm'
import LoginForm from './Components/LoginForm/LoginForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(prevState => !prevState);  // Alterna o estado
  };

  return (
    <Router>
    <div className="page-container">
      <div className="background-container">
      </div>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<LoginForm/ >}/>
          <Route path="/register" element={<RegisterForm/ >}/>
          <Route exact path="/" element={<LoginForm/ >}/>
        </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
