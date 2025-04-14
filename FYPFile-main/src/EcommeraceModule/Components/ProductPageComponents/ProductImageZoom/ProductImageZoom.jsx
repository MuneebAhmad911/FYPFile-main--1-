{
  /*
  import React, { useState } from "react";
import ReactImageMagnify from "react-image-magnify";
import { Box, Grid2 as Grid } from "@mui/material";

const ProductImageZoom = ({ images }) => {
  const [mainImage, setMainImage] = useState(images[0]); // Main Image
  const [thumbnails, setThumbnails] = useState(images.slice(1)); // Thumbnails (3 images)

  const handleImageChange = (clickedImage, index) => {
    const newThumbnails = [...thumbnails];
    newThumbnails[index] = mainImage; // Swap clicked image with main image
    setMainImage(clickedImage);
    setThumbnails(newThumbnails);
  };

  return (
    <Box display="block" gap={3} m={5}>
      <Box sx={{ width: "400px", height: "400px", overflow: "hidden" }}>
        <ReactImageMagnify
          {...{
            smallImage: {
              alt: "Product Image",
              isFluidWidth: true,
              src: mainImage, // Main image (Zoomable)
            },
            largeImage: {
              src: mainImage, // High-resolution image
              width: 1200,
              height: 1200,
            },
            enlargedImagePosition: "over",
            enlargedImageStyle: { zIndex: 10 },
            isHintEnabled: true,
          }}
        />
      </Box>

      <Box mt={2}>
        <Grid container spacing={1}>
          {thumbnails.map((image, index) => (
            <Grid item key={index}>
              <img
                src={image}
                alt={`Thumbnail ${index}`}
                style={{
                  width: "100px",
                  height: "100px",
                  cursor: "pointer",
                  borderRadius: "5px",
                  objectFit: "cover",
                  transition: "transform 0.3s ease-in-out",
                }}
                onClick={() => handleImageChange(image, index)} // Swap without full re-render
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ProductImageZoom;
*/
}
{
  /* <Grid container>
  {images.map((value,index) => (
    <Grid item key={index}>
        <img src={value} alt="" style={{width:"200px",height:"200px"}}/>
    </Grid>
  ))}
</Grid> */
}

import React, { useState } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { Box, Grid2 as Grid } from "@mui/material";

const ProductImageZoom = ({ images }) => {
  const [mainImage, setMainImage] = useState(images[0]); // Main Image
  const [thumbnails, setThumbnails] = useState(images.slice(1)); // Thumbnails

  const handleImageChange = (clickedImage, index) => {
    const newThumbnails = [...thumbnails];
    newThumbnails[index] = mainImage; // Swap clicked image with main image
    setMainImage(clickedImage);
    setThumbnails(newThumbnails);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="left"  sx={{flexBasis:"55%", p:"1rem"}}>
      <Box sx={{ width: "100%", height: "100%",}}>
        <Zoom>
          <img
            src={mainImage}
            alt="Product Image"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              cursor: "zoom-in",
              borderRadius: "8px",
              transition: "transform 0.3s ease-in-out",
              border:"1px solid rgb(221, 214, 214)"
            }}
          />
        </Zoom>
      </Box>

      <Box sx={{p:"2rem 0 "}}>
        <Grid container spacing={3} >
          {thumbnails.map((image, index) => (
            <Grid item key={index} border={"1px solid rgb(221, 214, 214)"} size={6} sx={{justifyContent:"center"}}>
              <img
                src={image}
                alt={`Thumbnail ${index}`}
                style={{
                  width: "100%",
                  height: "100%",
                  cursor: "pointer",
                  borderRadius: "5px",
                  objectFit: "cover",
                  transition: "transform 0.3s ease-in-out",
                }}
                onClick={() => handleImageChange(image, index)}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ProductImageZoom;
