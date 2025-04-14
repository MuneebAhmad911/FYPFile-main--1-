import { useState } from "react";
import { Table, Tag, Card, Avatar, Modal, Button, Typography, Descriptions } from "antd";
import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  CloseCircleOutlined,
  TruckOutlined,
  CloseOutlined,
  UndoOutlined,
} from "@ant-design/icons";

const { Text } = Typography;

const columns = [
  {
    title: "Order ID",
    dataIndex: "key",
    render: (text) => `#ORD-${text}`,
    responsive: ["sm"], // Show on small screens and above
  },
  {
    title: "Customer",
    dataIndex: "customer",
    render: (customer) => (
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Avatar src={customer.avatar} />
        <span>{customer.name}</span>
      </div>
    ),
    responsive: ["sm"], // Show on small screens and above
  },
  {
    title: "Product",
    dataIndex: "product",
    render: (product) => (
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Avatar shape="square" size={50} src={product.image} />
        <span>{product.name}</span>
      </div>
    ),
    responsive: ["sm"], // Show on small screens and above
  },
  {
    title: "Price",
    dataIndex: "price",
    render: (price) => `$${Number(price).toFixed(2)}`,
    responsive: ["sm"], // Show on small screens and above
  },
  {
    title: "Status",
    dataIndex: "status",
    render: (status) => {
      let color = "default";
      let icon = null;
      if (status === "Delivered") {
        color = "green";
        icon = <CheckCircleOutlined />;
      } else if (status === "Pending") {
        color = "gold";
        icon = <ClockCircleOutlined />;
      } else if (status === "Cancelled") {
        color = "red";
        icon = <CloseCircleOutlined />;
      }
      return (
        <Tag color={color} icon={icon}>
          {status}
        </Tag>
      );
    },
    responsive: ["xs"], // Always show status, even on extra small screens
  },
];

const sampleProducts = [
  {
    name: "Smartphone",
    image: "https://dummyimage.com/50x50/000/fff&text=Img",
  },
  {
    name: "Laptop",
    image: "https://dummyimage.com/50x50/000/fff&text=Img",
  },
  {
    name: "Headphones",
    image: "https://dummyimage.com/50x50/000/fff&text=Img",
  },
];


const data = [];
for (let i = 1; i <= 10; i++) {
  data.push({
    key: i,
    customer: {
      name: `User ${i}`,
      avatar: `https://i.pravatar.cc/50?img=${i}`,
    },
    product: sampleProducts[i % sampleProducts.length],
    price: (Math.random() * 100 + 20).toFixed(2),
    status: ["Delivered", "Pending", "Cancelled"][i % 3],
    orderDate: new Date().toLocaleDateString(),
    shippingAddress: "123 Tech Street, NY, USA",
    paymentMethod: "Credit Card",
  });
}

const Orders = () => {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleRowClick = (record) => {
    setSelectedOrder(record);
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
    setSelectedOrder(null);
  };

  const handleAction = (action) => {
    console.log(`Action: ${action} for Order #${selectedOrder.key}`);
    // Add your logic here for handling the action (e.g., update order status)
    setIsModalVisible(false);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h3
        className="mb-4"
        style={{ fontSize: "24px", fontWeight: "bold" }}
      >
        Orders
      </h3>
      <Card
        style={{
          borderRadius: "10px",
          padding: "15px",
          boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <Table
          columns={columns}
          dataSource={data}
          pagination={{ pageSize: 5 }}
          responsive
          bordered
          scroll={{ x: true }} // Enable horizontal scrolling for small screens
          onRow={(record) => ({
            onClick: () => handleRowClick(record),
          })}
        />
      </Card>

      {/* Order Details Modal */}
      <Modal
        title={`Order Details - #ORD-${selectedOrder?.key}`}
        visible={isModalVisible}
        onCancel={handleModalClose}
        footer={null}
        width={800}
      >
        {selectedOrder && (
          <div>
            <Descriptions bordered column={1}>
              <Descriptions.Item label="Customer">
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <Avatar src={selectedOrder.customer.avatar} />
                  <Text strong>{selectedOrder.customer.name}</Text>
                </div>
              </Descriptions.Item>
              <Descriptions.Item label="Product">
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <Avatar shape="square" size={50} src={selectedOrder.product.image} />
                  <Text strong>{selectedOrder.product.name}</Text>
                </div>
              </Descriptions.Item>
              <Descriptions.Item label="Price">
                <Text strong>${selectedOrder.price}</Text>
              </Descriptions.Item>
              <Descriptions.Item label="Status">
                <Tag
                  color={
                    selectedOrder.status === "Delivered"
                      ? "green"
                      : selectedOrder.status === "Pending"
                      ? "gold"
                      : "red"
                  }
                >
                  {selectedOrder.status}
                </Tag>
              </Descriptions.Item>
              <Descriptions.Item label="Order Date">
                <Text>{selectedOrder.orderDate}</Text>
              </Descriptions.Item>
              <Descriptions.Item label="Shipping Address">
                <Text>{selectedOrder.shippingAddress}</Text>
              </Descriptions.Item>
              <Descriptions.Item label="Payment Method">
                <Text>{selectedOrder.paymentMethod}</Text>
              </Descriptions.Item>
            </Descriptions>

            {/* Action Buttons */}
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                gap: "10px",
                marginTop: "20px",
              }}
            >
              <Button
                type="primary"
                icon={<TruckOutlined />}
                onClick={() => handleAction("Dispatched")}
              >
                Dispatched
              </Button>
              <Button
                type="danger"
                icon={<CloseOutlined />}
                onClick={() => handleAction("Cancel")}
              >
                Cancel
              </Button>
              <Button
                type="default"
                icon={<UndoOutlined />}
                onClick={() => handleAction("Refund")}
              >
                Refund
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Orders;