import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link2 from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
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
import {Link} from 'react-router-dom';
import './listItems.css'
import { mainListItems, secondaryListItems } from './listItems';
import Chart from './Chart';
import Deposits from './Deposits';
import Orders from '../StudentList';
import { useSelector } from 'react-redux';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
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

function Dashboard() {
  const user = useSelector((state) => state.userReducer.currentUser);
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

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
          <p className="log">EDULEARN</p>
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
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <Chart />
                </Paper>
              </Grid>
              {/* Recent Deposits */}
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <Deposits />
                </Paper>
              </Grid>
              {/* Recent Orders */}
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  <Orders />
                </Paper>
              </Grid>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Dashboard;
