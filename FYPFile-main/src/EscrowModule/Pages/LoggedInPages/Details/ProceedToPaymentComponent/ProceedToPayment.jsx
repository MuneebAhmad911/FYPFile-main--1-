/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Box, Typography, Button } from "@mui/material";
import { Colors, Fonts } from "../../../../Theme/Theme";
import EscrowShield from "../../../../EscrowAssets/svgs/EscrowShield";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import PaymentContainer from "./Payment/PaymenPageContainer/PaymentContainer";

function ProceedToPayment({ item }) {
  const navigate = useNavigate();
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };
  const handleProceedToPayment = () => {
    navigate("/payment", { state: { item } });
  };
  return (
    <>
      <Box
        sx={{
          border: "0.5px solid rgb(34, 92, 171)",
          p: "1.5rem 1rem",
          mt: "1.5rem",
          borderRadius: "10px",
          display: "flex",
          overflow: "hidden",
        }}
      >
        <Box sx={{ flexBasis: "90%", width: "90%" }}>
          <Typography
            gutterBottom
            variant="h6"
            sx={{
              color: "rgb(34, 92, 171)",
              fontWeight: 500,
              fontSize: "18px",
            }}
          >
            Pay for the transaction
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: "15px", m: "0.8rem 0", color: Colors.backColor }}
          >
            Please click on the button below and follow the instructions to send
            the payment for the transaction.
          </Typography>
          <Button
            sx={{
              p: "0.4rem 0.5rem",
              fontFamily: Fonts.primaryFont,
              bgcolor: "rgb(34, 92, 171)",
              fontWeight: 500,
              color: "white",
              "&:hover": {
                bgcolor: "rgb(1, 66, 106)",
              },
              fontSize: "12px",
            }}
            onClick={handleOpenDialog}
          >
            Proceed To Payment
          </Button>
          <PaymentContainer open={dialogOpen} onClose={handleCloseDialog} />
        </Box>
        <Box sx={{ position: "relative", right: "-10%", flexBasis: "5%" }}>
          <EscrowShield />
        </Box>
      </Box>
    </>
  );
}

export default ProceedToPayment;
