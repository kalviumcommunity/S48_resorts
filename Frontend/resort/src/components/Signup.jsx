import React, { useState } from "react";
import './Signup.css';
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  const [fields, setFields] = useState({
    username: "",
    email: "",
    password: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [validation, setValidation] = useState(false);
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields({ ...fields, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (fields.username && fields.email && fields.password) {
      setValidation(true);
      setSubmitted(true);
      setShowError(false);
      navigate("/Login")
    } else {
      setShowError(true); // Show error if any of the fields are empty
    }
  };

  return (
    <div className="form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        {submitted && validation ? (
          <div className="success-message">Registration successful!</div>
        ) : null}

        {showError && !fields.username && <span>Please enter your username</span>}
        <input
          id="username"
          className="form-field"
          type="text"
          placeholder="Username"
          name="username"
          value={fields.username}
          onChange={handleChange}
        />

        {showError && !fields.email && <span>Please enter your email</span>}
        <input
          id="email"
          className="form-field"
          type="text"
          placeholder="Email"
          name="email"
          value={fields.email}
          onChange={handleChange}
        />

        {showError && !fields.password && <span>Please enter your password</span>}
        <input
          id="password"
          className="form-field"
          type="password"
          placeholder="Password"
          name="password"
          value={fields.password}
          onChange={handleChange}
        />

        <button className="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default SignUp;
