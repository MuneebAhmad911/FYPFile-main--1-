import { Typography, Box, TextField, Button } from "@mui/material";
import React from "react";
import ReactStars from "react-rating-stars-component";
import wish from "../../../StoreAssets/img/wish.svg";
import wishblack from "../../../StoreAssets/img/wishblack.svg";
import prodcompare from "../../../StoreAssets/img/prodcompare.svg";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
const ProductColors = ({ color }) => (
  <Box
    display="flex" /* Enables Flexbox */
    justifyContent="center" /* Centers horizontally */
    alignItems="center" /* Centers vertically */
    border="1px solid black"
    borderRadius="20px"
    height="35px"
    width="35px"
  >
    <Box
      bgcolor={color}
      height="25px"
      width="25px"
      borderRadius="50%" /* Ensures a perfect circle */
    />
  </Box>
);

function ProductInformation({ products }) {
  const [image, setImage] = React.useState(wish);

  const handleImageChange = () => {
    setImage((prevImage) => (prevImage === wish ? wishblack : wish));
  };
  const [isChecked, setIsChecked] = React.useState(false);

  const handleCompareImageChange = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <Box sx={{ p: "1rem 0 1rem 0" }}>
      <Typography
        variant="h5"
        sx={{
          fontSize: "18px",
          fontWeight: "600",
          fontFamily: "Rubik, sans-serif",
          borderBottom: "1px solid rgb(234, 234, 234)",
          letterSpacing: "0.6px",
          lineHeight: "26px",
          marginBottom: "10px",
          pb: "10px",
          textTransform: "capitalize",
          wordBreak: "break-word",
        }}
      >
        {products.name}
      </Typography>
      <Typography
        variant="h5"
        sx={{
          fontSize: "17px",
          fontWeight: "600",
          fontFamily: "Rubik, sans-serif",
          letterSpacing: "1.3px",
          lineHeight: "20px",
          color: "rgb(28, 27, 27)",
          fontStyle: "normal",
          padding: "5px 0 32px 0",
        }}
      >
        {products.price}
      </Typography>
      <Typography
        variant="h5"
        sx={{
          fontSize: "14px",
          fontWeight: "400",
          fontFamily: "Rubik, sans-serif",
          letterSpacing: "1.3px",
          lineHeight: "20px",
          color: "rgb(28, 27, 27)",
          fontStyle: "normal",
          borderBottom: "1px solid rgb(234, 234, 234)",
          pb: "20px",
        }}
      >
        <ReactStars
          count={5}
          value={products.feedback[0].stars || 4}
          size={24}
          edit={false}
          activeColor="#ffd700"
        />
        {products.feedback.length} Reveiws
      </Typography>
      <Typography
        variant="h5"
        sx={{
          fontSize: "13px",
          fontWeight: "400",
          fontFamily: "Rubik, sans-serif",
          letterSpacing: "1.3px",
          lineHeight: "20px",
          color: "rgb(119, 119, 119)",
          fontStyle: "normal",
          padding: "20px 0",
        }}
      >
        <span
          style={{
            fontSize: "14px",
            fontWeight: "600",
            fontFamily: "Rubik, sans-serif",
            letterSpacing: "1.3px",
            lineHeight: "20px",
            color: "rgb(28, 27, 27)",
            fontStyle: "normal",
          }}
        >
          Brand:
        </span>{" "}
        {products.brand}
      </Typography>
      <Typography
        variant="h5"
        sx={{
          fontSize: "13px",
          fontWeight: "400",
          fontFamily: "Rubik, sans-serif",
          letterSpacing: "1.3px",
          lineHeight: "20px",
          color: "rgb(119, 119, 119)",
          fontStyle: "normal",
          padding: "0 0 20px",
          // wordSpacing:"10px"
        }}
      >
        <span
          style={{
            fontSize: "14px",
            fontWeight: "600",
            fontFamily: "Rubik, sans-serif",
            letterSpacing: "1.3px",
            lineHeight: "20px",
            color: "rgb(28, 27, 27)",
            fontStyle: "normal",
          }}
        >
          Tags:
        </span>{" "}
        <span style={{ marginRight: "10px" }}>{products.tags[0]}</span>
        <span style={{ marginRight: "10px" }}>{products.tags[1]}</span>
        <span style={{ marginRight: "10px" }}>{products.tags[2]}</span>
        <span style={{ marginRight: "10px" }}>{products.tags[3]}</span>
      </Typography>

      <Box
        display={"flex"}
        gap={2}
        sx={{ lineSpacing: "10px", alignItems: "center" }}
      >
        <Box
          sx={{
            // m: " 1.5rem 0",
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            gap: 2,
          }}
        >
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: "600",
              fontFamily: "Rubik, sans-serif",
              letterSpacing: "1.3px",
              // lineHeight: "20px",
              color: "rgb(28, 27, 27)",
              fontStyle: "normal",
              // m: "0 0 0.5rem",
              textAlign: "center",
            }}
          >
            Quantity:
          </Typography>
          <TextField
            type="number"
            defaultValue={1}
            inputProps={{ min: 1, step: 1 }}
            variant="outlined"
            size="small"
            sx={{ width: "100px", m: " 0.8rem 0" }}
          />
        </Box>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "600",
            fontFamily: "Rubik, sans-serif",
            letterSpacing: "1.3px",
            lineHeight: "20px",
            color: "rgb(28, 27, 27)",
            fontStyle: "normal",
            // m: "0 0.5rem 0 0",
          }}
        >
          Colors:
        </Typography>
        <Box display={"flex"} gap={2}>
          <ProductColors color={products.productColors[0]} />
          <ProductColors color={products.productColors[1]} />
          <ProductColors color={products.productColors[2]} />
        </Box>
      </Box>
      <Box sx={{ m: "1rem 0" }}>
        <Button
          color="primary"
          sx={{
            borderRadius: "8px",
            bgcolor: "rgb(35, 47, 62)",
            color: "white",
            fontFamily: "Rubik, sans-serif",
            fontSize: "13px",
            fontWeight: 400,
            letterSpacing: "0.5px",
            lineHeight: "18px",
            padding: "10px 3.5rem",
            mr: "0.5rem",
            "&:hover": {
              bgcolor: "rgb(254, 189, 105)",
            },
          }}
        >
          Add To Cart
        </Button>
        <Button
          color="primary"
          sx={{
            borderRadius: "8px",
            bgcolor: "rgb(254, 189, 105)",
            color: "white",
            fontFamily: "Rubik, sans-serif",
            fontSize: "13px",
            fontWeight: 400,
            letterSpacing: "0.5px",
            lineHeight: "18px",
            padding: "10px 5.5rem",
            "&:hover": {
              bgcolor: "rgb(35, 47, 62)",
            },
          }}
        >
          Buy
        </Button>
      </Box>
      <Box display={"flex"} sx={{ gap: 2 }}>
        <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
          <img
            src={image}
            alt=""
            onClick={handleImageChange}
            style={{ width: "16px", fontWeight: "600", marginRight: "0.2rem" }}
          />{" "}
          <span style={{ fontSize: "14px", fontWeight: "600" }}>
            Add to Wishlist
          </span>
        </Box>
        <Box
          onClick={handleCompareImageChange}
          sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        >
          {isChecked ? (
            <CheckCircleOutlineIcon
              style={{ fontSize: "16px", fontWeight: "600", color: "black" }}
            />
          ) : (
            <img
              src={prodcompare}
              alt=""
              style={{ width: "16px", fontWeight: "600", color: "black" }}
            />
          )}
          <span
            style={{ fontSize: "14px", fontWeight: "600", marginLeft: "5px" }}
          >
            Compare Product
          </span>
        </Box>
      </Box>
    </Box>
  );
}

export default ProductInformation;
