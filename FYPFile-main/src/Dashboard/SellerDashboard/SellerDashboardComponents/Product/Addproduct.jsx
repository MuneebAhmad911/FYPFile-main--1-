import { useState } from "react";
import {
  Card,
  Upload,
  message,
  Input,
  Select,
  Button,
  Row,
  Col,
  Tag,
  Tooltip,
} from "antd";
import { InboxOutlined, PlusOutlined, DeleteOutlined } from "@ant-design/icons";

const { Dragger } = Upload;
const { Option } = Select;

const uploadProps = {
  name: "file",
  multiple: true,
  action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
  onChange(info) {
    const { status } = info.file;
    if (status === "done") {
      message.success(`${info.file.name} uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

const AddProduct = () => {
  const [desc, setDesc] = useState("");
  const [features, setFeatures] = useState([]);
  const [featureInput, setFeatureInput] = useState("");
  const [images, setImages] = useState([]);

  const brands = [
    "Apple",
    "Samsung",
    "Sony",
    "Dell",
    "HP",
    "Nike",
    "Adidas",
    "Puma",
    "Gucci",
    "Louis Vuitton",
    "Rolex",
    "L'Oreal",
    "Maybelline",
    "Nestle",
    "Coca Cola",
    "Pepsi",
    "Lego",
    "Canon",
    "Nikon",
    "Honda",
    "Toyota",
  ];

  const categories = [
    "Electronics",
    "Fashion",
    "Home Appliances",
    "Health & Beauty",
    "Sports & Outdoors",
    "Automotive",
    "Toys & Games",
    "Groceries",
    "Books & Stationery",
    "Furniture",
    "Jewelry & Watches",
    "Pet Supplies",
  ];

  const handleFeatureAdd = () => {
    if (featureInput.trim() !== "") {
      setFeatures([...features, featureInput]);
      setFeatureInput("");
    }
  };

  const handleFeatureRemove = (removedFeature) => {
    setFeatures(features.filter((feature) => feature !== removedFeature));
  };

  const handleImageUpload = (info) => {
    if (info.file.status === "done") {
      setImages([...images, URL.createObjectURL(info.file.originFileObj)]);
    }
  };

  return (
    <Card
      title="Add New Product"
      style={{
        maxWidth: "800px",
        margin: "20px auto",
        padding: "20px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        borderRadius: "10px",
      }}
    >
      <form>
        <Row gutter={16}>
          <Col span={12}>
            <label>Product Title</label>
            <Input placeholder="Enter product title" className="mb-2" />
          </Col>
          <Col span={12}>
            <label>SKU (Stock Keeping Unit)</label>
            <Input placeholder="Enter SKU" className="mb-2" />
          </Col>
        </Row>

        <label>Description</label>
        <Input.TextArea
          rows={4}
          placeholder="Enter product description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          className="mb-2"
        />

        <Row gutter={16}>
          <Col span={12}>
            <label>Brand</label>
            <Select
              placeholder="Select Brand"
              className="mb-2"
              style={{ width: "100%" }}
            >
              {brands.map((brand, index) => (
                <Option key={index} value={brand.toLowerCase()}>
                  {brand}
                </Option>
              ))}
            </Select>
          </Col>
          <Col span={12}>
            <label>Category</label>
            <Select
              placeholder="Select Category"
              className="mb-2"
              style={{ width: "100%" }}
            >
              {categories.map((category, index) => (
                <Option key={index} value={category.toLowerCase()}>
                  {category}
                </Option>
              ))}
            </Select>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={8}>
            <label>Price</label>
            <Input
              type="number"
              placeholder="Enter price"
              className="mb-2"
              min={0}
              onChange={(e) => {
                const value = Math.max(0, Number(e.target.value)); // Ensures non-negative value
                e.target.value = value; // Directly modifies the input value
              }}
            />
          </Col>
          <Col span={8}>
            <label>Discount Price</label>
            <Input
              type="number"
              placeholder="Enter discount price"
              className="mb-2"
              min={0}
              onChange={(e) => {
                const value = Math.max(0, Number(e.target.value));
                e.target.value = value;
              }}
            />
          </Col>
          <Col span={8}>
            <label>Stock Quantity</label>
            <Input
              type="number"
              placeholder="Enter stock quantity"
              className="mb-2"
              min={0}
              onChange={(e) => {
                const value = Math.max(0, Number(e.target.value));
                e.target.value = value;
              }}
            />
          </Col>
        </Row>

        <label>Product Features</label>
        <div className="mb-2" style={{ display: "flex", gap: "10px" }}>
          <Input
            placeholder="Enter feature (e.g., Waterproof)"
            value={featureInput}
            onChange={(e) => setFeatureInput(e.target.value)}
            onPressEnter={handleFeatureAdd}
          />
          <Button type="primary" onClick={handleFeatureAdd}>
            Add
          </Button>
        </div>
        <div className="mb-2">
          {features.map((feature, index) => (
            <Tag
              key={index}
              closable
              onClose={() => handleFeatureRemove(feature)}
              color="blue"
            >
              {feature}
            </Tag>
          ))}
        </div>

        <label>Product Images</label>
        <Dragger {...uploadProps} onChange={handleImageUpload}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">Click or drag file to upload</p>
        </Dragger>

        {images.length > 0 && (
          <div
            className="image-preview"
            style={{
              display: "flex",
              gap: "10px",
              marginTop: "10px",
              flexWrap: "wrap",
            }}
          >
            {images.map((img, index) => (
              <div key={index} style={{ position: "relative" }}>
                <img
                  src={img}
                  alt="Uploaded"
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "5px",
                    objectFit: "cover",
                  }}
                />
                <Tooltip title="Remove">
                  <DeleteOutlined
                    onClick={() =>
                      setImages(images.filter((_, i) => i !== index))
                    }
                    style={{
                      position: "absolute",
                      top: "-5px",
                      right: "-5px",
                      background: "red",
                      color: "white",
                      borderRadius: "50%",
                      padding: "4px",
                      cursor: "pointer",
                    }}
                  />
                </Tooltip>
              </div>
            ))}
          </div>
        )}

        <Button
          type="primary"
          block
          style={{ marginTop: "20px", padding: "10px", fontSize: "16px" }}
        >
          Add Product
        </Button>
      </form>
    </Card>
  );
};

export default AddProduct;
