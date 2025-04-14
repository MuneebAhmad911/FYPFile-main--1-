import {
  Box,
  Container,
  Grid2 as Grid,
  Typography,
  Link,
  Button,
  TextField,
} from "@mui/material";
import { Twitter, Facebook, Instagram } from "@mui/icons-material";
import { Colors } from "../../Theme/Theme";
import { IsUserLoggedIn } from "../../providers/Hooks/useEscrowContext";
import { useContext, useState } from "react";
import NewsletterSuccessDialog from "./NewsletterSuccessDialog/NewsletterSuccessDialog";

function Footer({ isHome }) {
  const { isUserLoggedin } = useContext(IsUserLoggedIn);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box mt={isUserLoggedin || !isHome ? 0 : "150px"}>
      {/* Show Newsletter only if isHome is false */}
      {!isHome ||
        (!isUserLoggedin && (
          <Box
            sx={{
              bgcolor: Colors.primary,
              position: "relative",
              zIndex: 1,
            }}
          >
            <Container>
              <Box
                sx={{
                  bgcolor: "white",
                  color: Colors.primary,
                  p: 5,
                  borderRadius: "10px",
                  maxWidth: "600px",
                  mx: "auto",
                  textAlign: "center",
                  position: "relative",
                  top: "-80px", // Overlap the footer
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
                }}
              >
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Sign Up for Our Newsletter
                </Typography>
                <Typography variant="body2" sx={{ mb: 3 }}>
                  Get the latest updates and news straight to your inbox.
                </Typography>
                <Box
                  component="form"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: 2,
                  }}
                >
                  <TextField
                    variant="outlined"
                    placeholder="Enter your email"
                    size="small"
                    sx={{
                      flexGrow: 1,
                      maxWidth: "400px",
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "25px",
                      },
                    }}
                  />
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: Colors.secondaryColor,
                      color: "white",
                      borderRadius: "25px",
                      textTransform: "none",
                      "&:hover": {
                        bgcolor: Colors.secondaryColorDark,
                      },
                    }}
                    onClick={handleClickOpen}
                  >
                    Subscribe
                  </Button>
                  <NewsletterSuccessDialog
                    open={open}
                    handleClose={handleClose}
                  />
                </Box>
              </Box>
            </Container>
          </Box>
        ))}

      {/* Footer Content */}
      <Box
        sx={{
          bgcolor: Colors.primary,
          pb: isUserLoggedin || !isHome ? 10 : 4,
          pt: isUserLoggedin || !isHome ? 10 : 0,
          color: "white",
          position: "relative",
          zIndex: 0,
        }}
      >
        <Container>
          <Grid container justifyContent={"center"}>
            <Grid item xs={12} textAlign={"center"}>
              <Typography variant="h4" sx={{ mb: 2 }}>
                <Link
                  href="#"
                  underline="none"
                  sx={{ fontWeight: "bold", color: "inherit" }}
                >
                  TrustBridge
                </Link>
              </Typography>
              <Box sx={{ mb: 2, display: { xs: "block", md: "flex" } }}>
                <Typography>
                  <Link
                    href="/"
                    underline="none"
                    sx={{ mx: 1, color: "inherit" }}
                  >
                    Home
                  </Link>
                </Typography>
                <Typography>
                  <Link
                    href="/queries/help"
                    underline="none"
                    sx={{ mx: 1, color: "inherit" }}
                  >
                    Faq&apos;s
                  </Link>
                </Typography>
                <Typography>
                  <Link
                    href="/queries/TrustBridge"
                    underline="none"
                    sx={{ mx: 1, color: "inherit" }}
                  >
                    About
                  </Link>
                </Typography>
                <Typography>
                  <Link
                    href="#"
                    underline="none"
                    sx={{ mx: 1, color: "inherit" }}
                  >
                    License
                  </Link>
                </Typography>
                <Typography>
                  <Link
                    href="/store"
                    underline="none"
                    sx={{ mx: 1, color: "inherit" }}
                  >
                    Our Store
                  </Link>
                </Typography>
                <Typography>
                  <Link
                    href="/queries/Contact"
                    underline="none"
                    sx={{ mx: 1, color: "inherit" }}
                  >
                    Contact
                  </Link>
                </Typography>
              </Box>

              <Box>
                <Button href="#" sx={{ mx: 1, color: "inherit" }}>
                  <Twitter />
                </Button>
                <Button
                  href="https://www.facebook.com/ibtisam.khalid.92"
                  sx={{ mx: 1, color: "inherit" }}
                >
                  <Facebook />
                </Button>
                <Button
                  href="https://www.instagram.com/ibtisamkhalid_/"
                  sx={{ mx: 1, color: "inherit" }}
                >
                  <Instagram />
                </Button>
              </Box>
            </Grid>
          </Grid>
          <Grid container justifyContent="center" sx={{ mt: 5 }}>
            <Grid item xs={12} textAlign="center">
              <Typography
                variant="body2"
                color={Colors.secondaryColor}
                sx={{ fontSize: "13px" }}
              >
                Copyright © 2024-2026 TrustBridge.com, Inc. All rights reserved
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default Footer;
