import {
  Typography,
  Box,
  Grid2 as Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { Colors, Fonts } from "../../../../Theme/Theme";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const Benefits = () => {
  // Data for Bar Chart (Transaction Growth)
  const transactionData = [
    { year: "2021", transactions: 4200, totalValue: 10000000 },
    { year: "2022", transactions: 4800, totalValue: 12500000 },
    { year: "2023", transactions: 5230, totalValue: 15000000 },
  ];

  // Data for Pie Chart (Transaction Types)
  const transactionTypesData = [
    { name: "Freelance", value: 40 },
    { name: "Real Estate", value: 30 },
    { name: "Luxury Goods", value: 20 },
    { name: "Others", value: 10 },
  ];

  // Colors for Pie Chart
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <Box
      sx={{
        padding: "1rem 2rem 0",
        backgroundColor: "white",
        borderRight: "1px solid rgb(211, 206, 206)",
        m: {xs:"0 1rem 0 0.5rem",sm:"0 2rem 0 1.5rem",md:"0 3rem 0 4rem"},
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
          Benefits of Using TrustBridge Escrow
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontFamily: Fonts.primaryFont, color: "rgb(79, 87, 89)", mb: 2 }}
        >
          TrustBridge provides a secure and reliable way to handle transactions
          by acting as a neutral third party. Here are the key benefits of using
          TrustBridge for your transactions.
        </Typography>
      </Box>

      {/* Key Benefits Section */}
      <Box sx={{ mb: 4 }}>
        <Grid container spacing={2} sx={{ p: "2rem 1rem" }}>
          <Grid size={4}>
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
              Secure Transactions
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: Fonts.primaryFont,
                color: "rgb(79, 87, 89)",
                mb: 2,
              }}
            >
              TrustBridge ensures that funds are held securely until both parties
              fulfill their obligations, reducing the risk of fraud.
            </Typography>
          </Grid>

          <Grid size={4}>
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
              Dispute Resolution
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: Fonts.primaryFont,
                color: "rgb(79, 87, 89)",
                mb: 2,
              }}
            >
              Our structured dispute resolution process ensures fair outcomes
              for both buyers and sellers.
            </Typography>
          </Grid>

          <Grid size={4}>
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
              Global Reach
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: Fonts.primaryFont,
                color: Colors.fontColor,
                mb: 2,
              }}
            >
              TrustBridge supports transactions across borders, making it ideal
              for international deals.
            </Typography>
          </Grid>
        </Grid>
      </Box>

      {/* Statistics Section */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h5"
          sx={{
            fontFamily: Fonts.primaryFont,
            color: "rgb(1, 66, 106)",
            mt: 3,
            mb: 2,
            fontWeight: 600,
          }}
        >
          TrustBridge by the Numbers
        </Typography>
        <TableContainer component={Paper} sx={{ mb: 2 }}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: "rgb(245, 247, 249)" }}>
                <TableCell>Statistic</TableCell>
                <TableCell>Value</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Successful Transactions</TableCell>
                <TableCell>Over 1 million</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Fraud Prevention Rate</TableCell>
                <TableCell>99.9%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Verified Users</TableCell>
                <TableCell>500,000+</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      {/* Bar Chart - Transaction Growth */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h5"
          sx={{
            fontFamily: Fonts.primaryFont,
            color: "rgb(1, 66, 106)",
            mt: 3,
            mb: 2,
            fontWeight: 600,
          }}
        >
          Transaction Growth Over the Years
        </Typography>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={transactionData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="transactions" fill="#8884d8" name="Transactions" />
            <Bar dataKey="totalValue" fill="#82ca9d" name="Total Value ($)" />
          </BarChart>
        </ResponsiveContainer>
      </Box>

      {/* Pie Chart - Transaction Types */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h5"
          sx={{
            fontFamily: Fonts.primaryFont,
            color: "rgb(1, 66, 106)",
            mt: 3,
            mb: 2,
            fontWeight: 600,
          }}
        >
          Transaction Types
        </Typography>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={transactionTypesData}
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
              label
            >
              {transactionTypesData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </Box>

      {/* Comparison Table Section */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h5"
          sx={{
            fontFamily: Fonts.primaryFont,
            color: "rgb(1, 66, 106)",
            mt: 3,
            mb: 2,
            fontWeight: 600,
          }}
        >
          Why Choose TrustBridge Over Other Payment Methods?
        </Typography>
        <TableContainer component={Paper} sx={{ mb: 2 }}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: "rgb(245, 247, 249)" }}>
                <TableCell>Feature</TableCell>
                <TableCell>TrustBridge</TableCell>
                <TableCell>Bank Transfer</TableCell>
                <TableCell>Credit Card</TableCell>
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

      {/* Real-Life Use Cases Section */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h5"
          sx={{
            fontFamily: Fonts.primaryFont,
            color: "rgb(1, 66, 106)",
            mt: 3,
            mb: 2,
            fontWeight: 600,
          }}
        >
          Real-Life Use Cases
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontFamily: Fonts.primaryFont, color: "rgb(79, 87, 89)", mb: 2 }}
        >
          TrustBridge is used in a variety of industries to ensure secure
          transactions. Here are some examples:
        </Typography>
        <ul>
          <li>
            <strong>Freelancer Protection:</strong> Freelancers get paid only
            after delivering the project.
          </li>
          <li>
            <strong>Real Estate Transactions:</strong> Funds are held securely
            until all legal formalities are completed.
          </li>
          <li>
            <strong>Luxury Goods Purchase:</strong> Buyers can inspect goods
            before payment is released.
          </li>
        </ul>
      </Box>

      {/* Security Measures Section */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h5"
          sx={{
            fontFamily: Fonts.primaryFont,
            color: "rgb(1, 66, 106)",
            mt: 3,
            mb: 2,
            fontWeight: 600,
          }}
        >
          Our Security Measures
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontFamily: Fonts.primaryFont, color: "rgb(79, 87, 89)", mb: 2 }}
        >
          TrustBridge uses advanced security measures to protect your
          transactions:
        </Typography>
        <ul>
          <li>
            <strong>Two-Factor Authentication:</strong> Adds an extra layer of
            security to your account.
          </li>
          <li>
            <strong>SSL Encryption:</strong> Protects sensitive data during
            transmission.
          </li>
          <li>
            <strong>Dispute Resolution System:</strong> Ensures fair outcomes for
            both parties.
          </li>
        </ul>
      </Box>
    </Box>
  );
};

export default Benefits;