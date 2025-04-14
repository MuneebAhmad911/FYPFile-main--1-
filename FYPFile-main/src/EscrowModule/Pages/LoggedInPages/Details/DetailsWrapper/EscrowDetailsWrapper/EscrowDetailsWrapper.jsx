import { Box, Typography } from "@mui/material";
import { Colors } from "../../../../../Theme/Theme";
import FAQAccordion from "../../FAQAccordion/FAQAccordion";
import EscrowMainDetails from "./EscrowDetails/EscrowMainDetails/EscrowMainDetails";
import { useLocation } from "react-router-dom";

function EscrowDetailsWrapper() {
  return (
    <>
      <Box
        sx={{
          p: { xs: "1rem", sm: "1rem 2rem" },
          "@media (min-width:900px)": { p: "1.5rem 2rem" },
          "@media (min-width:960px)": { p: "1.5rem 2rem" },
          "@media (min-width:1000px)": { p: "1.5rem 3rem" },
          "@media (min-width:1060px)": { p: "1.5rem 3rem", display: "flex" },
          "@media (min-width:1100px)": { p: "1.5rem 4rem" },
          "@media (min-width:1200px)": { p: "2rem 6rem" },
          display: { xs: "block" },
          bgcolor: Colors.tertiary,
        }}
      >
        <Box>
          <EscrowMainDetails />
        </Box>
        <Box sx={{ flexBasis: "40%" }}>
          <Box
            sx={{
              p: "1rem",
              bgcolor: "#EEF7FE",
              borderRadius: "8px",
              border: `1px solid ${Colors.borderColor}`,
              "@media (max-width:1060px)": { display: "none" },
              remmb: "0.8",
            }}
          >
            <Typography
              variant="h6"
              sx={{ m: "0 0 1rem 0", color: Colors.EscrowDetailsColor }}
            >
              History
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: "14px", color: Colors.fontColor }}
            >
              January 17, 2025, 1:09 AM GMT+5 Buyer initiates the transaction
            </Typography>
          </Box>
          <Box>
            <FAQAccordion showInstructions={false} />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default EscrowDetailsWrapper;
