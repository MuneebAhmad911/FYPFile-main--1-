/* eslint-disable react/prop-types */
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Colors } from "../../../../Theme/Theme";
import { Link } from "react-router-dom";

function FAQAccordion({ isContract }) {
  const faqData = {
    contract: [
      {
        title: "Online Escrow",
        content: `Online escrow is a five-step payment process that protects buyers
              and sellers in a transaction.`,
        linkText: "click here",
        linkHref: "#",
      },
      {
        title: "Escrow Time",
        content: `While most transactions are completed within 1 to 20 business
              days, transaction timelines are still unique to each transaction.`,
        linkText: "click here",
        linkHref: "#",
      },
      {
        title: "Protection",
        content: `Escrow.com ensures sellers are paid when they deliver goods or
              complete agreed-upon services, ensuring buyers receive a refund if
              goods are not delivered or services rendered.`,
        linkText: "click here",
        linkHref: "#",
      },
    ],
    dispute: [
      {
        title: "Dispute Resolution Process",
        content: `TrustBridge provides a structured process for resolving disputes between parties.`,
        linkText: "Learn more",
        linkHref: "#",
      },
      {
        title: "Evidence Submission",
        content: `Submit detailed evidence such as receipts, images, or communication logs to support your dispute.`,
        linkText: "View guidelines",
        linkHref: "#",
      },
      {
        title: "Resolution Time",
        content: `The resolution time depends on the complexity of the dispute but generally takes 5 to 15 business days.`,
        linkText: "Read more",
        linkHref: "#",
      },
    ],
  };

  const accordionData = isContract ? faqData.contract : faqData.dispute;

  return (
    <Box
      sx={{
        p: "1rem",
        bgcolor: "#EEF7FE",
        borderRadius: "8px",
        border: `1px solid ${Colors.borderColor}`,
        m: "0.7rem 0 0 0",
      }}
    >
      {/* Title */}
      <Typography
        variant="h6"
        sx={{
          mb: 2,
          textAlign: "left",
          color: Colors.EscrowDetailsColor,
        }}
      >
        {isContract ? "Frequently Asked Questions - Contracts" : "Frequently Asked Questions - Disputes"}
      </Typography>

      {accordionData.map((item, index) => (
        <Accordion
          key={index}
          disableGutters
          square
          sx={{
            bgcolor: "inherit",
            boxShadow: "none",
            borderBottom: "1px solid #ddd",
            "&:before": { display: "none" },
            "& .MuiAccordionDetails-root": {
              padding: "0 0 1rem 0",
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index + 1}-content`}
            id={`panel${index + 1}-header`}
            sx={{
              padding: 0,
              margin: 0,
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontWeight: "600",
                fontSize: "17px",
                color: Colors.fontColor,
              }}
            >
              {item.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ padding: 0 }}>
            <Typography sx={{ fontSize: "14px", color: Colors.fontColor }}>
              {item.content}
            </Typography>
            {item.linkText && item.linkHref && (
              <Typography sx={{ mt: 1, fontSize: "14px", color: Colors.fontColor }}>
                For more details,{" "}
                <Link to={item.linkHref} target="_blank" rel="noopener">
                  {item.linkText}
                </Link>
                .
              </Typography>
            )}
          </AccordionDetails>
        </Accordion>
      ))}

      {/* Need more help? */}
      <Typography
        component={Link}
        to={"#"}
        sx={{
          mt: 4,
          textAlign: "left",
          color: Colors.EscrowDetailsColor,
        }}
      >
        Need more help?
      </Typography>
    </Box>
  );
}

export default FAQAccordion;
