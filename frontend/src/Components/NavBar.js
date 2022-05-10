import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { Link, useNavigate } from "react-router-dom";
import { getOneUser, getUser, logout } from "../Redux/Actions/Useraction";
import { useDispatch, useSelector } from "react-redux";
import { USER_SUCCESS } from "../Redux/ActionsTypes/UserConstant";
import { useState } from "react";
import "../App.css";

const pages = ["Your Course", "Posts", "Library"];
const settings = ["Profile", "Dashboard", "Logout"];
const views = [
  "Dashboard",
  "Library",
  "Course",
  "Posts",
  "Calendar",
  "Add Post",
  "ProfList",
  "Perfomance",
];

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
const NavBar = ({ HandleFiltre }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [text, setText] = useState("");
  const addText = (e) => {
    e.preventDefault();
    setText(e.target.value);
    HandleFiltre(e.target.value.trim());
    navigate("/cours");
    setText("");
  };
  const HandelSubmit = (e) => {
    e.preventDefault();
  };
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
    navigate("/cours");
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleProfile = () => {
    setAnchorElUser(null);
    navigate("/profil");
  };
  const handleDashboardProf = () => {
    setAnchorElUser(null);
    navigate("/dashboard");
  };

  const handleCloseUserMenuLog = () => {
    setAnchorElUser(null);
    dispatch(logout(navigate));
  };
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <div className="ant-col administration-top-bar__container__title x-flex-h-start-v-center ant-col-xs-10 ant-col-xs-order-4 ant-col-sm-10 ant-col-sm-order-4 ant-col-md-8 ant-col-md-order-1 ant-col-lg-8 ant-col-lg-order-1 ant-col-xl-8 ant-col-xl-order-1">
            <span className="skill-top-bar-track-common skill-top-bar-track ">
              <span> Dashboard </span>
            </span>
          </div>

          <>
            <Box className="barup">
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
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
                    <Avatar alt="Remy Sharp" src={user && user.image} />
                  </IconButton>
                </Tooltip>{" "}
                <span className="firstname">{user && user.firstName}</span>
                <i aria-label="icon: down" class="anticon anticon-down">
                  <svg
                    viewBox="64 64 896 896"
                    focusable="false"
                    class="svgicon"
                    data-icon="down"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
                  </svg>
                </i>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((el) =>
                    el == "Logout" ? (
                      <MenuItem key={el} onClick={handleCloseUserMenuLog}>
                        <Typography textAlign="center">{el}</Typography>
                      </MenuItem>
                    ) : el == "Profile" ? (
                      <MenuItem key={el} onClick={handleProfile}>
                        <Typography textAlign="center">{el}</Typography>
                      </MenuItem>
                    ) : (
                      <MenuItem key={el} onClick={handleDashboardProf}>
                        <Typography textAlign="center">{el}</Typography>
                      </MenuItem>
                    )
                  )}
                </Menu>
              </Box>
            </Box>
          </>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
