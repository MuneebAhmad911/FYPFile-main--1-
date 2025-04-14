/* eslint-disable no-unused-vars */
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Box } from "@mui/material";

function LayoutEscrow({isHome=true}) {
  // const

  return (
    <>
      <Box>
        <Header />
        <Outlet />
        <Footer isHome={isHome} />
      </Box>
    </>
  );
}

export default LayoutEscrow;
