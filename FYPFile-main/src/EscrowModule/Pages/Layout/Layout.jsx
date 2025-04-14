/* eslint-disable no-unused-vars */
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Box, Divider, useMediaQuery } from "@mui/material";
import { SideBar } from "../../Components";
Divider;

function Layout({nametext,isHome}) {
  const at850 = useMediaQuery("(min-width:850px)");
  return (
    <>
      <Box>
        <Header nametext={nametext} queries={true} />
        <Box
          sx={{
            display: "flex",
            p: "2rem 0 5rem",
            backgroundColor: "white",
            m: {
              xs: "0 0.5rem 0.5rem",
              sm: "0 1rem 0 1rem",
              md: "0 4rem 0 1.5rem",
            },
          }}
        >
          <Box flexBasis={at850 ? "75%" : "100%"}>
            <Outlet />
          </Box>

          {at850 && (
            <Box flexBasis="25%">
              <SideBar />
            </Box>
          )}
        </Box>
        <Footer isHome={isHome} />
      </Box>
    </>
  );
}

export default Layout;
