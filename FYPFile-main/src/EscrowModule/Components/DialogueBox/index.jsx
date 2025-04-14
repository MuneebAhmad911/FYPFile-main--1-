import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Typography,
  Grid2 as Grid,
  Box,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CustomTextField from "../TextFIeld";
import CustomSelectField from "../Select";
import axios from "axios";
const UpdateModal = ({ open, onClose, data }) => {
  if (!data) return null;

  const {
    agreed,
    amount,
    contract,
    currency,
    inspectionPeriod,
    itemDescription,
    itemName,
    role,
    secondPersonEmail,
    secondPersonNumber,
    status,
    subtitle,
    timeBounded,
    title,
    transactionId,
  } = data;

  // ✅ State for editable fields
  const [updatedTitle, setUpdatedTitle] = useState(title);
  const [updatedItemName, setUpdatedItemName] = useState(itemName);
  const [updatedAmount, setUpdatedAmount] = useState(amount);
  const [updatedCurrency, setUpdatedCurrency] = useState(currency);
  const [updatedInspectionPeriod, setUpdatedInspectionPeriod] =
    useState(inspectionPeriod);
  const [updatedItemDescription, setUpdatedItemDescription] =
    useState(itemDescription);
  const [updatedEmail, setUpdatedEmail] = useState(secondPersonEmail);
  const [updatedNumber, setUpdatedNumber] = useState(secondPersonNumber);

  // 🔁 Optional: update local state when modal opens
  useEffect(() => {
    if (data) {
      setUpdatedTitle(title);
      setUpdatedItemName(itemName);
      setUpdatedAmount(amount);
      setUpdatedCurrency(currency);
      setUpdatedInspectionPeriod(inspectionPeriod);
      setUpdatedItemDescription(itemDescription);
      setUpdatedEmail(secondPersonEmail);
      setUpdatedNumber(secondPersonNumber);
    }
  }, [data]);

  const updateEscrow = async (transactionId, updatedData) => {
    console.log(
      "Updating escrow with ID:",
      transactionId,
      "Data:",
      updatedData
    );
    // Place your API/database update logic here
    try {
      const response = await axios.put(
        `http://localhost:5000/api/escrow/${transactionId}`,
        updatedData
      );
      console.log("Escrow updated successfully:", response.data);
    } catch (error) {
      console.error("Error updating escrow:", error);
    }
  };
  

  // Custom confirmation dialog states
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);

  // Handle confirmation for updates
  const handleUpdateConfirmation = () => {
    setOpenConfirmDialog(true); // Open custom confirmation dialog
  };

  const handleConfirm = () => {
    const updatedData = {
      ...data,
      title: updatedTitle,
      itemName: updatedItemName,
      amount: updatedAmount,
      currency: updatedCurrency,
      inspectionPeriod: updatedInspectionPeriod,
      itemDescription: updatedItemDescription,
      secondPersonEmail: updatedEmail,
      secondPersonNumber: updatedNumber,
    };
    updateEscrow(transactionId, updatedData);
    setOpenConfirmDialog(false); // Close the confirmation dialog
  };

  const handleCancel = () => {
    setOpenConfirmDialog(false); // Close the confirmation dialog without updating
  };

  return (
    <>
      <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            pr: 2,
            pt: 2,
          }}
        >
          <DialogTitle>Update Transaction</DialogTitle>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        <DialogContent dividers>
          <Grid container spacing={2}>
            <Grid item size={5}>
              <Typography fontWeight={600}>Transaction ID</Typography>
              <Typography
                sx={{
                  backgroundColor: "#f5f5f5",
                  p: 1.5,
                  borderRadius: "12px",
                }}
              >
                {transactionId}
              </Typography>
            </Grid>

            <Grid item size={3}>
              <Typography fontWeight={600}>Your Role</Typography>
              <Typography
                sx={{
                  backgroundColor: "#f5f5f5",
                  p: 1.5,
                  borderRadius: "12px",
                }}
              >
                {role}
              </Typography>
            </Grid>

            <Grid item size={4}>
              <Typography fontWeight={600}>Agreed</Typography>
              <Typography
                sx={{
                  backgroundColor: "#f5f5f5",
                  p: 1.5,
                  borderRadius: "12px",
                }}
              >
                {agreed ? "Yes" : "No"}
              </Typography>
            </Grid>

            <Grid item size={6}>
              <CustomTextField
                label="Title"
                value={updatedTitle}
                onChange={(e) => setUpdatedTitle(e.target.value)}
              />
            </Grid>

            <Grid item size={6}>
              <CustomTextField
                label="Item Name"
                value={updatedItemName}
                onChange={(e) => setUpdatedItemName(e.target.value)}
              />
            </Grid>

            <Grid item size={4}>
              <CustomTextField
                label="Amount"
                value={updatedAmount}
                onChange={(e) => setUpdatedAmount(e.target.value)}
              />
            </Grid>

            <Grid item size={4}>
              <CustomSelectField
                label="Currency"
                value={updatedCurrency}
                onChange={(e) => setUpdatedCurrency(e.target.value)}
                options={["USD", "PKR", "EUR"]}
              />
            </Grid>

            <Grid item size={4}>
              <CustomTextField
                label="Inspection Period"
                value={updatedInspectionPeriod}
                onChange={(e) => setUpdatedInspectionPeriod(e.target.value)}
              />
            </Grid>

            <Grid item size={12}>
              <CustomTextField
                label="Item Description"
                value={updatedItemDescription}
                multiline
                rows={3}
                onChange={(e) => setUpdatedItemDescription(e.target.value)}
              />
            </Grid>

            <Grid item size={6}>
              <CustomTextField
                label={role === "Seller" ? "Buyer Email" : "Seller Email"}
                value={updatedEmail}
                onChange={(e) => setUpdatedEmail(e.target.value)}
              />
            </Grid>

            <Grid item size={6}>
              <CustomTextField
                label={role === "Seller" ? "Buyer Number" : "Seller Number"}
                value={updatedNumber}
                onChange={(e) => setUpdatedNumber(e.target.value)}
              />
            </Grid>

            {/* Status */}
            <Grid item size={12}>
              <Typography fontWeight={600}>Status</Typography>
              <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 450,
                    bgcolor: "#fff1a8",
                    color: "#677702",
                    p: "0.3rem 0.7rem",
                    borderRadius: "12px",
                  }}
                >
                  {status?.primary}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 450,
                    bgcolor: "#ebebeb",
                    color: "#4f4f4f",
                    p: "0.3rem 0.7rem",
                    borderRadius: "12px",
                  }}
                >
                  {status?.secondary}
                </Typography>
              </Box>
            </Grid>

            {/* Contract terms */}
            <Grid item size={12}>
              <Typography fontWeight={600}>Contract Terms</Typography>
              <Box
                sx={{ backgroundColor: "#f5f5f5", borderRadius: "12px", p: 2 }}
              >
                {contract.map((term, index) => (
                  <Typography key={index} variant="body2">
                    • {term}
                  </Typography>
                ))}
              </Box>
            </Grid>
          </Grid>
        </DialogContent>

        {/* Footer */}
        <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
          <Button
            variant="contained"
            sx={{ borderRadius: "10px", px: 4 }}
            color="primary"
            onClick={handleUpdateConfirmation}
          >
            Update
          </Button>
        </Box>
      </Dialog>

      {/* Custom Confirmation Dialog */}
      <Dialog open={openConfirmDialog} onClose={handleCancel}>
        <DialogTitle>Confirm Update</DialogTitle>
        <DialogContent>
          <Typography>
            Are you sure you want to update the transaction?
          </Typography>
        </DialogContent>
        <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
          <Button onClick={handleCancel}>Cancel</Button>
          <Button onClick={handleConfirm} color="primary" autoFocus>
            Confirm
          </Button>
        </Box>
      </Dialog>
    </>
  );
};

export default UpdateModal;
