import { Box, Typography } from "@mui/material";
import React from "react";
import { products } from "../../../constants/Products";
import WishlistComponent from "../../Components/WishlistComponent/WishlistComponent";

function WishlistContainer() {
  const wishlistItems = [products[0], products[1], products[2]];

  return (
    <>
      <Box sx={{ p: "3rem 5rem", bgcolor: "#f5f5f9" }}>
        <WishlistComponent initialWishlistItems={wishlistItems} />
      </Box>
    </>
  );
}

export default WishlistContainer;
