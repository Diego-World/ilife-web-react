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
    <div className="page-container">
      <div className="background-container">
        {/* A div do background pode ter uma imagem ou cor de fundo fixa */}
      </div>
      <div className="form-container">
        {isLogin ? <LoginForm /> : <RegisterForm />} {/* Exibe o componente baseado no estado */}
        <button onClick={toggleForm}>
          {isLogin ? 'Criar uma conta' : 'Já tem uma conta?'} {/* Texto do botão alternando */}
        </button>
      </div>
    </div>
  );
}

export default App;
