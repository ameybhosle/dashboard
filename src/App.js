import logo from './logo.svg';
import './App.css';
import Dashbaord from './components/Dashboard/Dashboard';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { ButtonBase, List, ListItem, ListItemText, Paper, TextField } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Icon, makeStyles } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CallIcon from '@mui/icons-material/Call';
import AppBar from '@mui/material/AppBar';
import SendIcon from '@mui/icons-material/Send';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';
import SettingsIcon from '@mui/icons-material/Settings';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { Grid } from "@mui/material"
import { Avatar } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState } from 'react';
import HistoryIcon from '@mui/icons-material/History';
import AppsIcon from '@mui/icons-material/Apps';
// import CallRoundedIcon from '@material-ui/icons/CallRounded';
import PollIcon from '@mui/icons-material/Poll';
import DialpadIcon from '@mui/icons-material/Dialpad';
import CloudSyncIcon from '@mui/icons-material/CloudSync';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Message } from '@material-ui/icons';
import { MenuItem, Select } from '@material-ui/core';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
function App() {

  return (
    <>
      <Container maxWidth={false} sx={{ height: '100vh', backgroundColor: '#ebf0ec' }} >
        <Box sx={{ height: '38px', width: '103.1%', marginLeft: '-25px', marginRight: '40px', backgroundColor: '#518db8' }}>
          <Grid container >
            <Grid item xs={4}>
              <IconButton sx={{ marginLeft: '170px' }}>
                <StackedLineChartIcon fontSize='small' sx={{ color: 'white' }} />
              </IconButton>
              <IconButton sx={{ marginLeft: '20px' }}>
                <PollIcon fontSize='small' sx={{ color: 'white' }} />
              </IconButton>
              <IconButton sx={{ marginLeft: '20px' }}>
                <PeopleAltIcon fontSize='small' sx={{ color: 'white' }} />
              </IconButton>
              <IconButton sx={{ marginLeft: '20px' }}>
                <SettingsIcon fontSize='small' sx={{ color: 'white' }} />
              </IconButton>
            </Grid>
            <Grid item xs={4}>
              <Typography sx={{ textAlign: 'center', color: 'white' }} variant="h6" component="h6">
                Agent Desktop For Amazon Connect
              </Typography>
            </Grid>
            <Grid item xs={4} sx={{ marginTop: '4px' }}>
              <Grid container>
                <Grid item xs={6}>
                  <input style={{ 'marginLeft': '200px', height: '24px' }} placeholder='After task work' />
                </Grid>
                {/* style={{ display: 'flex', justifyContent: 'flex-end' }} */}
                <Grid item xs={6} >
                  <Avatar sx={{ backgroundColor: '#ebf0ec', width: '35px', height: '35px', marginTop: '-2px', marginLeft: '200px' }}>
                    <AccountCircleIcon sx={{}} />
                  </Avatar>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ height: '38px', width: '103.1%', marginLeft: '-25px', marginRight: '40px', backgroundColor: 'white' }} >
          <Grid container sx={{ height: '100%' }}>
            <Grid item xs={6} sx={{ height: '100%', display: 'flex', justifyContent: 'flex-start' }}>
              <Button variant="contained" color="primary" sx={{ fontSize: '12px', width: '100px', height: '30px', marginLeft: '30px', marginTop: '2px', borderRadius: '0px' }}>
                <SendIcon sx={{ width: '20px', height: '50px', marginRight: '3px' }} />Compose
              </Button>
              <IconButton sx={{ marginLeft: '15px' }}>
                <MailOutlineIcon sx={{ color: '#518db8' }} />
              </IconButton>
              <IconButton sx={{ marginLeft: '7px' }}>
                <SendIcon sx={{ color: '#518db8' }} />
              </IconButton>
              <IconButton sx={{ marginLeft: '7px' }}>
                <AppsIcon sx={{ color: '#518db8' }} />
              </IconButton >
              <IconButton sx={{ marginLeft: '7px' }}>
                <HistoryIcon sx={{ color: '#518db8' }} />
              </IconButton>
            </Grid>
            <Grid item xs={6} sx={{ height: '100%', display: 'flex', justifyContent: 'flex-end' }}>
              <Select style={{ width: '200px', height: '32px', marginTop: '3px', marginRight: '15px' }} value="General">
                <MenuItem value={"General"}>General</MenuItem>
                <MenuItem value={"dfbh"}>General</MenuItem>
                <MenuItem value={"dfbh"}>General</MenuItem>
              </Select>
              {/* <input style={{ width: '200px', height: '25px', marginTop: '3px', marginRight: '15px' }} /> */}
              <IconButton sx={{ marginRight: '15px' }}>
                <DialpadIcon sx={{ color: '#518db8' }} />
              </IconButton>
              <input style={{ width: '300px', height: '25px', marginTop: '3px', marginRight: '15px' }} />
              <IconButton sx={{ marginRight: '5px' }}>
                <CloudSyncIcon sx={{ color: '#518db8' }} />
              </IconButton>
            </Grid>
          </Grid>
        </Box>
        <Grid container sx={{ width: '100%', marginTop: '10px' }}>
          <Grid item xs={3} sx={{ height: '85.7vh', backgroundColor: 'white', borderRadius: '10px' }}>
            <Box sx={{ width: '100%', height: '100%' }}>
              <Typography variant='h6' fontWeight="bold" sx={{ marginLeft: '15px' }}>
                Active Interactions
              </Typography>
              <Box sx={{ marginLeft: '10px',  height: '65%', marginRight: '10px', marginTop: '10px' }}>
                <Box sx={{ height: '80px', width: '100%', backgroundColor: '#ebf0ec', borderRadius: '7px' }}>
                  <Grid container>
                    <Grid item xs={2}>
                      <WorkOutlineIcon sx={{ marginLeft: '13px', marginTop: '20px' }} />
                    </Grid>
                    <Grid item xs={8}>
                      <Typography sx={{ fontWeight: 'bold', fontSize: '14px', marginTop: '15px' }}>Customer Complaint Care</Typography>
                      <Typography sx={{ fontWeight: 'bold', fontSize: '13px' }}>General</Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Typography sx={{ fontSize: "10px", marginLeft: '15px', marginTop: '10px' }}>01:23</Typography>
                      <AccessTimeIcon sx={{ marginLeft: '10px' }} />
                    </Grid>
                  </Grid>
                  {/* <WorkOutlineIcon sx={{ marginTop: "15px" , marginLeft:'10px' }} />
                  <Typography sx={{ fontWeight: 'bold', marginTop: '-40px', marginLeft: '50px' }}>Customer Complaint Care</Typography>
                  <Typography sx={{ marginTop: '0px', marginLeft: '50px' }}>General</Typography> */}
                </Box>
                <Box sx={{ height: '50px', width: '100%', backgroundColor: '#ebf0ec', marginTop: '10px', borderRadius: '7px' }}>
                  <Box sx={{ height: '80px', width: '100%', backgroundColor: '#ebf0ec', borderRadius: '7px' }}>
                    <Grid container>
                      <Grid item xs={2}>
                        <MailOutlineIcon sx={{ marginLeft: '13px', marginTop: '50%' }} />
                      </Grid>
                      <Grid item xs={8}>
                        <Typography sx={{ fontWeight: 'bold', fontSize: '14px', marginTop: '10px' }}>Twitter</Typography>
                        <Typography sx={{ fontWeight: 'bold', fontSize: '12px' }}>Email Support</Typography>
                        <Typography sx={{ fontWeight: 'bold', fontSize: '12px' }}>jane@1234gmai.com</Typography>
                      </Grid>
                      <Grid item xs={2} sx={{display: 'flex', justifyContent: 'flex-start'}}>
                        <Typography sx={{ fontSize: "10px" , marginTop:'20px',marginLeft:'10px' }}>01:23</Typography>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
                <Box sx={{ height: '50px', width: '100%', backgroundColor: '#ebf0ec', marginTop: '40px', borderRadius: '7px' }}>
                  <Box sx={{ height: '80px', width: '100%', backgroundColor: '#ebf0ec', borderRadius: '7px' }}>
                    <Grid container>
                      <Grid item xs={2}>
                        <MailOutlineIcon sx={{ marginLeft: '13px', marginTop: '50%' }} />
                      </Grid>
                      <Grid item xs={8}>
                        <Typography sx={{ fontWeight: 'bold', fontSize: '14px', marginTop:'10px' }}>Twitter</Typography>
                        <Typography sx={{ fontWeight: 'bold', fontSize: '13px' }}>Email Support</Typography>
                        <Typography sx={{ fontWeight: 'bold', fontSize: '13px' }}>jane@1234gmai.com</Typography>
                      </Grid>
                      <Grid item xs={2} sx={{display: 'flex', justifyContent: 'flex-start'}}>
                        <Typography sx={{ fontSize: "10px", marginLeft: '10px', marginTop: '20px' }}>01:23</Typography>
                      </Grid>
                    </Grid>
                    {/* <WorkOutlineIcon sx={{ marginTop: "15px" , marginLeft:'10px' }} />
                  <Typography sx={{ fontWeight: 'bold', marginTop: '-40px', marginLeft: '50px' }}>Customer Complaint Care</Typography>
                  <Typography sx={{ marginTop: '0px', marginLeft: '50px' }}>General</Typography> */}
                  </Box>
                </Box>
              </Box>
              <Box sx={{ height: '10px', backgroundColor: '#ebf0ec', borderRadius: '10px' }}>
              </Box>
              <Box sx={{ marginLeft: '10px', height: '23%', marginRight: '10px' }}>

              </Box>
            </Box>
          </Grid>
          <Grid item xs={0.2}>

          </Grid>
          <Grid item xs={8.8} sx={{ backgroundColor: 'white', borderRadius: '10px' }} >
            <Box sx={{ width: '100%', height: '100%' }}>

            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;
