import React from "react";
import { Box, Typography } from "@mui/material";
import { Colors } from "../../../../../../Theme/Theme";

function ItemDetails({ item }) {
  return (
    <Box flexBasis="30%">
      {/* Title */}
      <Typography
        variant="h5"
        fontWeight="bold"
        mb={2}
        sx={{
          borderBottom: `1px solid ${Colors.borderColor}`,
          p: "0 0 1rem 0",
        }}
      >
        Transaction Details
      </Typography>

      {/* Item Title */}
      <Typography variant="h6" fontWeight="bold" mb={1}>
        Title: {item.title}
      </Typography>

      {/* Subtitle */}
      <Typography variant="subtitle1" color="text.secondary" mb={2}>
        Category: {item.subtitle}
      </Typography>

      {/* Transaction ID */}
      <Typography variant="body2" color="text.secondary" mb={1}>
        Transaction ID: {item.id}
      </Typography>

      {/* Agreement Status */}
      <Typography variant="body1" color={item.agreed ? "green" : "red"} mb={1}>
        Agreement Status: {item.agreed ? "Agreed" : "Not Agreed"}
      </Typography>

      {/* Amount */}
      <Typography variant="body1" mb={2}>
        Amount: <strong>{item.amount}</strong> {item.currency}
      </Typography>
    </Box>
  );
}

export default ItemDetails;