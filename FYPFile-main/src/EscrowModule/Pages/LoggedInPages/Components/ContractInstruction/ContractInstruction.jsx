/* eslint-disable react/prop-types */
import {
  Typography,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Colors, Fonts } from "../../../../Theme/Theme";

const instructionData = {
  contract: {
    title: "Instructions for Creating Contracts",
    content: [
      "1. Define clear terms and conditions, including obligations, timelines, and quality standards.",
      "2. Specify escrow terms such as the amount to be held and conditions for releasing funds.",
      "3. Include steps for dispute resolution, such as required evidence and resolution timeframes.",
      "4. Provide detailed descriptions of the product, service, or property to avoid misunderstandings.",
      "5. Agree to TrustBridge’s platform policies and escrow rules as part of the contract.",
      "6. Attach relevant documentation, such as invoices or images, to support the contract terms.",
      "7. Review all entered information before finalizing to ensure accuracy.",
      "8. Ensure compliance with local laws if applicable.",
      "9. Use the flexibility to update contracts before depositing funds in escrow.",
    ],
  },
  dispute: {
    title: "Instructions for Submitting Dispute Information",
    content: [
      "1. Clearly outline the nature of the dispute with specific details.",
      "2. Provide evidence such as images, receipts, or communication records to support your claim.",
      "3. Specify the resolution you seek, including any compensation or actions required.",
      "4. Ensure all information is accurate and concise to avoid delays in resolution.",
      "5. Follow TrustBridge's dispute resolution policies and guidelines.",
      "6. Include any supporting documentation relevant to the dispute.",
      "7. Submit the dispute within the allowed time frame for eligibility.",
      "8. Cooperate with the resolution process and respond promptly to inquiries.",
      "9. Retain copies of all submitted information for your records.",
    ],
  },
};

function ContractInstruction({ isContract }) {
  const data = isContract ? instructionData.contract : instructionData.dispute;

  return (
    <Box>
      <Accordion
        sx={{
          bgcolor: "#EEF7FE",
          border: `1px solid ${Colors.borderColor}`,
          boxShadow: "none",
          "&:before": { display: "none" },
          "& .MuiAccordionDetails-root": {
            padding: "0 0 1rem 0",
          },
          borderRadius: "8px",
        }}
        disableGutters
        elevation={0}
        square
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: Colors.fontColor }} />}
          sx={{
            color: Colors.fontColor,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: "600",
              fontSize: "18px",
              fontFamily: Fonts.primaryFont,
              color: Colors.EscrowDetailsColor,
            }}
          >
            {data.title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            {data.content.map((instruction, i) => (
              <ListItem
                key={i}
                sx={{
                  fontSize: "14px",
                  color: Colors.fontColor,
                  fontFamily: Fonts.primaryFont,
                }}
              >
                {instruction}
              </ListItem>
            ))}
          </List>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

export default ContractInstruction;
