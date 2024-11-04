import React, { useState } from 'react';
import { TextField, Button, Grid, MenuItem, Box } from '@mui/material';
import axios from 'axios';
const ProfessionalSkillsForm = () => {
  const [formData, setFormData] = useState({
    profession: '',
    jobRole: '',
    experienceYears: '',
    experienceMonths: '',
    skills: [],
    certifications: '',
    objective: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/v1/api/professional-skills/register', formData);
      alert(response.data.message);
    } catch (error) {
      console.error('Error registering :', error);
      alert('Registration failed');
    }
  };

  return (
    <Box sx={{ p: 4,  backgroundColor: '#f0f0f0', borderRadius: '8px',width:'50%', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
    <form onSubmit={handleSubmit}>
      <Grid container spacing={1}justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
        <Grid item xs={12}>
        

          <TextField
            label="Profession name"
            name="profession"
            fullWidth
            required
            value={formData.profession}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Current Job"
            name="jobRole"
            fullWidth
            required
            value={formData.jobRole}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            select
            label="Experience (Years)"
            name="experienceYears"
            fullWidth
            required
            value={formData.experienceYears}
            onChange={handleChange}
          >
            {[...Array(31).keys()].map((year) => (
              <MenuItem key={year} value={year}>{year}</MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            select
            label="Experience (Months)"
            name="experienceMonths"
            fullWidth
            required
            value={formData.experienceMonths}
            onChange={handleChange}
          >
            {[...Array(12).keys()].map((month) => (
              <MenuItem key={month} value={month}>{month}</MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Skills"
            name="skills"
            fullWidth
            required
            value={formData.skills}
            onChange={(e) => setFormData({ ...formData, skills: e.target.value.split(', ') })}
            placeholder="Comma-separated skills (e.g., IT, Marketing)"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Professional licenses/Certifications"
            name="certifications"
            fullWidth
            value={formData.certifications}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Career objective"
            name="objective"
            fullWidth
            multiline
            rows={3}
            value={formData.objective}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} style={{  justifyContent: 'space-between' }}>
          <Button type="button">Skip</Button>
          <Button type="submit" variant="contained" color="primary">Next</Button>
          
        </Grid>
        
      </Grid>
      
    </form>
    </Box>
  );
};

export default ProfessionalSkillsForm;
