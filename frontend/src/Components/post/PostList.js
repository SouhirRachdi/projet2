import React from "react";
import Post from "./Post";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {getPosts} from '../../Redux/Actions/postaction';
import PersonIcon from '@mui/icons-material/Person';

import ArticleIcon from '@mui/icons-material/Article';
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link2 from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import isWeekend from 'date-fns/isWeekend';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import {LocalizationProvider} from '@mui/lab';
import {StaticDatePicker} from '@mui/lab';
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AddCardIcon from '@mui/icons-material/AddCard';
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { mainListItems, secondaryListItems } from '../dashboard/listItems';
import {Link} from 'react-router-dom';
import {useNavigate} from "react-router-dom"
import { useState } from "react";
import '../dashboard/listItems.css'
//import {getUser} from '../../Redux/Actions/Useraction';
import './Post.css';
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright ?? '}
      <Link2 color="inherit" href="https://mui.com/">
        Your Website
      </Link2>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;



const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const mdTheme = createTheme();
export default function PostList() {
  const user = useSelector((state) => state.userReducer.currentUser);
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const [value, setValue] = React.useState(new Date());
  const navigate=useNavigate()
  const dispatch = useDispatch();
  const theme = createTheme();
  const posts = useSelector((state) => state.postReducer.posts);
  const postload = useSelector((state) => state.postReducer.loading);


  if (postload){
    <h1>Loading...</h1>
  }
 


  return (
    <ThemeProvider theme={mdTheme}>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      
      <Drawer variant="permanent" open={open}>
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          px: [1],
        }}
      >
        
        <IconButton onClick={toggleDrawer}>
        <p className="log">EDU<strong className="mainname" style={{color:'#F8D90F'}}>L</strong>EARN</p>
          <ChevronLeftIcon />
        
        </IconButton>
      </Toolbar>
      <Divider />
      {user.role == "prof" ? (
        <List component="nav">
          <Link   className="side-bar" to="/dashboard">
            <ListItemButton>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </Link>
          <Link className="side-bar" to="/cours">
            <ListItemButton>
              <ListItemIcon>
                <LibraryBooksIcon />
              </ListItemIcon>
              <ListItemText primary=" Course" />
            </ListItemButton>
          </Link>
          <Link  className="side-bar" to="/library">
            <ListItemButton>
              <ListItemIcon>
                <VideoLibraryIcon />
              </ListItemIcon>
              <ListItemText primary=" Library" />
            </ListItemButton>
          </Link>
          <Link className="side-bar" to="/posts">
            <ListItemButton>
              <ListItemIcon>
                <DynamicFeedIcon />
              </ListItemIcon>
              <ListItemText primary=" Posts" />
            </ListItemButton>
          </Link>
          <Link className="side-bar" to="/Calendar">
            <ListItemButton>
              <ListItemIcon>
                <CalendarMonthIcon />
              </ListItemIcon>
              <ListItemText primary="Calendar" />
            </ListItemButton>
          </Link>
          <Link className="side-bar" to="/addCour">
            <ListItemButton>
              <ListItemIcon>
                <AddCardIcon />
              </ListItemIcon>
              <ListItemText primary="Add Course" />
            </ListItemButton>
          </Link>
          <Link className="side-bar" to="/addtolab">
            <ListItemButton>
              <ListItemIcon>
                <AddCardIcon />
              </ListItemIcon>
              <ListItemText primary="Add Video" />
            </ListItemButton>
          </Link>
          <Link className="side-bar" to="/addPost">
            <ListItemButton>
              <ListItemIcon>
                <AddCardIcon />
              </ListItemIcon>
              <ListItemText primary="Add Post" />
            </ListItemButton>
          </Link>

          <Link  className="side-bar" to="/student">
            <ListItemButton>
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary="Students" />
            </ListItemButton>
          </Link>
          <ListItemButton>
            <ListItemIcon>
              <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="Reports" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <LayersIcon />
            </ListItemIcon>
            <ListItemText primary="All course" />
          </ListItemButton>
         
        </List>
      ) : (
        <List component="nav">
          <Link className="side-bar" to="/dashboard">
            <ListItemButton>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </Link>
          <Link className="side-bar" to="/cours">
            <ListItemButton>
              <ListItemIcon>
                <LibraryBooksIcon />
              </ListItemIcon>
              <ListItemText primary=" Course" />
            </ListItemButton>
          </Link>
          <Link className="side-bar" to="/library">
            <ListItemButton>
              <ListItemIcon>
                <VideoLibraryIcon />
              </ListItemIcon>
              <ListItemText primary=" Library" />
            </ListItemButton>
          </Link>
          <Link className="side-bar" to="/posts">
            <ListItemButton>
              <ListItemIcon>
                <DynamicFeedIcon />
              </ListItemIcon>
              <ListItemText primary=" Posts" />
            </ListItemButton>
          </Link>
          <Link  className="side-bar" to="/addPost">
            <ListItemButton>
              <ListItemIcon>
                <AddCardIcon />
              </ListItemIcon>
              <ListItemText primary="Add Post" />
            </ListItemButton>
          </Link>
          <Link  className="side-bar" to="/Calendar">
            <ListItemButton>
              <ListItemIcon>
                <CalendarMonthIcon />
              </ListItemIcon>
              <ListItemText primary="Calendar" />
            </ListItemButton>
          </Link>
          <Link className="side-bar" to="/Performance">
            <ListItemButton>
              <ListItemIcon>
                <ArticleIcon />
              </ListItemIcon>
              <ListItemText primary=" Performance" />
            </ListItemButton>
          </Link>
          <Link className="side-bar" to="/TeachersListboard">
            <ListItemButton>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary=" Teachersboard" />
            </ListItemButton>
          </Link>

        </List>
      )}
    </Drawer>
      <Box 
className="postss"
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
         
          overflow: 'auto',
        }}
      >
        
        <Container sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}>
            {/* Chart */}
            
            
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper className="paperback" >
              <ThemeProvider theme={theme}>
      <Container component="main" >
        <div style={{
          marginLeft:10,
            marginTop: 8,
            display: 'flex',
            flexWrap: 'wrap'}} >

     {posts&&posts.map((post) => (
            <Post post={post} key={post.id} />
          ))}

  </div>
        
      </Container>
    </ThemeProvider>
              </Paper>
            </Grid>
          </Grid>
        
        </Container>
      </Box>
    </Box>
  </ThemeProvider>
    
  );
}