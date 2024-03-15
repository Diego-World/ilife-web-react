import React, { useState } from 'react';
import { FaUserAstronaut } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';

const RegisterForm = () => {

    const [formData, setFormData] = useState({
        name:"",
        email:"",
        birthDate:"",
        password:"",
        confirmPassword:""
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]:value})
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            console.log("A senha e a confirmação de senha não são iguais.");

            return; 
          }
          console.log("Formulário válido. Enviar para o servidor:");

        console.log(formData);
    };


  return (
    <div className='wrapper'>
        <form onSubmit={handleSubmit}>
            <h1>Register</h1>
            <div className="input-box">
                <input type="text" 
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required/>
                <FaUserAstronaut className='icon'/>
            </div>

            <div className="input-box">
                <input type="text" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder='Email' required/>
                <FaUserAstronaut className='icon'/>
            </div>

            <div className="input-box">
                <input type="date" 
                name="birthDate"
                value={formData.birthDate}
                onChange={handleChange}
                min="1924-01-01" max="2004-01-01" placeholder='Birth' required/>
                <FaLock className='icon'/>
            </div>

            <div className="input-box">
                <input type="password" 
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder='Password' required/>
                <FaLock className='icon'/>
            </div>

            <div className="input-box">
                <input type="password" 
                name="confirmPassword"
                onChange={handleChange}
                value={formData.confirmPassword}
                placeholder='Confirm Password' required/>
                <FaLock className='icon'/>
            </div>

            <button type="submit">Register</button>

            <div className="register-link">
                <p>Already have an account? <Link to='/'>Login</Link></p>
            </div>
        </form>
    </div>
  )
}

export default RegisterForm;