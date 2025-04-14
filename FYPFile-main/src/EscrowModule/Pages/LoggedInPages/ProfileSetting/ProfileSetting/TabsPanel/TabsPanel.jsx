/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React, { useState } from "react";
import { Tabs, Tab, Box, Typography, useMediaQuery } from "@mui/material";
import {
  ProfileInformation,
  EditPassword,
  BillingAddress,
  TWOFA,
  NotificationSetting,
} from "../../index";
import CustomTabsPanel from "./CustomTabsPanel/CustomTabsPanel";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import HomeIcon from "@mui/icons-material/Home";
import SecurityIcon from "@mui/icons-material/Security";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Colors } from "../../../../../Theme/Theme";

function TabsPanel({ tabsName = [], tableName, status }) {
  const [value, setValaue] = useState(0);
  const [loading, setLoading] = useState(false);

  // Use media query to detect screen size
  const at800 = useMediaQuery("(max-width: 800px)");
  const at900 = useMediaQuery("(max-width: 900px)");

  const handleTabChange = (event, newValue) => {
    setValaue(newValue);
    setLoading(true);
  };

  const handleDataGridRendered = () => {
    setLoading(false);
  };

  const tabComponent = [
    <ProfileInformation />,
    <EditPassword />,
    <BillingAddress />,
    // <TWOFA />,
    <NotificationSetting />,
  ];

  const tabIcons = [
    <AccountCircleIcon />,
    <LockIcon />,
    <HomeIcon />,
    <SecurityIcon />,
    <NotificationsIcon />,
  ];

  return (
    <>
      <Box
        sx={{
          bgcolor: "#f5f5f5",
          "@media (min-width:500px )": { p: "3rem 1rem" },
          "@media (min-width:600px )": { p: "3rem 2rem" },
          "@media (min-width:700px )": { p: "3rem 3rem" },
          "@media (min-width:800px )": { p: "3rem 5rem" },
          "@media (min-width:900px )": { p: "3rem 6rem" },
          "@media (min-width:1000px)": { p: "3rem 8rem" },
        }}
      >
        <Typography
          sx={{
            fontWeight: 550,
            fontFamily: "Roboto, serif",
            fontStyle: "normal",
            fontVariationSettings: "wdth 100",
            fontSize: "30px",
            color: Colors.EscrowDetailsColor,
            m: "0 0 1rem",
          }}
        >
          Account Setting
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: at800 ? "column" : "row",
            width: "100%",
            height: "100%",
            border: "1px solid #ccc",
            borderRadius: "8px",
            // overflow: "hidden",
            bgcolor: "white",
            minHeight: "400px",
          }}
        >
          {/* Tabs */}
          <Tabs
            value={value}
            onChange={handleTabChange}
            orientation={at800 ? "horizontal" : "vertical"}
            variant={at800 ? "fullWidth" : "standard"}
            sx={{
              borderRight: at800 ? "none" : "1px solid #ccc",

              "@media (min-width:500px )": { minWidth: "70px" },
              "@media (min-width:600px )": { minWidth: "70px" },
              "@media (min-width:700px )": { minWidth: "70px" },
              "@media (min-width:800px )": { minWidth: "70px" },
              "@media (min-width:830px )": { minWidth: "80px" },
              "@media (min-width:860px )": { minWidth: "100px" },
              "@media (min-width:890px )": { minWidth: "120px" },
              "@media (min-width:900px )": { minWidth: "150px" },
              "@media (min-width:1000px)": { minWidth: "200px" },
              "@media (min-width:1100px )": { minWidth: "250px" },
            }}
            TabIndicatorProps={{
              sx: {
                display: "none", // Hide indicator
              },
            }}
          >
            {tabsName.map((tab, index) => (
              <Tab
                key={index}
                label={at900 ? undefined : tab} // Hide text on small screens
                icon={tabIcons[index]} // Use icons
                iconPosition="top"
                sx={{
                  textAlign: "center",
                  padding: at800 ? "10px 0" : "6px 12px",
                  "@media (min-width:800px )": { padding: "6px 0" },
                  "@media (min-width:830px )": { padding: "6px 0" },
                  "@media (min-width:860px )": { padding: "6px 7px" },
                  color: "#555", // Default text color
                  backgroundColor: value === index ? "#f0f0f0" : "transparent", // Highlight selected tab
                  borderRadius: "4px",
                  "&.Mui-selected": {
                    color: "#000", // Text color when selected
                  },
                  "&:hover": {
                    backgroundColor: "#e0e0e0", // Hover effect
                  },
                  minHeight: "50px",
                }}
              />
            ))}
          </Tabs>

          {/* Tab Content */}
          <Box
            sx={{
              flexGrow: 1,
              padding: "0.6rem", // Add padding to the content
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
