import React from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {
  Box,
  Toolbar,
  Typography,
  Button,
  Grid,
  Paper,
  Divider
} from '@mui/material';
import { GroupsRounded, EventRounded, CampaignRounded, AssessmentRounded } from '@mui/icons-material';

const AdminDashboard = ({ isSidebarExpanded }) => {
  const navigate = useNavigate();
  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <>
    <Toolbar id="atoolbar" sx={{marginLeft: isSidebarExpanded ? 0 : 9 }}>Dashboard</Toolbar>
    <Box
      sx={{
        display: 'flex',
        minHeight: '100vh',
        transition: 'margin-left 0.3s ease',
        marginLeft: isSidebarExpanded ? 0 : 10, // Adjust margin dynamically
        padding: 5,
      }}
    >
      <Box
        sx={{
          flex: 1, // Ensure the content takes full width minus the sidebar
        }}
      >
        {/* Header Section */}
        <Typography
          variant="h5"
          gutterBottom
          sx={{ fontWeight: 'thin', mb: 4, fontFamily: 'Gilda Display', fontSize: 30 }}
        >
          Welcome club leader!<br />
          <small>This is your all-in-one space to manage everything about your club.</small>
        </Typography>

        {/* Statistics Section */}
        <Grid id="adg" container spacing={3} sx={{ mb: 6, padding: 3, borderRadius: 2 }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: 'thin', mb: 2, verticalAlign: 'middle' }}>
            Club 1<br />
            <small>STATS</small>
        </Typography>
          <Grid item xs={12} sm={6} md={3}>
            <Paper sx={{ padding: 2, textAlign: 'center', borderRadius: 2, backgroundColor: 'rgb(225, 255, 222)' }}>
              <Typography variant="h6">Total Members</Typography>
              <Typography variant="h4" sx={{ fontFamily: 'Gilda Display' }}>80</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper sx={{ padding: 2, textAlign: 'center', borderRadius: 2, backgroundColor: 'rgb(255, 255, 224)' }}>
              <Typography variant="h6">Upcoming Events</Typography>
              <Typography variant="h4" sx={{ fontFamily: 'Gilda Display' }}>6</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper sx={{ padding: 2, textAlign: 'center', borderRadius: 2, backgroundColor: 'rgb(255, 224, 224)' }}>
              <Typography variant="h6">Posts this Month</Typography>
              <Typography variant="h4" sx={{ fontFamily: 'Gilda Display' }}>12</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper sx={{ padding: 2, textAlign: 'center', borderRadius: 2, backgroundColor: 'rgb(220, 228, 255)' }}>
              <Typography variant="h6">New Enrollments</Typography>
              <Typography variant="h4" sx={{ fontFamily: 'Gilda Display' }}>10</Typography>
            </Paper>
          </Grid>
        </Grid>

        {/* Action Section */}
        <Typography
          variant="h5"
          gutterBottom
          sx={{ fontWeight: 'thin', mb: 4, fontSize: 30 }}
        >
          Actions<br />
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ p: 5, textAlign: 'center', borderRadius: 3, boxShadow: 3, maxHeight: 200, maxWidth: 250 }}>
              <GroupsRounded sx={{ fontSize: 40, color: '#3f51b5' }} />
              <CardContent>
                <Typography variant="h6">Manage Club</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  View and manage club members, enrollments and more.
                </Typography>
                <Button id="adb" variant="outlined" fullWidth sx={{ mt: 2 }} onClick={() => handleCardClick('/AdminMembers')}>
                  Manage
                </Button>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ p: 5, textAlign: 'center', borderRadius: 3, boxShadow: 3, maxHeight: 200, maxWidth: 250 }}>
              <EventRounded sx={{ fontSize: 40, color: '#4caf50' }} />
              <CardContent>
                <Typography variant="h6">Manage Events</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  Add, edit, cancel or manage club events.
                </Typography>
                <Button id="adb" variant="outlined" fullWidth sx={{ mt: 2 }} onClick={() => handleCardClick('/AdminEvents')}>
                  Manage
                </Button>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ p: 5, textAlign: 'center', borderRadius: 3, boxShadow: 3, maxHeight: 200, maxWidth: 250 }}>
              <CampaignRounded sx={{ fontSize: 40, color: '#f44336' }} />
              <CardContent>
                <Typography variant="h6">Announcements</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  Create, publish and view announcements.
                </Typography>
                <Button id="adb" variant="outlined" fullWidth sx={{ mt: 2 }} onClick={() => handleCardClick('/AdminAnno')}>
                  Post Announcements
                </Button>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ p: 5, textAlign: 'center', borderRadius: 3, boxShadow: 3, maxHeight: 200, maxWidth: 250 }}>
              <AssessmentRounded sx={{ fontSize: 40, color: '#ff9800' }} />
              <CardContent>
                <Typography variant="h6">Reports</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  Create, view, edit, publish or remove reports.
                </Typography>
                <Button id="adb" variant="outlined" fullWidth sx={{ mt: 2 }} onClick={() => handleCardClick('/AdminReports')}>
                  View Reports
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
    <BottomNavigation id="bn"><Typography>&copy; 2025 College Club Portal</Typography></BottomNavigation>
    </>
  );
};

export default AdminDashboard;
