import React from "react";
import { Typography, Box } from "@mui/material";

const Card = ({ children, sx }) => (
  <Box sx={{ padding: 2, border: "1px solid #ddd", borderRadius: "8px", boxShadow: "2px 2px 10px rgba(0,0,0,0.1)", ...sx }}>
    {children}
  </Box>
);

const CardContent = ({ children }) => <Box sx={{ padding: 1 }}>{children}</Box>;

const ProductDetails = ({ product }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2,flexBasis:"50%", }}>
      {/* Product Card */}
      <Card sx={{ width: "60%", textAlign: "center", bgcolor:"white" }}>
        <img
          src={product.productCardImage}
          alt={product.heading}
          style={{ width: "100%", borderRadius: "8px" }}
        />
        <CardContent>
          <Typography variant="h6">{product.heading}</Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {product.brand} - {product.category}
          </Typography>
          <Typography variant="h5" color="primary">
            ${product.price}
          </Typography>
          <Typography variant="body2" color="green">
            {product.Availiablity}
          </Typography>
        </CardContent>
      </Card>

      {/* Description Section */}
      <Card sx={{ width: "100%" , bgcolor:"white",p:"1rem 1.5rem" }}>
        <Typography variant="h6">Description</Typography>
        <Typography variant="body2">{product.description}</Typography>
      </Card>

      {/* Reviews Section */}
      <Card sx={{ width: "100%" , bgcolor:"white"  }}>
        <Typography variant="h6">Reviews</Typography>
        {product.feedback.map((item, index) => (
          <Box key={index} sx={{ marginBottom: 1 }}>
            <Typography variant="body2">⭐ {item.stars} - {item.review}</Typography>
          </Box>
        ))}
      </Card>
    </Box>
  );
};

export default ProductDetails;
