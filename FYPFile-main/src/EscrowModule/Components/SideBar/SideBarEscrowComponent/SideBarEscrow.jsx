import React, { useState } from "react";
import { GetStartedButton } from "../../Reused/reusableComponents";
import {
  BarAutocomplete,
  BarSelect,
  BarTypography,
  BarTextfield,
} from "../../Reused/reusableComponents";
import { Typography, Box } from "@mui/material";
import { Colors } from "../../../Theme/Theme";
function SideBarEscrow() {
  const [role, setRole] = useState("Selling");
  const [curreny, setCurreny] = useState("PKR");
  const [value, setValue] = useState("Domains");
  //   const selectOptions1 = ["Selling", "Buying", "Brokering"];
  const selectOptions2 = ["PKR", "USD", "CAD", "UK"];
  const AutoCompleteOptions1 = [
    "Domains",
    "Cars, Trucks, etc.",
    "Contracted Services",
    "Milestone Transactions",
    "Jewelry",
    "Electronics",
  ];

  return (
    <>
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#f9f9f9",
          p: "1.5rem 2rem",
          borderRadius: "8px",
        }}
      >
        <Typography variant="h6" sx={{ fontSize: "19px", m: "1rem 0" }}>
          Secure Escrow Accounts to prevent fraud online
        </Typography>

        <Box
          sx={{
            display: "flex",
            border: `1px solid ${Colors.secondaryColor}`,
            padding: "0.5rem 0 0.5rem 0.9rem",
            mb: "0.5rem",
            backgroundColor: "white",
            borderRadius: "4px",
          }}
        >
          <BarTypography additionalStyles={{ paddingRight: "0.3rem" }} />
          <BarSelect rolee={role} setRolee={setRole} />
        </Box>

        <Box
          sx={{
            border: `1px solid ${Colors.secondaryColor}`,
            mb: "0.5rem",
            borderRadius: "4px",
            backgroundColor: "white", // Explicitly set child background color
          }}
        >
          <BarAutocomplete value={value} setValue={setValue} />
        </Box>

        <Box
          sx={{
            display: "flex",
            textAlign: "center",
            justifyItems: "center",
            border: `1px solid ${Colors.secondaryColor}`,
            alignItems: "center",
            padding: "0.2rem 0.9rem",
            borderRadius: "4px",
            mb: "0.5rem",
            backgroundColor: "white", // Explicitly set child background color
          }}
        >
          <BarTypography Text={"for"} />
          <BarTextfield />
        </Box>

        <Box
          sx={{
            p: "0.45rem 0 0.45rem 0.7rem",
            borderRadius: "4px",
            mb: "0.5rem",
            border: `1px solid ${Colors.secondaryColor}`,
            backgroundColor: "white", // Explicitly set child background color
          }}
        >
          <BarSelect
            rolee={curreny}
            setRolee={setCurreny}
            options={selectOptions2}
          />
        </Box>

        <GetStartedButton
          additionalStyles={{
            mt: "0.5rem",
            color: "white",
            fontWeight: "700",
            fontSize: "0.75rem",
            width: "100%",
          }}
        />
      </Box>
    </>
  );
}

export default SideBarEscrow;
