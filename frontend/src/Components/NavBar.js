import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Link, useNavigate } from 'react-router-dom';
import { getOneUser, getUser, logout } from '../Redux/Actions/Useraction';
import { useDispatch,useSelector } from 'react-redux';
import { USER_SUCCESS } from '../Redux/ActionsTypes/UserConstant';
import { useState } from 'react';


const pages = ["Your Course", 'Posts', 'Library'];
const settings = ['Profile', 'Dashboard', 'Logout'];

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));
const NavBar = ({HandleFiltre}) => {
  const navigate=useNavigate();
  const dispatch = useDispatch();

  const [text, setText] = useState("");
  const addText = (e) => {
    e.preventDefault()
    setText(e.target.value)
    HandleFiltre(e.target.value.trim())
    navigate("/cours")
    setText("")
}
const HandelSubmit=(e)=>{
  e.preventDefault();
  
}
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const user = useSelector((state) => state.userReducer.currentUser);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
    
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
   
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCourses = () => {
    setAnchorElNav(null);
    navigate("/cours")
  };
  
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleProfile = () => {
    setAnchorElUser(null);
  navigate("/profil")
  };
  const handleDashboardProf = () => {
    setAnchorElUser(null);
  navigate("/dashboard")
  };
 
  const handleCloseUserMenuLog = () => {
    setAnchorElUser(null);
    dispatch(logout(navigate));
  };
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
           
          >
            Dashboard


          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => page == "Your Course"?(
                <MenuItem key={page} onClick={handleCourses}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ):(
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
           
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => page == "Your Course"?(
              <Button
                key={page}
                onClick={handleCourses}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ):(
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              onSubmit={HandelSubmit}
              type="text" 
              name="txt"  
              required 
              onChange={addText}
              value={text}
            />
          </Search>
          <IconButton color="inherit">
          <Badge badgeContent={4} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
          <Box sx={{ flexGrow: 0 }}>
         
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={user&&user.image} />
              </IconButton>
            </Tooltip>{user&&user.firstName}
            
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((el) =>

                el == "Logout" ? (
                  <MenuItem key={el} onClick={handleCloseUserMenuLog}>
                    <Typography textAlign="center">{el}</Typography>
                  </MenuItem>
                ) : el=="Profile"?( <MenuItem key={el} onClick={handleProfile}>
                  <Typography textAlign="center">{el}</Typography>
                </MenuItem>):( <MenuItem key={el} onClick={handleDashboardProf}>
                  <Typography textAlign="center">{el}</Typography>
                </MenuItem>)
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;