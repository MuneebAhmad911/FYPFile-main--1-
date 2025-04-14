import React from "react";
import { Box, Typography, List, ListItem, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom"; // Import React Router Link for navigation
import { Colors } from "../../../Theme/Theme";
function SideBarLinks() {
  const sideBarLinks = [
    {
      mainHeading: { text: "What Is Escrow?", link: "/what-is-escrow" },
      subHeading: [
        { text: "What Is Escrow?", link: "/queries/escrow" },
        {
          text: "Allowed goods and services",
          link: "/queries/Allowedgoodsservices",
        },
        { text: "Currency Options", link: "/queries/currencyoptions" },
        { text: "Payment Options", link: "/queries/paymentoptions" },
        { text: "Security", link: "/queries/security" },
        { text: "Disputes", link: "/queries/disputes" },
      ],
    },
    { text: "Help Center", link: "/queries/SupportCenter" },
    { text: "Benefits", link: "/queries/benefits" },
    { text: "Contact Us", link: "/queries/contact" },
  ];

  return (
    <Box sx={{ padding: "2rem 0", borderRadius: "8px" }}>
      <List>
        {sideBarLinks.map((link, index) =>
          link.mainHeading ? (
            // Render links with subHeadings
            <Box key={index} sx={{ marginBottom: "1rem" }}>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", marginBottom: "0.5rem" }}
              >
                <Link
                  component={RouterLink}
                  to={link.mainHeading.link}
                  underline="none"
                >
                  {link.mainHeading.text}
                </Link>
              </Typography>
              <List disablePadding>
                {link.subHeading.map((subLink, subIndex) => (
                  <ListItem
                    key={subIndex}
                    sx={{
                      padding: "0.3rem 1rem",
                      fontSize: "0.9rem",
                      "&:hover": {
                        backgroundColor: "#e0e0e0",
                        cursor: "pointer",
                      },
                    }}
                  >
                    <Link
                      component={RouterLink}
                      to={subLink.link}
                      underline="none"
                      color="rgb(79, 87, 89)"
                    >
                      {subLink.text}
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Box>
          ) : (
            // Render plain links
            <ListItem key={index} sx={{ padding: "0.5rem 0" }}>
              <Link component={RouterLink} to={link.link} underline="none">
                {link.text}
              </Link>
            </ListItem>
          )
        )}
      </List>
    </Box>
  );
}

export default SideBarLinks;
