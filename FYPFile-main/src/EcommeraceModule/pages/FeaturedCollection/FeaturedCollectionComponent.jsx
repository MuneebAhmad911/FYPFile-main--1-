import {
  Typography,
  Box,
  Grid2 as Grid,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import RefreshIcon from "@mui/icons-material/Refresh";
import { products } from "../../../constants/Products";
import { ColorsEcommrace as C } from "../../Theme/EcommeraceTheme";
import ProductCard from "../../Components/ProductCard/ProductCard";

const FeaturedCollectionComponent = () => {
  const at1080 = useMediaQuery("(min-width:1080px)");
  const at720 = useMediaQuery("(max-width:720px)");
  const at520 = useMediaQuery("(max-width:520px)");
  // const at1080 = useMediaQuery("(min-width:1080px)");
  const [count, setCount] = React.useState(0);
  const [sizeGrid, setSizeGrid] = React.useState(2.4); // Default value is 2.4

  // Default value
  React.useEffect(() => {
    if (at520) {
      setSizeGrid(12);
    } else if (at720) {
      setSizeGrid(6);
    } else if (at1080) {
      setSizeGrid(2.4);
    } else {
      setSizeGrid(3);
    }
  }, [at1080, at720, at520]);

  // Toggle products order
  const displayedProducts = count ? [...products].reverse() : products;

  return (
    <section
      className="feature-wrapper py-5 home-wrapper-2"
      style={{ borderRadius: "10px", margin: "0 1rem" }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "2rem 0 2rem 0",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "550",
            color: C.colorFeaturedCollectionHeading,
            fontSize: "28px",
          }}
        >
          Featured Collection
        </Typography>
        <IconButton
          onClick={() => setCount((prev) => !prev)}
          sx={{ color: C.colorFeaturedCollectionHeading }}
        >
          <RefreshIcon />
        </IconButton>
      </Box>

      <Grid container spacing={2}>
        {displayedProducts
          .slice(
            0,
            at1080 ? displayedProducts.length : displayedProducts.length - 1
          )
          .filter((_, index) => (at1080 ? index < 5 : index < 4)) // Only keep first 5 items
          .map((product) => (
            <Grid item key={product.id} size={sizeGrid} md={sizeGrid}>
              <ProductCard
                image={product.productCardImage}
                heading={product.heading}
                brand={product.brand}
                stars={product.feedback[0].stars}
                price={product.price}
                imageonHover={product.imageonHover}
              />
            </Grid>
          ))}
      </Grid>
    </section>
  );
};

export default FeaturedCollectionComponent;
