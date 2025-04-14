/* eslint-disable no-unused-vars */
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { Fonts, Colors } from "../../../../../../Theme/Theme";
import CircleIcon from "@mui/icons-material/Circle";
import { UserContext } from "../../../../../../providers/Hooks/useEscrowContext";
import { useContext } from "react";

function DisputeDetails() {
  const navigate = useNavigate();
  const location = useLocation();
  const { item } = location.state; // Access passed data
  const { user, setUser } = useContext(UserContext);
  const handleAddDisputeTermClick = () => {
    navigate("/FileDispute", { state: { item, addingTerms: true } });
  };
  const handleUpdateDispute = () => {
    navigate("/Admindashboard/updatedisputes", {
      state: { item, addingTerms: true },
    });
  };
  return (
    <>
      <Box p="0.5rem 0 0">
        <Typography
          variant="h6"
          sx={{
            fontSize: "22px",
            fontFamily: Fonts.primaryFont,
            fontWeight: 600,
            mb: "1rem",
            color: Colors.EscrowDetailsColor,
          }}
        >
          Dispute Details
        </Typography>
        {item.disputeDetails.map((value, index) => (
          <Typography
            key={index}
            sx={{ fontSize: "14px", color: Colors.fontColor, lineHeight: 2 }}
          >
            {index + 1}. {value}
          </Typography>
        ))}
        <Box
          sx={{
            borderTop: `1px solid ${Colors.borderColor}`,
            borderBottom: `1px solid ${Colors.borderColor}`,
            p: "0.5rem 0",
            m: "0.5rem 0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "16px",
              color: Colors.EscrowDetailsColor,
              fontWeight: 600,
            }}
          >
            Dispute Status
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: 450,
              fontFamily: "Roboto, serif",
              fontStyle: "normal",
              fontVariationSettings: "wdth 100",
              bgcolor: "#fff1a8",
              color: "#677702",
              p: "0.3rem 0.7rem 0.3rem 0.5rem",
              borderRadius: "12px",
              mb: "0.2rem",
              width: "fit-content",
            }}
          >
            <CircleIcon sx={{ fontSize: "10px", marginRight: "0.4rem" }} />
            {item.disputeStatus.primary}
          </Typography>
        </Box>
        <Typography
          sx={{
            pt: "0.5rem",
            mt: "0.5rem",
            color: Colors.EscrowDetailsColor,
            textDecoration: "none",
            cursor: "pointer",
            "&:hover": {
              textDecoration: "underline",
              color: "black",
            },
            // textAlign:"right"
          }}
          onClick={
            !user.role == "Admin"
              ? handleAddDisputeTermClick
              : handleUpdateDispute
          }
        >
          {!user.role == "Admin"
            ? "Add more details to the Dispute?"
            : "Resolve Dispute"}
        </Typography>
      </Box>
    </>
  );
}

export default DisputeDetails;
