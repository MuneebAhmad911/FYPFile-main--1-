import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  CartesianGrid,
} from "recharts";
import { Table } from "antd";
import { Typography, Card, Grid2 as Grid, Paper } from "@mui/material";
import DisputeAdmin from "./Dispute/DisputeAdmin";

// Dispute Table Columns
const disputeColumns = [
  { title: "Dispute ID", dataIndex: "id", key: "id" },
  { title: "Buyer", dataIndex: "buyer", key: "buyer" },
  { title: "Seller", dataIndex: "seller", key: "seller" },
  { title: "Reason", dataIndex: "reason", key: "reason" },
  { title: "Status", dataIndex: "status", key: "status" },
];

// Sample Dispute Data
const disputeData = [
  { id: "D001", buyer: "User A", seller: "User X", reason: "Late Delivery", status: "Pending" },
  { id: "D002", buyer: "User B", seller: "User Y", reason: "Item Not as Described", status: "Resolved" },
  { id: "D003", buyer: "User C", seller: "User Z", reason: "Fraudulent Listing", status: "Pending" },
];

// Pie Chart Data (Dispute Stats)
const pieData = [
  { name: "Resolved Disputes", value: 30 },
  { name: "Pending Disputes", value: 20 },
];

const COLORS = ["#4CAF50", "#FF5722"];

// Key Metrics Data
const keyMetrics = [
  { title: "Total Disputes", value: "50", color: "#2196F3" },
  { title: "Resolved Disputes", value: "30", color: "#4CAF50" },
  { title: "Pending Disputes", value: "20", color: "#FF5722" },
  { title: "Avg. Resolution Time", value: "5 Days", color: "#9C27B0" },
];

// Line Chart Data (Dispute Trends)
const lineData = [
  { month: "Jan", resolved: 8, pending: 4 },
  { month: "Feb", resolved: 12, pending: 6 },
  { month: "Mar", resolved: 15, pending: 8 },
  { month: "Apr", resolved: 10, pending: 5 },
  { month: "May", resolved: 14, pending: 7 },
  { month: "Jun", resolved: 18, pending: 9 },
];

// Recent Activity Data
const recentActivity = [
  { id: "D001", action: "Dispute Raised", user: "User A", timestamp: "2024-01-01 10:00 AM" },
  { id: "D002", action: "Dispute Resolved", user: "User B", timestamp: "2024-01-02 02:30 PM" },
  { id: "D003", action: "Dispute Escalated", user: "User C", timestamp: "2024-01-03 11:15 AM" },
];

const Dashboard = () => {
  return (
    <div style={{ padding: "24px", backgroundColor: "#f3f4f6", }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3 }}>Admin Dashboard</Typography>

      {/* Key Metrics Section */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {keyMetrics.map((metric, index) => (
          <Grid item size = {{xs:12, sm:6, md:3}} key={index}>
            <Card sx={{ p: 3, borderRadius: 2, boxShadow: 3, backgroundColor: metric.color, color: "white" }}>
              <Typography variant="h6" align="center" gutterBottom>{metric.title}</Typography>
              <Typography variant="h4" align="center">{metric.value}</Typography>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Dispute Statistics Section */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item size = {{xs:12, md:6}}>
          <Card sx={{ p: 3, borderRadius: 2, boxShadow: 3 }}>
            <Typography variant="h6" align="center" gutterBottom>Dispute Resolution Status</Typography>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label>
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                  ))}
                </Pie>
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </Grid>
        <Grid size = {{xs:12, md:6}}>
          <Card sx={{ p: 3, borderRadius: 2, boxShadow: 3 }}>
            <Typography variant="h6" align="center" gutterBottom>Monthly Dispute Trends</Typography>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={lineData}>
                <XAxis dataKey="month" stroke="#888888" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="resolved" fill="#4CAF50" barSize={40} name="Resolved" />
                <Bar dataKey="pending" fill="#FF5722" barSize={40} name="Pending" />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </Grid>
      </Grid>

      {/* Recent Activity Section */}
      <Card sx={{ p: 3, borderRadius: 2, boxShadow: 3, mb: 4 }}>
        <Typography variant="h6" align="center" gutterBottom>Recent Activity</Typography>
        <Table
          columns={[
            { title: "Action", dataIndex: "action", key: "action" },
            { title: "User", dataIndex: "user", key: "user" },
            { title: "Timestamp", dataIndex: "timestamp", key: "timestamp" },
          ]}
          dataSource={recentActivity}
          pagination={false}
        />
      </Card>

      {/* Dispute Trends Over Time (Line Chart) */}
      <Card sx={{ p: 3, borderRadius: 2, boxShadow: 3, mb: 4 }}>
        <Typography variant="h6" align="center" gutterBottom>Dispute Trends Over Time</Typography>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={lineData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" stroke="#888888" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="resolved" stroke="#4CAF50" strokeWidth={2} name="Resolved" />
            <Line type="monotone" dataKey="pending" stroke="#FF5722" strokeWidth={2} name="Pending" />
          </LineChart>
        </ResponsiveContainer>
      </Card>

      {/* Dispute Admin Section */}
      <DisputeAdmin ongoing={true} />
    </div>
  );
};

export default Dashboard;