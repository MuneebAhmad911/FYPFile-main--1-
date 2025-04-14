/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  Typography,
  Box,
  Button,
  Select,
  MenuItem,
  TextField,
  Autocomplete,
} from "@mui/material";
import React from "react";
import "./reusableComponents.css";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid2";
import { Link, useNavigate } from "react-router-dom";
import { Colors, Fonts } from "../../Theme/Theme";

//Escrow Method Imports
import EscrowIcon1 from "../../EscrowAssets/Icons-01.png";
import EscrowIcon2 from "../../EscrowAssets/Icons-02.png";
import EscrowIcon3 from "../../EscrowAssets/Icons-03.png";
import EscrowIcon4 from "../../EscrowAssets/Icons-04.png";
import EscrowIcon5 from "../../EscrowAssets/Icons-05.png";

import unTickSvg from "../../EscrowAssets/Untick.png";
import Circles from "../../EscrowAssets/svgs/Circles";
import BoxIcon from "../../EscrowAssets/EscrowBox.png";
import CarIcon from "../../EscrowAssets/EscrowCarIcon.png";
import TickSvg from "../../EscrowAssets/Icon-06-07-08.png";
import ServiceIcon from "../../EscrowAssets/EscrowService.png";

//Escrow Products Imports
import Item from "../../EscrowAssets/Icon-06-06.png";
import Domain from "../../EscrowAssets/Icon-06-01.png";
import Vehicle from "../../EscrowAssets/Icon-06-02.png";
import Milestone from "../../EscrowAssets/Icon-06-05.png";
import Electronic from "../../EscrowAssets/Icon-06-03.png";
import Merchandise from "../../EscrowAssets/Icon-06-04.png";
import useReusableComponent from "./hooks/useReusableComponent";

import { IsUserLoggedIn } from "../../providers/Hooks/useEscrowContext";

export function SubMenuNavComponent({ data }) {
  return (
    <>
      <Box
        sx={{
          backgroundImage: Colors.subNavGradient,
          p: {
            xs: "0.8rem 0",
            sm: "1rem 5rem",
            md: "1.8rem 9rem",
            lg: "2.5rem 12rem",
          },
          transition: "all 1s ease",
          zIndex: 10,
        }}
      >
        <Grid container>
          {data.map((submenuItem) => (
            <Grid
              key={submenuItem.index}
              component={Link}
              to={submenuItem.Link}
              size={4}
              sx={{
                transition: "all 0.4s ease",
                p: "11px 16px ",
                borderRadius: "4px",
                color: "white",
                cursor: "pointer",
                textDecoration: "none",
                fontSize: "16px",
                fontWeight: "600",
                "&:hover": {
                  bgcolor: "rgba(21,98,153,0.5)",
                },
              }}
            >
              {submenuItem.mainHeading}
              <Typography variant="body2">{submenuItem.subHeading}</Typography>
            </Grid>
          ))}
        </Grid>
        {/* Start Escrow component */}
        <Box
          className="firstBox"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            p: "1rem",
            border: "1px solid white",
            m: { md: "2rem 0 0" },
            borderRadius: "10px",
            color: "white",
          }}
        >
          {" "}
          <Box className="" sx={{ fontSize: "10px" }}>
            {" "}
            <Typography
              variant="h4"
              sx={{ fontSize: "16px", fontWeight: "600" }}
            >
              {" "}
              Start A Transaction With Escrow{" "}
            </Typography>{" "}
            <Typography
              variant="h6"
              sx={{ fontSize: "14px", fontWeight: "500" }}
            >
              {" "}
              Sell, buy or broker anything from domain names to vehicles{" "}
            </Typography>{" "}
          </Box>{" "}
          <GetStartedButton />
        </Box>
      </Box>
    </>
  );
}
export const GetStartedButton = ({
  additionalStyles = {},
  item = "",
  Text = "Get Started Now",
}) => {
  const { isUserLoggedIn, setIsUserLoggedIn } =
    React.useContext(IsUserLoggedIn);
  const navigate = useNavigate();
  const handleGetStarted = () => {
    if (isUserLoggedIn) {
      navigate("/startescrow");
    } else {
      navigate("/signin");
    }
  };
  return (
    <>
      <Button
        variant="primary"
        sx={{
          p: "0.8rem",
          bgcolor: Colors.button,
          fontSize: "0.9rem",
          fontWeight: "550",
          "&:hover": {
            bgcolor: Colors.buttonHover,
          },
          ...additionalStyles,
        }}
        onClick={handleGetStarted}
      >
        {Text}
      </Button>
    </>
  );
};
SubMenuNavComponent.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      mainHeading: PropTypes.string.isRequired,
      subHeading: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export const BarTypography = ({ Text = "I'm", additionalStyles = {} }) => (
  <Typography
    sx={{ color: Colors.secondaryColor, ...additionalStyles, mr: "0.5rem" }}
  >
    {Text}
  </Typography>
);
export const BarSelect = ({
  options = ["Selling", "Buying", "Brokering"],
  rolee = "Selling",
  setRolee = (role) => {
    rolee = role;
  },
  additionalStyles = {},
}) => (
  <Select
    value={rolee}
    onChange={(e) => setRolee(e.target.value)}
    sx={{
      width: "100%",
      "& .MuiSelect-select": {
        padding: "0 0 0 !important",
        textAlign: "left",
      },
      "& .MuiSelect-icon": {
        p: 0,
      },
      "& fieldset": { border: "none", p: "0" },
      ...additionalStyles,
    }}
  >
    {options.map((item) => (
      <MenuItem key={item} value={item}>
        {item}
      </MenuItem>
    ))}
  </Select>
);
export const BarAutocomplete = ({
  option = [
    "Domains",
    "Cars, Trucks, etc.",
    "Contracted Services",
    "Milestone Transactions",
    "Jewelry",
    "Electronics",
  ],
  value,
  setValue,
  additionalStyles = {},
}) => (
  <Autocomplete
    options={option}
    value={value}
    onChange={(event, newValue) => setValue(newValue)}
    renderInput={(params) => <TextField {...params} />}
    sx={{
      width: "100%",
      "& .MuiAutocomplete-inputRoot": { height: "40px" },
      "& .MuiInputBase-root": { height: "40px" },
      "& fieldset": { border: "none" },
      "& .MuiAutocomplete-endAdornment": {
        textAlign: "center",
        right: "7px !important",
      },
      ...additionalStyles,
    }}
  />
);
export const BarTextfield = ({ additionalStyles = {} }) => {
  return (
    <TextField
      id="standard-basic"
      defaultValue="1000"
      variant="standard"
      fullWidth
      sx={{
        "& .MuiInput-underline:before": {
          borderBottom: "none", // Removes the default underline
        },
        "& .MuiInput-underline:after": {
          borderBottom: "none", // Ensures no underline after focus
        },
        "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
          borderBottom: "none", // Removes hover underline
        },
        "& .MuiInput-root": {
          // pl: "0.3rem", // Align with other items
          m: 0,
        },
        "& :hover": {
          borderBottom: "none",
        },
        ...additionalStyles,
      }}
    />
  );
};

export function StartHome() {
  const {
    role,
    value,
    curreny,
    currentIndex,
    selectOptions2,
    spanStyle1,
    spanStyle2,
    imgStyle,
    myobj,
    activeIndex,
    setRole,
    setCurreny,
    setValue,
  } = useReusableComponent({ BoxIcon, CarIcon, ServiceIcon });

  return (
    <>
      <Box
        sx={{
          backgroundColor: "rgb(1, 66, 106)",
          display: "flex",
          "@media (max-width:700px)": {
            display: "block",
            justifyItems: "center",
          },
          flexDirection: {},
          gap: 2,
          p: "1rem 0 9rem",
        }}
      >
        {/* First Box (Form Section) */}
        <Box
          sx={{
            pt: 7,
            flex: 1,
            color: "white",
            animation: "slideFromLeft 1s ease-out",
            fontStretch: "extra-expanded",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              marginBottom: 2,
              fontWeight: "700",
              fontSize: "41px",
              fontFamily:
                "Montserrat, Helvetica, Arial, 'Microsoft Yahei', STXihei, sans-serif",
            }}
          >
            Never buy or sell online <br /> without using <br /> TrustBridge
          </Typography>
          <Typography
            variant="h6"
            sx={{
              marginBottom: 3,
              fontFamily:
                "Montserrat, Helvetica, Arial, 'Microsoft Yahei', STXihei, sans-serif",
            }}
          >
            With TrustBridge you can buy and sell anything safely <br /> without
            the risk of chargebacks. Truly secure payments.
          </Typography>
          <Box
            sx={{
              display: "flex",
              p: "0.1rem 1rem",
              bgcolor: "white",
              borderRadius: "4px",
              width: "100%",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                // alignItems: "center",
                borderRight: `1px solid ${Colors.secondaryColor}`,
                // textAlign: "center",
                width: "40%",
                height: "85%",
              }}
            >
              <BarTypography Text={"I'm"} />
              <BarSelect rolee={role} setRolee={setRole} />
            </Box>
            <BarAutocomplete value={value} setValue={setValue} />
          </Box>
          <Box
            sx={{
              display: "flex",
              p: "0.1rem 1rem",
              bgcolor: "white",
              borderRadius: "4px",
              mt: "0.5rem",
              width: "100%",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                // borderRight: `1px solid ${Colors.secondaryColor}`,
                textAlign: "center",
                width: "100%",
                p: "0.2rem 0",
              }}
            >
              <BarTypography Text={"for"} />
              <BarTextfield />
            </Box>
            <Box
              sx={{
                width: "60%",
                justifyContent: "center",
                borderLeft: `1px solid ${Colors.secondaryColor}`,
                height: "55%",
                p: "0 0 0 0.5rem",
              }}
            >
              <BarSelect
                options={selectOptions2}
                rolee={curreny}
                setRolee={setCurreny}
              />
            </Box>
          </Box>
          <GetStartedButton
            additionalStyles={{
              mt: "0.5rem",
              "@media (max-width:700px)": { width: "100%" },
            }}
          />
        </Box>

        {/* Second Box (Dynamic Content) */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            color: "white",
            textAlign: "Left",
            animation: "slideFromTop 1s ease-out",
            pt: 7,
            "@media (max-width:1080px)": {
              display: "block",
              justifyItems: "center",
            },
            justifyContent: "center",
          }}
        >
          <Box sx={{ p: "0 1rem 0", position: "relative" }}>
            <img
              src={myobj[currentIndex].picture}
              alt=""
              height={192}
              width={200}
              style={{
                position: "absolute",
                left: "60px",
              }}
            />
            <Circles />
          </Box>
          <Box>
            {myobj[currentIndex].MainHeading.map((item, index) => (
              <Typography
                key={index}
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  lineHeight: "1.4",
                  fontFamily:
                    "Montserrat, Helvetica, Arial, 'Microsoft Yahei', STXihei, sans-serif",
                  p: "0 0 0 2rem",
                  "@media (max-width:1080px)": { p: "0" },

                  position: "relative",
                }}
              >
                {item}
              </Typography>
            ))}

            {myobj[currentIndex].subheading.map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: "0.5rem",
                  position: "relative", // Ensure the tick pictures are positioned relative to their container
                }}
              >
                <img
                  src={activeIndex == index ? TickSvg : unTickSvg}
                  alt=""
                  style={{
                    height: "30px",
                    width: "30px",
                    transform: activeIndex === index ? "scale(1.1)" : "none",
                    transition: "transform 0.3s",
                    marginRight: activeIndex === index ? "10px" : 0,
                  }}
                />
                <Typography
                  sx={{
                    fontFamily:
                      "Montserrat, Helvetica, Arial, 'Microsoft Yahei', STXihei, sans-serif",
                    color: activeIndex === index ? "white" : "#46d1ff",
                    marginLeft: activeIndex === index ? "0" : "none",
                    transform: activeIndex === index ? "scale(1.1)" : "none",
                    transition: "transform 0.3s, color 0.3s",
                    fontSize: "14px",
                  }}
                >
                  {item.text}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
}

export const EscrowMethod = () => {
  const escrowSteps = [
    { Img: EscrowIcon1, caption: "1. Buyer and Seller agree to terms" },
    { Img: EscrowIcon2, caption: "2. Buyer submits payment to TrustBridge " },
    {
      Img: EscrowIcon3,
      caption: "3. Seller delivers goods or service to buyer ",
    },
    { Img: EscrowIcon4, caption: "4. Buyer approves goods or services " },
    {
      Img: EscrowIcon5,
      caption: "5. TrustBridge releases payment to seller ",
    },
  ];

  return (
    <>
      <Box
        sx={{
          justifyItems: "center",
          display: "block",
          m: "1rem",
        }}
      >
        <Box
          sx={{
            justifyItems: "center",
            textAlign: { xs: "left", md: "center" },
            m: {
              xs: "2.5rem 1rem 1.5rem",
              sm: "3rem 3rem 1.5rem",
              md: "5rem 10rem 3.5rem",
              lg: "5rem 10rem 3.5rem",
            },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 600,
              mb: "1rem",
              fontFamily: Fonts.primaryFont,
              color: Colors.fontColor,
            }}
          >
            Your Transactions, Secured and Simplified with TrustBridge
          </Typography>
          <Typography
            sx={{
              fontFamily: Fonts.primaryFont,
              fontWeight: 400,
              color: Colors.fontColor,
            }}
          >
            Escrow is the most secure payment method from a counterparty risk
            perspective - safeguarding both buyer and seller, all funds
            transacted using escrow are kept in trust.
          </Typography>
        </Box>

        <Box
          sx={{
            display: { sm: "block", md: "flex" },
            justifyContent: "space-between",
            textAlign: "center",
            mb: "2rem",
          }}
        >
          {escrowSteps.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: { xs: "flex", md: "block" },
                justifyContent: { xs: "left", md: "center" },
              }}
            >
              <img
                src={item.Img}
                style={{ height: "150px", width: "150px", m: "0.5rem 0" }}
              />
              <Typography
                sx={{
                  fontFamily: Fonts.primaryFont,
                  fontWeight: "bold",
                  color: Colors.fontColor,
                  alignContent: "center",
                }}
              >
                {item.caption}
              </Typography>
            </Box>
          ))}
        </Box>
        <GetStartedButton additionalStyles={{ color: "white" }} />
        <Typography
          component={Link}
          to={"/queries/Escrow"}
          sx={{
            display: "block",
            m: "1rem 0 5rem 0",
            fontFamily: Fonts.primaryFont,
            textDecoration: "none",
            color: Colors.button,
            "&:hover": {
              textDecoration: "underline",
              color: Colors.buttonHover,
            },
          }}
        >
          Learn More about Escrow
        </Typography>
      </Box>
    </>
  );
};

export const EscrowProducts = () => {
  const escrowProducts = [
    {
      Link: "/queries/Allowedgoodsservices",
      Img: Domain,
      Heading: "Domain Names",
      description:
        "TrustBridge is the dominant payment method for the buying & selling of domain names, with transactions including uber.com, snapchat.com, spacex.com, twitter.com, instagram.com, freelancer.com, gmail.com, slack.com, wechat.com, chrome.com and wordpress.com.",
    },
    {
      Link: "/queries/Allowedgoodsservices",
      Img: Vehicle,
      Heading: "Motor Vehicles",
      description:
        "When buying classic cars, a used sailboat or even an aircraft engine TrustBridge ensures money transfer and vehicle delivery with every sale. Our experienced personnel can even help you with shipping documentation, titles, liens and more.",
    },
    {
      Link: "/queries/Allowedgoodsservices",
      Img: Electronic,
      Heading: "Electronics",
      description:
        "TrustBridge handles the buying and selling large scale computer setups, professional sound systems and all manner of electronic equipment both big and small.",
    },
    {
      Link: "/queries/Allowedgoodsservices",
      Img: Merchandise,
      Heading: "General Merchandise",
      description:
        "From computer hardware to luxury goods, you can safely and easily buy and sell merchandise all over the world with the protection of TrustBridge.",
    },
    {
      Link: "/queries/Allowedgoodsservices",
      Img: Milestone,
      Heading: "Milestone Transactions",
      description:
        "Paying for a good or service and want money released only at certain stages? Use Escrow to assure that money is released only when you're happy with each step.",
    },
    {
      Link: "/queries/Allowedgoodsservices",
      Img: Item,
      Heading: "Jewelry, Watches, and Fashion",
      description:
        "Buying and selling expensive jewelry online can be difficult, as it is extremely difficult to spot a scam. TrustBridge's simple 5-step process ensures money transfer and jewelry delivery with every sale.",
    },
  ];
  return (
    <>
      <Box sx={{ justifyItems: "center" }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 600,
            mb: "1rem",
            fontFamily: Fonts.primaryFont,
            color: Colors.fontColor,
            textAlign: { xs: "left", md: "center" },
            m: {
              xs: "2.5rem 1rem 1.5rem",
              sm: "3rem 5rem 1.5rem",
              md: "5rem 5rem 3.5rem",
              lg: "5rem 5rem 3.5rem",
            },
            fontSize: "2.2rem",
          }}
        >
          Safely buy and sell products and services of any amount.
        </Typography>
        <Box>
          <Grid
            container
            spacing={2}
            sx={{
              m: {
                xs: "2rem 0.5rem 1.5rem",
                sm: "3rem 1.5rem 1.5rem",
                md: "5rem 5rem 1.5rem",
                lg: "5rem 5rem 1.5rem",
              },
            }}
          >
            {escrowProducts.map((item, index) => {
              return (
                <Grid
                  size={{ xs: 12, md: 6 }}
                  key={index}
                  display={"block"}
                  sx={{ p: "0 3rem 0 4rem" }}
                >
                  <img
                    src={item.Img}
                    alt=""
                    style={{ height: "100px", width: "100px" }}
                  />
                  <Typography variant="h6">{item.Heading}</Typography>
                  <Typography variant="body">{item.description}</Typography>
                  <Typography
                    component={Link}
                    to={item.Link}
                    sx={{
                      display: "block",
                      m: "1rem 0 5rem 0",
                      fontFamily: Fonts.primaryFont,
                      textDecoration: "none",
                      color: Colors.button,
                      "&:hover": {
                        textDecoration: "underline",
                        color: Colors.buttonHover,
                      },
                    }}
                  >
                    Learn More
                  </Typography>
                </Grid>
              );
            })}
          </Grid>
        </Box>
        <GetStartedButton additionalStyles={{ color: "white" }} />
      </Box>
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default function reusableComponents() {
  return <></>;
}
