import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Box,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Grid,
  Card,
  CardContent,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@mui/material';

const JobForm = () => {
  const [formData, setFormData] = useState({
    jobTitle: '',
    jobLocation: '',
    openings: '',
    experienceLevel: '',
    minSalary: '',
    maxSalary: '',
    bonus: 'No',
    jobDescription: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ backgroundColor: '#003366', color: '#fff', p: 3, borderRadius: 1, mb: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Post Your Job in Minutes!
        </Typography>
        <Typography variant="body1" align="center">
          Instant visibility to top talent across industries<br />
          Unlimited direct calls from qualified applicants<br />
          Access to 35 million+ candidates for your ideal hire
        </Typography>
        <Box textAlign="center" mt={2}>
          <Button variant="contained" color="primary">
            POST JOB
          </Button>
        </Box>
      </Box>

      <Typography variant="h6" gutterBottom>
        Basic Job Details
      </Typography>
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Job Title"
                name="jobTitle"
                variant="outlined"
                fullWidth
                required
                placeholder="Enter the job title"
                value={formData.jobTitle}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Job Location</InputLabel>
                <Select
                  name="jobLocation"
                  value={formData.jobLocation}
                  onChange={handleChange}
                  required
                >
                  <MenuItem value="Mumbai">Mumbai</MenuItem>
                  <MenuItem value="Delhi">Delhi</MenuItem>
                  <MenuItem value="Bangalore">Bangalore</MenuItem>
                  <MenuItem value="Hyderabad">Hyderabad</MenuItem>
                  <MenuItem value="Pune">Pune</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="No Of Openings"
                name="openings"
                variant="outlined"
                fullWidth
                required
                placeholder="e.g. 2"
                value={formData.openings}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Typography variant="h6" gutterBottom>
        Candidate Requirement
      </Typography>
      <Card>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="body2">Total Experience of Candidate</Typography>
              <Box display="flex" gap={2} mt={1}>
                <Button
                  variant={formData.experienceLevel === 'Any' ? 'contained' : 'outlined'}
                  onClick={() => setFormData({ ...formData, experienceLevel: 'Any' })}
                >
                  Any
                </Button>
                <Button
                  variant={formData.experienceLevel === 'Freshers Only' ? 'contained' : 'outlined'}
                  onClick={() => setFormData({ ...formData, experienceLevel: 'Freshers Only' })}
                >
                  Freshers Only
                </Button>
                <Button
                  variant={formData.experienceLevel === 'Experienced only' ? 'contained' : 'outlined'}
                  onClick={() => setFormData({ ...formData, experienceLevel: 'Experienced only' })}
                >
                  Experienced only
                </Button>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="Minimum Salary"
                name="minSalary"
                variant="outlined"
                fullWidth
                placeholder="e.g. 10000"
                value={formData.minSalary}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Maximum Salary"
                name="maxSalary"
                variant="outlined"
                fullWidth
                placeholder="e.g. 15000"
                value={formData.maxSalary}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <Typography variant="body2">Do you offer a bonus in addition to monthly salary?</Typography>
              <RadioGroup
                row
                name="bonus"
                value={formData.bonus}
                onChange={handleChange}
              >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Job Info / Job Description"
                name="jobDescription"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                placeholder="Enter the job description"
                value={formData.jobDescription}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Box textAlign="right" mt={2}>
        <Typography variant="body2" color="primary">
          Need Help? Call Us at 8712349669
        </Typography>
      </Box>
    </Container>
  );
};

export default JobForm;
