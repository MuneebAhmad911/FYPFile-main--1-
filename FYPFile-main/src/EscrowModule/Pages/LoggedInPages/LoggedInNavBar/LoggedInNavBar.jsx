import {
  Box,
  Typography,
  IconButton,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import useNavBar from "./hooks/useNavBar";
import { Fonts } from "../../../Theme/Theme";
import LoggedInNavBarLayout from "./LoggedInNavbarLayout/LoggedNavLayout";
import { GetStartedButton } from "../../../Components/Reused/reusableComponents";
import MenuIcon from "@mui/icons-material/Menu";
import AccountAvatar from "../../../Components/AccountAvatar/AccountAvatar";

export default function LoggedInNavBar({
  title,
  navColor,
  children,
  padd,
  isAdmin,
}) {
  const { mobileOpen, handleDrawerToggle, userNavbarLinks, user } = useNavBar({
    isAdmin,
  });
  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", justifyItems: "center" }}
    >
      <Typography variant="h4" sx={{ my: 2 }}>
        TrustBridge
      </Typography>
      <Divider />
      <List>
        {userNavbarLinks?.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              component={Link}
              to="/SignIn"
              sx={{ textAlign: "center" }}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
            <Divider />
          </ListItem>
        ))}
      </List>
      <GetStartedButton
        additionalStyles={{
          color: "white",
          fontWeight: "500",
          p: "0.5rem",

          "@media (max-width:560px)": {
            display: "block",
          },
          "@media (min-width:560px)": {
            display: "none",
          },
        }}
        Text="Start A Transaction"
      />
    </Box>
  );
  return (
    <>
      <LoggedInNavBarLayout
        // handleDrawerToggle={handleDrawerToggle}
        Title={title}
        navColor={navColor}
        pad={padd}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: isAdmin ? "flex-end" : "space-between",
            alignItems: "center",
            "@media (max-width:910px)": {
              justifyContent: isAdmin ? "space-between" : "flex-end",
            },
          }}
        >
          {isAdmin && children}
          {console.log("in avatar ", user.role)}
          {user.role == "Admin" || !isAdmin && (
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  "@media (max-width:910px)": { display: "none" },
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {userNavbarLinks.map((item, index) => (
                  <Typography
                    component={Link}
                    to={item.link}
                    key={index}
                    sx={{
                      textDecoration: "none",
                      color: "white",
                      "&:hover": { color: "green" },
                      paddingRight: "0.5rem",
                      fontFamily: Fonts.primaryFont,
                      // fontWeight:550,
                      fontSize: "16px",
                    }}
                  >
                    {" "}
                    {item.name}
                  </Typography>
                ))}
                {isAdmin && <AccountAvatar nametext="white" />}
              </Box>
            )
            }
          

          {user.role == "Seller" && children}
          {user.role == "Seller" ||
            (!isAdmin && (
              <Box display={"flex"}>
                <GetStartedButton
                  additionalStyles={{
                    color: "white",
                    p:"0.5rem 0.8rem"
                  }}
                  Text={"Start Escrow"}
                />
                <AccountAvatar nametext="white" />
              </Box>
            ))}
            {/* {user.role == "Seller" && (
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  "@media (max-width:910px)": { display: "none" },
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
              </Box>
            )
          } */}
          {user.role == "Seller" && <AccountAvatar nametext="white" />}
        </Box>
      </LoggedInNavBarLayout>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block" },
          "@media (min-width:940px)": { display: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 440,
          },
        }}
        onClick={handleDrawerToggle}
      >
        {drawer}
      </Drawer>
    </>
  );
}
