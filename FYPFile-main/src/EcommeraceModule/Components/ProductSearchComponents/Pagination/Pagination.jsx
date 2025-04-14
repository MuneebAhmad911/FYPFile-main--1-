import React from "react";
import { Pagination as MuiPagination, Box } from "@mui/material";

const Pagination = ({
  totalProducts,
  productsPerPage,
  onPageChange,
  currentPage,
}) => {
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  if (totalPages <= 1) return null; // Hide pagination if only 1 page

  return (
    <Box
      sx={{
        mb: 2,
        borderRadius: "8px",
        boxShadow: "0 0 2px rgba(0, 0, 0, 0.3)",
        bgcolor: "white",
        p: "0.5rem 1rem",
        m: "1rem 0",
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <MuiPagination
        count={totalPages}
        page={currentPage}
        onChange={(_, page) => {
          onPageChange(page);
        }}
        color="primary"
        sx={{ display: "flex", justifyContent: "center", mr: "1rem" }}
      />
    </Box>
  );
};

export default Pagination;
