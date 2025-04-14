import { PasswordFields } from "../Containers/EditPasswordComponent/EditPasswordComponent";
import { Box, Typography } from "@mui/material";
import { Colors } from "../../../../../../Theme/Theme";
function EditPassword() {
  return (
    <>
      <Box sx={{ m: "0 0 0 1rem" }}>
        <Typography
          sx={{
            fontWeight: 550,
            fontFamily: "Roboto, serif",
            fontStyle: "normal",
            fontVariationSettings: "wdth 100",
            fontSize: "25px",
            color: Colors.EscrowDetailsColor,
          }}
        >
          Account Password
        </Typography>
        <Typography
          sx={{
            fontWeight: 400,
            fontFamily: "Roboto, serif",
            fontStyle: "italic",
            fontSize: "14px",
            color: "#666",
            mt: 1,
          }}
        >
          Please enter your accurate billing information to ensure smooth
          transactions.
        </Typography>
        <PasswordFields />
      </Box>
    </>
  );
}

export default EditPassword;
