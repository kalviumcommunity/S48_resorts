import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [showError, setShowError] = useState(false); 
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.username && credentials.password) {
      console.log("Username:", credentials.username);
      console.log("Password:", credentials.password);
      setSubmitted(true);
      setShowError(false); 
      navigate("/Home")
    } else {
      setShowError(true); 
    }
  };

  return (
    <div className="form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        {showError && !credentials.username && (
          <span className="error-message">Please enter your username</span>
        )}

        <input
          id="username"
          className="form-field"
          type="text"
          placeholder="Username"
          name="username"
          value={credentials.username}
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
          <div className="info-message">Logging in as {credentials.username}</div>
        )}
      </form>
    </div>
  );
};

export default Login;
