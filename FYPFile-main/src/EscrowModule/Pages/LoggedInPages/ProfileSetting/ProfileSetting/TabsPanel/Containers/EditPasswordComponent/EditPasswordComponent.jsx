import {
  Box,
  Typography,
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
} from "@mui/material";
import useEditPassword from "./Hooks/useEditPassword";

export function PasswordFields() {
  const {
    isEditable,
    oldPassword,
    newPassword,
    confirmPassword,
    error,
    dialogOpen,
    handleEditClick,
    handleCloseDialog,
    setOldPassword,
    setNewPassword,
    setConfirmPassword,
  } = useEditPassword();

  return (
    <Box sx={{ p: 2, maxWidth: 400, margin: "auto" }}>
      <Typography
        variant="body1"
        sx={{ fontSize: "16px", fontWeight: 600, color: "#333", mb: 2 }}
      >
        Choose a strong password to ensure your account security.
      </Typography>

      <TextField
        label="Old Password"
        type="password"
        fullWidth
        variant="outlined"
        value={oldPassword}
        onChange={(e) => setOldPassword(e.target.value)}
        disabled={!isEditable}
        sx={{ mb: 1 }}
      />
      <Typography sx={{ fontSize: "14px", color: "gray", mb: 2 }}>
        Enter your current password.
      </Typography>

      <TextField
        label="New Password"
        type="password"
        fullWidth
        variant="outlined"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        disabled={!isEditable}
        error={!!error}
        sx={{ mb: 1 }}
      />
      <Typography sx={{ fontSize: "14px", color: "gray", mb: 2 }}>
        Enter a new password.
      </Typography>

      <TextField
        label="Confirm Password"
        type="password"
        fullWidth
        variant="outlined"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        disabled={!isEditable}
        error={!!error}
        helperText={error}
        sx={{ mb: 1 }}
      />
      <Typography sx={{ fontSize: "14px", color: "gray", mb: 2 }}>
        Re-enter your new password for confirmation.
      </Typography>

      <Button
        variant="contained"
        onClick={handleEditClick}
        sx={{
          color: "white",
          cursor: "pointer",
          bgcolor: isEditable ? "#007bff" : "gray",
          px: "1rem",
          py: "0.3rem",
          "&:hover": { bgcolor: "black" },
          borderRadius: "4px",
          fontSize: "0.875rem",
        }}
      >
        {isEditable ? "Update" : "Edit"}
      </Button>

      {/* Dialog for success message */}
      <Dialog open={dialogOpen} onClose={handleCloseDialog}>
        <DialogContent sx={{ bgcolor: "white", p: 3 }}>
          <Typography variant="h6">Password Updated</Typography>
          <Typography variant="body1" sx={{ mt: 1 }}>
            Your password has been successfully updated.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
