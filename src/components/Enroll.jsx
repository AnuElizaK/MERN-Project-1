import * as React from 'react';
import  TextField  from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import './Enroll.css'

const Enroll = () => {
  return (
    <>
<Box component="section"  sx={{ p: 4 }} className='enrollbox'>
    <div className="a">
        <h3 className='enroll'>ENROLLMENT FORM</h3> 
      
        <form className='enrollform'>
       
        <TextField
            id="name"
            label="Name"
            type="text"
            className='enrollinput'
        />
        <br /><br /><br />
            
        <TextField
            id="Rollno"
            label="Roll Number"
            type="text"
            className='enrollinput'
        />
        <br /><br /><br />

        <TextField
            id="Dept"
            label="Department"
            type="text"
            className='enrollinput'
        />
        <br /><br /><br />

        <TextField
            id="no"
            label="Contact Number"
            type="number"
            className='enrollinput'
            />
        <br /><br /><br />

        <TextField
            id="clubname"
            label="Club Name"
            type="text"
            className='enrollinput'
            />
        <br /><br /><br />
        
        <Button type="submit" variant="contained" id='ebutton'>ENROLL</Button>
      </form>
    </div>
  </Box>


    </>
  )
}

export default Enroll