import React from "react";
import Slider from "../../Components/Slider/Slider";
import {
  Box,
  Typography,
  Grid2 as Grid,
  Button,
  useMediaQuery,
} from "@mui/material";
import ReactStars from "react-rating-stars-component";
import { ColorsEcommrace as C } from "../../Theme/EcommeraceTheme";
import { Link } from "react-router-dom";

function SpecialProductsContainer({ pData = [] }) {
  const at780 = useMediaQuery("(min-width:800px)");
  return (
    <Grid
      container
      spacing={4}
      sx={{
        m: "2rem 1rem",
        boxSizing: "border-box",
      }}
    >
      {pData.map((product, index) => (
        <Grid
          item
          size={at780 ? 6 : 12}
          key={index}
          sx={{
            marginBottom: "20px",
            display: "flex",
            borderRadius: "10px",
            bgcolor: "white",
            boxShadow: "0 0 2px rgba(0, 0, 0, 0.3)",
          }}
        >
          <Slider img={product.pImg} />

          <Box
            sx={{
              textAlign: "left",
              padding: "10px 20px",
              m: "2rem 1rem ",
              flexBasis: "50%",
            }}
          >
            <Typography
              sx={{
                color: C.colorFeaturedCollectionSubHeading,
                fontSize: "14px",
                fontWeight: "600",
              }}
            >
              {product.subHeadingTop}
            </Typography>
            <Typography
              sx={{
                color: C.colorFeaturedCollectionHeading,
                fontWeight: "650",
                fontSize: "20px",
                mb: "1rem",
                textDecoration: "none",
                "&:hover": {
                  textDecoration: "underline", // Ensures no underline on hover
                },
              }}
              component={Link}
              to={"/store/products"}
            >
              {product.heading}
            </Typography>
            <ReactStars
              count={5}
              value={product.stars || 4}
              size={20}
              edit={false}
              activeColor="#ffd700"
            />
            <Typography sx={{ fontWeight: "650", marginTop: "4px" }}>
              {product.price}
            </Typography>
            <Button
              sx={{
                bgcolor: C.colorFeaturedCollectionSubHeading,
                color: "white",
                mt: "2rem",
              }}
              component={Link}
              to={"/store/products"}
            >
              View Product
            </Button>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}

export default SpecialProductsContainer;
