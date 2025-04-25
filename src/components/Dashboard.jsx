import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Grid from '@mui/material/Grid';

const Dashboard = () => {
    const navigate = useNavigate();
    const handleCardClick = (path) => { navigate(path); }; // Navigates to the given path
  return (
    //Dashboard component for events and announcements.
    <Grid container spacing={2}>

    <Grid xs={6} sx={{ ml: 'auto', mr: 'auto' }}>
    <Card sx={{ maxWidth: 600, mt: 5, display: 'flex' }} onClick={() => handleCardClick('/events')}>
      <CardActionArea id="events">
        <CardMedia
          component="img"
          height="140"
          image="https://img.freepik.com/free-vector/friends-play-eat-together_107791-14874.jpg?t=st=1744910187~exp=1744913787~hmac=5220f362ae899e6c7ca71d8f8edb03a30c0c28955b8e8bdea167d26b173fb357&w=1380"
          alt="events"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{fontSize: '35px'}}>
            Events
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Click here to keep up with the latest events, curated by our clubs just for you.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>

    <Grid xs={6} sx={{ ml: 'auto', mr: 'auto' }}>
    <Card sx={{ maxWidth: 600, mt: 5, display: 'flex' }} onClick={() => handleCardClick('/announcements')}>
      <CardActionArea id="anno">
        <CardMedia
          component="img"
          height="140"
          image="https://img.freepik.com/free-vector/time-management-business-planning-schedule_107791-16970.jpg?t=st=1744910310~exp=1744913910~hmac=f14891ec956ee4b110b31b0091dd479d89d3515155f620091aa61cce08d7e805&w=1380"
          alt="announcements"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{fontSize: '35px'}}>
            Announcements
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Click here to keep up with the latest announcements and updates from the clubs.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>

    {/*Dashboard component for clubs. */}
    <h1 style={{textAlign:"center"}} id="ch"> All Clubs
        
        <Grid container spacing={2}>
        
        <Grid xs={6} sx={{ mr: 'auto', ml: 'auto' }}>
        <Card sx={{ maxWidth: 500, mt: 3 }} onClick={() => handleCardClick('/club1')}>
          <CardActionArea id="clubs">
            <CardMedia
              component="img"
              height="140"
              image="https://img.freepik.com/free-vector/people-studying-online-flat-set-isolated-white_107791-15519.jpg?t=st=1744910604~exp=1744914204~hmac=e7801cadf90978e8b21233930b61d3459c95be606fa26d64e02ed5eb36e0da98&w=1380"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={{fontSize: '35px'}}>
                Club 1
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                There are over 30 active clubs (and counting) to choose from, created and managed by our beloved and dedicated 
                student body. Click here to learn more about them.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        </Grid>
    
        <Grid xs={6} sx={{ mr: 'auto', ml: 'auto' }}>
        <Card sx={{ maxWidth: 500, mt: 3 }} onClick={() => handleCardClick('/club2')}>
          <CardActionArea id="clubs">
            <CardMedia
              component="img"
              height="140"
              image="https://img.freepik.com/free-vector/people-studying-online-flat-set-isolated-white_107791-15519.jpg?t=st=1744910604~exp=1744914204~hmac=e7801cadf90978e8b21233930b61d3459c95be606fa26d64e02ed5eb36e0da98&w=1380"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={{fontSize: '35px'}}>
                Club 2
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                There are over 30 active clubs (and counting) to choose from, created and managed by our beloved and dedicated 
                student body. Click here to learn more about them.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        </Grid>
    
        <Grid xs={6} sx={{ mr: 'auto', ml: 'auto' }}>
        <Card sx={{ maxWidth: 500, mt: 3 }} onClick={() => handleCardClick('/club3')}>
          <CardActionArea id="clubs">
            <CardMedia
              component="img"
              height="140"
              image="https://img.freepik.com/free-vector/people-studying-online-flat-set-isolated-white_107791-15519.jpg?t=st=1744910604~exp=1744914204~hmac=e7801cadf90978e8b21233930b61d3459c95be606fa26d64e02ed5eb36e0da98&w=1380"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={{fontSize: '35px'}}>
                Club 3
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                There are over 30 active clubs (and counting) to choose from, created and managed by our beloved and dedicated 
                student body. Click here to learn more about them.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        </Grid>
    
        <Grid xs={6} sx={{ mr: 'auto', ml: 'auto' }}>
        <Card sx={{ maxWidth: 500, mt: 3 }} onClick={() => handleCardClick('/club4')}>
          <CardActionArea id="clubs">
            <CardMedia
              component="img"
              height="140"
              image="https://img.freepik.com/free-vector/people-studying-online-flat-set-isolated-white_107791-15519.jpg?t=st=1744910604~exp=1744914204~hmac=e7801cadf90978e8b21233930b61d3459c95be606fa26d64e02ed5eb36e0da98&w=1380"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={{fontSize: '35px'}}>
                Club 4
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                There are over 30 active clubs (and counting) to choose from, created and managed by our beloved and dedicated 
                student body. Click here to learn more about them.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        </Grid>
    
        <Grid xs={6} sx={{ mr: 'auto', ml: 'auto' }}>
        <Card sx={{ maxWidth: 500, mt: 3 }} onClick={() => handleCardClick('/club5')}>
          <CardActionArea id="clubs">
            <CardMedia
              component="img"
              height="140"
              image="https://img.freepik.com/free-vector/people-studying-online-flat-set-isolated-white_107791-15519.jpg?t=st=1744910604~exp=1744914204~hmac=e7801cadf90978e8b21233930b61d3459c95be606fa26d64e02ed5eb36e0da98&w=1380"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={{fontSize: '35px'}}>
                Club 5
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                There are over 30 active clubs (and counting) to choose from, created and managed by our beloved and dedicated 
                student body. Click here to learn more about them.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        </Grid>
    
        </Grid>
        </h1>

    </Grid>
  );
}
export default Dashboard;
