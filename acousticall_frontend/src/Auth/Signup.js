import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    username:'',
    password: '',
    confirmPassword: '',
    disabilityType: '',
    currentLocation: '',
    dob: ''
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleRegistration = () => {
    // Check if passwords match
    if (formValues.password !== formValues.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    // Send registration data to the server
    axios
      .post('http://localhost:5000/users/registration', formValues)
      .then((response) => {
        if (response.data.message === 'User was registered successfully!') {
          alert('Registration Successful');
        } else {
          setError('Registration Failed');
        }
      })
      .catch((error) => {
        setError('Registration Failed');
      });
  };

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center min-vh-100">
        <div className="col-md-6 p-4 rounded registration-form">
          <h2 className="text-center mb-4">Registration</h2>
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">
              First Name:
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="form-control"
              value={formValues.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">
              Last Name:
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="form-control"
              value={formValues.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Phone Number:
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="form-control"
              value={formValues.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              value={formValues.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              User Name:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="form-control"
              value={formValues.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              value={formValues.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password:
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="form-control"
              value={formValues.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="disabilityType" className="form-label">
              Type of Disability:
            </label>
            <select
              id="disabilityType"
              name="disabilityType"
              className="form-select"
              value={formValues.disabilityType}
              onChange={handleChange}
            >
              <option value="">Select Disability Type</option>
              <option value="physical">Physical Disability</option>
              <option value="visual">Visual Impairment</option>
              <option value="hearing">Hearing Impairment</option>
              {/* Add more disability types as needed */}
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="currentLocation" className="form-label">
              Current Location:
            </label>
            <input
              type="text"
              id="currentLocation"
              name="currentLocation"
              className="form-control"
              value={formValues.currentLocation}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="dob" className="form-label">
              Date of Birth:
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              className="form-control"
              value={formValues.dob}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3 d-flex justify-content-center">
            <button
              className="btn btn-primary me-2"
              type="button"
              onClick={handleRegistration}
              aria-label="Register"
            >
              Register
            </button>
            <button
              className="btn btn-secondary"
              type="button"
              onClick={() => navigate('/login')}
              aria-label="Login"
            >
              Login
            </button>
          </div>
          {error && (
            <div className="alert alert-danger mt-3" role="alert" aria-live="assertive">
              {error}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Signup;
