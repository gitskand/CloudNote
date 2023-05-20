

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    const json = await response.json();

    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem('token', json.authtoken);
      navigate('/');

      props.showAlert("Congratulations! Logged in Successfully.", "success");
    } else {
      props.showAlert('Unauthorized access. Please enter valid details.', "danger");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group"> <h2 ><span style={{color: '#00BFFF'}}>Login to CloudNote :)</span></h2>
        
          <label htmlFor="email" >Email address</label>
          <input
            type="email"
            className="form-control"
            id="email1"
            value={credentials.email}
            onChange={onChange}
            name="email"
            aria-describedby="emailHelp"
           
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="password1">Password</label>
          <input
            type="password"
            className="form-control"
            id="password1"
            value={credentials.password}
            onChange={onChange}
            name="password"
           
          />
        </div>

        <button
  type="submit"
  className="btn btn-outline-success btn-badge rounded-pill custom-button"
>
  Submit
</button>

      </form>
    </div>
  );
};

export default Login;
