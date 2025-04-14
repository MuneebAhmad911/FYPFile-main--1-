import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
} from "recharts";
import { Table, Input, Button, Select, Form, message } from "antd";
import { useState, useEffect } from "react";
import Orders from "./Orders";

const { Option } = Select;

const COLORS = ["#4CAF50", "#FF5722"];

const pieData = [
  { name: "Completed Orders", value: 60 },
  { name: "Pending Orders", value: 40 },
];

const chartData = [
  { month: "Jan", income: 4000, expense: 2500 },
  { month: "Feb", income: 3000, expense: 1800 },
  { month: "Mar", income: 5000, expense: 3000 },
  { month: "Apr", income: 7000, expense: 5000 },
  { month: "May", income: 6000, expense: 4000 },
  { month: "Jun", income: 8000, expense: 5500 },
];

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [form] = Form.useForm();

const fetchProducts = () => {
    const mockData = [
      { name: "Alice", product: "Laptop", status: "Completed" },
      { name: "Bob", product: "Smartphone", status: "Pending" },
      { name: "Charlie", product: "Tablet", status: "Completed" },
    ];
  
    const formattedData = mockData.map((item, index) => ({
      key: index + 1,
      name: item.name,
      product: item.product,
      status: item.status,
    }));
    if(setProducts(formattedData)){
    message.success("Products loaded successfully!");
  }
  else {
    message.success("Product not successfully loaded!");
  }
};

  const handleAddProduct = (values) => {
    const newProduct = {
      key: products.length + 1,
      ...values,
    };
    setProducts([...products, newProduct]);
    form.resetFields();
    message.success("Product added successfully!");
  };

  const columns = [
    { title: "SNo", dataIndex: "key", key: "key" },
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Product", dataIndex: "product", key: "product" },
    { title: "Status", dataIndex: "status", key: "status" },
  ];

  return (
    <div
      style={{
        padding: "16px",
        backgroundColor: "#f3f4f6",
        minHeight: "100vh",
      }}
    >
      <h3 style={{ fontSize: "24px", fontWeight: "600", marginBottom: "16px" }}>
        Dashboard
      </h3>

      {/* First Row: Pie and Bar Chart */}
      <div style={{ display: "flex", gap: "20px", marginBottom: "32px" }}>
        <div
          style={{
            flex: 1,
            backgroundColor: "#ffffff",
            padding: "24px",
            borderRadius: "12px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          }}
        >
          <h3 style={{ fontSize: "18px", fontWeight: "600", textAlign: "center" }}>
            Order Completion Status
          </h3>
          <ResponsiveContainer width={250} height={250}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div
          style={{
            flex: 1,
            backgroundColor: "#ffffff",
            padding: "24px",
            borderRadius: "12px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          }}
        >
          <h3 style={{ fontSize: "18px", fontWeight: "600", textAlign: "center" }}>
            Income
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={chartData}>
              <XAxis dataKey="month" stroke="#888888" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="income" fill="#4CAF50" barSize={40} name="Income" />
              <Bar dataKey="expense" fill="#FF5722" barSize={40} name="Expense" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Second Row: Income vs Expense */}
      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "24px",
          borderRadius: "12px",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          marginBottom: "32px",
        }}
      >
        <h3 style={{ fontSize: "20px", fontWeight: "600", marginBottom: "16px" }}>
          Income vs Expense
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <XAxis dataKey="month" stroke="#888888" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="income" stroke="#4CAF50" strokeWidth={2} name="Income" />
            <Line type="monotone" dataKey="expense" stroke="#FF5722" strokeWidth={2} name="Expense" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Third Row: Area Chart */}
      <div style={{ display: "flex", gap: "20px", marginBottom: "32px" }}>
        <div
          style={{
            flex: 1,
            backgroundColor: "#ffffff",
            padding: "24px",
            borderRadius: "12px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          }}
        >
          <h3 style={{ fontSize: "20px", fontWeight: "600", marginBottom: "16px" }}>
            Yearly Performance
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={chartData}>
              <XAxis dataKey="month" stroke="#888888" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="income"
                stroke="#4CAF50"
                fill="#4CAF50"
                name="Income"
              />
              <Area
                type="monotone"
                dataKey="expense"
                stroke="#FF5722"
                fill="#FF5722"
                name="Expense"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Add Product Form */}
      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "24px",
          borderRadius: "12px",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          marginBottom: "16px",
        }}
      >
        <h3 style={{ fontSize: "20px", fontWeight: "600", marginBottom: "16px" }}>
          Add New Product
        </h3>
        <Form form={form} layout="inline" onFinish={handleAddProduct}>
          <Form.Item
            name="name"
            rules={[{ required: true, message: "Please enter customer name" }]}
          >
            <Input placeholder="Customer Name" />
          </Form.Item>
          <Form.Item
            name="product"
            rules={[{ required: true, message: "Please enter product name" }]}
          >
            <Input placeholder="Product Name" />
          </Form.Item>
          <Form.Item
            name="status"
            rules={[{ required: true, message: "Please select status" }]}
          >
            <Select placeholder="Select Status" style={{ width: 150 }}>
              <Option value="Completed">Completed</Option>
              <Option value="Pending">Pending</Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Add Product
            </Button>
          </Form.Item>
        </Form>

        {/* Manual Fetch Button */}
        <Button
          type="dashed"
          onClick={fetchProducts}
          style={{ marginTop: "16px" }}
        >
          Fetch Products
        </Button>
      </div>

      {/* Display Updated Product List */}
      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "24px",
          borderRadius: "12px",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          marginBottom: "32px",
        }}
      >
        <h3 style={{ fontSize: "20px", fontWeight: "600", marginBottom: "16px" }}>
          Product List
        </h3>
        <Table columns={columns} dataSource={products} pagination={{ pageSize: 5 }} />
      </div>

      {/* Original Orders Table */}
      <Orders />
    </div>
  );
};

export default Dashboard;
