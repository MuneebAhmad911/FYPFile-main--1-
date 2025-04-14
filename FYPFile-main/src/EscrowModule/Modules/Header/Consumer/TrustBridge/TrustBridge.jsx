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

function TrustBridge() {
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
          What is TrustBridge?
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: Fonts.primaryFont,
            color: "rgb(79, 87, 89)",
            mb: 2,
          }}
        >
          TrustBridge is a secure online escrow service designed to facilitate
          transactions safely. We act as a neutral third party to hold funds
          until both parties are satisfied.
        </Typography>
      </Box>

      {/* Features Section */}
      <Box sx={{ mb: 4 }}>
        <Grid container spacing={2} sx={{ p: "1rem 1rem" }}>
          <Grid item xs={4}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: Fonts.primaryFont,
                color: Colors.fontColor,
                mb: 1,
                bgcolor: "rgb(245, 247, 249)",
                p: "0.7rem",
                fontSize: "1rem",
              }}
            >
              Fully Licensed & Regulated
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: Fonts.primaryFont,
                color: "rgb(79, 87, 89)",
                mb: 2,
              }}
            >
              TrustBridge operates under strict escrow regulations to protect
              transactions.
            </Typography>
          </Grid>

          <Grid item xs={4}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: Fonts.primaryFont,
                color: Colors.fontColor,
                mb: 1,
                bgcolor: "rgb(245, 247, 249)",
                p: "0.7rem",
                fontSize: "1rem",
              }}
            >
              Fast & Secure Transactions
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: Fonts.primaryFont,
                color: "rgb(79, 87, 89)",
                mb: 2,
              }}
            >
              We ensure quick and secure payments with escrow protection.
            </Typography>
          </Grid>

          <Grid item xs={4}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: Fonts.primaryFont,
                color: Colors.fontColor,
                mb: 1,
                bgcolor: "rgb(245, 247, 249)",
                p: "0.7rem",
                fontSize: "1rem",
              }}
            >
              Dispute Resolution System
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: Fonts.primaryFont,
                color: "rgb(79, 87, 89)",
                mb: 2,
              }}
            >
              If conflicts arise, our system provides structured dispute
              resolution.
            </Typography>
          </Grid>
        </Grid>
      </Box>

      {/* How TrustBridge Works Section */}
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
          How does TrustBridge work?
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: Fonts.primaryFont,
            color: "rgb(79, 87, 89)",
            mb: 2,
          }}
        >
          The process follows these secure steps:
        </Typography>
        <ul>
          <li>Buyer and seller agree to terms.</li>
          <li>Buyer submits payment to TrustBridge.</li>
          <li>Seller ships goods/services to the buyer.</li>
          <li>Buyer confirms receipt.</li>
          <li>TrustBridge releases payment to seller.</li>
        </ul>
      </Box>
      {/* TrustBridge in Numbers Section */}
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
          TrustBridge in Numbers
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: Colors.tableHeader }}>
                <TableCell>
                  <strong>Statistic</strong>
                </TableCell>
                <TableCell>
                  <strong>Value</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Successful Transactions</TableCell>
                <TableCell>Over 1 million</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Fraud Prevention Success Rate</TableCell>
                <TableCell>99.9%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Verified Buyers & Sellers</TableCell>
                <TableCell>More than 500,000</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      {/* Real-Life Use Cases Section */}
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
          How TrustBridge Works in Real Life
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: Colors.fontColor, fontFamily: Fonts.primaryFont, mt: 2 }}
        >
          <strong>Freelancer Protection</strong>
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: Colors.fontColor, fontFamily: Fonts.primaryFont }}
        >
          TrustBridge ensures that freelancers get paid only after they
          successfully deliver the project. The client deposits the payment in
          escrow, which is released once the work is approved.
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: Colors.fontColor, fontFamily: Fonts.primaryFont, mt: 2 }}
        >
          <strong>Real Estate Transactions</strong>
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: Colors.fontColor, fontFamily: Fonts.primaryFont }}
        >
          Buying or renting a property is safer with TrustBridge. Funds remain
          securely held in escrow until all paperwork and legal formalities are
          verified by both parties.
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: Colors.fontColor, fontFamily: Fonts.primaryFont, mt: 2 }}
        >
          <strong>Luxury Goods Purchase</strong>
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: Colors.fontColor, fontFamily: Fonts.primaryFont }}
        >
          When purchasing high-value items, TrustBridge ensures that the buyer
          can inspect and approve the goods before the seller receives payment,
          reducing fraud risks.
        </Typography>
      </Box>

      {/* Benefits Section */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: "rgb(1, 66, 106)",
            fontFamily: Fonts.primaryFont,
            mb: 2,
          }}
        >
          Benefits of Using TrustBridge
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: Fonts.primaryFont,
            color: "rgb(79, 87, 89)",
            mb: 2,
          }}
        >
          TrustBridge offers a range of benefits to ensure secure and
          hassle-free transactions.
        </Typography>
      </Box>

      {/* Comparison Table Section */}
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
          Why Choose TrustBridge Over Other Payment Methods?
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <strong>Feature</strong>
                </TableCell>
                <TableCell>
                  <strong>TrustBridge</strong>
                </TableCell>
                <TableCell>
                  <strong>Bank Transfer</strong>
                </TableCell>
                <TableCell>
                  <strong>Credit Card</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Transaction Security</TableCell>
                <TableCell>High</TableCell>
                <TableCell>Medium</TableCell>
                <TableCell>Medium</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Dispute Resolution</TableCell>
                <TableCell>Built-in</TableCell>
                <TableCell>Limited</TableCell>
                <TableCell>Chargeback Only</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Buyer & Seller Protection</TableCell>
                <TableCell>Yes</TableCell>
                <TableCell>No</TableCell>
                <TableCell>Partial</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Ease of Use</TableCell>
                <TableCell>Very Easy</TableCell>
                <TableCell>Moderate</TableCell>
                <TableCell>Easy</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      {/* Security Measures Section */}
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
          Our Security Measures
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: Colors.fontColor, fontFamily: Fonts.primaryFont, mt: 2 }}
        >
          <strong>Two-Factor Authentication</strong>
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: Colors.fontColor, fontFamily: Fonts.primaryFont }}
        >
          Secure login process with an additional layer of protection to prevent
          unauthorized access.
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: Colors.fontColor, fontFamily: Fonts.primaryFont, mt: 2 }}
        >
          <strong>SSL Encryption</strong>
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: Colors.fontColor, fontFamily: Fonts.primaryFont }}
        >
          TrustBridge uses advanced SSL encryption to protect sensitive user and
          transaction data from cyber threats.
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: Colors.fontColor, fontFamily: Fonts.primaryFont, mt: 2 }}
        >
          <strong>Dispute Resolution System</strong>
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: Colors.fontColor, fontFamily: Fonts.primaryFont }}
        >
          A structured process to resolve conflicts fairly, ensuring both buyers
          and sellers have a secure and transparent experience.
        </Typography>
      </Box>
    </Box>
  );
}

export default TrustBridge;
