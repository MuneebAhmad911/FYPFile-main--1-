import * as React from "react";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import OutlinedInput from "@mui/material/OutlinedInput";
function ForgotPassword({ open, handleClose, isPass = true, msg }) {
  // useEffect(() => {
  //   if (!isPass && open && msg==null) {
  //     const timer = setTimeout(() => {
  //       handleClose();
  //       navigate("/signin");
  //     }, 3000);
  //     return () => clearTimeout(timer);
  //   }
  // }, [isPass, open, handleClose, navigate, msg]);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        component: "form",
        onSubmit: (event) => {
          event.preventDefault();
          handleClose();
        },
        sx: { backgroundImage: "none" },
      }}
    >
      {isPass ? (
        <>
          <DialogTitle>Reset Password</DialogTitle>
          <DialogContent
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              width: "100%",
            }}
          >
            <DialogContentText>
              Enter your account&apos;s email address, and we&apos;ll send you a
              link to reset your password.
            </DialogContentText>
            <OutlinedInput
              autoFocus
              required
              margin="dense"
              id="email"
              name="email"
              placeholder="Email address"
              type="email"
              fullWidth
            />
          </DialogContent>
          <DialogActions sx={{ pb: 3, px: 3 }}>
            <Button onClick={handleClose}>Cancel</Button>
            <Button variant="contained" type="submit">
              Continue
            </Button>
          </DialogActions>
        </>
      ) : (
        <>
          <DialogTitle>
            {msg == null || msg == undefined || msg == ""
              ? "Signup Successful"
              : "Signup Unsuccessful"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              {msg ||
                "Your account has been created successfully! Redirecting to the dashboard..."}
            </DialogContentText>
          </DialogContent>
        </>
      )}
    </Dialog>
  );
}

ForgotPassword.propTypes = {
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  isPass: PropTypes.bool.isRequired,
};

export default ForgotPassword;
