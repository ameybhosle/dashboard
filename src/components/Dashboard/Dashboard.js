import Left from "../Left Component/Left";
import Right from "../Right Component/Right"
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
import DialpadIcon from '@mui/icons-material/Dialpad';
import CloudSyncIcon from '@mui/icons-material/CloudSync';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
const Dashbaord = () => {
  return (
    <>
      <Box sx={{ height: '38px', width: '103.1%', marginLeft: '-25px', marginRight: '40px' }}>
        <Grid container>
          <Grid item xs={6}>
            <ButtonBase sx={{ backgroundColor: '', border: '2px solid red', height: '' }} >
              Blue
            </ButtonBase>
            <IconButton sx={{ marginLeft: '50px', color: 'lightskyblue' }}>
              <SendIcon fontSize='small' sx={{}} />
            </IconButton>
            <IconButton sx={{ marginLeft: '20px' }}>
              <HistoryIcon fontSize='small' sx={{ color: 'white' }} />
            </IconButton>
            <IconButton sx={{ marginLeft: '20px' }}>
              <AppsIcon fontSize='small' sx={{ color: 'white' }} />
            </IconButton>
          </Grid>
          <Grid item xs={6}>

          </Grid>
        </Grid>
      </Box>
      <Container maxWidth={false} sx={{ height: '88vh', width: "103.4%", marginLeft: '-20px', marginTop: '5px' }}>
        <Box sx={{ width: "25%", height: "88vh", backgroundColor: 'white', borderRadius: '10px', display: 'inline-block', marginTop: '-2220px', marginLeft: '-20px' }}>
          <Box sx={{ width: '100%', height: '75%', border: '2px solid red' }}>
            <Typography sx={{ marginLeft: '10px', marginTop: '5px', fontWeight: 'bold' }}>
              Active Interactions
            </Typography>
            <List>
              <ListItem sx={{ backgroundColor: '#ebf0ec', width: '95%', marginLeft: '9px', marginTop: '20px', borderRadius: '10px' }}>
                <Box sx={{ width: '100%', height: '53px' }}>
                  <WorkOutlineIcon sx={{ marginTop: "15px" }} />
                  <Typography sx={{ fontWeight: 'bold', marginTop: '-40px', marginLeft: '50px' }}>Customer Complaint Care</Typography>
                  <Typography sx={{ marginTop: '0px', marginLeft: '50px' }}>General</Typography>
                </Box>
              </ListItem>
              <ListItem sx={{ backgroundColor: '#ebf0ec', width: '95%', marginLeft: '9px', marginTop: '10px', borderRadius: '10px' }}>
                <Box sx={{ width: '100%', height: '53px' }}>
                  <MailOutlineIcon sx={{ marginTop: "15px" }} />
                </Box>
              </ListItem>
              <ListItem sx={{ backgroundColor: '#ebf0ec', width: '95%', marginLeft: '9px', marginTop: '10px', borderRadius: '10px' }}>
                <Box sx={{ width: '100%', height: '53px' }}>
                  <MailOutlineIcon sx={{ marginTop: "15px" }} />
                </Box>
              </ListItem>
            </List>
          </Box>
          <Box sx={{ border: '2px solid red', width: '100%', height: '25%' }}>

          </Box>
        </Box>
        <Box sx={{ width: "74%", height: "88vh", backgroundColor: 'greenyellow', display: 'inline-block', marginLeft: '30px', borderRadius: '10px' }}>

        </Box>
      </Container>
    </>
  );
}

export default Dashbaord;