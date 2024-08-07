import { Box, Container, Divider, Grid, Rating } from "@mui/material";
import React from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import MarkunreadMailboxIcon from "@mui/icons-material/MarkunreadMailbox";
import CustomTable from "../CustomTable/Table";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MoneyIcon from "@mui/icons-material/Money";
import AdjustIcon from "@mui/icons-material/Adjust";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function MainDashboard() {
  const orderInfo = [
    {
      title: "Total order",
      stats: "5",
      logo: <AddShoppingCartIcon sx={{ color: "#1a2867" }} />,
      color: "#FFF",
      revenueStatColor: "green",
      revenue: "increase",
      revenueStats: "5",
    },
    {
      title: "Total Delivered",
      stats: "10",
      logo: <MarkunreadMailboxIcon sx={{ color: "#1a2867" }} />,
      color: "#fff",
      revenueStatColor: "red",
      revenue: "decrease",
      revenueStats: "7",
    },
    {
      title: "Total Cancelled",
      stats: "14",
      logo: <MarkunreadMailboxIcon sx={{ color: "#F05C5D" }} />,
      color: "#fff",
      revenueStatColor: "green",
      revenue: "increase",
      revenueStats: "16",
    },
    {
      title: "Total Revenue",
      stats: "5K",
      logo: <MoneyIcon sx={{ color: "#EA42A1" }} />,
      color: "#fff",
      revenueStatColor: "red",
      revenue: "decrease",
      revenueStats: "43",
    },
  ];
  return (
    <Container maxWidth="xl" className="main-container">
      <div className="main-dashboard">
        <h2 className="heading">Dashboard</h2>
        <Box mt={3} className="section1">
          <Grid container spacing={4}>
            <Grid item  md={8} className="grid1">
              <Grid container spacing={2}>
                {orderInfo.map((item) => {
                  return (
                    <Grid item xs={6}  md={3} className="grid-item">
                      <Box className="order-info-box">
                        <Box
                          className="logo-box"
                          sx={{ background: item.color }}
                        >
                          {item.logo}
                        </Box>
                        <p>{item.title}</p>
                        <Box className="footer-box" mt={1}>
                          <h1>{item.stats}</h1>
                          <p style={{ color: item.revenueStatColor }}>
                            {item.revenueStats}%
                          </p>
                        </Box>
                      </Box>
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
            <Grid item  md={4} className="grid2">
              <Box className="profit-block">
                <Box className="stats-box">
                  <p className="title">Net Profit</p>
                  <p className="stats">$6759.25</p>
                  <p className="revenue">3%</p>
                </Box>
                <Box className="gauge-chart"></Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box className="section2" mt={4}>
          <Grid container spacing={4}>
            <Grid item  md={4} className="grid4">
              <Box className="goals-box">
                <Box className="goal">
                  <Box className="box1">
                    <Box className="logo-box logo-box1">
                      <AdjustIcon />
                    </Box>
                    <p>Goals</p>
                  </Box>
                  <Box className="action-logo">
                    <ArrowForwardIosIcon />
                  </Box>
                </Box>
                <Box className="goal" mt={4}>
                  <Box className="box1">
                    <Box className="logo-box logo-box2">
                      <MenuBookIcon />
                    </Box>
                    <p>Popular Dishes</p>
                  </Box>
                  <Box className="action-logo">
                    <ArrowForwardIosIcon />
                  </Box>
                </Box>
                <Box className="goal" mt={4}>
                  <Box className="box1">
                    <Box className="logo-box logo-box3">
                      <MenuBookIcon />
                    </Box>
                    <p>Menu</p>
                  </Box>
                  <Box className="action-logo">
                    <ArrowForwardIosIcon />
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item  md={8} className="grid5">
              <Box className="table-box">
                <h3>Recent order</h3>
                <Box mt={2}>
                  <CustomTable />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box className="section3" mt={4}>
          <Grid container spacing={4}>
            
            <Grid item  md={4} className="grid6">
              <Box className="Reviews-box">
                <h3>Customer feedback</h3>
                <Box className="review-section" mt={3}>
                  <Box className="review">
                    <Box className="heading">
                      <AccountCircleIcon />
                      <p>Person</p>
                    </Box>
                    <Box mt={1}> </Box>
                    <Box mt={1}>
                      <p className="feedback">Amazing food</p>
                    </Box>
                  </Box>
                  <Divider />
                  <Box className="review">
                    <Box className="heading">
                      <AccountCircleIcon />
                      <p>Person</p>
                    </Box>
                    <Box mt={1}> </Box>
                    <Box mt={1}>
                      <p className="feedback">Amazing food</p>
                    </Box>
                  </Box>
                  <Divider />
                  <Box className="review">
                    <Box className="heading">
                      <AccountCircleIcon />
                      <p>Person</p>
                    </Box>
                    <Box mt={1}> </Box>
                    <Box mt={1}>
                      <p className="feedback">Amazing food</p>
                    </Box>
                  </Box>
                  <Divider />
                  <Box className="review">
                    <Box className="heading">
                      <AccountCircleIcon />
                      <p>Person</p>
                    </Box>
                    <Box mt={1}> </Box>
                    <Box mt={1}>
                      <p className="feedback">Amazing food</p>
                    </Box>
                  </Box>
                  <Divider />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>
    </Container>
  );
}

export default MainDashboard;
