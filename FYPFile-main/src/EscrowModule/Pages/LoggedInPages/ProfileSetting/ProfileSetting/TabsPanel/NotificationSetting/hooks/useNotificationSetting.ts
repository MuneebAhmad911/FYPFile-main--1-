import { useState } from "react";
import { styled, Switch } from "@mui/material";

function useNotificationSetting() {
  const Android12Switch = styled(Switch)(({ theme }) => ({
    padding: 8,
    "& .MuiSwitch-track": {
      borderRadius: 22 / 2,
      "&::before, &::after": {
        content: '""',
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        width: 16,
        height: 16,
      },
      "&::before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
          theme.palette.getContrastText(theme.palette.primary.main)
        )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
        left: 12,
      },
      "&::after": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
          theme.palette.getContrastText(theme.palette.primary.main)
        )}" d="M19,13H5V11H19V13Z" /></svg>')`,
        right: 12,
      },
    },
    "& .MuiSwitch-thumb": {
      boxShadow: "none",
      width: 16,
      height: 16,
      margin: 2,
    },
  }));

  const [transactionEvent, setTransactionEvent] = useState(true);
  const [accountEvent, setAccountEvent] = useState(true);
  const [milestoneEvent, setMilestoneEvent] = useState(true);
  const [marketingEmails, setMarketingEmails] = useState(true);
  const [transactionSMS, setTransactionSMS] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleToggle = (event, setter) => {
    setter(event.target.checked);
  };

  const handleSaveChanges = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return {
    transactionEvent,
    setTransactionEvent,
    accountEvent,
    setAccountEvent,
    milestoneEvent,
    setMilestoneEvent,
    marketingEmails,
    setMarketingEmails,
    transactionSMS,
    setTransactionSMS,
    dialogOpen,
    setDialogOpen,
    Android12Switch,
    handleToggle,
    handleSaveChanges,
    handleCloseDialog,
  };
}

export default useNotificationSetting;
