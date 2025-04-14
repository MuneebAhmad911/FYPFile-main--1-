import React from "react";
import {
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  Paper,
  Button,
} from "@mui/material";
import { Fonts } from "../../../Theme/Theme";

function Disputes() {
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
          Dispute Resolution
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontFamily: Fonts.primaryFont, color: "rgb(79, 87, 89)", mb: 2 }}
        >
          If you encounter any issues with your transaction, you can file a
          dispute. Here’s everything you need to know about disputes and how they
          are resolved.
        </Typography>
      </Box>

      {/* What is a Dispute? Section */}
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
          What is a Dispute?
        </Typography>
        <Paper sx={{ p: 3, backgroundColor: "rgb(245, 247, 249)" }}>
          <Typography
            variant="body1"
            sx={{ fontFamily: Fonts.primaryFont, color: "rgb(79, 87, 89)" }}
          >
            A dispute occurs when there is a disagreement between the buyer and
            seller regarding the terms of the transaction. This could be due to:
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="Goods or services not delivered as agreed." />
            </ListItem>
            <ListItem>
              <ListItemText primary="The quality of goods or services not matching the description." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Any other breach of the contract terms." />
            </ListItem>
          </List>
        </Paper>
      </Box>

      {/* How to File a Dispute Section */}
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
          How to File a Dispute
        </Typography>
        <Paper sx={{ p: 3, backgroundColor: "rgb(245, 247, 249)" }}>
          <Typography
            variant="body1"
            sx={{ fontFamily: Fonts.primaryFont, color: "rgb(79, 87, 89)" }}
          >
            To file a dispute, follow these steps:
          </Typography>
          <List>
            <ListItem>
              <ListItemText
                primary="1. Click the 'Dispute' Button"
                secondary="After receiving the goods or services, click the 'Dispute' button during the inspection period."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="2. Provide Details of the Issue"
                secondary="Explain the issue clearly and provide proof (e.g., photos, videos, or documents) that the terms of the contract were not fulfilled."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="3. Submit the Dispute"
                secondary="Once you’ve provided all the necessary details, submit the dispute for review by our admins."
              />
            </ListItem>
          </List>
        </Paper>
      </Box>

      {/* When to File a Dispute Section */}
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
          When to File a Dispute
        </Typography>
        <Paper sx={{ p: 3, backgroundColor: "rgb(245, 247, 249)" }}>
          <Typography
            variant="body1"
            sx={{ fontFamily: Fonts.primaryFont, color: "rgb(79, 87, 89)" }}
          >
            You should file a dispute:
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="During the inspection period after receiving the goods or services." />
            </ListItem>
            <ListItem>
              <ListItemText primary="When you have clear evidence that the terms of the contract were not fulfilled." />
            </ListItem>
          </List>
        </Paper>
      </Box>

      {/* How Disputes Are Resolved Section */}
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
          How Disputes Are Resolved
        </Typography>
        <Paper sx={{ p: 3, backgroundColor: "rgb(245, 247, 249)" }}>
          <Typography
            variant="body1"
            sx={{ fontFamily: Fonts.primaryFont, color: "rgb(79, 87, 89)" }}
          >
            Once a dispute is filed, our admins will:
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="Review the details of the dispute and the provided proof." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Communicate with both parties to gather additional information if needed." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Make a fair decision based on the contract terms and evidence provided." />
            </ListItem>
          </List>
          <Typography
            variant="body1"
            sx={{ fontFamily: Fonts.primaryFont, color: "rgb(79, 87, 89)", mt: 2 }}
          >
            The decision will be communicated to both parties, and the funds will
            be released accordingly.
          </Typography>
        </Paper>
      </Box>

      {/* Call-to-Action Section */}
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
          Need to File a Dispute?
        </Typography>
        <Paper sx={{ p: 3, backgroundColor: "rgb(245, 247, 249)" }}>
          <Typography
            variant="body1"
            sx={{ fontFamily: Fonts.primaryFont, color: "rgb(79, 87, 89)", mb: 2 }}
          >
            If you’re experiencing issues with your transaction, don’t hesitate
            to file a dispute. Click the button below to get started.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ fontWeight: "bold" }}
          >
            File a Dispute
          </Button>
        </Paper>
      </Box>
    </Box>
  );
}

export default Disputes;