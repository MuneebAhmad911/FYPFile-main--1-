/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React, { useState } from "react";
import { Tabs, Tab, Box, Typography, useMediaQuery } from "@mui/material";
import {
  RecomendedCamera,
  RecomendedLaptop,
  RecomendedHeadphones,
  RecomendedMobile,
  RecomendedSpeakers,
} from "./Index";
import Watch from "../../../StoreAssets/img/sp4.png";
import Speaker from "../../../StoreAssets/img/sp1.png";
import Mobile from "../../../StoreAssets/img/sp3.png";
import Laptop from "../../../StoreAssets/img/sp2.png";

import CustomTabsPanel from "./CustomTabsPanel/CustomTabsPanel";


function TabsPanel({ tabsName = [], tableName, status }) {
  const [value, setValaue] = useState(0);
  const [loading, setLoading] = useState(false);

  // Use media query to detect screen size
  const at800 = useMediaQuery("(max-width: 800px)");
  const at900 = useMediaQuery("(max-width: 900px)");
  const at1000 = useMediaQuery("(max-width: 1000px)");
  const at1160 = useMediaQuery("(max-width: 1160px)");
  const at1200 = useMediaQuery("(max-width: 1200px)");

  const handleTabChange = (event, newValue) => {
    setValaue(newValue);
    setLoading(true);
  };

  const handleDataGridRendered = () => {
    setLoading(false);
  };

  const tabComponent = [
    <RecomendedLaptop />,
    <RecomendedCamera />,
    <RecomendedMobile />,
    <RecomendedHeadphones />,
  ];

  const tabImg = [Watch, Speaker, Mobile, Laptop];

  return (
    <>
      <Box
        sx={{
          p: "2rem 2.5rem",
        }}
      >
        <Typography
          sx={{
            fontWeight: 550,
            fontFamily: "Roboto, serif",
            fontStyle: "normal",
            fontVariationSettings: "wdth 100",
            fontSize: "30px",
            m: "0 0 1rem",
          }}
        >
          Recomended Products
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: at1000 ? "column" : "row",
            borderRadius: "8px",
          }}
        >
          {/* Tabs */}
          <Tabs
            value={value}
            onChange={handleTabChange}
            orientation={at1000 ? "horizental" : "vertical"}
            variant={at900 ? "standard" : "standard"}
            sx={{
              borderRadius: "20px",
              bgcolor: "white",
              // alignItems:at1000 ? "center" : "flex-start", // Ensure tabs are left-aligned
              boxShadow: "0 0 1px rgba(0, 0, 0, 0.3)",
            }}
            TabIndicatorProps={{
              sx: {
                display: "none",
              },
            }}
          >
            {tabsName.map((tab, index) => (
              <Tab
                key={index}
                label={
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: at800 ? "center": "flex-start",
                      gap: "8px",
                      width: "100%",
                      textAlign: "left",
                      p: "0.5rem 1rem 0.5rem 0.5rem", // Reduce extra padding
                      whiteSpace: "nowrap", // Prevents text from breaking into two lines
                      // textOverflow: "ellipsis", // Add ellipsis if text overflows

                    }}
                  >
                    <img
                      src={tabImg[index]}
                      alt={tab}
                      style={{
                        width: "30px", // Reduce image size slightly
                        height: "30px",
                        objectFit: "cover",
                      }}
                    />
                    {!at1160 && (
                      <Typography
                        variant="h6"
                        fontSize={14}
                        textAlign="left"
                        sx={{ whiteSpace: "nowrap", pr: "5rem" }} // Prevents wrapping
                      >
                        {tab}
                      </Typography>
                    )}
                  </Box>
                }
                sx={{
                  padding: "10px 12px",
                  color: "#555",
                  backgroundColor: value === index ? "#f0f0f0" : "transparent",
                  minWidth: "120px", // Ensures enough space for text
                  "&.Mui-selected": {
                    color: "inherit",
                  },
                  "&:hover": {
                    backgroundColor: "#e0e0e0",
                  },
                }}
              />
            ))}
          </Tabs>

          {/* Tab Content */}
          <Box
            sx={{
              // flexGrow: 1,
              // padding: "0.6rem", // Add padding to the content
            }}
          >
            {status[value] && (
              <CustomTabsPanel value={value} index={value}>
                {tabComponent[value]}
              </CustomTabsPanel>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default TabsPanel;











// function TabsPanel({ tabsName = [], tableName, status }) {
//   const [value, setValaue] = useState(0);
//   const [loading, setLoading] = useState(false);

//   // Use media query to detect screen size
//   const at800 = useMediaQuery("(max-width: 800px)");
//   const at900 = useMediaQuery("(max-width: 900px)");
//   const at1200 = useMediaQuery("(max-width: 1200px)");

//   const handleTabChange = (event, newValue) => {
//     setValaue(newValue);
//     setLoading(true);
//   };

//   const handleDataGridRendered = () => {
//     setLoading(false);
//   };

//   const tabComponent = [
//     <RecomendedLaptop />,
//     <RecomendedCamera />,
//     <RecomendedMobile />,
//     <RecomendedHeadphones />,
//     <RecomendedSpeakers />,
//   ];

//   const tabImg = [Watch, Speaker, Mobile, Laptop];

//   return (
//     <>
//       <Box
//         sx={{
//           p: "2rem 2.5rem",
//         }}
//       >
//         <Typography
//           sx={{
//             fontWeight: 550,
//             fontFamily: "Roboto, serif",
//             fontStyle: "normal",
//             fontVariationSettings: "wdth 100",
//             fontSize: "30px",
//             m: "0 0 1rem",
//           }}
//         >
//           Recomended Products
//         </Typography>
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: at1200 ? "column" : "row",
//             width: "100%",
//             height: "100%",
//             borderRadius: "8px",
//             minHeight: "400px",
//             // pt:""
//           }}
//         >
//           {/* Tabs */}
//           <Grid
//             component={Tabs}
//             container
//             value={value}
//             onChange={handleTabChange}
//             orientation={at1200 ? "horizontal" : "vertical"}
//             variant="standard"
//             sx={{
//               borderRadius: "20px",
//               bgcolor: "white",
//               // alignItems: "flex-start",
//               boxShadow: "0 0 1px rgba(0, 0, 0, 0.3)",
//             }}
//             TabIndicatorProps={{
//               sx: {
//                 display: "none",
//               },
//             }}
//           >
//             {tabsName.map((tab, index) => (
//               <Grid
//                 item
//                 size={3}
//                 key={index}
//                 component={Tab}
//                 label={
//                   <Box
//                     sx={{
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: at800 ? "center" : "flex-start",
//                       // gap: "8px",
//                       // width: "100%",
//                       textAlign: "left",
//                       p: "0.5rem 1rem 0.5rem 0.5rem", // Reduce extra padding
//                       // whiteSpace: "nowrap", // Prevents text from breaking into two lines
//                       // overflow: "scroll",
//                       // textOverflow: "ellipsis", // Add ellipsis if text overflows
//                     }}
//                   >
//                     <img
//                       src={tabImg[index]}
//                       alt={tab}
//                       style={{
//                         width: "30px", // Reduce image size slightly
//                         height: "30px",
//                         objectFit: "cover",
//                       }}
//                     />
//                     {!at800 && (
//                       <Typography
//                         variant="h6"
//                         fontSize={14}
//                         textAlign="left"
//                         // sx={{ whiteSpace: "nowrap",}} // Prevents wrapping
//                       >
//                         {tab}
//                       </Typography>
//                     )}
//                   </Box>
//                 }
//                 sx={{
//                   padding: "10px 12px",
//                   color: "#555",
//                   width: "100%",

//                   backgroundColor: value === index ? "#f0f0f0" : "transparent",
//                   // minWidth: "120px", // Ensures enough space for text
//                   "&.Mui-selected": {
//                     color: "inherit",
//                   },
//                   "&:hover": {
//                     backgroundColor: "#e0e0e0",
//                   },
//                 }}
//               />
//             ))}
//           </Grid>

//           {/* Tab Content */}
//           <Box
//             sx={{
//               flexGrow: 1,
//               // padding: "0.6rem", // Add padding to the content
//             }}
//           >
//             {status[value] && (
//               <CustomTabsPanel value={value} index={value}>
//                 {tabComponent[value]}
//               </CustomTabsPanel>
//             )}
//           </Box>
//         </Box>
//       </Box>
//     </>
//   );
// }

// export default TabsPanel;
