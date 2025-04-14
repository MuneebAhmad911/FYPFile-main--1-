import React, { useState } from "react";
import {
  Typography,
  Box,
  TextField,
  Button,
  Grid2 as Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { Colors, Fonts } from "../../../../Theme/Theme";

function SupportCenter() {
  const [query, setQuery] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [issueType, setIssueType] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setQuery("");
    setName("");
    setEmail("");
    setIssueType("");
  };

  return (
    <Box
      sx={{
        padding: "1rem 2rem 0",
        backgroundColor: "white",
        borderRight: "1px solid rgb(211, 206, 206)",
        m: {
          xs: "0 1rem 0 0.5rem",
          sm: "0 2rem 0 1.5rem",
          md: "0 3rem 0 4rem",
        },
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
          Support Center
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: Fonts.primaryFont,
            color: "rgb(79, 87, 89)",
            mb: 2,
          }}
        >
          Welcome to the TrustBridge Support Center. Here, you can submit your
          queries, browse FAQs, or contact our support team for assistance.
        </Typography>
      </Box>

      {/* Query Submission Form */}
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
          Submit Your Query
        </Typography>
        <Paper sx={{ p: 3, backgroundColor: "rgb(245, 247, 249)" }}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid size={6}>
                <TextField
                  fullWidth
                  label="Your Name"
                  variant="outlined"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Grid>
              <Grid size={6}>
                <TextField
                  fullWidth
                  label="Your Email"
                  variant="outlined"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Grid>
              <Grid size={12}>
                <FormControl fullWidth>
                  <InputLabel>Issue Type</InputLabel>
                  <Select
                    value={issueType}
                    onChange={(e) => setIssueType(e.target.value)}
                    label="Issue Type"
                    required
                  >
                    <MenuItem value="General Inquiry">General Inquiry</MenuItem>
                    <MenuItem value="Technical Issue">Technical Issue</MenuItem>
                    <MenuItem value="Billing Issue">Billing Issue</MenuItem>
                    <MenuItem value="Dispute Resolution">
                      Dispute Resolution
                    </MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid size={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  variant="outlined"
                  label="Describe your issue"
                  placeholder="Type your query here..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  required
                />
              </Grid>
              <Grid size={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{ fontWeight: "bold" }}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
          {submitted && (
            <Typography
              variant="body1"
              sx={{
                fontFamily: Fonts.primaryFont,
                color: "green",
                mt: 2,
              }}
            >
              Your query has been submitted. We'll get back to you soon!
            </Typography>
          )}
        </Paper>
      </Box>

      {/* FAQ Section */}
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
          Frequently Asked Questions (FAQ)
        </Typography>
        <Paper sx={{ p: 3, backgroundColor: "rgb(245, 247, 249)" }}>
          <List>
            <ListItem>
              <ListItemText
                primary="What is TrustBridge?"
                secondary="TrustBridge is a secure online escrow service that acts as a neutral third party to hold funds until both parties fulfill their obligations."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="How does escrow work?"
                secondary="Escrow works by holding funds securely until both the buyer and seller agree that the terms of the transaction have been met."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Is TrustBridge secure?"
                secondary="Yes, TrustBridge uses advanced security measures, including two-factor authentication and SSL encryption."
              />
            </ListItem>
          </List>
        </Paper>
      </Box>

      {/* Contact Information Section */}
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
          Contact Us
        </Typography>
        <Paper sx={{ p: 3, backgroundColor: "rgb(245, 247, 249)" }}>
          <Grid container spacing={2}>
            <Grid size={6}>
              <Typography
                variant="body1"
                sx={{ fontFamily: Fonts.primaryFont, color: "rgb(79, 87, 89)" }}
              >
                <strong>Email:</strong> support@trustbridge.com
              </Typography>
            </Grid>
            <Grid size={6}>
              <Typography
                variant="body1"
                sx={{ fontFamily: Fonts.primaryFont, color: "rgb(79, 87, 89)" }}
              >
                <strong>Phone:</strong> +1 (800) 123-4567
              </Typography>
            </Grid>
            <Grid size={12}>
              <Typography
                variant="body1"
                sx={{ fontFamily: Fonts.primaryFont, color: "rgb(79, 87, 89)" }}
              >
                <strong>Address:</strong> 123 TrustBridge Lane, San Francisco,
                CA 94107, USA
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Box>
  );
}

export default SupportCenter;
