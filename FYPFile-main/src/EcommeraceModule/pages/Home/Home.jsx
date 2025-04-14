import "./home.css";
import React, { useState } from "react";
import {
  C,
  Box,
  Link,
  Grid,
  ninth,
  first,
  sixth,
  tenth,
  seventh,
  pictures,
  Typography,
  sectionPics1,
  useMediaQuery,
  SpecialProduct,
  RecomendedProduct,
  LogoSliderComponent,
  MainProductsComponent,
  FeaturedCollectionComponent,
} from "./ImportsHome/ImportHome.js";
import { useNavigate } from "react-router-dom";
function Home() {
  const at1150 = useMediaQuery("(min-width:1150px)");
  const at1060 = useMediaQuery("(min-width:1060px)");
  const at1000 = useMediaQuery("(min-width:1000px)");
  const at980 = useMediaQuery("(min-width:980px)");
  const at960 = useMediaQuery("(min-width:960px)");
  const at936 = useMediaQuery("(min-width:936px)");
  const at900 = useMediaQuery("(min-width:900px)");
  const at880 = useMediaQuery("(min-width:980px)");
  const at600 = useMediaQuery("(min-width:600px)");
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("./products");
  };

  return (
    <>
      <section>
        <Box
          display={{ xs: "block", md: "flex" }}
          sx={{ margin: at936 ? "2rem" : "1rem", gap: at936 ? 2 : 1 }}
        >
          {/* Left Section */}
          <Box
            sx={{
              position: "relative",
              flexBasis: "50%",
              marginBottom: at936 ? "1rem" : "0.5rem",
              height: at900 ? "100%" : "40%",
            }}
          >
            <img
              src={first}
              className="image-fluid rounded-3"
              alt="main banner"
              style={{ height: at900 ? "100%" : "40%", width: "100%" }}
            />
            <Box position={"absolute"} sx={{ top: "15%", left: "10%" }}>
              <Typography
                sx={{
                  fontSize: at1150
                    ? "15px"
                    : at936
                    ? "14px"
                    : at600
                    ? "13px"
                    : "12px",
                  fontWeight: 400,
                  lineHeight: "24px",
                  color: "#bf4800",
                  marginBottom: at936 ? "0.3rem" : "0.2rem",
                  letterSpacing: "0.3px",
                }}
              >
                SUPERCHARGED FOR PROS.
              </Typography>

              <Typography
                sx={{
                  fontSize: at1150
                    ? "42px"
                    :  at1060
                    ? "34px"
                    : at936
                    ? "30px"
                    : at600
                    ? "32px"
                    : "24px",
                  lineHeight: at936 ? "64px" : "48px",
                  letterSpacing: "-2px",
                  fontWeight: 500,
                  textTransform: "none",
                  wordWrap: "break-word",
                }}
              >
                IPAD S13+ Pro.
              </Typography>

              <Typography
                sx={{
                  fontSize:   at1150
                  ? "16px"
                  :  at1060
                  ? "14px"
                  : at936 ? "12px" : at900 ? "16px" : "16px",
                  lineHeight: "28px",
                  letterSpacing: "0.4px",
                  marginBottom: at936 ? "36px" : "24px",
                  color: "#131921",
                }}
              >
                From $999.00 or $41.62/mo. <br /> for 24 mo. Footnote*
              </Typography>

              <Link
                className="button a"
                to={"/store/products"}
                style={{
                  fontSize: at936 ? "16px" : at600 ? "14px" : "12px",
                  padding: at936 ? "10px 20px" : "8px 16px",
                }}
              >
                BUY NOW
              </Link>
            </Box>
          </Box>

          {/* Right Section (Grid of Pictures) */}
          <Grid
            container
            spacing={2}
            sx={{ marginBottom: at936 ? "1rem" : "0.5rem", flexBasis: "50%" }}
          >
            {pictures.map((value, index) => (
              <Grid
                key={index}
                item
                sx={{
                  position: "relative",
                  color: "black",
                  overflow: "hidden",
                  "&:hover img": {
                    transform: "scale(1.1)",
                    transition: "transform 0.3s ease-in-out",
                  },
                  borderRadius: "8px",
                }}
                component={Link}
                to={"/store/products"}
                size={6}
              >
                <img
                  src={value.picture}
                  alt="main banner"
                  className="rounded-3"
                  style={{
                    height: "100%",
                    width: "100%",
                    transition: "transform 0.3s ease-in-out",
                  }}
                />

                <Box
                  className="small-banner-content"
                  sx={{ position: "absolute", top: "15%", left: "10%" }}
                >
                  <Typography
                    sx={{
                      fontSize: at936 ? "12px" : at600 ? "10px" : "9px",
                      lineHeight: "16px",
                      marginBottom: at936 ? "12px" : "8px",
                      letterSpacing: "0.3px",
                      color: "#bf4800",
                    }}
                  >
                    {value.subHeading}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: at936 ? "19px" : at600 ? "16px" : "14px",
                      marginBottom: at936 ? "7px" : "5px",
                      letterSpacing: "0px",
                      lineHeight: "32px",
                      fontWeight: 500,
                      textTransform: "none",
                    }}
                  >
                    {value.mainHeading}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: at936 ? "12px" : at600 ? "10px" : "9px",
                      lineHeight: "18px",
                      width: "64%",
                      letterSpacing: "0.2px",
                      marginBottom: at936 ? "36px" : "24px",
                      color: "#131921",
                    }}
                  >
                    {value.desc}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </section>

      <Box sx={{ backgroundColor: "#f5f5f7" }}>
        {/* Advantages */}
        <section className="home-wrapper-2" style={{ padding: "3rem 2rem " }}>
          <Box>
            <Grid container spacing={2}>
              <Grid
                item
                size={{ xs: 3, sm: 6, md: 3 }}
                sx={{
                  display: { xs: "block", md: "flex" },
                  gap: 2,
                  alignItems: "center",
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                <img
                  src={sixth}
                  alt=""
                  style={{ height: "27px", width: "30px" }}
                />
                <Box>
                  <Typography sx={{ display: { xs: "none", sm: "block" } }}>
                    Free Shipping
                  </Typography>
                  <Typography sx={{ display: { xs: "none", sm: "block" } }}>
                    For orders above $100
                  </Typography>
                </Box>
              </Grid>
              <Grid
                item
                size={{ xs: 3, sm: 6, md: 3 }}
                sx={{
                  display: { xs: "block", md: "flex" },
                  gap: 2,
                  alignItems: "center",
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                <img
                  src={seventh}
                  alt=""
                  style={{ height: "30px", width: "30px" }}
                />
                <Box>
                  <Typography sx={{ display: { xs: "none", sm: "block" } }}>
                    Daily Surprise offer
                  </Typography>
                  <Typography sx={{ display: { xs: "none", sm: "block" } }}>
                    Save upto 25% off
                  </Typography>
                </Box>
              </Grid>
              {/* <Grid
                item
                size={{ xs: 2.4, sm: 6, md: 2.4 }}
                sx={{ display: "flex", gap: 2, alignItems: "center" }}
              >
                <img
                  src={eighth}
                  alt=""
                  style={{ height: "33px", width: "30px" }}
                />
                <Box>
                  <Typography sx={{ display: { xs: "none", sm: "block" } }}>
                    24/7 support
                  </Typography>
                  <Typography sx={{ display: { xs: "none", sm: "block" } }}>
                    SHop with an expert
                  </Typography>
                </Box>
              </Grid> */}
              <Grid
                item
                size={{ xs: 3, sm: 6, md: 3 }}
                sx={{
                  display: { xs: "block", md: "flex" },
                  gap: 2,
                  alignItems: "center",
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                <img
                  src={ninth}
                  alt=""
                  style={{ height: "30px", width: "30px" }}
                />
                <Box>
                  <Typography sx={{ display: { xs: "none", sm: "block" } }}>
                    Affordable Prices
                  </Typography>
                  <Typography sx={{ display: { xs: "none", sm: "block" } }}>
                    get Factory Direct price
                  </Typography>
                </Box>
              </Grid>
              <Grid
                item
                size={{ xs: 3, sm: 6, md: 3 }}
                sx={{
                  display: { xs: "block", md: "flex" },
                  gap: 2,
                  alignItems: "center",
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                <img
                  src={tenth}
                  alt=""
                  style={{ height: "25px", width: "30px" }}
                />
                <Box>
                  <Typography sx={{ display: { xs: "none", sm: "block" } }}>
                    Secure Payments
                  </Typography>
                  <Typography sx={{ display: { xs: "none", sm: "block" } }}>
                    100% proteceted payment
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </section>

        {/* Categories Link */}
        <section style={{ pb: 5 }}>
          <Box
            // className="categories"
            sx={{
              borderRadius: "8px",
              margin: "0 1rem",
              p: "1.5rem",
              backgroundColor: "white",
            }}
          >
            <Grid container>
              {sectionPics1.map((value, index) => (
                <Grid
                  item
                  key={index}
                  size={at600 ? 4 : 6}
                  sx={{
                    p: "1rem 1rem",
                    alignItems: "center",
                    display: at936 ? "flex" : "block",
                    borderRight:
                      index !== sectionPics1.length - 1 &&
                      index !== sectionPics1.length - 4
                        ? "1px solid #ededed"
                        : "none",
                    justifyItems: at936 ? "space-between" : "center",
                    justifyContent: at936 ? "space-between" : "center",
                    borderBottom: value.border,
                  }}
                >
                  {!at936 && (
                    <img
                      src={value.picture}
                      alt="myPic"
                      style={{ width: "100px", height: "100px" }}
                    />
                  )}
                  <Box textAlign={at936 ? "left" : "center"}>
                    <Typography
                      sx={{
                        colors: C.colorFeaturedCollectionHeading,
                        fontWeight: "600",
                        fontFamily: "Rubik, Sans Serif",
                        cursor: "pointer",
                        "&:hover": { textDecoration: "underline" },
                      }}
                    >
                      {value.Heading}
                    </Typography>
                    <Typography
                      sx={{
                        colors: C.colorCategoriesSubHeading,
                        fontSize: "14px",
                      }}
                    >
                      {value.items}
                    </Typography>
                  </Box>
                  {at936 && (
                    <img
                      src={value.picture}
                      alt="myPic"
                      style={{ width: "100px", height: "100px" }}
                    />
                  )}
                </Grid>
              ))}
            </Grid>
            {/* <Grid container spacing={2}>
              {sectionPics2.map((value, index) => (
                <Grid
                  key={index}
                  item
                  size={at600 ? 4 : 6}
                  sx={{
                    borderRight:
                      index !== sectionPics1.length - 1
                        ? "1px solid #ededed"
                        : "none",
                    display: at936 ? "flex" : "block",
                    justifyItems: at936 ? "space-between" : "center",
                    justifyContent: at936 ? "space-between" : "center",
                    alignItems: "center",
                    p: "1rem 1rem",
                  }}
                >
                  {!at936 && (
                    <img
                      src={value.picture}
                      alt="myPic"
                      style={{ width: "100px", height: "100px" }}
                    />
                  )}
                  <Box textAlign={at936 ? "left" : "center"}>
                    <Typography
                      sx={{
                        colors: C.colorFeaturedCollectionHeading,
                        fontWeight: "600",
                        fontFamily: "Rubik, Sans Serif",
                        cursor: "pointer",
                        "&:hover": { textDecoration: "underline" },
                      }}
                    >
                      {value.Heading}
                    </Typography>
                    <Typography
                      sx={{
                        colors: C.colorCategoriesSubHeading,
                        fontSize: "14px",
                      }}
                    >
                      {value.items}
                    </Typography>
                  </Box>
                  {at936 && (
                    <img
                      src={value.picture}
                      alt="myPic"
                      style={{ width: "100px", height: "100px" }}
                    />
                  )}
                </Grid>
              ))}
            </Grid> */}
          </Box>
        </section>

        {/* Featured Collection */}
        <section>
          <Box>
            <FeaturedCollectionComponent />
          </Box>
        </section>

        {/* Main Products Collection */}
        <section>
          <Box>
            <MainProductsComponent />
          </Box>
        </section>

        {/* Recomended Products Collection */}
        <section>
          <Box>
            <LogoSliderComponent />
          </Box>
        </section>

        {/* Special Products Collection */}
        <section>
          <Box>
            <SpecialProduct />
          </Box>
        </section>

        {/* Recomended Products Collection */}
        <section>
          <Box>
            <RecomendedProduct />
          </Box>
        </section>
      </Box>
    </>
  );
}

export default Home;
