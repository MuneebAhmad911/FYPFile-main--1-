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

function PaymentOptions() {
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
          Payment Options
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontFamily: Fonts.primaryFont, color: "rgb(79, 87, 89)", mb: 2 }}
        >
          TrustBridge supports secure online cash payments for all transactions.
          Below are some common questions and answers about payment options.
        </Typography>
      </Box>

      {/* Supported Payment Methods Section */}
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
          Supported Payment Methods
        </Typography>
        <Paper sx={{ p: 3, backgroundColor: "rgb(245, 247, 249)" }}>
          <Typography
            variant="body1"
            sx={{ fontFamily: Fonts.primaryFont, color: "rgb(79, 87, 89)" }}
          >
            TrustBridge only supports <strong>online cash payments</strong>. This
            ensures secure and fast transactions for both buyers and sellers.
          </Typography>
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
                primary="What is online cash payment?"
                secondary="Online cash payment refers to electronic payments made through secure platforms, such as bank transfers or digital wallets."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Can I use credit or debit cards?"
                secondary="No, TrustBridge only supports online cash payments. Credit and debit cards are not accepted."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Are there any fees for online cash payments?"
                secondary="Yes, a small transaction fee may apply depending on the payment method and currency."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="How long does it take for payments to process?"
                secondary="Payments are typically processed within 1-2 business days, depending on the payment method."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="What if my payment fails?"
                secondary="If your payment fails, please check your account balance and try again. If the issue persists, contact our support team."
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
          <strong>Disclaimer:</strong> TrustBridge ensures secure and reliable
          online cash payments. However, transaction fees and processing times
          may vary depending on the payment method and currency. For specific
          details, please contact our support team.
        </Typography>
      </Box>
    </Box>
  );
}

export default PaymentOptions;