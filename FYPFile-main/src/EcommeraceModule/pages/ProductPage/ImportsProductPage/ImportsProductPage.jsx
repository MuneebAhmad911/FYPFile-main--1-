import React from "react";
import { Box, Grid2 as Grid, Typography } from "@mui/material";
import ProductPageContainer from "../../../Containers/ProductPageContainer/ProductPageContainer";
import { products } from "../../../../constants/Products";


function ImportsProductPage() {
  return {
    ProductPageContainer,
    products,
    Box,
  };
}

export default ImportsProductPage;
