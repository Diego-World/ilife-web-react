import React from 'react';
import './LoginForm.css';
import { FaUserAstronaut } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const LoginForm = () => {
  return (
    <div className='wrapper'>
        <form action="">
            <h1>Login</h1>
            <div className="input-box">
                <input type="text" placeholder='Username' required/>
                <FaUserAstronaut className='icon'/>
            </div>

            <div className="input-box">
                <input type="text" placeholder='Password' required/>
                <FaLock className='icon'/>
            </div>

            <div className="remember-forgot">
                <label><input type='checkbox' />Remember me</label>
                <a href='#'>Forgot password?</a>
            </div>

            <button type="submit">Login</button>

            <div className="registger-link">
                <p>Don't have an account? <a href='/register'>Register</a></p>
            </div>
        </form>
    </div>
  )
}

export default LoginForm