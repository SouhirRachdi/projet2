import * as React from "react";
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
import CardActions from "@mui/material/CardActions";
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
import { useDispatch, useSelector } from "react-redux";
import {Link, useParams} from 'react-router-dom';
import { addCour, deleteCour, getOneCour } from "../../Redux/Actions/Couraction";
import {useNavigate} from "react-router-dom"
import { useState } from "react";
import '../dashboard/listItems.css';
// Import the main component
import { Viewer } from '@react-pdf-viewer/core'; // install this library
// Plugins
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'; // install this library
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// Worker
import { Worker } from '@react-pdf-viewer/core'; // install this library
import { Pdf } from "../Pdf";
import { useEffect } from "react";



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
const Cour = () => {
  const {id} = useParams();
  useEffect(() => {
    dispatch(getOneCour(id))
  }, [id])
  const courses = useSelector((state) => state.courReducer.courses);
  const Cour = useSelector((state) => state.courReducer.cour);
  const loding = useSelector((state) => state.courReducer.loading);

//console.log(Cour)
  // Create new plugin instance
 
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const user = useSelector((state) => state.userReducer.currentUser);
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const toggleDrawer2 = () => {
    setOpen2(!open2);
  };
  
  const navigate=useNavigate()
  const dispatch = useDispatch();
 
  const theme = createTheme();
 
  
  
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
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        {user.role == "prof" ? (
          <List component="nav">
            <Link to="/dashboard">
              <ListItemButton>
                <ListItemIcon>
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItemButton>
            </Link>
            <Link to="/cours">
              <ListItemButton>
                <ListItemIcon>
                  <LibraryBooksIcon />
                </ListItemIcon>
                <ListItemText primary=" Course" />
              </ListItemButton>
            </Link>
            <Link to="/library">
              <ListItemButton>
                <ListItemIcon>
                  <VideoLibraryIcon />
                </ListItemIcon>
                <ListItemText primary=" Library" />
              </ListItemButton>
            </Link>
            <Link to="/posts">
              <ListItemButton>
                <ListItemIcon>
                  <DynamicFeedIcon />
                </ListItemIcon>
                <ListItemText primary=" Posts" />
              </ListItemButton>
            </Link>
            <Link to="/Calendar">
              <ListItemButton>
                <ListItemIcon>
                  <CalendarMonthIcon />
                </ListItemIcon>
                <ListItemText primary="Calendar" />
              </ListItemButton>
            </Link>
            <Link to="/addCour">
              <ListItemButton>
                <ListItemIcon>
                  <AddCardIcon />
                </ListItemIcon>
                <ListItemText primary="Add Course" />
              </ListItemButton>
            </Link>
            <Link to="/addtolab">
              <ListItemButton>
                <ListItemIcon>
                  <AddCardIcon />
                </ListItemIcon>
                <ListItemText primary="Add Video" />
              </ListItemButton>
            </Link>
            <Link to="/addPost">
              <ListItemButton>
                <ListItemIcon>
                  <AddCardIcon />
                </ListItemIcon>
                <ListItemText primary="Add Post" />
              </ListItemButton>
            </Link>

            <Link to="/student">
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
            <Divider sx={{ my: 1 }} />
            {secondaryListItems}
          </List>
        ) : (
          <List component="nav">
            <Link to="/dashboard">
              <ListItemButton>
                <ListItemIcon>
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItemButton>
            </Link>
            <Link to="/cours">
              <ListItemButton>
                <ListItemIcon>
                  <LibraryBooksIcon />
                </ListItemIcon>
                <ListItemText primary=" Course" />
              </ListItemButton>
            </Link>
            <Link to="/library">
              <ListItemButton>
                <ListItemIcon>
                  <VideoLibraryIcon />
                </ListItemIcon>
                <ListItemText primary=" Library" />
              </ListItemButton>
            </Link>
            <Link to="/posts">
              <ListItemButton>
                <ListItemIcon>
                  <DynamicFeedIcon />
                </ListItemIcon>
                <ListItemText primary=" Posts" />
              </ListItemButton>
            </Link>
            <Link to="/addPost">
              <ListItemButton>
                <ListItemIcon>
                  <AddCardIcon />
                </ListItemIcon>
                <ListItemText primary="Add Post" />
              </ListItemButton>
            </Link>
            <Link to="/Calendar">
              <ListItemButton>
                <ListItemIcon>
                  <CalendarMonthIcon />
                </ListItemIcon>
                <ListItemText primary="Calendar" />
              </ListItemButton>
            </Link>

            <Divider sx={{ my: 1 }} />
            {secondaryListItems}
          </List>
        )}
        </Drawer>
        <Drawer variant="permanent" open={open2}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer2}>
             Material Name
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          {courses&&courses.map((el)=>(<div key={el._id}><Link to={`/courDetails/${el._id}`}>
          <ListItemButton>
          <ListItemIcon>
          <LibraryBooksIcon/>
            </ListItemIcon>
          <ListItemText primary={el.materialName} />
        </ListItemButton>
        </Link></div>))}
          
        </Drawer>
        <Box 
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Chart */}
              
              
              {/* Recent Orders */}
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
         {loding?"loding...":<div><div className='container'>
         <br></br>
           <br></br>
           <h4> {Cour.title}</h4>
         <div className='pdf-container'>
         
         {<Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
           <Viewer fileUrl={Cour.content}
             plugins={[defaultLayoutPluginInstance]} />
        </Worker>}
        </div>
        </div>
        </div>
        }
          <div><div className='container'>
          <br></br>
            <br></br>
            <h4> {Cour.title}</h4>
          <div className='pdf-container'>
          
          {<Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
            <Viewer fileUrl={Cour.content}
              plugins={[defaultLayoutPluginInstance]} />
         </Worker>}
         </div>
         </div>
         </div>
         
          </Box>
          {user&&user.role=="prof"?  <CardActions>
          <Link to ={`/editCour/${Cour._id}`} ><Button size="small" >Edit</Button></Link> 
           <Button size="small" onClick={()=>dispatch(deleteCour(Cour._id),navigate("/cours"))}>Delete</Button>
         </CardActions>:null}
        </Container>
      </ThemeProvider>
                </Paper>
              </Grid>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Cour;
/* <div><div className='container'>
          <br></br>
            <br></br>
            <h4> {courses.find((el) => el._id == _id).title}</h4>
          <div className='pdf-container'>
          
          {<Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
            <Viewer fileUrl={courses.find((el) => el._id == _id).content}
              plugins={[defaultLayoutPluginInstance]} />
         </Worker>}
         </div>
         </div>
            
         </div>*/