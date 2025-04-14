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

function CurrencyOptions() {
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
          Currency Options
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontFamily: Fonts.primaryFont, color: "rgb(79, 87, 89)", mb: 2 }}
        >
          TrustBridge supports transactions in all types of currencies. Below are
          some common questions and answers about currency options.
        </Typography>
      </Box>

      {/* Supported Currencies Section */}
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
          Supported Currencies
        </Typography>
        <Paper sx={{ p: 3, backgroundColor: "rgb(245, 247, 249)" }}>
          <Typography
            variant="body1"
            sx={{ fontFamily: Fonts.primaryFont, color: "rgb(79, 87, 89)" }}
          >
            TrustBridge supports all types of currencies, including but not
            limited to:
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="US Dollar (USD)" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Euro (EUR)" />
            </ListItem>
            <ListItem>
              <ListItemText primary="British Pound (GBP)" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Japanese Yen (JPY)" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Indian Rupee (INR)" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Australian Dollar (AUD)" />
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
                primary="Does TrustBridge support cryptocurrencies?"
                secondary="No, TrustBridge currently does not support cryptocurrencies. We only support fiat currencies."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Are there any currency conversion fees?"
                secondary="Yes, currency conversion fees may apply depending on the transaction. These fees are clearly displayed before you confirm the transaction."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Can I use multiple currencies in a single transaction?"
                secondary="No, each transaction must be conducted in a single currency. You can choose the currency that works best for you."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="What happens if the currency exchange rate changes during the transaction?"
                secondary="The exchange rate is locked in at the time of the transaction. Any changes in the exchange rate after that will not affect your transaction."
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
          <strong>Disclaimer:</strong> TrustBridge strives to provide accurate
          and up-to-date information about currency options. However, exchange
          rates and fees may vary depending on the transaction. For specific
          details, please contact our support team.
        </Typography>
      </Box>
    </Box>
  );
}

export default CurrencyOptions;