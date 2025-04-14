import React, { useState } from "react";
import { products } from "../../../constants/Products";
import ProductComparisonComponent from "../../Components/ProductComparisonComponent/ProductComparisonComponent";
import { Box, Typography, Button } from "@mui/material";

function ProductComparisonContainer() {
  const [comparedProducts, setComparedProducts] = useState(
    products.slice(0, 2)
  );

  const removeProduct = (index) => {
    setComparedProducts((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <>
      <Box
        display={"flex"}
        flexDirection="column"
        alignItems="center"
        sx={{
          gap: 2,
          bgcolor: "#f5f5f9",
          p: { xs: "1rem", md: "2rem 3rem" },
          borderRadius: "8px",
          boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
          width: "100%",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            mb: 1,
            fontWeight: "bold",
            color: "#333",
            width: "100%",
            bgcolor: "white",
            p: "0.5rem 0",
            boxShadow: "0 0 2px rgba(0, 0, 0, 0.3)",
            borderRadius:"10px"
          }}        >
          Product Comparison
        </Typography>
        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          justifyContent="center"
          sx={{ gap: 2, width: "100%" }}
        >
          {comparedProducts.map((product, index) => (
            <Box
              key={product.id}
              sx={{ position: "relative", width: { xs: "100%", md: "50%" } }}
            >
              <Button
                variant="contained"
                color="error"
                sx={{ mb: 1, width: "40%", mx: "auto", display: "block" }}
                onClick={() => removeProduct(index)}
              >
                Remove
              </Button>
              <ProductComparisonComponent product={product} />
            </Box>
          ))}
        </Box>
        {comparedProducts.length === 0 && (
          <Typography
            variant="h6"
            sx={{ textAlign: "center", mt: 2, color: "#555" }}
          >
            No products to compare. Add some products to get started!
          </Typography>
        )}
      </Box>
    </>
  );
}

export default ProductComparisonContainer;
