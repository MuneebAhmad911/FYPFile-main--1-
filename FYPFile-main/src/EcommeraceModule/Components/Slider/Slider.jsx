import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import prodcompare from "../../StoreAssets/img/prodcompare.svg";
import addcart from "../../StoreAssets/img/add-cart.svg";
import wish from "../../StoreAssets/img/wish.svg";
import wishblack from "../../StoreAssets/img/wishblack.svg";
import view from "../../StoreAssets/img/view.svg";
import { ColorsEcommrace as C } from "../../Theme/EcommeraceTheme";

const Slider = ({ img = [] }) => {
  const [index, setIndex] = useState(0);
  const [wishIcon, setWishIcon] = useState(wish);
  const [hovered, setHovered] = useState(false);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % img.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + img.length) % img.length);
  };

  return (
    <Box
      sx={{
        width: "300px",
        height: "400px",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        bgcolor: "white",
        borderRadius: "10px",
        transition: "all 0.3s ease-in-out",
      }}
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
    >
      {/* Top-Right Icons */}
      <Box
        sx={{
          position: "absolute",
          top: "10px",
          right: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            "&:hover": {
              backgroundColor: C.colorFeaturedCollectionButtonHover,
            },
            transition: "background-color 0.5s ease-in-out",
            borderRadius: "50%",
            p: "0.4rem",
            width: "fit-content",
            height: "fit-content",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={() => setWishIcon(wishIcon === wish ? wishblack : wish)}
        >
          <img src={wishIcon} alt="Wishlist" style={{ width: "16px" }} />
        </Box>

        <Box
          sx={{
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
              transition: "background-color 0.5s ease-in-out",
              borderRadius: "50%",
              p: "0.4rem",
              width: "fit-content",
              height: "fit-content",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
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
              borderRadius: "50%",
              p: "0.4rem",
              width: "fit-content",
              height: "fit-content",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
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
              borderRadius: "50%",
              p: "0.4rem",
              width: "fit-content",
              height: "fit-content",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={addcart} alt="Add to Cart" style={{ width: "16px" }} />
          </Box>
        </Box>
      </Box>

      {/* Sliding Image */}
      <Box
        component="img"
        src={img[index]}
        alt="Sliding Image"
        sx={{
          width: "100%",
          transition: "transform 0.5s ease-in-out",
        }}
      />

      {/* Left Arrow */}
      <IconButton
        onClick={prevSlide}
        sx={{
          position: "absolute",
          left: "5px",
          top: "50%",
          transform: "translateY(-50%)",
          color: "black",
          "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.7)" },
        }}
      >
        <ArrowBackIosIcon />
      </IconButton>

      {/* Right Arrow */}
      <IconButton
        onClick={nextSlide}
        sx={{
          position: "absolute",
          right: "5px",
          top: "50%",
          transform: "translateY(-50%)",
          color: "black",
          "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.7)" },
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};

export default Slider;