import { Box, Typography } from "@mui/material";
import TabsPanel from "../TabsPanel/TabsPanel";
import { Colors, Fonts } from "../../../../Theme/Theme";
import { UserContext } from "../../../../providers/Hooks/useEscrowContext";
import { useContext } from "react";

const EscrowDisputes = () => {
  const { user } = useContext(UserContext);
  const Tabs = ["All", "Completed", "Ongoing", "Cancelled"];
  return (
    <Box
      sx={{
        bgcolor: "#f9f9f9",
        p: { xs: "1rem", sm: "1rem 2rem" },
        "@media (min-width:760px)": { p: "1.5rem 4rem" },
        "@media (min-width:960px)": { p: "2rem 6rem" },
      }}
    >
      <Box
        sx={{
          p: { xs: "2rem 1rem", sm: "2rem", md: "3rem 2.5rem" },
        }}
      >
        {user.role == "Admin" ? (
          <Typography
            variant="h4"
            sx={{
              fontWeight: 600,
              mb: 2,
              color: Colors.secondary,
              font: Fonts.secondaryFont,
            }}
          >
            Filed Disputes
          </Typography>
        ) : (
          <Typography
            variant="h4"
            sx={{
              fontWeight: 600,
              mb: 2,
              color: Colors.secondary,
              font: Fonts.secondaryFont,
            }}
          >
            My Disputes
          </Typography>
        )}
        <TabsPanel tabsName={Tabs} tableName="this Table" status={Tabs} />
      </Box>
    </Box>
  );
};

export default EscrowDisputes;
