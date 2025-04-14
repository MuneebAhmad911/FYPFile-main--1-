import { useState } from "react";
import {
  Card,
  Tag,
  Avatar,
  Typography,
  Grid,
  Button,
  Modal,
  Input,
  Select,
  message,
} from "antd";
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  EditOutlined,
  DeleteOutlined,
  ShopOutlined,
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import { Grid2 } from "@mui/material";
const { Title, Text } = Typography;
const { useBreakpoint } = Grid;
const { Option } = Select;
import { products as imgProduct } from "../../../../constants/Products";
const sampleProducts = [
  { name: "Smartphone", image: "https://via.placeholder.com/100", price: 299 },
  {
    name: "Gaming Laptop",
    image: "https://via.placeholder.com/100",
    price: 999,
  },
  {
    name: "Wireless Earbuds",
    image: "https://via.placeholder.com/100",
    price: 79,
  },
  { name: "Smartwatch", image: "https://via.placeholder.com/100", price: 199 },
  { name: "Tablet", image: "https://via.placeholder.com/100", price: 499 },
];

const initialData = [];
for (let i = 1; i <= 8; i++) {
  initialData.push({
    key: i,
    product: sampleProducts[i % sampleProducts.length],
    stock: i % 2 === 0 ? "In Stock" : "Out of Stock",
  });
}

const ProductList = () => {
  const screens = useBreakpoint();
  const [products, setProducts] = useState(initialData);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const handleEdit = (product) => {
    setEditingProduct(product);
    setIsModalVisible(true);
  };

  const handleInputChange = (e) => {
    setEditingProduct({
      ...editingProduct,
      product: { ...editingProduct.product, name: e.target.value },
    });
  };

  const handlePriceChange = (e) => {
    setEditingProduct({
      ...editingProduct,
      product: {
        ...editingProduct.product,
        price: parseFloat(e.target.value) || 0,
      },
    });
  };

  const handleStockChange = (value) => {
    setEditingProduct({ ...editingProduct, stock: value });
  };

  const handleUpdate = () => {
    setProducts(
      products.map((p) => (p.key === editingProduct.key ? editingProduct : p))
    );
    setIsModalVisible(false);
    message.success("Product updated successfully!");
  };

  const handleDelete = (key) => {
    Modal.confirm({
      title: "Are you sure you want to delete this product?",
      onOk: () => {
        setProducts(products.filter((p) => p.key !== key));
        message.success("Product deleted successfully!");
      },
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      {/* Seller Info */}
      <Card
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: screens.xs ? "center" : "space-between",
          marginBottom: "20px",
          padding: "20px",
          background: "linear-gradient(135deg, #ffffff, #f0f0f0)",
          borderRadius: "15px",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
          flexDirection: screens.xs ? "column" : "row",
          textAlign: screens.xs ? "center" : "left",
        }}
      >
        <Avatar
          size={80}
          src={imgProduct[15].productCardImage}
          style={{ border: "3px solid white" }}
        />
        <div style={{ marginLeft: screens.xs ? 0 : "20px" }}>
          <Title level={3} style={{ margin: "10px 0", color: "#333" }}>
            Ibtisam Khalid Store
          </Title>
          <Text type="secondary" style={{ fontSize: "14px" }}>
            <ShopOutlined style={{ marginRight: "5px" }} /> Selling electronics
            since 2019
          </Text>
          <Text
            style={{ display: "flex", alignItems: "center", marginTop: "10px" }}
          >
            <MailOutlined style={{ marginRight: "5px", color: "#007bff" }} />{" "}
            ibtisam@techstore.com
          </Text>
          <Text
            style={{ display: "flex", alignItems: "center", marginTop: "5px" }}
          >
            <PhoneOutlined style={{ marginRight: "5px", color: "#28a745" }} />{" "}
            +9212 345 6789
          </Text>
          <Text
            style={{ display: "flex", alignItems: "center", marginTop: "5px" }}
          >
            <EnvironmentOutlined
              style={{ marginRight: "5px", color: "#dc3545" }}
            />{" "}
            123 Street, ISB, PAK
          </Text>
        </div>
      </Card>

      {/* Product Grid */}
      <Grid2 container spacing={1} style={{}}>
        {products.map((item, index) => (
          <Grid2 item size={{ xs: 12, sm: 6, md: 4 }}>
            <Card
              key={item.key}
              hoverable
              style={{
                borderRadius: "10px",
                padding: "15px",
                textAlign: "center",
                transition: "0.3s",
                boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src={imgProduct[index].productCardImage}
                alt={item.product.name}
                style={{ width: "100px", height: "100px", objectFit: "cover" }}
              />
              <Title level={5} style={{ marginTop: "10px" }}>
                {imgProduct[index].brand}
              </Title>
              <Text strong style={{ fontSize: "16px", color: "#0088FF" }}>
                ${item.product.price.toFixed(2)}
              </Text>
              <div style={{ marginTop: "10px" }}>
                {item.stock === "In Stock" ? (
                  <Tag color="green" icon={<CheckCircleOutlined />}>
                    In Stock
                  </Tag>
                ) : (
                  <Tag color="red" icon={<CloseCircleOutlined />}>
                    Out of Stock
                  </Tag>
                )}
              </div>
              <div
                style={{
                  marginTop: "15px",
                  display: "flex",
                  justifyContent: "center",
                  gap: "10px",
                }}
              >
                <Button
                  type="primary"
                  icon={<EditOutlined />}
                  onClick={() => handleEdit(item)}
                >
                  Edit
                </Button>
                <Button
                  type="danger"
                  icon={<DeleteOutlined />}
                  onClick={() => handleDelete(item.key)}
                >
                  Delete
                </Button>
              </div>
            </Card>
          </Grid2>
        ))}
      </Grid2>

      {/* Edit Product Modal */}
      <Modal
        title="Edit Product"
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        onOk={handleUpdate}
        footer={[
          <Button key="cancel" onClick={() => setIsModalVisible(false)}>
            Cancel
          </Button>,
          <Button key="update" type="primary" onClick={handleUpdate}>
            Update
          </Button>,
        ]}
      >
        <Input
          placeholder="Product Name"
          value={editingProduct?.product?.name || ""}
          onChange={handleInputChange}
          style={{ marginBottom: "10px" }}
        />
        <Input
          placeholder="Price"
          type="number"
          value={editingProduct?.product?.price || ""}
          onChange={handlePriceChange}
          style={{ marginBottom: "10px" }}
        />
        <Select
          placeholder="Stock Status"
          value={editingProduct?.stock || ""}
          onChange={handleStockChange}
          style={{ width: "100%" }}
        >
          <Option value="In Stock">In Stock</Option>
          <Option value="Out of Stock">Out of Stock</Option>
        </Select>
      </Modal>
    </div>
  );
};

export default ProductList;
