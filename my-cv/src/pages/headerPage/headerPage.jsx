import React from "react";
import Header from "../../components/Header/header";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

function HeaderPage() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(180deg, #f5f5f7 0%, #ffffff 100%)",
        position: "relative",
        overflow: "hidden",
        pb: 12,
      }}
    >
      <Outlet />
      <Header />
    </Box>
  );
}

export default HeaderPage;
