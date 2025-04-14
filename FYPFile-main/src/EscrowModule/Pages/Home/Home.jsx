import License from "../../Components/License/License";
import {
  StartHome,
  EscrowMethod,
  EscrowProducts,
} from "../../Components/Reused/reusableComponents";
import { Box } from "@mui/material";

function HomeEscrow() {
  return (
    <>
      <Box
        p={{ xs: "0 1.5rem", sm: "0 3rem", md: "0 5rem", lg: "0 7rem" }}
        backgroundColor="rgb(1, 66, 106)"
      >
        <StartHome />
      </Box>
      <Box
        p={{ xs: "0 1.5rem", sm: "0 3rem", md: "0 6rem", lg: "0 8rem" }}
        sx={{
          borderBottom: `0.5px solid rgb(185, 194, 196)`,
          m: "2rem 0 ",
        }}
      >
        <License />
      </Box>
      <Box
        p={{ xs: "0 1.5rem", sm: "0 3rem", md: "0 6rem", lg: "0 8rem" }}
        sx={{
        }}
      >
        <EscrowMethod />
      </Box>
      <Box
        p={{ xs: "0 1.5rem", sm: "0 3rem", md: "0 6rem", lg: "0 8rem" }}
        sx={{
          justifyContent: "center",
          mb:"2rem",
        }}
      >
        <EscrowProducts />
      </Box>
    </>
  );
}

export default HomeEscrow;
