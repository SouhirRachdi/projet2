import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import "./Post.css";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link2 from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
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
import {useNavigate} from "react-router-dom"
import { useState } from "react";
import '../dashboard/listItems.css'
//import { getPost,commentPost,likePost} from '../../Redux/Actions/postaction';

import { deletePost } from '../../Redux/Actions/postaction';

const Post = ({post}) => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.userReducer.currentUser);
    const token = localStorage.getItem("token");
    console.log(user);
    console.log(token);


  return (
    <>
       {user ?(<Card sx={{ maxWidth: 345 }}  > 
     <CardMedia
        component="img"
        height="140"
        image="https://cdn.futura-sciences.com/buildsv6/images/wide1920/9/4/0/940b22eda6_50170334_code-informatique.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {post.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {post.message}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Link to={`/postDetails/${post._id}`}> <Button size="small"  >Learn More</Button></Link>
        <Button size="small" onClick={()=>dispatch(deletePost(post._id))} >Delete</Button>
        
      </CardActions>
      </Card>
       ):( 
           "load"
       )}
  </>
  );
};

export default Post