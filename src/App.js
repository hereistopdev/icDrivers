import "./App.css";
import * as React from "react";

import Dashboard from "./pages/Dashboard";
import Drivers from "./pages/drivers";
import SignUp from "./pages/auth/SignUp";
import SignIn from "./pages/auth/SignIn";

import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { otherList, mainListItems, infoList } from "./pages/listItems";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import { Box, Toolbar, Typography } from "@mui/material";
import { Route, Routes, useLocation } from "react-router-dom";

const defaultTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

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

function App() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const location = useLocation();
  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/register";

  return (
    <div className="App">
      <ThemeProvider theme={defaultTheme}>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          {!isAuthPage && (
            <>
              <AppBar position="absolute" open={open}>
                <Toolbar
                  sx={{
                    pr: "24px", // keep right padding when drawer closed
                  }}
                >
                  <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={toggleDrawer}
                    sx={{
                      marginRight: "36px",
                      ...(open && { display: "none" }),
                    }}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Typography
                    component="h1"
                    variant="h6"
                    color="inherit"
                    noWrap
                    sx={{ flexGrow: 1 }}
                  >
                    Dashboard
                  </Typography>
                  <IconButton color="inherit">
                    <Badge badgeContent={4} color="secondary">
                      <NotificationsIcon />
                    </Badge>
                  </IconButton>
                </Toolbar>
              </AppBar>
              <Drawer variant="permanent" open={open}>
                <Toolbar
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    px: [1],
                  }}
                >
                  <h4>icDrivers Delivery App</h4>
                  <IconButton onClick={toggleDrawer}>
                    <ChevronLeftIcon />
                  </IconButton>
                </Toolbar>
                <Divider />
                <List component="nav">
                  {mainListItems}
                  <Divider sx={{ my: 1 }} />
                  {infoList}
                  <Divider sx={{ my: 1 }} />
                  {otherList}
                  {/* {secondaryListItems} */}
                </List>
              </Drawer>
            </>
          )}
          <Box
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
            <Toolbar />
            <Routes>
              <Route path="/login" element={<SignIn />} />
              <Route path="/register" element={<SignUp />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/drivers" element={<Drivers />} />
            </Routes>
          </Box>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;
