import React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useTheme } from "@mui/material/styles";

function NewsletterSuccessDialog({ open, handleClose }) {
  const theme = useTheme();

  return (
    <Dialog
      open={open}
      onClose={handleClose}
    >
      <DialogTitle>Success!</DialogTitle>
      <DialogContent>
        <DialogContentText>
          You have successfully signed up for our newsletter. Get ready for exciting updates!
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={handleClose}>OK</Button>
      </DialogActions>
    </Dialog>
  );
}

export default NewsletterSuccessDialog;
