import React from 'react';
import { Grid, Typography, Paper, Link, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const CareerProfile = () => {
  return (
    <Paper sx={{ p: 2, backgroundColor: '#f5f5f5', maxWidth: 500 }}>
      <Grid container spacing={1} alignItems="center">
        
        <Grid item xs={8} display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">Career Profile</Typography>
          <IconButton><EditIcon /></IconButton>
        </Grid>

        <Grid item xs={6}>
          <Typography variant="body2" color="textSecondary">Current Industry</Typography>
          <Typography>Miscellaneous</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2" color="textSecondary">Department</Typography>
          <Typography>Other</Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography variant="body2" color="textSecondary">Role Category</Typography>
          <Typography>Other</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2" color="textSecondary">Job Role</Typography>
          <Typography>Other</Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography variant="body2" color="textSecondary">Desired Job Type</Typography>
          <Link href="#" underline="hover">Add desired job type</Link>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2" color="textSecondary">Desired Employment Type</Typography>
          <Link href="#" underline="hover">Add desired employment type</Link>
        </Grid>

        <Grid item xs={6}>
          <Typography variant="body2" color="textSecondary">Preferred Shift</Typography>
          <Link href="#" underline="hover">Add preferred shift</Link>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2" color="textSecondary">Preferred Work Location</Typography>
          <Link href="#" underline="hover">Add preferred work location</Link>
        </Grid>

        <Grid item xs={6}>
          <Typography variant="body2" color="textSecondary">Expected Salary</Typography>
          <Link href="#" underline="hover">Add Expected salary</Link>
        </Grid>

      </Grid>
    </Paper>
  );
};

export default CareerProfile;
