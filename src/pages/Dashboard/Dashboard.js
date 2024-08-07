import React from "react";
import Header from "../../components/Header/header";
import { Box, Grid } from "@mui/material";
import Sidebar from "../../components/Sidebar/sidebar";
import { Outlet } from "react-router-dom";
import CustomDrawer from "../../components/Drawer/Drawer";

function Dashboard() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };


  return (
    <div className="Dashboard">
      <Header toggleDrawer={toggleDrawer}/>
      <div className="main">
        <div className="sidebar-grid">
            <Sidebar />
        </div>
        <div className="main-grid">
            <Outlet />
        </div>
        
      </div>
      <Box className="drawer">
        <CustomDrawer open={open} toggleDrawer={toggleDrawer}/>
      </Box>
    </div>
  );
}

export default Dashboard;
