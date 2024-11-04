import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    try {
      const response = await axios.post('http://localhost:5000/v1/api/jobseekers/login', formData);

      setSuccessMessage(response.data.message); // Display success message
      localStorage.setItem('token', response.data.token); // Store JWT token in local storage

      // Redirect or navigate to the dashboard or another page if needed
      // window.location.href = '/dashboard';
    } catch (error) {
      console.error('Error logging in:', error);
      setErrorMessage(error.response?.data?.message || 'Login failed');
    }
  };

  return (
    <Container maxWidth="xs">
      <Box sx={{ backgroundColor: '#f5f5f5', padding: 4, borderRadius: 2, boxShadow: 3 }}>
        <Typography variant="h4" align="center" gutterBottom>Login</Typography>

        {errorMessage && <Typography color="error" align="center">{errorMessage}</Typography>}
        {successMessage && <Typography color="primary" align="center">{successMessage}</Typography>}

        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            name="email"
            type="email"
            variant="outlined"
            fullWidth
            required
            value={formData.email}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            variant="outlined"
            fullWidth
            required
            value={formData.password}
            onChange={handleChange}
            margin="normal"
          />

          <Button type="submit" variant="contained" color="primary" fullWidth>Login</Button>
        </form>
      </Box>
    </Container>
  );
};

export default Login;
