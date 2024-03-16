import React from 'react';
import { FaUserAstronaut } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

const RegisterForm = () => {

    const { register, handleSubmit, getValues, formState:{errors}} = useForm({
        defaultValues: {
            name:"",
            email:"",
        }
    });

    const onSubmit = (data) => console.log(data);

    const validateBirthDate = (value) => {
        const currentDate = new Date();
        const selectedDate = new Date(value);
        const minDate = new Date(currentDate.getFullYear() - 16, currentDate.getMonth(), currentDate.getDate());
    
        if (selectedDate >= minDate) {
          return "You must be at least 16 years old.";
        }
        return true;
    };

    const validatePassword = (value) => {
        
        if (value.length < 8) {
            return false;
        }
        if (!/[A-Z]/.test(value)) {
            return false;
        }
        if (!/\d/.test(value)) {
            return false;
        }
        return true;
    };

    const validateConfirmPassword = (value) => {
        const { password } = getValues(); // Obter o valor do campo de senha
        if (value !== password) {
          return "Senhas divergentes";
        }
        return true;
      };  
      
  return (
    <div className='wrapper'>
        <form onSubmit={handleSubmit(onSubmit)}>

            <h1>Register</h1>

            <div className="input-box">
                <input type="text" 
                placeholder="Name"
                name="name"
                {...register("name", {required:"Name is required",})}
                required/>
                <FaUserAstronaut className='icon'/>
            </div>
            
            <div className="input-box">
            <input
            type="text"
            name="email"
            {...register("email", {
                required: "Email is required",
                pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email address"
                }
            })}
            placeholder='Email'
            />
            {/* Ícone de usuário */}
            <FaUserAstronaut className='icon'/>
        </div>
        {errors.email && <span>{errors.email.message}</span>}

        <div className="input-box">
        <input
          type="date"
          name="birthDate"
          {...register("birthDate", {
            required: "Birth date is required",
            validate: validateBirthDate
          })}
          min="1924-01-01"
          placeholder='Birth'
        />
        {/* Ícone de cadeado */}
        <FaLock className='icon'/>
      </div>
      {/* Exibe a mensagem de erro para o campo de data de nascimento */}
      {errors && errors.birthDate && <span>{errors.birthDate.message}</span>}

      <div className="input-box">
        <input
          type="password"
          name="password"
          {...register("password", {
            required: "Password is required",
            validate: validatePassword
          })}
          placeholder='Password'
        />
        {/* Ícone de cadeado */}
        <FaLock className='icon'/>
      </div>
      {/* Exibe a mensagem de erro para o campo de senha */}
      {errors && errors.password && <span>{errors.password.message}</span>}

            <h6>A senha deve ter no mínimo 8 caracteres</h6>
            <h6>Letra maíscula, símbolo e número</h6>

            <div className="input-box">
        <input
          type="password"
          name="confirmPassword"
          {...register("confirmPassword", {
            required: "Confirmation password is required",
            validate: validateConfirmPassword
          })}
          placeholder='Confirm Password'
        />
        {/* Ícone de cadeado */}
        <FaLock className='icon'/>
      </div>
      {/* Exibe a mensagem de erro para o campo de confirmação de senha */}
      {errors && errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}

            <button type="submit">Register</button>

            <div className="register-link">
                <p>Already have an account? <Link to='/'>Login</Link></p>
            </div>
        </form>
    </div>
  )
}

export default RegisterForm;