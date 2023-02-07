import React from "react";
import { Box } from "@mui/material";
import "./Dashboard.css";
import Header from "../../components/Header";

const Dashboard = () => {
  return (
    <Box m="20px">
      <Box className="header-dashboard">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
      </Box>
    </Box>
  );
};

export default Dashboard;
