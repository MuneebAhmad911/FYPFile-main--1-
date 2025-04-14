/* eslint-disable react/prop-types */
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Colors } from "../../../EscrowModule/Theme/Theme";
import { useState } from "react";

const faqData = [
  {
    title: "Shipping & Returns",
    content:
      "Free shipping and returns available on all orders! We ship all US domestic orders within 5-10 business days!",
  },
  {
    title: "Materials",
    content:
      "Running Shoes cushions your stride with soft foam to keep you running in comfort. Lightweight knit material wraps your foot in breathable support, while a minimalist design fits in just about anywhere your day takes you.",
  },
  {
    title: "Care Instructions",
    content:
      "Use a soft damp cloth and a drop of mild soap to remove any haze. Air dry.",
  },
  {
    title: "What payment methods do you accept?",
    content:
      "We accept Visa, MasterCard, American Express, PayPal, and other major payment methods.",
  },
  {
    title: "How can I track my order?",
    content:
      "Once your order ships, you will receive an email with a tracking number and a link to track your package.",
  },
  {
    title: "Do you offer international shipping?",
    content:
      "Yes, we offer international shipping. Delivery times and costs vary depending on the destination.",
  },
  {
    title: "What is your return policy?",
    content:
      "You can return any item within 30 days of purchase for a full refund, provided it is in its original condition.",
  },
];

function FAQAccordion() {
  const [expanded, setExpanded] = useState(false);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box
      sx={{
        p: "1rem",
        bgcolor: "white",
        m: "2rem 0 0 0",
        flexBasis: "45%",
        height: "fit-content",
        borderRadius: "8px",
        boxShadow: "0 0 2px rgba(0, 0, 0, 0.3)",

      }}
    >
      {/* FAQ Title */}
      <Typography
        variant="h6"
        sx={{
          mb: 2,
          textAlign: "left",
          color: Colors.EscrowDetailsColor,
        }}
      >
        Frequently Asked Questions
      </Typography>

      {faqData.map((item, index) => (
        <Accordion
          key={index}
          disableGutters
          square
          expanded={expanded === index}
          onChange={handleAccordionChange(index)}
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
                fontWeight: "400",
                fontSize: "15px",
                color: Colors.fontColor,
                fontFamily: "Rubik, sans-serif",
              }}
            >
              {item.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ padding: 0 }}>
            <Typography
              sx={{
                fontSize: "14px",
                color: "rgb(119, 119, 119)",
                fontFamily: "Rubik, sans-serif",
              }}
            >
              {item.content}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}

export default FAQAccordion;
