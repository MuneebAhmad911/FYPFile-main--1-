import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  IconButton,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import { Favorite, Delete } from "@mui/icons-material";

const WishlistComponent = ({ initialWishlistItems }) => {
  const [wishlistItems, setWishlistItems] = useState(initialWishlistItems);

  const handleRemove = (id) => {
    setWishlistItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <Box sx={{ }}>
      <Typography
        variant="h4"
        sx={{
          mb: "2rem",
          fontWeight: "bold",
          color: "#333",
          width: "100%",
          bgcolor: "white",
          p: "0.5rem 0",
          boxShadow: "0 0 2px rgba(0, 0, 0, 0.3)",
          borderRadius: "10px",
          textAlign: "center",
        }}
      >
        My Wishlist
      </Typography>

      {wishlistItems.length > 0 ? (
        <Box
          display="grid"
          gridTemplateColumns={{ xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" }}
          gap={3}
        >
          {wishlistItems.map((item) => (
            <Card
              key={item.id}
              sx={{
                position: "relative",
                borderRadius: "12px",
                boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
                transition: "transform 0.3s ease",
                "&:hover": { transform: "scale(1.05)" },
                                height:"90%"

              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: 10,
                  right: 10,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <IconButton sx={{ color: "red" }}>
                  <Favorite />
                </IconButton>
                <IconButton color="error" onClick={() => handleRemove(item.id)}>
                  <Delete />
                </IconButton>
              </Box>

              <CardMedia
                component="img"
                height="55%"
                // width="200px"
                image={item.productCardImage}
                alt={item.heading}
                sx={{ objectFit: "cover", borderRadius: "12px 12px 0 0" }}
              />

              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {item.heading}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.brand} - {item.category}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  {item.description.substring(0, 100)}...
                </Typography>
                <Typography variant="h6" color="primary" sx={{ mt: 1 }}>
                  ${item.price}
                </Typography>
                <Typography variant="body2" color="green" sx={{ mb: 1 }}>
                  {item.Availiablity}
                </Typography>

                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ mt: 1 }}
                >
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </Box>
      ) : (
        <Typography variant="body1" textAlign="center">
          Your wishlist is empty.
        </Typography>
      )}
    </Box>
  );
};

export default WishlistComponent;
