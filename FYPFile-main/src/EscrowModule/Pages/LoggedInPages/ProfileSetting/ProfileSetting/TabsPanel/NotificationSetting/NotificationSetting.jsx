import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Switch,
  styled,
} from "@mui/material";

// Custom styled switch
const CustomSwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#4CAF50", // Green when checked
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#fff",
    width: 32,
    height: 32,
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
  },
  "& .MuiSwitch-track": {
    borderRadius: 20,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be", // Gray when unchecked
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

const NotificationSetting = () => {
  // State for notification settings
  const [settings, setSettings] = useState({
    transactionEvent: true,
    accountEvent: true,
    milestoneEvent: false,
    marketingEmails: false,
    transactionSMS: true,
  });

  // State for dialog
  const [dialogOpen, setDialogOpen] = useState(false);

  // Handle toggle switch
  const handleToggle = (event) => {
    const { name, checked } = event.target;
    setSettings((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  // Handle save changes
  const handleSaveChanges = () => {
    console.log("Saved Settings:", settings);
    setDialogOpen(true); // Show confirmation dialog
  };

  // Handle dialog close
  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <Box
      sx={{
        p: 3,
        backgroundColor: "#fff",
        borderRadius: "8px",
        maxWidth: 600,
        margin: "auto",
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
        Notification Settings
      </Typography>

      {/* Notification List */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {/* Transaction Event */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography sx={{ flex: 1, textAlign: "left" }}>
            Transaction Event Notifications
          </Typography>
          <CustomSwitch
            name="transactionEvent"
            checked={settings.transactionEvent}
            onChange={handleToggle}
          />
        </Box>
        {/* Transaction Event */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography sx={{ flex: 1, textAlign: "left" }}>
            Two Factor Authentication
          </Typography>
          <CustomSwitch
            name="transactionEvent"
            checked={settings.transactionEvent}
            onChange={handleToggle}
          />
        </Box>

        {/* Account Event */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography sx={{ flex: 1, textAlign: "left" }}>
            Account Event Notifications
          </Typography>
          <CustomSwitch
            name="accountEvent"
            checked={settings.accountEvent}
            onChange={handleToggle}
          />
        </Box>

        {/* Milestone Event */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography sx={{ flex: 1, textAlign: "left" }}>
            Milestone Event Notifications
          </Typography>
          <CustomSwitch
            name="milestoneEvent"
            checked={settings.milestoneEvent}
            onChange={handleToggle}
          />
        </Box>

        {/* Marketing Emails */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography sx={{ flex: 1, textAlign: "left" }}>
            Marketing Emails
          </Typography>
          <CustomSwitch
            name="marketingEmails"
            checked={settings.marketingEmails}
            onChange={handleToggle}
          />
        </Box>

        {/* Transaction SMS */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography sx={{ flex: 1, textAlign: "left" }}>
            Transaction SMS Notifications
          </Typography>
          <CustomSwitch
            name="transactionSMS"
            checked={settings.transactionSMS}
            onChange={handleToggle}
          />
        </Box>
      </Box>

      {/* Save Changes Button */}
      <Button
        variant="contained"
        color="primary"
        onClick={handleSaveChanges}
        sx={{
          width: "100%",
          py: 1,
          fontSize: "16px",
          borderRadius: "4px",
          mt: 3,
        }}
      >
        Save Changes
      </Button>

      {/* Confirmation Dialog */}
      <Dialog open={dialogOpen} onClose={handleCloseDialog}>
        <DialogContent sx={{ bgcolor: "white", p: 3 }}>
          <Typography variant="h6">Settings Saved</Typography>
          <Typography variant="body1" sx={{ mt: 1 }}>
            Your notification settings have been successfully updated.
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
};

export default NotificationSetting;