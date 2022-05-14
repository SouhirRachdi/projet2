
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "../../Redux/Actions/Useraction";
import { useNavigate } from "react-router-dom";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
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
import MuiDrawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
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
import { secondaryListItems } from '../dashboard/listItems';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {Link} from 'react-router-dom';
import '../dashboard/listItems.css'
import "./Profil.css";
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
function Profil() {
  const user = useSelector((state) => state.userReducer.currentUser);
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  }
   const Input = styled("input")({
    display: "none",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = createTheme();
  const [image, setImage] = React.useState("");
  const oldUser = useSelector((state) => state.userReducer.currentUser);
  //console.log(oldUser);
  const [newuser, setNewuser] = React.useState(oldUser);
  React.useEffect(() => {
    setNewuser(oldUser);
  }, [oldUser]);
  const handelSave = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file",image);
    console.log(data.get("file"));
    data.append("firstName",newuser.firstName);
    console.log(data.get("firstName"))
    dispatch(editUser(oldUser._id, data, navigate));
  };
 

  return (<ThemeProvider theme={mdTheme}>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      
      <Drawer variant="permanent" open={open}>
        <Toolbar
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            px: [1],
          }}
        >
          <IconButton onClick={toggleDrawer}>
          <p className="log">EDULEARN</p>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        {user.role=="prof"?(<List component="nav">
        <Link to ="/dashboard">
        <ListItemButton >
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
      </Link>
      <Link to="/cours">
      <ListItemButton>
      <ListItemIcon>
      <LibraryBooksIcon/>
        </ListItemIcon>
      <ListItemText primary=" Course" />
    </ListItemButton>
    </Link>
    <Link to="/library">
    <ListItemButton>
    <ListItemIcon>
    <VideoLibraryIcon/>
      </ListItemIcon>
    <ListItemText primary=" Library" />
  </ListItemButton>
  </Link>
  <Link to="/posts">
    <ListItemButton>
    <ListItemIcon>
    <DynamicFeedIcon/>
      </ListItemIcon>
    <ListItemText primary=" Posts" />
  </ListItemButton>
  </Link>
      <Link to="/Calendar">
      <ListItemButton>
        <ListItemIcon>
          <CalendarMonthIcon/>
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
      </ListItemButton><Divider sx={{ my: 1 }} />
      {secondaryListItems}
    </List>):(<List component="nav"><Link to ="/dashboard">
    <ListItemButton >
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    </Link>
    <Link to="/cours">
    <ListItemButton>
    <ListItemIcon>
    <LibraryBooksIcon/>
      </ListItemIcon>
    <ListItemText primary=" Course" />
  </ListItemButton>
  </Link>
  <Link to="/library">
  <ListItemButton>
  <ListItemIcon>
  <VideoLibraryIcon/>
    </ListItemIcon>
  <ListItemText primary=" Library" />
</ListItemButton>
</Link>
<Link to="/posts">
  <ListItemButton>
  <ListItemIcon>
  <DynamicFeedIcon/>
    </ListItemIcon>
  <ListItemText primary=" Posts" />
</ListItemButton>
</Link>
    <Link to="/Calendar">
      <ListItemButton>
        <ListItemIcon>
          <CalendarMonthIcon/>
        </ListItemIcon>
        <ListItemText primary="Calendar" />
      </ListItemButton>
      </Link>
      <Link className="side-bar" to="/Performance">
                <ListItemButton>
                  <ListItemIcon>
                    <VideoLibraryIcon />
                  </ListItemIcon>
                  <ListItemText primary=" Performance" />
                </ListItemButton>
              </Link>
              <Link className="side-bar" to="/Studentboard">
                <ListItemButton>
                  <ListItemIcon>
                    <VideoLibraryIcon />
                  </ListItemIcon>
                  <ListItemText primary=" Studentboard" />
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
        <div>
        <div>
          <div className="container rounded bg-white mt-5 mb-5">
            <div className="row">
              <form>
                <div className="col-md-3 border-right">
                  <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                    <img
                      className="rounded-circle mt-5"
                      width="150px"
                      src={newuser && newuser.image}
                    />
                    <Stack direction="row" alignItems="center" spacing={2}>
                  <label htmlFor="icon-button-file">
                    <Input
                      accept="image/*"
                      id="icon-button-file"
                      type="file"
                      name="file"
                      onChange={(e) => setImage(e.target.files[0])}
                    />
                    <IconButton
                      color="primary"
                      aria-label="upload picture"
                      component="span"
                    >
                      <PhotoCamera />
                    </IconButton>
                  </label>
                </Stack>
                    <span className="font-weight-bold">{oldUser && oldUser.firstName}</span>
                    <span className="text-black-50">{oldUser && oldUser.email}</span>
                    <span> </span>
                  </div>
                </div>
                
                
  
                <div className="col-md-5 border-right">
                  <div className="p-3 py-5">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h4 className="text-right">Profile Settings</h4>
                    </div>
                    <div className="row mt-2">
                      <div className="col-md-6">
                        <label className="labels">FirstName</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder=""
                          defaultValue={oldUser && oldUser.firstName}
                          onChange={(e) =>
                            setNewuser({ ...newuser, firstName: e.target.value })
                          }
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="labels">LastName</label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue={oldUser && oldUser.lastName}
                          onChange={(e) =>
                            setNewuser({ ...newuser, lastName: e.target.value })
                          }
                        />
                      </div>
                    </div>
  
                    <div className="row mt-3">
                      <div className="col-md-6">
                        <label className="labels">Country</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="country"
                          defaultValue
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="labels">State/Region</label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue
                          placeholder="state"
                        />
                      </div>
                    </div>
                    <div className="mt-5 text-center">
                      <button
                        className="btn btn-primary profile-button"
                        onClick={handelSave}
                        type="button"
                      >
                        Save Profile
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              <div className="col-md-4">
                <div className="p-3 py-5">
                  <div className="d-flex justify-content-between align-items-center experience">
                    <span>Edit Experience</span>
                    <span className="border px-3 p-1 add-experience">
                      <i className="fa fa-plus" />
                      &nbsp;Experience
                    </span>
                  </div>
                  <br />
                  <div className="col-md-12">
                    <label className="labels">Experience in Designing</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="experience"
                      defaultValue
                    />
                  </div>{" "}
                  <br />
                  <div className="col-md-12">
                    <label className="labels">Additional Details</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="additional details"
                      defaultValue
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
            
           
          
        </Box>
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
    
 

export default Profil;
