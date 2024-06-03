import React, { useState } from "react";
import './Signup.css';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const SignUp = () => {
  const [fields, setFields] = useState({
    userName: "",
    emailId: "",
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

  const handleSubmit =  (e) => {
    e.preventDefault();
    const { userName, emailId, password } = fields;
    axios.post('http://localhost:3000/adduser',
     {userName,emailId,password})
     .then(result => {
      console.log(result)
      navigate('/login');
      alert('Signed up successfully!');
    })
     .catch(error=>console.error('Error adding entity:',error))
  };

  return (
    <div className="form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        {submitted && validation ? (
          <div className="success-message">Registration successful!</div>
        ) : null}

        {showError && !fields.userName && <span>Please enter your userName</span>}
        <input
          id="userName"
          className="form-field"
          type="text"
          placeholder="UserName"
          name="userName"
          value={fields.userName}
          onChange={handleChange}
        />

        {showError && !fields.emailId && <span>Please enter your emailId</span>}
        <input
          id="emailId"
          className="form-field"
          type="text"
          placeholder="EmailId"
          name="emailId"
          value={fields.emailId}
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