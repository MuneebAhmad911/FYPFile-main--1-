import {
  Typography,
  Box,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { Colors, Fonts } from "../../../../Theme/Theme";

function Escrow() {
  return (
    <Box
      sx={{
        padding: "1rem 2rem 0",
        backgroundColor: "white",
        borderRight: "1px solid rgb(211, 206, 206)",
        m: {
          xs: "0 1rem 0 0.5rem",
          sm: "0 2rem 0 1.5rem",
          md: "0 3rem 0 4rem",
        },
      }}
    >
      {/* Introduction Section */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h4"
          sx={{
            fontFamily: Fonts.primaryFont,
            color: "rgb(1, 66, 106)",
            mb: 2,
            fontWeight: 700,
            fontSize: "34px",
          }}
        >
          What is Escrow?
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: Fonts.primaryFont,
            color: "rgb(79, 87, 89)",
            mb: 2,
          }}
        >
          Escrow is a financial arrangement where a third party holds funds or
          assets on behalf of transacting parties until predefined conditions
          are met. This ensures security and trust in transactions.
        </Typography>
      </Box>

      {/* How TrustBridge Ensures Secure Escrow Transactions */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h4"
          sx={{
            fontFamily: Fonts.primaryFont,
            color: "rgb(1, 66, 106)",
            mb: 2,
            fontWeight: 700,
            fontSize: "34px",
          }}
        >
          How TrustBridge Provides Escrow Services
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: Fonts.primaryFont,
            color: "rgb(79, 87, 89)",
            mb: 2,
          }}
        >
          TrustBridge acts as a neutral intermediary, ensuring funds are
          securely held and only released when transaction terms are met.
        </Typography>
      </Box>

      {/* Steps of an Escrow Transaction */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            color: "rgb(1, 66, 106)",
            fontFamily: Fonts.primaryFont,
            mb: 2,
          }}
        >
          Steps in an Escrow Transaction
        </Typography>
        <ul>
          <li>Buyer and seller agree on transaction terms.</li>
          <li>Buyer deposits funds into TrustBridge escrow.</li>
          <li>Seller fulfills the agreed-upon service/product delivery.</li>
          <li>Buyer confirms receipt of goods/services.</li>
          <li>TrustBridge releases funds to the seller.</li>
        </ul>
      </Box>

      {/* Additional Box - Comparison Table */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            color: "rgb(1, 66, 106)",
            fontFamily: Fonts.primaryFont,
            mb: 2,
          }}
        >
          Comparison of Payment Methods
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: Colors.tableHeader }}>
                <TableCell>
                  <strong>Feature</strong>
                </TableCell>
                <TableCell>
                  <strong>TrustBridge Escrow</strong>
                </TableCell>
                <TableCell>
                  <strong>Direct Bank Transfer</strong>
                </TableCell>
                <TableCell>
                  <strong>PayPal</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Security</TableCell>
                <TableCell>Very High</TableCell>
                <TableCell>Medium</TableCell>
                <TableCell>High</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Dispute Resolution</TableCell>
                <TableCell>Yes</TableCell>
                <TableCell>No</TableCell>
                <TableCell>Limited</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Transaction Fee</TableCell>
                <TableCell>Low</TableCell>
                <TableCell>High</TableCell>
                <TableCell>Medium</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      {/* Additional Box - Fraud Prevention Measures */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            color: "rgb(1, 66, 106)",
            fontFamily: Fonts.primaryFont,
            mb: 2,
          }}
        >
          TrustBridge Fraud Prevention Measures
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: Fonts.primaryFont,
            color: "rgb(79, 87, 89)",
            mb: 2,
          }}
        >
          TrustBridge employs the following security measures to prevent
          fraudulent transactions:
        </Typography>
        <ul>
          <li>Multi-factor authentication for users.</li>
          <li>fraud detection and monitoring.</li>
          <li>Secure SSL encryption to protect sensitive data.</li>
          <li>Strict KYC (Know Your Customer) verification.</li>
        </ul>
      </Box>
    </Box>
  );
}

export default Escrow;
