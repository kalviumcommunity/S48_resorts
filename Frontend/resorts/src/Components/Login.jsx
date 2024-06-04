import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
  const [credentials, setCredentials] = useState({
    userName: "",
    password: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [showError, setShowError] = useState(false); 
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  function setCookie(name, value, daysToExpire) {
    let date = new Date();
    date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
    document.cookie =
      name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
  }

  const handleSubmit = async(e)=>{
    e.preventDefault();
    try{
      const {userName,password} = credentials
      const response = await axios.post('http://localhost:3000/login',{userName,password});
      if(response.data.success){
        setCookie('userName', userName, 1);
        setCookie('acessToken',response.data.accessToken)
        navigate('/resortslist');
        alert("Login successfull")
      }else{
        console.error('Login failed:',response.data.message);
      }
    } catch(error){
      alert("Login failed")
      console.error('Error during login:', error.message);
    }
  };

  return (
    <div className="form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        {showError && !credentials.userName && (
          <span className="error-message">Please enter your username</span>
        )}

        <input
          id="username"
          className="form-field"
          type="text"
          placeholder="Username"
          name="userName"
          value={credentials.userName}
          onChange={handleChange}
        />

        {showError && !credentials.password && (
          <span className="error-message">Please enter your password</span>
        )}

        <input
          id="password"
          className="form-field"
          type="password"
          placeholder="Password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
        />

        <button className="form-field" type="submit">
          Login
        </button>

        {submitted && (
          <div className="info-message">Logging in as {credentials.userName}</div>
        )}
      </form>
    </div>
  );
};

export default Login;