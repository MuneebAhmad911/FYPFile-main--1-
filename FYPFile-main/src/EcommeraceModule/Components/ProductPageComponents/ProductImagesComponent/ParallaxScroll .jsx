import React, { useEffect, useState, useRef } from "react";
import { Box, Typography } from "@mui/material";

const StickyOnScroll = () => {
  const parentRef = useRef(null);
  const stickyRef = useRef(null);
  const [isSticky, setIsSticky] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (!parentRef.current || !stickyRef.current) return;

      const parentRect = parentRef.current.getBoundingClientRect();
      const stickyRect = stickyRef.current.getBoundingClientRect();

      // Check if the parent container has scrolled past the top of the viewport
      const isParentScrolled = parentRect.top <= 0;

      // If the bottom of the parent reaches the top of the viewport
      const isParentBottomReached = parentRect.bottom <= 0;

      // Set sticky behavior: keep the sticky component fixed until the parent is about to leave the viewport
      if (isParentScrolled && !isParentBottomReached) {
        setIsSticky(true); // Keep the sticky component at the top while parent is in view
      } else {
        setIsSticky(false); // Let the sticky component scroll out with the parent when parent leaves
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      ref={parentRef}
      sx={{
        width: "100%",
        height: "100vh", // Extra height for scrolling
        display: "flex",
        flexDirection: "row", // Horizontal layout
        position: "relative",
      }}
    >
      {/* Parent Component */}
      <Box
        sx={{
          width: "80%",
          height: "500px",
          backgroundColor: "#0077b6",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginRight: "20px", // Added space between parent and sticky
        }}
      >
        <Typography variant="h4">Parent Component</Typography>
      </Box>

      {/* Sticky Component (Buttons or any other element) */}
      <Box
        ref={stickyRef}
        sx={{
          width: "20%",
          height: "100px",
          backgroundColor: "#ff6b6b",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: isSticky ? "sticky" : "relative",
<<<<<<< HEAD
=======
          top: isSticky ? "0" : "auto", // Stick to the top while the parent is in view
>>>>>>> SecondryBranch
          marginBottom:"100px"
        }}
      >
        <Typography variant="h5">Sticky Component (Buttons)</Typography>
      </Box>
    </Box>
  );
};

export default StickyOnScroll;
