import * as React from 'react';
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
import { Link} from 'react-router-dom';
import './listItems.css'
;



export const mainListItems  = (  
  
  <React.Fragment>
  
    <Link to ="/dashboardProf"><ListItemButton >
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
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
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
  </React.Fragment>
);