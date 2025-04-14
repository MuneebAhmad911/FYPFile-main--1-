import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import wish from "../../StoreAssets/img/wish.svg";
import view from "../../StoreAssets/img/view.svg";
import ReactStars from "react-rating-stars-component";
import addcart from "../../StoreAssets/img/add-cart.svg";
import wishblack from "../../StoreAssets/img/wishblack.svg";
import prodcompare from "../../StoreAssets/img/prodcompare.svg";
import { ColorsEcommrace as C } from "../../Theme/EcommeraceTheme";

const ProductCard = ({
  image,
  imageonHover,
  heading,
  price,
  brand,
  stars,
  width,
  height,
}) => {
  const navigate = useNavigate();
  const [img, setImg] = useState(image);
  const [hovered, setHovered] = useState(false);
  const [wishIcon, setWishIcon] = useState(wish);

  return (
    <Box
      sx={{
        bgcolor: "white",
        width: "100%",
        height: height || "100%",
        borderRadius: "10px",
        position: "relative",
        overflow: "hidden",
        transition: "all 0.3s ease-in-out",
        justifyItems: "center",
        textAlign: "left",
      }}
      onMouseEnter={() => {
        setImg(imageonHover);
        setHovered(true);
      }}
      onMouseLeave={() => {
        setImg(image);
        setHovered(false);
      }}
      onClick={() => {
        navigate("/store/products");
      }}
    >
      {/* Top-Right Icons */}
      <Box
        sx={{
          top: "10px",
          right: "10px",
          display: "flex",
          position: "absolute",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            "&:hover": {
              backgroundColor: C.colorFeaturedCollectionButtonHover,
            },
            p: "0.4rem",
            display: "flex",
            borderRadius: "50%", // Fully round
            alignItems: "center", // Center vertically
            width: "fit-content", // Adjust as needed for size
            height: "fit-content", // Adjust to match width for a perfect circle
            justifyContent: "center", // Center horizontally
            transition: "background-color 0.5s ease-in-out",
            // marginBottom: "3px",
          }}
          onClick={() => setWishIcon(wishIcon === wish ? wishblack : wish)}
        >
          <img src={wishIcon} alt="Wishlist" style={{ width: "16px" }} />
        </Box>

        <Box
          sx={{
            // gap: "8px",
            display: "flex",
            flexDirection: "column",
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translateX(0)" : "translateX(30px)",
            transition: "opacity 0.3s ease-in-out, transform 0.3s ease-in-out",
          }}
        >
          <Box
            sx={{
              "&:hover": {
                backgroundColor: C.colorFeaturedCollectionButtonHover,
              },
              p: "0.4rem",
              display: "flex",
              borderRadius: "50%", // Fully round
              alignItems: "center", // Center vertically
              width: "fit-content", // Adjust as needed for size
              height: "fit-content", // Adjust to match width for a perfect circle
              justifyContent: "center", // Center horizontally
              transition: "background-color 0.5s ease-in-out",
            }}
          >
            <img src={prodcompare} alt="Compare" style={{ width: "16px" }} />
          </Box>

          <Box
            sx={{
              "&:hover": {
                backgroundColor: C.colorFeaturedCollectionButtonHover,
              },
              transition: "background-color 0.5s ease-in-out",
              borderRadius: "50%", // Fully round
              p: "0.4rem",
              width: "fit-content", // Adjust as needed for size
              height: "fit-content", // Adjust to match width for a perfect circle
              display: "flex",
              justifyContent: "center", // Center horizontally
              alignItems: "center", // Center vertically
            }}
          >
            <img src={view} alt="View" style={{ width: "16px" }} />
          </Box>
          <Box
            sx={{
              "&:hover": {
                backgroundColor: C.colorFeaturedCollectionButtonHover,
              },
              transition: "background-color 0.5s ease-in-out",
              borderRadius: "50%", // Fully round
              p: "0.4rem",
              width: "fit-content", // Adjust as needed for size
              height: "fit-content", // Adjust to match width for a perfect circle
              display: "flex",
              justifyContent: "center", // Center horizontally
              alignItems: "center", // Center vertically
            }}
          >
            <img src={addcart} alt="Add to Cart" style={{ width: "16px" }} />
          </Box>
        </Box>
      </Box>

      <Box sx={{}}>
        <img
          src={img}
          alt="Product"
          style={{
            width: width || "100%",
            height: "200px", // Fixed height for all images
            objectFit: "contain", // Ensures images fit within the space without distortion
            borderRadius: "10px",
          }}
        />
      </Box>

      <Box sx={{ textAlign: "left", padding: "10px 30px", width: "100%" }}>
        <Typography
          sx={{ color: C.colorFeaturedCollectionSubHeading, fontSize: "12px" }}
        >
          {brand}
        </Typography>
        <Typography
          sx={{
            color: C.colorFeaturedCollectionHeading,
            fontWeight: "550",
            height: "50px", // Fixed height to keep uniformity
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 2, // Show 2 lines max, add "..."
            WebkitBoxOrient: "vertical",
          }}
        >
          {heading}
        </Typography>

        <ReactStars
          count={5}
          value={stars || 4}
          size={24}
          edit={false}
          activeColor="#ffd700"
        />
        <Typography sx={{ fontWeight: "550", marginTop: "10px" }}>
          ${price}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProductCard;
