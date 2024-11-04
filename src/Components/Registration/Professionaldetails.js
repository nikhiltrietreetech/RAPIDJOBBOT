import React from 'react';
import { Box, Card, Typography, Link, Grid, Divider } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const Professionaldetails = () => {
  return (
    <Card sx={{ padding: 2, maxWidth: 400, backgroundColor: '#f5f5f5' }}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h6" fontWeight="bold">
          Personal details
        </Typography>
        <EditIcon fontSize="small" />
      </Box>
      <Typography variant="body2" color="textSecondary" sx={{ marginBottom: 2 }}>
        This information is important for employers to know you better
      </Typography>
      
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography variant="subtitle2" fontWeight="bold">Personal</Typography>
          <Link href="#" variant="body2">Add gender, Marital status, more info</Link>
        </Grid>
        
        <Grid item xs={6}>
          <Typography variant="subtitle2" fontWeight="bold">Career break</Typography>
          <Link href="#" variant="body2">Add Career break</Link>
        </Grid>
        
        <Grid item xs={6}>
          <Typography variant="subtitle2" fontWeight="bold">Date of birth</Typography>
          <Link href="#" variant="body2">Add Date of birth</Link>
        </Grid>
        
        <Grid item xs={6}>
          <Typography variant="subtitle2" fontWeight="bold">Work permit</Typography>
          <Link href="#" variant="body2">Add Work permit</Link>
        </Grid>
        
        <Grid item xs={6}>
          <Typography variant="subtitle2" fontWeight="bold">Category</Typography>
          <Link href="#" variant="body2">Add Category</Link>
        </Grid>
        
        <Grid item xs={6}>
          <Typography variant="subtitle2" fontWeight="bold">Address</Typography>
          <Link href="#" variant="body2">Add Address</Link>
        </Grid>
        
        <Grid item xs={6}>
          <Typography variant="subtitle2" fontWeight="bold">Differently abled</Typography>
          <Link href="#" variant="body2">Add Differently abled</Link>
        </Grid>
        
        <Grid item xs={6}>
          <Typography variant="subtitle2" fontWeight="bold">Languages</Typography>
          <Link href="#" variant="body2">Add languages</Link>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Professionaldetails;
