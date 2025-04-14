import React, { useState } from "react";
import {
  Typography,
  Box,
  TextField,
  Button,
  Grid2 as Grid,
  Paper,
} from "@mui/material";
import { Colors, Fonts } from "../../../../Theme/Theme";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setName("");
    setEmail("");
    setMessage("");
  };

  // Replace with your Google Maps API key
  const googleMapsApiKey = "YOUR_API_KEY";
  const mapSrc = `https://www.google.com/maps/embed/v1/place?key=${googleMapsApiKey}&q=123+TrustBridge+Lane,San+Francisco,CA,USA`;

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
          Contact Us
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: Fonts.primaryFont,
            color: "rgb(79, 87, 89)",
            mb: 2,
          }}
        >
          We’re here to help! Reach out to us for any questions, feedback, or
          support. Our team will get back to you as soon as possible.
        </Typography>
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
          Contact Information
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

      {/* Contact Form Section */}
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
          Send Us a Message
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
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  variant="outlined"
                  label="Your Message"
                  placeholder="Type your message here..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
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
                  Send Message
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
              Your message has been sent. We'll get back to you soon!
            </Typography>
          )}
        </Paper>
      </Box>

      {/* Map Section */}
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
          Our Location
        </Typography>
        <Paper sx={{ p: 3, backgroundColor: "rgb(245, 247, 249)" }}>
          <iframe
            title="TrustBridge Location"
            src={mapSrc}
            width="100%"
            height="300"
            style={{ border: 0, borderRadius: "4px" }}
            allowFullScreen
            loading="lazy"
          />
        </Paper>
      </Box>
    </Box>
  );
}

export default Contact;
