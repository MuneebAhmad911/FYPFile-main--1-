import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
  Box,
  CircularProgress,
  Typography,
  Grid,
  Paper
} from "@mui/material";
import { CheckCircle } from "@mui/icons-material"; // Import CheckCircle

const PaymentContainer = ({ open, onClose }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [shippingAddress, setShippingAddress] = useState({
    name: "",
    address: "",
    city: "",
    zip: "",
  });
  const [creditCardDetails, setCreditCardDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const steps = ["Shipping Address", "Credit Card Details", "Confirm Payment"];

  const handleCardInput = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    value = value.slice(0, 16).replace(/(\d{4})/g, "$1 ").trim();
    setCreditCardDetails({ ...creditCardDetails, cardNumber: value });
  };

  const handleExpiryInput = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    value = value.slice(0, 4);
    if (value.length > 2) {
      value = value.slice(0, 2) + "/" + value.slice(2);
    }
    setCreditCardDetails({ ...creditCardDetails, expiryDate: value });
  };

  const handleCVVInput = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    setCreditCardDetails({ ...creditCardDetails, cvv: value.slice(0, 3) });
  };

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = () => {
    setLoading(true);
    // Simulate payment processing
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      onClose(); // Close the dialog after success
    }, 5000);
  };

  const handleShippingAddressChange = (e) => {
    const { name, value } = e.target;
    setShippingAddress((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Payment Details</DialogTitle>
      <DialogContent>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Box>
          {activeStep === 0 && !loading && (
            <Box>
              <TextField
                label="Name"
                placeholder="John Doe"
                fullWidth
                margin="normal"
                name="name"
                value={shippingAddress.name}
                onChange={handleShippingAddressChange}
              />
              <TextField
                label="Address"
                placeholder="123 Main St"
                fullWidth
                margin="normal"
                name="address"
                value={shippingAddress.address}
                onChange={handleShippingAddressChange}
              />
              <TextField
                label="City"
                placeholder="New York"
                fullWidth
                margin="normal"
                name="city"
                value={shippingAddress.city}
                onChange={handleShippingAddressChange}
              />
              <TextField
                label="ZIP"
                placeholder="10001"
                fullWidth
                margin="normal"
                name="zip"
                value={shippingAddress.zip}
                onChange={handleShippingAddressChange}
              />
            </Box>
          )}
          {activeStep === 1 && !loading && (
            <Box>
              <TextField
                label="Card Number"
                placeholder="1234 5678 9012 3456"
                fullWidth
                margin="normal"
                value={creditCardDetails.cardNumber}
                onChange={handleCardInput}
              />
              <TextField
                label="Expiry Date"
                placeholder="MM/YY"
                fullWidth
                margin="normal"
                value={creditCardDetails.expiryDate}
                onChange={handleExpiryInput}
              />
              <TextField
                label="CVV"
                placeholder="123"
                fullWidth
                margin="normal"
                value={creditCardDetails.cvv}
                onChange={handleCVVInput}
              />
            </Box>
          )}
          {activeStep === 2 && !loading && !success && (
            <Box>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Review your payment details
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Paper sx={{ p: 2 }}>
                    <Typography variant="body1"><strong>Name:</strong> {shippingAddress.name}</Typography>
                    <Typography variant="body1"><strong>Address:</strong> {shippingAddress.address}</Typography>
                    <Typography variant="body1"><strong>City:</strong> {shippingAddress.city}</Typography>
                    <Typography variant="body1"><strong>ZIP:</strong> {shippingAddress.zip}</Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Paper sx={{ p: 2 }}>
                    <Typography variant="body1"><strong>Card Number:</strong> {creditCardDetails.cardNumber}</Typography>
                    <Typography variant="body1"><strong>Expiry Date:</strong> {creditCardDetails.expiryDate}</Typography>
                  </Paper>
                </Grid>
              </Grid>
            </Box>
          )}
        </Box>
      </DialogContent>
      {!loading && !success && (
        <DialogActions sx={{ justifyContent: "space-between", px: 3, py: 2 }}>
          <Button onClick={handleBack} disabled={activeStep === 0} variant="outlined" sx={{ px: 4 }}>
            Back
          </Button>
          <Button onClick={activeStep === steps.length - 1 ? handleSubmit : handleNext} variant="contained" sx={{ px: 4 }}>
            {activeStep === steps.length - 1 ? "Pay Now" : "Next"}
          </Button>
        </DialogActions>
      )}
      {loading && (
        <DialogActions sx={{ justifyContent: "center", py: 2 }}>
          <CircularProgress size={60} sx={{ color: "green" }} />
        </DialogActions>
      )}
      {success && (
        <DialogActions sx={{ justifyContent: "center", py: 2 }}>
          <CheckCircle color="success" sx={{ fontSize: 50 }} />
          <Typography variant="h6">Payment Successful!</Typography>
        </DialogActions>
      )}
    </Dialog>
  );
};

export default PaymentContainer;
