import React from 'react';
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography
} from '@mui/material';

function JobPostingForm() {
  return (
    <Container maxWidth="md">
      <Box sx={{ bgcolor: '#f5f5f5', p: 4, borderRadius: 2, mt: 4 }}>
        <Box sx={{ bgcolor: '#002d62', p: 2, borderRadius: 1, color: '#ffffff' }}>
          <Typography variant="h5">Post Your Job in Minutes!</Typography>
          <Typography variant="body2">
            Instant visibility to top talent across industries
            <br />
            Unlimited direct calls from qualified applicants
            <br />
            Access to 35 million+ candidates for your ideal hire
          </Typography>
          <Button variant="contained" sx={{ mt: 2, bgcolor: '#ffffff', color: '#002d62' }}>POST JOB</Button>
        </Box>

        <Typography variant="h6" sx={{ mt: 4 }}>Timings</Typography>

        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={6}>
            <TextField
              label="Job Timings*"
              placeholder="9:30 AM - 6:30 PM  Monday to Saturday"
              fullWidth
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Interview Details*"
              placeholder="11:00 AM - 4:00 PM  Monday to Saturday"
              fullWidth
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>
        </Grid>

        <Typography variant="h6" sx={{ mt: 4 }}>About Your Company</Typography>

        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={6}>
            <TextField label="Company Name *" placeholder="Eg. Eloquent info Solutions" fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Contact Person Name *" placeholder="Eg. Nilesh" fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Phone Number*" placeholder="+91" fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Email id*" placeholder="Eg. eloquent@gmail.com" fullWidth />
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel>Contact Person Profile*</InputLabel>
              <Select defaultValue="">
                <MenuItem value="HR">HR / Owner</MenuItem>
                {/* Add more options here as needed */}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel>Size of Organization *</InputLabel>
              <Select defaultValue="">
                <MenuItem value="1-10">1-10 employees</MenuItem>
                <MenuItem value="11-50">11-50 employees</MenuItem>
                <MenuItem value="51-200">51-200 employees</MenuItem>
                <MenuItem value="200+">200+ employees</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Job Address*"
              placeholder="Address ONLY shown to registered candidates"
              fullWidth
              multiline
              rows={2}
            />
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel>How often do You have a new job vacancy?</InputLabel>
              <Select defaultValue="">
                <MenuItem value="Daily">Daily</MenuItem>
                <MenuItem value="Weekly">Weekly</MenuItem>
                <MenuItem value="Monthly">Monthly</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <FormControlLabel
          control={<Checkbox />}
          label="I Accept Terms And Conditions and Privacy Policy"
          sx={{ mt: 2 }}
        />

        <Typography variant="body2" sx={{ mt: 2 }}>
          Asking job seeker for any kind of payment is strictly prohibited.
        </Typography>

        <Button variant="contained" color="primary" sx={{ mt: 4 }}>Submit</Button>
      </Box>
    </Container>
  );
}

export default JobPostingForm;
