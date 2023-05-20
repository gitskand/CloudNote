
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = (props) => {

  const [setAlert] = useState("");



  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const [credentials, setCredentials] = useState({
    name: '',
    email: '',
    password: '',
    cpassword: ''
  });
  const [error] = useState('');

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password, cpassword } = credentials;

    if (password !== cpassword) {
      props.showAlert("Password do not match", "danger");
      return;
    }

    const response = await fetch('http://localhost:5000/api/auth/createnewuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, password })
    });

    const json = await response.json();

    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem('token', json.authtoken);
      navigate('/');

      props.showAlert("Congratulations! Your Account has been created successfully.", "success");

    } else {
      props.showAlert('Unauthorized access. Please enter valid details.', "danger");
    }
  };

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group"><h2 style={{color: '#00BFFF'}}>Create your CloudNote account</h2>
          <label htmlFor="name">Enter Your Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={credentials.name}
            onChange={handleChange}

            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}

            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}

            required
          />
        </div>

        <div className="form-group" showAlert={showAlert}>
          <label htmlFor="cpassword">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="cpassword"
            name="cpassword"
            value={credentials.cpassword}
            onChange={handleChange}

            required
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

export default Signup;
