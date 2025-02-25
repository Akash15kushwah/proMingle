import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import GroupIcon from "@mui/icons-material/Group";
import SmsIcon from "@mui/icons-material/Sms";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import logo from "../../images/LinkedIn_logo.png";
import {
  Avatar,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import { Home, Menu as MenuIcon } from "@mui/icons-material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useNavigate } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  color: "#000",
  backgroundColor: "#EDF3F8",
  "&:hover": {
    backgroundColor: "#EDF3F8",
  },
  height: "35px",
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
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
  color: "#000",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function SearchAppBar() {
  const Naviget = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileAnchorEl, setMobileAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);
  const mobileMenuOpen = Boolean(mobileAnchorEl);

  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

   const handleLogout = () => {
    localStorage.removeItem('token');
    Naviget("/login");
    setAnchorEl(null);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };


  
  const handleMobileMenuOpen = (event) => {
    setMobileAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileAnchorEl(null);
  };

  const navItems = [
    { label: "Home", icon: <Home /> },
    { label: "My Network", icon: <GroupIcon /> },
    { label: "Jobs", icon: <HomeRepairServiceIcon /> },
    { label: "Messaging", icon: <SmsIcon /> },
    { label: "Notifications", icon: <NotificationsIcon /> },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          bgcolor: "white",
          paddingTop: 0,
          height: "60px",
          paddingX: {
            lg: 10,
            md: 10,
            sm: 1,
            xs: 2,
          },
        }}
      >
        <Toolbar>
          <Box
            sx={{
              flex: 1.2,
              display: "flex",
              gap: 0.5,
              alignItems: "center",
            }}
          >
            <Box sx={{ height: "30px", width: "30px" }}>
              <img
                style={{ height: "100%", width: "100%" }}
                src={logo}
                alt="logo"
              />
            </Box>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Box>

          {/* Desktop Navigation (hidden on xs) */}
          <Box
            sx={{
              display: { lg: "flex", md: "flex", sm: "flex", xs: "none" },
              alignItems: "center",
              columnGap: 4,
              flex: 2,
            }}
          >
            {navItems.map(({ label, icon }) => (
              <Box key={label}>
                <Box
                  sx={{
                    display: "flex",
                    color: "gray",
                    flexDirection: "column",
                    alignItems: "center",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      color: "#000",
                      borderBottom: "2px solid #000",
                    },
                  }}
                >
                  {icon}
                  <Typography
                    sx={{
                      color: "#000",
                      fontSize: "12px",
                      letterSpacing: 0.3,
                    }}
                  >
                    {label}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>

          <Box sx={{ display: { xs: "flex", sm: "none" } }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMobileMenuOpen}
            >
              <MenuIcon sx={{ color: "#000" }} />
            </IconButton>
          </Box>

          <Box
            sx={{
              display: "flex",
              color: "gray",
              flexDirection: "column",
              alignItems: "center",
              transition: "all 0.2s ease",
              // mr : "auto",
              flex: {
                lg: 1,
                md: 1,
                sm: 0.4,
                xs: 0.2,
              },
              cursor: "pointer",
              "&:hover": {
                color: "#000",
              },
            }}
          >
            <Avatar
              onClick={handleAvatarClick}
              sx={{ height: "25px", width: "25px" }}
            />
            <Typography
              sx={{
                color: "#000",
                margin: 0,
                fontSize: "12px",
                letterSpacing: 0.3,
              }}
            >
              me
            </Typography>
          </Box>

          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>

          <Menu
            anchorEl={mobileAnchorEl}
            open={mobileMenuOpen}
            onClose={handleMobileMenuClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            {navItems.map(({ label, icon }) => (
              <MenuItem key={label} onClick={handleMobileMenuClose}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  {icon}
                  <Typography>{label}</Typography>
                </Box>
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
