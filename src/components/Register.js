// File: src/components/Register.js
import React, { useState } from 'react';
import FormField from './FormField';
import './Register.css';
import axios from 'axios'; // Import Axios

function Register() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [role, setRole] = useState('');

  const handleUserNameChange = (e) => setUserName(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePhoneChange = (e) => setPhone(e.target.value);
  const handleFirstNameChange = (e) => setFirstName(e.target.value);
  const handleLastNameChange = (e) => setLastName(e.target.value);
  const handleRoleChange = (e) => setRole(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Prepare the data to be sent to the API
    const userData = {
      userName,
      password,
      email,
      phone,
      firstName,
      lastName,
      role,
    };

    console.log("user data: ", userData)

    // Send a POST request to the registration API
    axios.post('http://localhost:8080/api/users/register', userData, {
      headers: {
        'Content-Type': 'application/json', // Set the Content-Type to JSON
      },
    })
      .then((response) => {
        // Handle the response, e.g., show a success message
        console.log('Registration successful:', response.data);
      })
      .catch((error) => {
        // Handle errors, e.g., show an error message
        console.error('Registration failed:', error);
      });
  };

  return (
    <div className="registration-container">
      <h2>Registration Form</h2>
      <form className="registration-form" onSubmit={handleSubmit}>
        <FormField label="Username" type="text" value={userName} onChange={handleUserNameChange} />
        <FormField label="Password" type="password" value={password} onChange={handlePasswordChange} />
        <FormField label="Email" type="email" value={email} onChange={handleEmailChange} />
        <FormField label="Phone Number" type="tel" value={phone} onChange={handlePhoneChange} />
        <FormField label="First Name" type="text" value={firstName} onChange={handleFirstNameChange} />
        <FormField label="Last Name" type="text" value={lastName} onChange={handleLastNameChange} />
        <FormField label="Role" type="text" value={role} onChange={handleRoleChange} />
        <button className="register-button" type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
