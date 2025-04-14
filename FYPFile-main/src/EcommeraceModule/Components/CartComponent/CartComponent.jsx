import React, { useContext, useState } from "react";
import { Box, Typography, Button, Divider, IconButton } from "@mui/material";
import { Add, Remove, Delete } from "@mui/icons-material";
import PaymentContainer from "../../../EscrowModule/Pages/LoggedInPages/Details/ProceedToPaymentComponent/Payment/PaymenPageContainer/PaymentContainer";
import { IsUserLoggedIn } from "../../../EscrowModule/providers/Hooks/useEscrowContext";

import { useNavigate } from "react-router-dom";

const CartComponent = ({ initialCartItems }) => {
  const navigate = useNavigate();
  const [dialogOpen, setDialogOpen] = useState(false);
  const { isUserLoggedIn } = useContext(IsUserLoggedIn);
  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };
  const [cartItems, setCartItems] = useState(
    initialCartItems.map((item) => ({ ...item, quantity: 1 })) // Add quantity to each item
  );

  const getTotalPrice = () => {
    return cartItems
      .reduce(
        (total, item) => total + item.quantity * parseFloat(item.price),
        0
      )
      .toFixed(2);
  };

  const updateQuantity = (id, change) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <Box
      display="flex"
      flexDirection={{ xs: "column", md: "row" }}
      gap={3}
      sx={{ p: 3, bgcolor: "#f9f9f9", borderRadius: "8px" }}
    >
      {/* Cart Items Section */}
      <Box flex={2}>
        <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
          Shopping Cart
        </Typography>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <Box
              key={item.id}
              display="flex"
              alignItems="center"
              gap={2}
              sx={{
                p: 2,
                mb: 2,
                bgcolor: "white",
                borderRadius: "8px",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src={item.productCardImage}
                alt={item.heading}
                style={{ width: 80, height: 80, borderRadius: "8px" }}
              />
              <Box flex={1}>
                <Typography variant="h6">{item.heading}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.brand} - {item.category}
                </Typography>
                <Typography variant="h6" color="primary">
                  ${item.price}
                </Typography>
                <Typography variant="body2" color="green">
                  {item.Availiablity}
                </Typography>

                {/* Quantity Controls */}
                <Box display="flex" alignItems="center" gap={1} mt={1}>
                  <IconButton
                    size="small"
                    onClick={() => updateQuantity(item.id, -1)}
                  >
                    <Remove />
                  </IconButton>
                  <Typography>{item.quantity}</Typography>
                  <IconButton
                    size="small"
                    onClick={() => updateQuantity(item.id, 1)}
                  >
                    <Add />
                  </IconButton>
                </Box>
              </Box>

              {/* Remove Button */}
              <IconButton color="error" onClick={() => removeItem(item.id)}>
                <Delete />
              </IconButton>
            </Box>
          ))
        ) : (
          <Typography variant="body1">Your cart is empty.</Typography>
        )}
      </Box>

      {/* Order Summary */}
      <Box
        flex={1}
        sx={{
          display: "flex",
          flexDirection: "column",
          //   gap: 1,
          height: "fit-content",
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
          Order Summary
        </Typography>
        <Box
          flex={1}
          sx={{
            p: 3,
            bgcolor: "white",
            borderRadius: "12px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Box display="flex" justifyContent="space-between" sx={{}}>
            <Typography variant="body1" color="text.secondary">
              Total Items:
            </Typography>
            <Typography variant="body1">
              {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
            </Typography>
          </Box>

          <Box display="flex" justifyContent="space-between">
            <Typography variant="body1" color="text.secondary">
              Subtotal:
            </Typography>
            <Typography variant="body1">${getTotalPrice()}</Typography>
          </Box>

          <Box display="flex" justifyContent="space-between">
            <Typography variant="body1" color="text.secondary">
              Shipping:
            </Typography>
            <Typography variant="body1">Free</Typography>
          </Box>

          <Divider sx={{ my: 2 }} />

          <Box display="flex" justifyContent="space-between">
            <Typography variant="h6">Total:</Typography>
            <Typography variant="h6" color="primary">
              ${getTotalPrice()}
            </Typography>
          </Box>

          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2, py: 1.5, fontWeight: "bold" }}
            onClick={() => {
              isUserLoggedIn ? handleOpenDialog : navigate("/signin");
            }}
          >
            Proceed to Checkout
          </Button>
          <PaymentContainer open={dialogOpen} onClose={handleCloseDialog} />
        </Box>
      </Box>
    </Box>
  );
};

export default CartComponent;
