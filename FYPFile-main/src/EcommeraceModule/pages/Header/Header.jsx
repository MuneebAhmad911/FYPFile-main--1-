import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  Tooltip,
  Badge,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  InputBase,
  Button,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Favorite as FavoriteIcon,
  Compare as CompareIcon,
  ShoppingCart as ShoppingCartIcon,
  AccountCircle as AccountCircleIcon,
} from "@mui/icons-material";
import React, { useContext, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { styled } from "@mui/material/styles";
import { NavLink, Link, useNavigate } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import AccountAvatar from "../../../EscrowModule/Components/AccountAvatar/AccountAvatar";
import { IsUserLoggedIn } from "../../../EscrowModule/providers/Hooks/useEscrowContext";
import atTopLogo from "../../StoreAssets/TBWhiteGreenLogo.svg";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#ffffff",
  display: "flex",
  alignItems: "center",
  width: "100%",
  maxWidth: "400px",
  [theme.breakpoints.down("500")]: {
    maxWidth: "90%",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#febd69",
  borderRadius: "4px",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  marginLeft: theme.spacing(1),
  flex: 1,
}));

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);
  const isMediumScreen = useMediaQuery("(max-width:1000px)");
  const isSmallScreen = useMediaQuery("(max-width:820px)");
  const isExtraSmallScreen = useMediaQuery("(max-width:475px)");
  const { isUserLoggedIn } = useContext(IsUserLoggedIn);
  const navigate = useNavigate();
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    )
      return;
    setDrawerOpen(open);
  };

  const toggleNavDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    )
      return;
    setNavDrawerOpen(open);
  };

  return (
    <>
      {/* First AppBar - Navigation Links */}
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#06273b",
          p: "0 2rem",
          borderBottom: "1px solid #677D6A",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            color="white"
            sx={{ textDecoration: "none" }}
          >
            <img src={atTopLogo} alt="" style={{ height: "45px" }} />
          </Typography>
          {!isExtraSmallScreen && (
            <Box sx={{ display: "flex", gap: 2 }}>
              {[
                { label: "Home", path: "/store" },
                { label: "Product", path: "/store/product" },
                { label: "Escrow", path: "/" },
                { label: "Contact", path: "/queries/contact" },
              ].map(({ label, path }) => (
                <Button
                  color="inherit"
                  component={NavLink}
                  to={path}
                  key={label}
                >
                  {label}
                </Button>
              ))}
            </Box>
          )}
          {isExtraSmallScreen && (
            <IconButton color="inherit" onClick={toggleNavDrawer(true)}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Second AppBar - Search and Icons */}
      <AppBar
        position="sticky"
        sx={{
          padding: "5px 0",
          backgroundColor: "rgb(1, 47, 80)",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: isSmallScreen ? "space-between" : "center",
            gap: 2,
          }}
        >
          {isSmallScreen && (
            <IconButton color="inherit" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
          )}
          <Box
            sx={{
              // flexGrow: 1,
              display: "flex",
              justifyContent: isSmallScreen ? "right" : "center",
              width: "400px",
            }}
          >
            <Search>
              <StyledInputBase
                placeholder="Search Product Here..."
                aria-label="search"
              />
              <SearchIconWrapper
                onClick={() => {
                  navigate("/store/search");
                }}
              >
                <BsSearch size={30} />
              </SearchIconWrapper>
            </Search>
          </Box>
          {!isSmallScreen && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                justifyContent: "left",
              }}
            >
              {[
                {
                  icon: <FavoriteIcon />,
                  text: "Wishlist",
                  link: "/store/wishlist",
                },
                {
                  icon: <CompareIcon />,
                  text: "Compare",
                  link: "/store/compare",
                },
                {
                  icon: <ShoppingCartIcon />,
                  text: "Cart",
                  link: "/store/cart",
                  badge: 1,
                },
                isUserLoggedIn
                  ? {
                      icon: <AccountAvatar nametext="white" />,
                      text: "", // No extra text for AccountAvatar
                      link: "",
                    }
                  : {
                      icon: <AccountCircleIcon />,
                      text: "Login",
                      link: "/Signin",
                    },
              ].map(({ icon, text, link, badge }, index) => (
                <Tooltip title={text} key={index}>
                  <IconButton color="inherit" component={Link} to={link}>
                    {badge ? (
                      <Badge badgeContent={badge} color="error">
                        {icon}
                      </Badge>
                    ) : (
                      icon
                    )}
                    {!isMediumScreen &&
                      text && ( // Only show text if there is any
                        <Typography variant="body2" sx={{ marginLeft: 1 }}>
                          {text}
                        </Typography>
                      )}
                  </IconButton>
                </Tooltip>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer for Icons */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List sx={{ width: 250, backgroundColor: "#131921", height: "100%" }}>
          {[
            {
              icon: <FavoriteIcon />,
              text: "Wishlist",
              link: "/store/wishlist",
            },
            { icon: <CompareIcon />, text: "Compare", link: "/store/compare" },
            {
              icon: <ShoppingCartIcon />,
              text: "Cart",
              link: "/store/cart",
              badge: 1,
            },
            { icon: <AccountCircleIcon />, text: "Account", link: "/account" },
          ].map(({ icon, text, link, badge }) => (
            <ListItem button component={Link} to={link} key={text}>
              <ListItemIcon>
                {badge ? (
                  <Badge badgeContent={badge} color="error">
                    {icon}
                  </Badge>
                ) : (
                  icon
                )}
              </ListItemIcon>
              <ListItemText primary={text} sx={{ color: "white" }} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Drawer for Navigation Links */}
      <Drawer
        anchor="right"
        open={navDrawerOpen}
        onClose={toggleNavDrawer(false)}
      >
        <List sx={{ width: 250, backgroundColor: "#131921", height: "100%" }}>
          {["Home", "Products", "Blog", "Contact"].map((item) => (
            <ListItem
              button
              component={NavLink}
              to={`/store/${item.toLowerCase()}`}
              key={item}
            >
              <ListItemText primary={item} sx={{ color: "white" }} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}

export default Header;
