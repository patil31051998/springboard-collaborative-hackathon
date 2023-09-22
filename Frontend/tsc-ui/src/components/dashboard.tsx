import * as React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { mainListItems } from "./listItems";
import Beneficiaries from "../containers/beneficiaries";
import { useGlobalContext } from "../services/context/globalContext";
import LogoutIcon from "@mui/icons-material/Logout";
import { UserType } from "../types/login";
import { Chip } from "@mui/material";
import BeneficiaryDetails from "../containers/beneficiaryDetails";
import TaskList from "../containers/taskList";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import PeopleIcon from "@mui/icons-material/People";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

import AssignmentIcon from "@mui/icons-material/Assignment";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href=".">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth: number = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
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

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Dashboard() {
  const [open, setOpen] = React.useState(false);
  const [activeMenu, setActiveMenu] = React.useState("Beneficiaries");
  const { userDetails, logout } = useGlobalContext();
  const navigate = useNavigate();

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
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
              The SpringBoard Collaborative
            </Typography>
            <Typography
              component="h4"
              variant="body1"
              color="inherit"
              align="right"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              {userDetails?.firstName} {userDetails?.lastName}
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton color="inherit" onClick={logout}>
              <LogoutIcon />
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
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            {open ? (
              <Divider textAlign="center">
                <Chip
                  label={
                    userDetails?.userType === UserType.NAVIGATOR
                      ? "Navigator"
                      : "Case worker"
                  }
                />
              </Divider>
            ) : (
              <Divider />
            )}
            <>
              {userDetails?.userType === UserType.CASE_WORKER ? (
                <>
                  <ListItemButton
                    selected={activeMenu === "Case-Worker-Beneficiaries"}
                    onClick={() => {
                      setActiveMenu("Case-Worker-Beneficiaries");
                      navigate("/tsc");
                    }}
                  >
                    <ListItemIcon>
                      <PeopleIcon />
                    </ListItemIcon>
                    <ListItemText primary="My Beneficiaries" />
                  </ListItemButton>
                  <ListItemButton
                    selected={activeMenu === "Case-Worker-Requests"}
                    onClick={() => {
                      setActiveMenu("Case-Worker-Requests");
                      navigate("/tsc/case-worker-requests");
                    }}
                  >
                    <ListItemIcon>
                      <PeopleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Requests" />
                  </ListItemButton>
                  <ListItemButton
                    selected={activeMenu === "Calendar"}
                    onClick={() => {
                      setActiveMenu("Calendar");
                      navigate("/tsc/taskList");
                    }}
                  >
                    <ListItemIcon>
                      <CalendarMonthIcon />
                    </ListItemIcon>
                    <ListItemText primary="Calendar" />
                  </ListItemButton>
                </>
              ) : (
                <>
                  <ListItemButton
                    selected={activeMenu === "Beneficiaries"}
                    onClick={() => {
                      setActiveMenu("Beneficiaries");
                      navigate("/tsc");
                    }}
                  >
                    <ListItemIcon>
                      <PeopleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Beneficiaries" />
                  </ListItemButton>
                  <ListItemButton
                    selected={activeMenu === "Calendar"}
                    onClick={() => {
                      setActiveMenu("Calendar");
                      navigate("/tsc/taskList");
                    }}
                  >
                    <ListItemIcon>
                      <CalendarMonthIcon />
                    </ListItemIcon>
                    <ListItemText primary="Calendar" />
                  </ListItemButton>
                </>
              )}
            </>
          </List>
        </Drawer>
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
          <Container style={{ maxWidth: "100%" }}>
            <Grid container spacing={3}>
              <Grid item sx={{ width: "100%", height: 128 }}>
                <Routes>
                  <Route index path="/" element={<Beneficiaries />} />
                  <Route
                    path="/beneficiaryDetails/:id"
                    element={<BeneficiaryDetails />}
                  />
                  <Route
                    path="/beneficiaryDetails"
                    element={<BeneficiaryDetails />}
                  />
                  <Route
                    path="/tsc/case-worker-requests"
                    element={<BeneficiaryDetails />}
                  />
                  <Route path="/taskList" element={<TaskList />} />
                </Routes>
              </Grid>
            </Grid>
            {/* <Copyright sx={{ pt: 4, marginTop: "95vh" }} /> */}
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
