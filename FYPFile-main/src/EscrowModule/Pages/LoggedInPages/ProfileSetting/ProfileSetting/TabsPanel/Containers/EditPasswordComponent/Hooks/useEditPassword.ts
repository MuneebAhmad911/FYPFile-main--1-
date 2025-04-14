import React, {useState} from 'react'

function useEditPassword() {
  const [isEditable, setIsEditable] = useState(false);
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [dialogOpen, setDialogOpen] = useState(false);  // State for controlling dialog visibility
  
    const handleEditClick = () => {
      if (isEditable) {
        if (newPassword !== confirmPassword) {
          setError("New password and confirm password must match.");
          return;
        }
        setError("");
        setOldPassword("");
        setNewPassword("");
        setConfirmPassword("");
        setDialogOpen(true);  // Show the dialog when password is updated
      }
      setIsEditable(!isEditable);
    };
  
    const handleCloseDialog = () => {
      setDialogOpen(false);  // Close the dialog
    };
  return {
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
  }
}

export default useEditPassword