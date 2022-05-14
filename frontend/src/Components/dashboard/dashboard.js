import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link2 from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import PersonIcon from '@mui/icons-material/Person';

import ArticleIcon from '@mui/icons-material/Article';
import LayersIcon from "@mui/icons-material/Layers";
import AssignmentIcon from "@mui/icons-material/Assignment";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AddCardIcon from "@mui/icons-material/AddCard";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import { Link } from "react-router-dom";
import "./listItems.css";
import { mainListItems, secondaryListItems } from "./listItems";
import Chart from "./Chart";
import Deposits from "./Deposits";
import ListSkills from "../ListSkills";
import { useSelector } from "react-redux";
import Entro from "../../Components/Entro";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link2 color="inherit" href="https://mui.com/">
        Your Website
      </Link2>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 240;

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const mdTheme = createTheme();

function Dashboard() {
  const user = useSelector((state) => state.userReducer.currentUser);
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
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

              <Link className="side-bar" to="/student">
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
              <Link className="side-bar" to="/addPost">
                <ListItemButton>
                  <ListItemIcon>
                    <AddCardIcon />
                  </ListItemIcon>
                  <ListItemText primary="Add Post" />
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
                    <PersonIcon/>
                  </ListItemIcon>
                  <ListItemText primary=" Teachersboard" />
                </ListItemButton>
              </Link>
            </List>
          )}
        </Drawer>

        <Box
          className="home"
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Entro />

          <div
            className="tp-parallax-wrap"
            style={{
              position: "absolute",
              display: "block",
              visibility: "visible",
              left: 920,
              top: 460,
              zIndex: 9,
            }}
          >
            <div
              className="tp-loop-wrap rs-pendulum"
              style={{
                position: "absolute",
                display: "block",
                minHeight: 235,
                minWidth: 141,
                transform:
                  "matrix3d(0.97518, 0.221412, 0, 0, -0.221412, 0.97518, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
                transformOrigin: "50% 50% 0px",
              }}
            >
              <div
                className="tp-mask-wrap"
                style={{
                  position: "absolute",
                  display: "block",
                  overflow: "visible",
                }}
              >
                <div
                  className="tp-caption   tp-resizeme"
                  id="slide-1-layer-8"
                  data-x="['left','left','left','left']"
                  data-hoffset="['730','633','504','331']"
                  data-y="['top','top','top','top']"
                  data-voffset="['409','534','682','499']"
                  data-width="none"
                  data-height="none"
                  data-whitespace="nowrap"
                  data-type="image"
                  data-responsive_offset="on"
                  data-frames='[{"delay":10,"speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                  data-textalign="['inherit','inherit','inherit','inherit']"
                  data-paddingtop="[0,0,0,0]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                  style={{
                    zIndex: 9,
                    visibility: "inherit",
                    transition: "none 0s ease 0s",
                    textAlign: "inherit",
                    lineHeight: 0,
                    borderWidth: 0,
                    margin: 0,
                    padding: 0,
                    letterSpacing: 0,
                    fontWeight: 300,
                    fontSize: 12,
                    whiteSpace: "nowrap",
                    minHeight: 0,
                    minWidth: 0,
                    maxHeight: "none",
                    maxWidth: "none",
                    opacity: 1,
                    transform:
                      "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
                    transformOrigin: "50% 50% 0px",
                  }}
                >
                  <img
                    src="https://www.droussi.com/wp-content/uploads/revslider/accueil/img-slider3.png"
                    alt
                    data-ww="['173px','173px','173px','173px']"
                    data-hh="['289px','289px','289px','289px']"
                    width={173}
                    height={289}
                    data-no-retina
                    style={{
                      width: "140.788px",
                      height: "235.189px",
                      transition: "none 0s ease 0s",
                      textAlign: "inherit",
                      lineHeight: 0,
                      borderWidth: 0,
                      margin: 0,
                      padding: 0,
                      letterSpacing: 0,
                      fontWeight: 300,
                      fontSize: 12,
                    }}
                  />{" "}
                </div>
              </div>
            </div>
          </div>

          <div
            className="tp-parallax-wrap"
            style={{
              position: "absolute",
              display: "block",
              visibility: "visible",
              left: 795,
              top: 400,
              zIndex: 9,
            }}
          >
            <div
              className="tp-loop-wrap rs-pendulum"
              style={{
                position: "absolute",
                display: "block",
                minHeight: 235,
                minWidth: 141,
                transform:
                  "matrix3d(0.97518, 0.221412, 0, 0, -0.221412, 0.97518, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
                transformOrigin: "50% 50% 0px",
              }}
            >
              <div
                className="tp-mask-wrap"
                style={{
                  position: "absolute",
                  display: "block",
                  overflow: "visible",
                }}
              >
                <div
                  className="tp-caption   tp-resizeme"
                  id="slide-1-layer-8"
                  data-x="['left','left','left','left']"
                  data-hoffset="['730','633','504','331']"
                  data-y="['top','top','top','top']"
                  data-voffset="['409','534','682','499']"
                  data-width="none"
                  data-height="none"
                  data-whitespace="nowrap"
                  data-type="image"
                  data-responsive_offset="on"
                  data-frames='[{"delay":10,"speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                  data-textalign="['inherit','inherit','inherit','inherit']"
                  data-paddingtop="[0,0,0,0]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                  style={{
                    zIndex: 9,
                    visibility: "inherit",
                    transition: "none 0s ease 0s",
                    textAlign: "inherit",
                    lineHeight: 0,
                    borderWidth: 0,
                    margin: 0,
                    padding: 0,
                    letterSpacing: 0,
                    fontWeight: 300,
                    fontSize: 12,
                    whiteSpace: "nowrap",
                    minHeight: 0,
                    minWidth: 0,
                    maxHeight: "none",
                    maxWidth: "none",
                    opacity: 1,
                    transform:
                      "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
                    transformOrigin: "50% 50% 0px",
                  }}
                >
                  <img
                    src="https://www.droussi.com/wp-content/uploads/revslider/accueil/img-slider2.png"
                    alt
                    data-ww="['173px','173px','173px','173px']"
                    data-hh="['289px','289px','289px','289px']"
                    width={173}
                    height={289}
                    data-no-retina
                    style={{
                      width: "135.788px",
                      height: "235.189px",
                      transition: "none 0s ease 0s",
                      textAlign: "inherit",
                      lineHeight: 0,
                      borderWidth: 0,
                      margin: 0,
                      padding: 0,
                      letterSpacing: 0,
                      fontWeight: 300,
                      fontSize: 12,
                    }}
                  />{" "}
                </div>
              </div>
            </div>
          </div>

          <div
            className="tp-parallax-wrap"
            style={{
              position: "absolute",
              display: "block",
              visibility: "visible",
              left: 640,
              top: 470,
              zIndex: 11,
            }}
          >
            <div
              className="tp-loop-wrap rs-wave"
              style={{
                position: "absolute",
                display: "block",
                minHeight: 220,
                minWidth: 153,
                transform: "matrix(1, 0, 0, 1, -1.62637, 9.86686)",
              }}
            >
              <div
                className="tp-mask-wrap"
                style={{
                  position: "absolute",
                  display: "block",
                  overflow: "visible",
                }}
              >
                <div
                  className="tp-caption   tp-resizeme"
                  id="slide-1-layer-10"
                  data-x="['left','left','left','left']"
                  data-hoffset="['387','321','125','-7']"
                  data-y="['top','top','top','top']"
                  data-voffset="['429','540','682','487']"
                  data-width="none"
                  data-height="none"
                  data-whitespace="nowrap"
                  data-type="image"
                  data-responsive_offset="on"
                  data-frames='[{"delay":10,"speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                  data-textalign="['inherit','inherit','inherit','inherit']"
                  data-paddingtop="[0,0,0,0]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                  style={{
                    zIndex: 11,
                    visibility: "inherit",
                    transition: "none 0s ease 0s",
                    textAlign: "inherit",
                    lineHeight: 0,
                    borderWidth: 0,
                    margin: 0,
                    padding: 0,
                    letterSpacing: 0,
                    fontWeight: 300,
                    fontSize: 12,
                    whiteSpace: "nowrap",
                    minHeight: 0,
                    minWidth: 0,
                    maxHeight: "none",
                    maxWidth: "none",
                    opacity: 1,
                    transform:
                      "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
                    transformOrigin: "50% 50% 0px",
                  }}
                >
                  <img
                    src="https://www.droussi.com/wp-content/uploads/revslider/accueil/img-slider1.png"
                    alt
                    data-ww="['188px','188px','188px','188px']"
                    data-hh="['270px','270px','270px','270px']"
                    width={188}
                    height={270}
                    data-no-retina
                    style={{
                      width: "152.995px",
                      height: "219.726px",
                      transition: "none 0s ease 0s",
                      textAlign: "inherit",
                      lineHeight: 0,
                      borderWidth: 0,
                      margin: 0,
                      padding: 0,
                      letterSpacing: 0,
                      fontWeight: 300,
                      fontSize: 12,
                    }}
                  />{" "}
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Box>
      <Box style={{ position: "relative" }}>
        <Container sx={{ mt: 4, mb: 4, ml: 50 }}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={5} className="grid1">
              <Paper
                sx={{
                  p: 2,
                  display: "flex",

                  flexDirection: "column",
                  height: 240,
                }}
              >
                <Chart />
              </Paper>
            </Grid>

            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3} className="grid2">
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  height: 240,
                }}
              >
                <Deposits />
              </Paper>
            </Grid>

            {/* Recent Orders */}
            <Grid item xs={12} className="grid3" sx={{width:100}}>
              <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                <ListSkills />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default Dashboard;
