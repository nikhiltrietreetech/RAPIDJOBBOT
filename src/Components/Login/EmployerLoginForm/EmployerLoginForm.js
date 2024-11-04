import React, { useState } from 'react';
import axios from 'axios';
import './EmployerLoginForm.css';

const EmployerLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users?email=${email}`);
      const data = response.data;

      if (data.length === 0) {
        setError('Employer not found');
        return;
      }

      if (password === 'employer123') {
        alert('Employer Login Successful!');
      } else {
        setError('Invalid password');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('An error occurred during login.');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} autoComplete="off">
        <input type="text" name="fake-input" style={{ display: 'none' }} />

        <h2>Employer Login</h2>
        <div className="input-group">
          <label>Email:</label>
          <input
            type="email"
            name="unique-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off"
            required
          />
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input
            type="password"
            name="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="new-password"
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default EmployerLogin;
