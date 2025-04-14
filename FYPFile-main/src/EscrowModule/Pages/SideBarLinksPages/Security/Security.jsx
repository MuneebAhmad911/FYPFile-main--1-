import React from "react";
import {
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  Paper,
} from "@mui/material";
import { Colors, Fonts } from "../../../Theme/Theme";

function Security() {
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
          Security at TrustBridge
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontFamily: Fonts.primaryFont, color: "rgb(79, 87, 89)", mb: 2 }}
        >
          At TrustBridge, we prioritize the security of your transactions and
          personal information. Here’s how we keep your data safe and secure.
        </Typography>
      </Box>

      {/* Transaction Security Section */}
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
          Transaction Security
        </Typography>
        <Paper sx={{ p: 3, backgroundColor: "rgb(245, 247, 249)" }}>
          <Typography
            variant="body1"
            sx={{ fontFamily: Fonts.primaryFont, color: "rgb(79, 87, 89)" }}
          >
            TrustBridge ensures secure transactions through:
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="End-to-End Encryption: All transactions are encrypted to protect your data." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Secure Payment Gateways: We use trusted payment gateways to process transactions." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Fraud Detection: Advanced algorithms monitor transactions for suspicious activity." />
            </ListItem>
          </List>
        </Paper>
      </Box>

      {/* User Information Protection Section */}
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
          User Information Protection
        </Typography>
        <Paper sx={{ p: 3, backgroundColor: "rgb(245, 247, 249)" }}>
          <Typography
            variant="body1"
            sx={{ fontFamily: Fonts.primaryFont, color: "rgb(79, 87, 89)" }}
          >
            Your personal information is protected by:
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="Data Encryption: All user data is encrypted both in transit and at rest." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Access Controls: Strict access controls ensure only authorized personnel can access your data." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Regular Audits: We conduct regular security audits to identify and fix vulnerabilities." />
            </ListItem>
          </List>
        </Paper>
      </Box>

      {/* Security Features Section */}
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
          Security Features
        </Typography>
        <Paper sx={{ p: 3, backgroundColor: "rgb(245, 247, 249)" }}>
          <List>
            <ListItem>
              <ListItemText primary="Two-Factor Authentication (2FA): Adds an extra layer of security to your account." />
            </ListItem>
            <ListItem>
              <ListItemText primary="SSL Encryption: Protects sensitive data during transmission." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Secure Servers: All data is stored on secure, monitored servers." />
            </ListItem>
          </List>
        </Paper>
      </Box>

      {/* Common Questions Section */}
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
          Common Questions
        </Typography>
        <Paper sx={{ p: 3, backgroundColor: "rgb(245, 247, 249)" }}>
          <List>
            <ListItem>
              <ListItemText
                primary="Is my payment information safe?"
                secondary="Yes, all payment information is encrypted and processed through secure payment gateways."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="How does TrustBridge protect my personal data?"
                secondary="We use data encryption, access controls, and regular security audits to protect your personal data."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="What should I do if I suspect a security breach?"
                secondary="Contact our support team immediately if you suspect any unauthorized access to your account."
              />
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
          <strong>Disclaimer:</strong> TrustBridge is committed to providing a
          secure platform for all transactions. However, users are also
          responsible for maintaining the security of their accounts by using
          strong passwords and enabling two-factor authentication.
        </Typography>
      </Box>
    </Box>
  );
}

export default Security;