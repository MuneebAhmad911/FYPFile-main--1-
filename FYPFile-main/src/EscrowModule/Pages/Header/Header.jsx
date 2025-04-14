/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";
import useHeader from "./hooks/useHeader";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { navItems, submenuData } from "../../../constants/HeaderConstants";
import { SubMenuNavComponent } from "../../Components/Reused/reusableComponents";
import {
  Typography,
  Box,
  Button,
  ListItem,
  ListItemText,
  ListItemButton,
  List,
  Drawer,
  Divider,
  IconButton,
  CssBaseline,
} from "@mui/material";
import AtTopLogo from "../../EscrowAssets/TBWhiteGreenLogo.svg";
import AtScrollLogo from "../../EscrowAssets/TBGreenBlueLogo.svg";
import { IsUserLoggedIn } from "../../providers/Hooks/useEscrowContext";
import AccountAvatar from "../../Components/AccountAvatar/AccountAvatar";
import React from "react";

function Header({ nametext, queries = false }) {
  const { isUserLoggedIn } = React.useContext(IsUserLoggedIn);

  const {
    handleDrawerToggle,
    handleMouseEnter,
    handleMouseLeave,
    isAtTop,
    hoveredButton,
    mobileOpen,
    itemIndex,
    zIndex,
    name,
    topTextColor,
    scrollTextColor,
    topBGColor,
    scrollBGColor,
    onHoverBGColor,
    onHoverTextColor,
    isHovered,
  } = useHeader({ queries });

  // for mobile
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "left" }}>
      <Typography variant="h6" sx={{ my: 2, textAlign: "center" }}>
        TrustBridge
      </Typography>
      <Divider />
      <List>
        {navItems?.map((item, index) => (
          <Box key={item.name}>
            {/* Main Heading */}
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: "left", py: 1.5 }}>
                <ListItemText
                  primary={item.name}
                  primaryTypographyProps={{
                    variant: "subtitle1",
                    fontWeight: "bold",
                  }}
                />
              </ListItemButton>
            </ListItem>

            {/* Visual Separator */}
            <Box sx={{ borderBottom: "1px solid #ddd", mx: 2 }} />

            {/* Submenu Items */}
            <List sx={{ pl: 2 }}>
              {submenuData[index]?.map((subItem) => (
                <ListItem key={subItem.mainHeading} disablePadding>
                  <ListItemButton
                    component={Link}
                    to={subItem.Link}
                    sx={{ textAlign: "left", py: 1 }}
                  >
                    <ListItemText
                      primary={subItem.mainHeading}
                      primaryTypographyProps={{
                        variant: "body2",
                        fontWeight: "normal",
                        color: "text.secondary",
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        ))}

        {/* Our Store Button */}
        <Button
          component={Link}
          to={"/store"}
          sx={{ textAlign: "left", color: "inherit", pl: 2, py: 1.5 }}
        >
          Our Store
        </Button>
      </List>

      {/* Login and SignUp Buttons */}
      {!isUserLoggedIn && (
        <Box
          sx={{
            display: { sm: "none" },
            textAlign: "center",
            justifyItems: "center",
            alignItems: "center",
          }}
        >
          <Button sx={{ color: "black", textTransform: "none" }}>Login</Button>
          <Button sx={{ color: "black", textTransform: "none" }}>SignUp</Button>
        </Box>
      )}
    </Box>
  );
  return (
    <>
      <Box
        sx={{
          position: "sticky",
          top: 0,
          backgroundColor: isAtTop ? topBGColor : scrollBGColor,
          zIndex: zIndex,
          "& :hover:": {
            color: "white",
          },
          borderBottom: queries ? "1px solid rgba(0, 0, 0, 0.1)" : "none",
        }}
      >
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: { xs: "0 1.5rem", sm: "0 3rem", md: "0 6rem", lg: "0 8rem" },
            backgroundColor: isAtTop
              ? isHovered
                ? onHoverBGColor
                : topBGColor
              : isHovered
              ? onHoverBGColor
              : scrollBGColor,
            color: isAtTop ? topTextColor : scrollTextColor,
            zIndex: 1100,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                display: { xs: "block" },
                "@media (min-width:940px)": { display: "none" },
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{
                cursor: "pointer",
                textDecoration: "none",
                // mt: "0.5rem",
              }}
            >
              <img
                src={
                  queries
                    ? isHovered
                      ? AtTopLogo
                      : AtScrollLogo
                    : isAtTop
                    ? isHovered
                      ? AtTopLogo
                      : AtTopLogo
                    : isHovered
                    ? AtTopLogo
                    : AtScrollLogo
                }
                alt="heheheh"
                height={45}
              />
            </Typography>
            <Box
              sx={{
                "@media (min-width:940px)": { display: "flex" },
                display: { xs: "none" },
              }}
            >
              {navItems.map((item) => (
                <Box key={item.name} onMouseLeave={handleMouseLeave}>
                  <Button
                    sx={{
                      color: isAtTop
                        ? isHovered
                          ? onHoverTextColor
                          : topTextColor
                        : isHovered
                        ? onHoverTextColor
                        : scrollTextColor,
                      p: "1.3rem 1rem 1rem",
                      m: "0.4rem 0",
                      borderBottom: "0.5px solid transparent",
                    }}
                    onMouseEnter={() => handleMouseEnter(item.index, item.name)}
                    endIcon={
                      hoveredButton === item.name ? (
                        <KeyboardArrowUpIcon />
                      ) : (
                        <KeyboardArrowDownIcon />
                      )
                    }
                  >
                    {item.name}
                  </Button>
                </Box>
              ))}
              <Button
                sx={{
                  textAlign: "center",
                  p: "1.3rem 1rem 1rem",
                  m: "0.4rem 0",
                  color: isAtTop
                    ? isHovered
                      ? onHoverTextColor
                      : topTextColor
                    : isHovered
                    ? onHoverTextColor
                    : scrollTextColor,
                }}
                component={Link}
                to={"/store"}
              >
                Our Store
              </Button>
            </Box>
          </Box>

          {isUserLoggedIn ? (
            <AccountAvatar
              nametext={
                queries
                  ? isAtTop
                    ? nametext
                    : nametext
                  : isAtTop
                  ? "white"
                  : "black"
              }
            />
          ) : (
            <Box
              sx={{
                display: "flex",
                gap: 2,
                alignItems: "center",
                "@media (max-width:560px)": { display: "none" },
              }}
            >
              <Button
                component={Link}
                to="/SignIn"
                sx={{
                  p: "1.3rem 1rem 1rem",
                  m: "0.4rem 0",
                  color: isAtTop
                    ? isHovered
                      ? onHoverTextColor
                      : topTextColor
                    : isHovered
                    ? onHoverTextColor
                    : scrollTextColor,
                  textDecoration: "none",
                }}
              >
                Login
              </Button>
              <Button
                component={Link}
                to="/SignUP"
                sx={{
                  p: "1.3rem 1rem 1rem",
                  m: "0.4rem 0",
                  color: isAtTop
                    ? isHovered
                      ? onHoverTextColor
                      : topTextColor
                    : isHovered
                    ? onHoverTextColor
                    : scrollTextColor,
                  textDecoration: "none",
                }}
              >
                SignUp
              </Button>
            </Box>
          )}
        </Box>

        {hoveredButton && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              position: "absolute",
              top: "69px",
              left: 0,
              width: "100%",
              backgroundColor: "white",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              transition: "all 1s ease",
            }}
            onMouseEnter={() => handleMouseEnter(itemIndex, name)}
            onMouseLeave={handleMouseLeave}
          >
            <SubMenuNavComponent data={submenuData[itemIndex]} />
          </Box>
        )}

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
              width: 240,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
}

export default Header;
