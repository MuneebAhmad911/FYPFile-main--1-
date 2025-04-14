import { Box, Typography, Divider } from "@mui/material";
import React from "react";

function ProductFeedback({ feedback }) {
  return (
    <Box
      sx={{
        bgcolor: "white",
        borderRadius: "10px",
        p: "1.5rem",
        boxShadow: "0 0 2px rgba(0, 0, 0, 0.3)",
      }}
    >
      {/* Section Title */}
      <Typography
        sx={{
          fontFamily: "Rubik, sans-serif",
          fontWeight: "600",
          fontSize: "22px",
          mb: "1rem",
        }}
      >
        Product Reviews
      </Typography>

      {/* Mapping Feedback */}
      {feedback.length > 0 ? (
        feedback.map((review, index) => (
          <Box key={index} sx={{ mb: "1rem" }}>
            {/* Star Rating */}
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "500",
                color: "#FFA500", // Orange for stars
                mb: "0.3rem",
              }}
            >
              {"★".repeat(review.stars) + "☆".repeat(5 - review.stars)}
            </Typography>

            {/* Review Text */}
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "400",
                color: "rgb(80, 80, 80)",
                fontFamily: "Rubik, sans-serif",
              }}
            >
              {review.review}
            </Typography>

            {/* Divider between reviews */}
            {index !== feedback.length - 1 && <Divider sx={{ mt: "0.8rem" }} />}
          </Box>
        ))
      ) : (
        <Typography sx={{ fontSize: "14px", color: "gray" }}>
          No reviews yet.
        </Typography>
      )}
    </Box>
  );
}

export default ProductFeedback;
