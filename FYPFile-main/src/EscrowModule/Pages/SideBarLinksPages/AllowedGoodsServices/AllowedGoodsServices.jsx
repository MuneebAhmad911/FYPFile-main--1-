import React from "react";
import {
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  Paper,
} from "@mui/material";
import { Fonts } from "../../../Theme/Theme";

function AllowedGoodsServices() {
  return (
    <Box
      sx={{
        padding: "1rem 2rem 0",
        backgroundColor: "white",
        borderRight: "1px solid rgb(211, 206, 206)",
        m: {xs:"0 1rem 0 0.5rem",sm:"0 2rem 0 1.5rem",md:"0 3rem 0 4rem"},
      }}
    >
      {/* Introduction Section */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h4"
          sx={{
            fontFamily: Fonts.primaryFont,
            color: "rgb(1, 66, 106)",
            mb: 2,
            fontWeight: 700,
            fontSize: "34px",
          }}
        >
          Allowed Goods and Services
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontFamily: Fonts.primaryFont, color: "rgb(79, 87, 89)", mb: 2 }}
        >
          TrustBridge allows transactions for a wide range of legal goods and
          services. Below is a list of allowed and prohibited items.
        </Typography>
      </Box>

      {/* Allowed Goods and Services Section */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h5"
          sx={{
            fontFamily: Fonts.primaryFont,
            color: "rgb(1, 66, 106)",
            mb: 2,
            fontWeight: 600,
          }}
        >
          Allowed Goods and Services
        </Typography>
        <Paper sx={{ p: 3, backgroundColor: "rgb(245, 247, 249)" }}>
          <List>
            <ListItem>
              <ListItemText primary="Electronics (e.g., laptops, smartphones)" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Real Estate Transactions" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Freelance Services (e.g., design, development)" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Vehicles (e.g., cars, motorcycles)" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Art and Collectibles" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Legal Documents and Contracts" />
            </ListItem>
          </List>
        </Paper>
      </Box>

      {/* Prohibited Goods and Services Section */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h5"
          sx={{
            fontFamily: Fonts.primaryFont,
            color: "rgb(1, 66, 106)",
            mb: 2,
            fontWeight: 600,
          }}
        >
          Prohibited Goods and Services
        </Typography>
        <Paper sx={{ p: 3, backgroundColor: "rgb(245, 247, 249)" }}>
          <List>
            <ListItem>
              <ListItemText primary="Illegal Drugs and Substances" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Weapons and Ammunition" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Counterfeit Goods" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Adult Content and Services" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Hazardous Materials" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Stolen Goods" />
            </ListItem>
          </List>
        </Paper>
      </Box>

      {/* Disclaimer Section */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="body1"
          sx={{ fontFamily: Fonts.primaryFont, color: "rgb(79, 87, 89)", mb: 2 }}
        >
          <strong>Disclaimer:</strong> TrustBridge reserves the right to reject
          any transaction that violates our terms of service or local laws. If you
          are unsure whether your transaction is allowed, please contact our
          support team.
        </Typography>
      </Box>
    </Box>
  );
}

export default AllowedGoodsServices;