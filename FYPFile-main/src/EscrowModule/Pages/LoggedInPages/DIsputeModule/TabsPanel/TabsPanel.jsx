/* eslint-disable react/prop-types */
import { Tabs, Tab, useMediaQuery } from "@mui/material";
import CustomTabsPanel from "./CustomTabsPanel/CustomTabsPanel";
import EscrowDataGridComponent from "./EscrowDataGrid/EscrowDataGridComponent";
import useTabsPanel from "./Hooks/useTabsPanel";
import AllIcon from '@mui/icons-material/AllInbox';
import CompletedIcon from '@mui/icons-material/CheckCircle';
import OngoingIcon from '@mui/icons-material/Loop';
import CancelledIcon from '@mui/icons-material/Cancel';
function TabsPanel({ tabsName = [], tableName, status, }) {
  const { value, handleTabChange, handleDataGridRendered } = useTabsPanel();

  const isSmallScreen = useMediaQuery("(max-width:450px)"); // Check if screen width is <= 650px

  // Map tab names to icons
  const tabIcons = {
    All: <AllIcon />,
    Completed: <CompletedIcon />,
    Ongoing: <OngoingIcon />,
    Cancelled: <CancelledIcon />,
  };

  return (
    <>
      {/* Tabs */}
      <Tabs
        value={value}
        onChange={handleTabChange}
        sx={{
          mb: 3,
          borderBottom: "1px solid #ccc",
          minHeight: "unset", // Remove extra height
        }}
        TabIndicatorProps={{
          style: {
            backgroundColor: "#000", // Change indicator color
          },
        }}
      >
        {tabsName.map((tab, index) => (
          <Tab
            label={isSmallScreen ? null : tab} // Hide text on small screens
            icon={isSmallScreen ? tabIcons[tab] : null} // Show icon on small screens
            key={index}
            sx={{
              padding: "6px 12px",
              color: "#555", // Default text color
              "&.Mui-selected": {
                color: "#000", // Text color when selected
              },
            }}
          />
        ))}
      </Tabs>

      {status[value] && (
        <CustomTabsPanel value={value} index={value}>
          <EscrowDataGridComponent
            tableName={tableName}
            status={status[value]}
            onRendered={handleDataGridRendered} // Passing callback for reset loading
          />
        </CustomTabsPanel>
      )}
    </>
  );
}

export default TabsPanel;
