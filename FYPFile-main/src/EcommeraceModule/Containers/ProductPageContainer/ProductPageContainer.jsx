import React from "react";
import { Box } from "@mui/material";
import StickyBox from "react-sticky-box";
import ProductImageZoom from "../../Components/ProductPageComponents/ProductImageZoom/ProductImageZoom";
import ProductInformation from "../../Components/ProductPageComponents/ProductInformation/ProductInformation";
import FAQAccordion from "../../Components/FAQAccordion/FAQAccordion";
import ProductDescription from "../../Components/ProductPageComponents/ProductDescription/ProductDescription";
import ProductFeedback from "../../Components/ProductPageComponents/ProductFeedback/ProductFeedback";
import FeaturedCollectionComponent from "../../pages/FeaturedCollection/FeaturedCollectionComponent";

const ProductPageContainer = ({ products }) => {
  return (
    <>
      {console.log(products)}
      <Box
        sx={{
          backgroundColor: "white",
          borderRadius: "12px",
          boxShadow: "0 0 2px rgba(0, 0, 0, 0.3)",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            position: "relative",
            minHeight: "100vh", // Ensures enough height for sticky behavior
          }}
        >
          {/* Product Images */}
          <ProductImageZoom images={products.images} />

          {/* Sticky Product Information */}
          <StickyBox
            offsetTop={10}
            offsetBottom={20}
            style={{ flexBasis: "55%", alignSelf: "start", flexShrink: 0 }}
          >
            <ProductInformation products={products} />
          </StickyBox>
        </Box>
      </Box>

      <Box display="flex" sx={{ gap: 2 }}>
        <Box display="block" sx={{ flexBasis: "75%" }}>
          <ProductDescription description={"heheh"} />
          <ProductFeedback feedback={products.feedback} />
        </Box>
        <FAQAccordion />
      </Box>

      <Box>
        <FeaturedCollectionComponent />
      </Box>
    </>
  );
};

export default ProductPageContainer;
