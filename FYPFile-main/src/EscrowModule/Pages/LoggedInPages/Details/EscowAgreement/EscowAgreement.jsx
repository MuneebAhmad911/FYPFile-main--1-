import { Box, Typography } from "@mui/material";
// import React from "react";
import FAQAccordion from "../FAQAccordion/FAQAccordion";
import ContractInstruction from "../../Components/ContractInstruction/ContractInstruction";

function EscowAgreement() {
  return (
    <>
      <Box sx={{ flexBasis: "40%" }}>
        <Typography>this is typography</Typography>
        <ContractInstruction/>
        <FAQAccordion />
      </Box>
    </>
  );
}

export default EscowAgreement;
