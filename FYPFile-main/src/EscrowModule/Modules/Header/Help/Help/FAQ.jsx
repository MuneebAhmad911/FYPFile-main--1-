import React from "react";
import {
  Typography,
  Box,
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

const FAQ = () => {
  // Data for Bar Chart (Transaction Growth)
  const transactionGrowthData = [
    { year: "2021", transactions: 4200 },
    { year: "2022", transactions: 4800 },
    { year: "2023", transactions: 5230 },
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
          Frequently Asked Questions (FAQ)
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: Fonts.primaryFont,
            color: "rgb(79, 87, 89)",
            mb: 2,
          }}
        >
          Find answers to common questions about TrustBridge and escrow
          services. If you have additional questions, feel free to contact our
          support team.
        </Typography>
      </Box>

      {/* Question 1: Why should I use TrustBridge? */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h5"
          sx={{
            fontFamily: Fonts.primaryFont,
            color: "rgb(1, 66, 106)",
            mb: 2,
            fontWeight: 600,
          }}
        >
          Why should I use TrustBridge?
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: Fonts.primaryFont,
            color: "rgb(79, 87, 89)",
            mb: 2,
          }}
        >
          TrustBridge offers several advantages over other escrow services.
          Here’s why you should choose us:
        </Typography>
        <TableContainer component={Paper} sx={{ mb: 2 }}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: "rgb(245, 247, 249)" }}>
                <TableCell>Feature</TableCell>
                <TableCell>TrustBridge</TableCell>
                <TableCell>Competitor A</TableCell>
                <TableCell>Competitor B</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Transaction Security</TableCell>
                <TableCell>High</TableCell>
                <TableCell>Medium</TableCell>
                <TableCell>Low</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Dispute Resolution</TableCell>
                <TableCell>Built-in</TableCell>
                <TableCell>Limited</TableCell>
                <TableCell>None</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Fees</TableCell>
                <TableCell>Low</TableCell>
                <TableCell>High</TableCell>
                <TableCell>Medium</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Global Reach</TableCell>
                <TableCell>Yes</TableCell>
                <TableCell>No</TableCell>
                <TableCell>Partial</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      {/* Question 2: How secure is TrustBridge? */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h5"
          sx={{
            fontFamily: Fonts.primaryFont,
            color: "rgb(1, 66, 106)",
            mb: 2,
            fontWeight: 600,
          }}
        >
          How secure is TrustBridge?
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: Fonts.primaryFont,
            color: "rgb(79, 87, 89)",
            mb: 2,
          }}
        >
          TrustBridge uses advanced security measures to protect your
          transactions. Here’s a breakdown of our security features:
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
            <strong>Dispute Resolution System:</strong> Ensures fair outcomes
            for both parties.
          </li>
        </ul>
      </Box>

      {/* Question 3: What types of transactions does TrustBridge support? */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h5"
          sx={{
            fontFamily: Fonts.primaryFont,
            color: "rgb(1, 66, 106)",
            mb: 2,
            fontWeight: 600,
          }}
        >
          What types of transactions does TrustBridge support?
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: Fonts.primaryFont,
            color: "rgb(79, 87, 89)",
            mb: 2,
          }}
        >
          TrustBridge supports a wide range of transactions. Here’s a breakdown
          of the types of transactions we handle:
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
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </Box>

      {/* Question 4: How has TrustBridge grown over the years? */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h5"
          sx={{
            fontFamily: Fonts.primaryFont,
            color: "rgb(1, 66, 106)",
            mb: 2,
            fontWeight: 600,
          }}
        >
          How has TrustBridge grown over the years?
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: Fonts.primaryFont,
            color: "rgb(79, 87, 89)",
            mb: 2,
          }}
        >
          TrustBridge has seen significant growth in the number of transactions
          over the years. Here’s a visual representation:
        </Typography>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={transactionGrowthData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="transactions" fill="#8884d8" name="Transactions" />
          </BarChart>
        </ResponsiveContainer>
      </Box>

      {/* Additional Information Section */}
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
          Additional Information
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: Fonts.primaryFont,
            color: "rgb(79, 87, 89)",
            mb: 2,
          }}
        >
          For more details about TrustBridge, please visit our{" "}
          <a href="/help" style={{ color: Colors.fontColor }}>
            Help Center
          </a>
          . If you have specific questions, feel free to contact our support
          team.
        </Typography>
      </Box>
    </Box>
  );
};

export default FAQ;
