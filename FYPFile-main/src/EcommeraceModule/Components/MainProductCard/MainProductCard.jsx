import { Box, Typography } from "@mui/material";
import React from "react";

function MainProductCard({
  image,
  topSubHeading,
  bottomSubHeading,
  Heading,
  text,
}) {
  return (
    <Box
      sx={{
        height: "388px",
        position: "relative",
        m: "3rem 0",
        borderRadius: "12px",
        overflow: "hidden",
        "&:hover img": {
          transform: "scale(1.1)", // Scale image vertically
        },
      }}
    >
      {/* Text Overlay */}
      <Box
        sx={{
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          color: text,
          padding: "10px",
          textAlign: "left",
          zIndex: 2,
          margin: "1rem 0 0 1rem",
        }}
      >
        <Typography variant="subtitle2" color="#777777">
          {topSubHeading}
        </Typography>
        <Typography
          variant="h6"
          sx={{ fontWeight: "700", m: "0.1rem 0 0.2rem" }}
        >
          {Heading}
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{ fontSize: "12px", color: "#777777" }}
        >
          {bottomSubHeading}
        </Typography>
      </Box>

      {/* Image with Hover Effect */}
      <img
        src={image}
        alt=""
        style={{
          width: "100%",
          height: "100%",
          display: "block",
          zIndex: 1,
          borderRadius: "12px",
          boxSizing: "border-box",
          transition: "transform 0.3s ease-in-out", // Smooth animation
        }}
      />
    </Box>
  );
}

export default MainProductCard;
