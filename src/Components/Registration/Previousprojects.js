import React, { useState } from 'react';
import { Box, Typography, Divider, Button, Grid } from '@mui/material';

const Previousprojects = () => {
  const [projectData, setProjectData] = useState({
    projectTitle: '',
    profileSummary: '',
    onlineProfile: '',
    workSample: '',
    whitePaper: '',
    presentation: '',
    patent: '',
    certification: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProjectData({
      ...projectData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem('previousProjects', JSON.stringify(projectData));
    alert('Data saved to LocalStorage!');
  };

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
      <Grid item xs={12} md={6}>
        <Box sx={{ maxWidth: 750, margin: 'auto', padding: 2, backgroundColor: '#f5f5f5' }}>
          <form onSubmit={handleSubmit}>
            <Box sx={{ marginBottom: 3 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="h6">Projects</Typography>
                <Button size="small">Add project</Button>
              </Box>
              <input
                type="text"
                placeholder="Enter Project Title"
                name="projectTitle"
                value={projectData.projectTitle}
                onChange={handleChange}
                style={{ width: '100%', padding: '8px', marginTop: '8px', marginBottom: '8px' }}
              />
            </Box>

            <Divider />

            <Box sx={{ marginBottom: 3, marginTop: 3 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="h6">Profile summary</Typography>
                <Button size="small">Add profile summary</Button>
              </Box>
              <input
                type="text"
                placeholder="Enter Profile Summary"
                name="profileSummary"
                value={projectData.profileSummary}
                onChange={handleChange}
                style={{ width: '100%', padding: '8px', marginTop: '8px', marginBottom: '8px' }}
              />
            </Box>

            <Divider />

            <Box sx={{ marginBottom: 3, marginTop: 3 }}>
              <Typography variant="h6">Accomplishments</Typography>

              <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
                <Typography variant="h6">Online profile</Typography>
                <input
                  type="text"
                  placeholder="Enter Online Profile (e.g., LinkedIn)"
                  name="onlineProfile"
                  value={projectData.onlineProfile}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '8px', marginTop: '8px', marginBottom: '8px' }}
                />
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
                <Typography variant="h6">Work sample</Typography>
                <input
                  type="text"
                  placeholder="Enter Work Sample (e.g., GitHub)"
                  name="workSample"
                  value={projectData.workSample}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '8px', marginTop: '8px', marginBottom: '8px' }}
                />
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
                <Typography variant="h6">White paper/Research publication</Typography>
                <input
                  type="text"
                  placeholder="Enter Publication Details"
                  name="whitePaper"
                  value={projectData.whitePaper}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '8px', marginTop: '8px', marginBottom: '8px' }}
                />
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
                <Typography variant="h6">Presentation</Typography>
                <input
                  type="text"
                  placeholder="Enter Presentation Link"
                  name="presentation"
                  value={projectData.presentation}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '8px', marginTop: '8px', marginBottom: '8px' }}
                />
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
                <Typography variant="h6">Patent</Typography>
                <input
                  type="text"
                  placeholder="Enter Patent Details"
                  name="patent"
                  value={projectData.patent}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '8px', marginTop: '8px', marginBottom: '8px' }}
                />
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
                <Typography variant="h6">Certification</Typography>
                <input
                  type="text"
                  placeholder="Enter Certification Details"
                  name="certification"
                  value={projectData.certification}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '8px', marginTop: '8px', marginBottom: '8px' }}
                />
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 3 }}>
                <Button type="submit" variant="contained" color="primary">
                 submit
                </Button>
              </Box>
            </Box>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Previousprojects;
