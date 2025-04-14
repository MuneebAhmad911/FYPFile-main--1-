import React from "react";
import SideBarEscrow from "../SideBarEscrowComponent/SideBarEscrow";
import SideBarLinks from "../SideBarLinksComponent/SideBarLinks";
import {
  Typography,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Fonts,Colors } from "../../../Theme/Theme";

function SideBar() {
  return (
    <>
      <Box sx={{ display: "block" }}>
        <SideBarEscrow />
        <Typography
          variant="h5"
          sx={{
            fontFamily: "Roboto,sans-serif",
            color: "rgb(1, 66, 106)",
            mt: 3,
            mb: 2,
            fontWeight: 600,
          }}
        >
          Frequently Asked Questions
        </Typography>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ fontFamily: Fonts.primaryFont, fontWeight: 500 }}>
              How secure is TrustBridge?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              sx={{ fontFamily: Fonts.primaryFont, color: Colors.fontColor }}
            >
              TrustBridge uses advanced encryption and security measures to
              ensure transactions are protected from fraud and unauthorized
              access.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ fontFamily: Fonts.primaryFont, fontWeight: 500 }}>
              How long does an escrow transaction take?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              sx={{ fontFamily: Fonts.primaryFont, color: Colors.fontColor }}
            >
              The time required for an escrow transaction depends on the
              complexity of the deal, verification processes, and agreement
              between buyer and seller. On average, it takes 3-5 business days.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <SideBarLinks />

      </Box>
    </>
  );
}

export default SideBar;
