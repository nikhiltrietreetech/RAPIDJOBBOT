import React from 'react';
import {
  Container,
  Typography,
  Button,
  Box,
  Grid,
  Card,
  CardContent,
  Divider,
  IconButton,
  Stack,
  Link,
} from '@mui/material';
import { People, Mail, Group, Work, CalendarToday } from '@mui/icons-material';

const Employerdashbord = () => {
  return (
    <Container maxWidth="lg">
      {/* Header Section */}
      <Box sx={{ backgroundColor: '#003366', color: '#fff', padding: 3, borderRadius: 1, mb: 4 }}>
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

      {/* Stats Section */}
      <Grid container spacing={2} justifyContent="center" sx={{ mb: 4 }}>
        {[
          { label: 'Active Jobs', icon: <People fontSize="large" /> },
          { label: 'New Applications', icon: <Mail fontSize="large" /> },
          { label: 'Candidates to be reviewed', icon: <Group fontSize="large" /> },
          { label: 'Shortlisted candidates to be Interviewed', icon: <Work fontSize="large" /> },
          { label: 'Interviews scheduled for today', icon: <CalendarToday fontSize="large" /> },
        ].map((item, index) => (
          <Grid item xs={6} md={2} key={index} textAlign="center">
            <IconButton color="primary" disableRipple>
              {item.icon}
            </IconButton>
            <Typography variant="body2">{item.label}</Typography>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={4}>
        {/* Overview of Active Jobs */}
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h6">Overview of Active Jobs</Typography>
              <Box mt={2} display="flex" justifyContent="center" flexDirection="column" alignItems="center">
                <Typography variant="body2" color="textSecondary">
                  You don’t have any active jobs right now.
                  <br />
                  You will see a graph here when you do
                </Typography>
                <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                  POST JOB
                </Button>
                <Link href="#" sx={{ mt: 1 }}>View previously posted jobs</Link>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Upcoming Interviews */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Upcoming Interviews</Typography>
              <Typography variant="body2" color="textSecondary" sx={{ mt: 2 }}>
                0 interviews scheduled
              </Typography>
              <Link href="#" color="primary" sx={{ display: 'block', mt: 1 }}>See Demo</Link>
              <Divider sx={{ my: 2 }} />
              <Typography variant="body2">Start Interviewing Today</Typography>
              <Button variant="outlined" color="primary" sx={{ mt: 1 }}>Select Job</Button>
              <Button variant="outlined" color="primary" sx={{ mt: 2 }}>Select Calendar</Button>
              <Box mt={2} textAlign="center">
                <Button variant="contained" color="primary">View Candidates</Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Recent Jobs */}
      <Box mt={4}>
        <Typography variant="h6">Recent Jobs</Typography>
        <Divider sx={{ mb: 2 }} />
        <Grid container spacing={2}>
          {[
            {
              title: 'Technical Architect - Identity & Access Management',
              location: 'Anywhere in India/Multiple Location',
              experience: '8-17 yrs',
              applications: '5 Applications',
              new: '0 New',
              date: '14 Jul 2023',
            },
            {
              title: 'Java Full Stack Developer - Object Oriented Programming Languages',
              location: 'Anywhere in India/Multiple Locations Hyderabad',
              experience: '6-12 yrs',
              applications: '16 Applications',
              new: '0 New',
              date: '1 Jun 2023',
            },
          ].map((job, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="subtitle1">{job.title}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {job.location}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {job.experience}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Published: {job.date}
                  </Typography>
                  <Typography variant="body2">
                    <Link href="#">View Recommended Candidates</Link>
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    <strong>{job.applications}</strong> | <strong>{job.new}</strong> New
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Candidates Who Have Followed Up */}
      <Box mt={4}>
        <Typography variant="h6">Candidates Who Have Followed Up</Typography>
        <Divider sx={{ mb: 2 }} />
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="subtitle1">KARAN PANDYA</Typography>
                <Typography variant="body2" color="textSecondary">Senior Video Editor at Scenebeat</Typography>
                <Typography variant="body2" color="textSecondary">Gandhinagar, 5y 2m</Typography>
                <Typography variant="body2" color="textSecondary">
                  Applied to: Video Editor - After Effects (3-10 Yrs)
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Employerdashbord;
