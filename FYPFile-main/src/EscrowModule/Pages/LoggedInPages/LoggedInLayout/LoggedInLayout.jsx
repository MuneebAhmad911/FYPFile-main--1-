import { Outlet } from "react-router-dom";
import LoggedInNavbar  from "../LoggedInNavBar/LoggedInNavBar";
import Footer from "../../Footer/Footer"
import { Box } from "@mui/material";
function LoggedInLayout({isAdmin=false}) {
  return (
    <>
      <Box>
        <LoggedInNavbar isAdmin={isAdmin} />
        <Outlet />
        <Footer />
      </Box>
    </>
  );
}

export default LoggedInLayout;
