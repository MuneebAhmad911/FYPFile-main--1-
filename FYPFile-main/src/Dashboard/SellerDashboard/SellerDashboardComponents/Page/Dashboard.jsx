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
import axios from "axios";

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

  // Fetch products from backend
  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/products");
      setProducts(
        res.data.map((product, index) => ({
          key: index + 1,
          ...product,
        }))
      );
    } catch (error) {
      message.error("Failed to fetch products");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Add product handler with backend call
  const handleAddProduct = async (values) => {
    try {
      await axios.post("http://localhost:5000/api/products", {
        title: values.title,
        brand: values.brand,
        price: Number(values.price),
        stockQuantity: Number(values.stockQuantity),
        category: values.category,
      });
      message.success("Product added successfully!");
      form.resetFields();
      fetchProducts(); // Refresh product list
    } catch (error) {
      message.error("Failed to add product");
    }
  };

  const columns = [
    { title: "SNo", dataIndex: "key", key: "key" },
    { title: "Title", dataIndex: "title", key: "title" },
    { title: "Brand", dataIndex: "brand", key: "brand" },
    { title: "Price", dataIndex: "price", key: "price" },
    { title: "Stock Quantity", dataIndex: "stockQuantity", key: "stockQuantity" },
    { title: "Category", dataIndex: "category", key: "category" },
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

      {/* Pie and Bar Chart */}
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

      {/* Line Chart */}
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
            <Line type="monotone" dataKey="income" stroke="#4CAF50" strokeWidth={2} />
            <Line type="monotone" dataKey="expense" stroke="#FF5722" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Area Chart */}
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
              />
              <Area
                type="monotone"
                dataKey="expense"
                stroke="#FF5722"
                fill="#FF5722"
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
          marginBottom: "32px",
        }}
      >
        <h3 style={{ fontSize: "20px", fontWeight: "600", marginBottom: "16px" }}>
          Add New Product
        </h3>
        <Form form={form} layout="inline" onFinish={handleAddProduct}>
          <Form.Item
            name="title"
            rules={[{ required: true, message: "Please enter product title" }]}
          >
            <Input placeholder="Product Title" />
          </Form.Item>
          <Form.Item
            name="brand"
            rules={[{ required: true, message: "Please select brand" }]}
          >
            <Select placeholder="Select Brand" style={{ width: 150 }}>
              <Option value="Apple">Apple</Option>
              <Option value="Samsung">Samsung</Option>
              <Option value="Sony">Sony</Option>
              <Option value="Dell">Dell</Option>
              <Option value="HP">HP</Option>
              <Option value="Nike">Nike</Option>
              <Option value="Adidas">Adidas</Option>
              <Option value="Puma">Puma</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="price"
            rules={[{ required: true, message: "Please enter price" }]}
          >
            <Input placeholder="Price" />
          </Form.Item>
          <Form.Item
            name="stockQuantity"
            rules={[{ required: true, message: "Please enter stock quantity" }]}
          >
            <Input placeholder="Stock Quantity" />
          </Form.Item>
          <Form.Item
            name="category"
            rules={[{ required: true, message: "Please select category" }]}
          >
            <Select placeholder="Select Category" style={{ width: 150 }}>
              <Option value="Electronics">Electronics</Option>
              <Option value="Fashion">Fashion</Option>
              <Option value="Home Appliances">Home Appliances</Option>
              <Option value="Health & Beauty">Health & Beauty</Option>
              <Option value="Sports & Outdoors">Sports & Outdoors</Option>
              <Option value="Automotive">Automotive</Option>
              <Option value="Toys & Games">Toys & Games</Option>
              <Option value="Groceries">Groceries</Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button className="mt-2" type="primary" htmlType="submit">
              Add Product
            </Button>
          </Form.Item>
        </Form>
      </div>

      {/* Product List Table */}
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

      {/* Orders Component */}
      <Orders />
    </div>
  );
};

export default Dashboard;
