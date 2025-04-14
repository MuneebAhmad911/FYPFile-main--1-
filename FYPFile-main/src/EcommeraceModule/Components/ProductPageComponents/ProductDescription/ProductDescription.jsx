import { Box, Typography } from "@mui/material";
import React from "react";

function ProductDescription({ description }) {
  return (
    <>
      <Box
        sx={{
          m: "2rem 0",
          bgcolor: "white",
          borderRadius: "10px",
          p: "1rem",
          boxShadow: "0 0 2px rgba(0, 0, 0, 0.3)",

        }}
      >
        <Typography
          sx={{
            fontFamily: "Rubik,sans-serif",
            fontWeight: "600",
            fontSize: "26px",
            mb: "0.2rem",
          }}
        >
          Product Decription
        </Typography>
        <Typography
          sx={{
            color: "rgb(119, 119, 119)",
            fontFamily: "Rubik,sans-serif",
            fontSize: "13px",
            fontWeight: 400,
          }}
        >
          {" "}
          Lorem Ipsum passage, and going through the cites of the word in
          classical literature, discovered the undoubtable source. Lorem Ipsum
          comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
          Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
          This book is a treatise on the theory of ethics, very popular during
          the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
          amet..", comes from a line in section 1.10.32. The standard chunk of
          Lorem Ipsum used since the 1500s is reproduced below for those
          interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
          Malorum" by Cicero are also reproduced in their exact original form,
          accompanied by English versions from the 1914 translation by H.
          Rackham.
        </Typography>
      </Box>
    </>
  );
}

export default ProductDescription;
