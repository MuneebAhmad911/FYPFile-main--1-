import React, { useState } from "react";
import { Tabs, Table, Tag, Modal, Button, Descriptions, Typography } from "antd";
import { Box, Card } from "@mui/material";
import { useNavigate } from "react-router-dom";

const { TabPane } = Tabs;
const { Text } = Typography;

// Sample Data
const paymentData = [
  {
    id: "P001",
    type: "Product",
    amount: "50",
    currency: "USD",
    status: "Completed",
    date: "2024-01-01",
    product: "Smartphone",
    seller: "Seller A",
  },
  {
    id: "P002",
    type: "Product",
    amount: "30",
    currency: "USD",
    status: "Pending",
    date: "2024-01-02",
    product: "Laptop",
    seller: "Seller B",
  },
  {
    id: "E001",
    type: "Escrow",
    amount: "100",
    currency: "USD",
    status: "Completed",
    date: "2024-01-03",
    escrowId: "ESC-12345",
    buyer: "Buyer A",
    seller: "Seller C",
  },
  {
    id: "E002",
    type: "Escrow",
    amount: "200",
    currency: "USD",
    status: "Pending",
    date: "2024-01-04",
    escrowId: "ESC-67890",
    buyer: "Buyer B",
    seller: "Seller D",
  },
];

const PaymentHistory = () => {
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Columns for Product Payments Table
  const productColumns = [
    {
      title: "Payment ID",
      dataIndex: "id",
      key: "id",
      render: (text) => `#${text}`,
    },
    {
      title: "Product",
      dataIndex: "product",
      key: "product",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      render: (amount, record) => `${amount} ${record.currency}`,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Tag color={status === "Completed" ? "green" : "orange"}>{status}</Tag>
      ),
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Seller",
      dataIndex: "seller",
      key: "seller",
    },
  ];

  // Columns for Escrow Payments Table
  const escrowColumns = [
    {
      title: "Payment ID",
      dataIndex: "id",
      key: "id",
      render: (text) => `#${text}`,
    },
    {
      title: "Escrow ID",
      dataIndex: "escrowId",
      key: "escrowId",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      render: (amount, record) => `${amount} ${record.currency}`,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Tag color={status === "Completed" ? "green" : "orange"}>{status}</Tag>
      ),
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Buyer",
      dataIndex: "buyer",
      key: "buyer",
    },
    {
      title: "Seller",
      dataIndex: "seller",
      key: "seller",
    },
  ];

  // Handle Row Click
  const handleRowClick = (record) => {
    setSelectedPayment(record);
    setIsModalVisible(true);
  };

  // Handle Modal Close
  const handleModalClose = () => {
    setIsModalVisible(false);
    setSelectedPayment(null);
  };

  return (
    <Box sx={{ padding: "20px", backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
      <Card sx={{ borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0,0,0,0.1)" }}>
        <Tabs defaultActiveKey="1" tabPosition="top" centered>
          {/* Product Payments Tab */}
          <TabPane tab="Product Payments" key="1">
            <Table
              columns={productColumns}
              dataSource={paymentData.filter((p) => p.type === "Product")}
              onRow={(record) => ({
                onClick: () => handleRowClick(record),
              })}
              rowKey="id"
              scroll={{ x: true }}
            />
          </TabPane>

          {/* Escrow Payments Tab */}
          <TabPane tab="Escrow Payments" key="2">
            <Table
              columns={escrowColumns}
              dataSource={paymentData.filter((p) => p.type === "Escrow")}
              onRow={(record) => ({
                onClick: () => handleRowClick(record),
              })}
              rowKey="id"
              scroll={{ x: true }}
            />
          </TabPane>
        </Tabs>
      </Card>

      {/* Payment Details Modal */}
      <Modal
        title={`Payment Details - #${selectedPayment?.id}`}
        open={isModalVisible}
        onCancel={handleModalClose}
        footer={null}
        width={window.innerWidth < 768 ? "90%" : 800}
      >
        {selectedPayment && (
          <Box>
            <Descriptions bordered column={1}>
              <Descriptions.Item label="Payment ID">
                <Text strong>#{selectedPayment.id}</Text>
              </Descriptions.Item>
              <Descriptions.Item label="Type">
                <Text>{selectedPayment.type}</Text>
              </Descriptions.Item>
              <Descriptions.Item label="Amount">
                <Text strong>
                  {selectedPayment.amount} {selectedPayment.currency}
                </Text>
              </Descriptions.Item>
              <Descriptions.Item label="Status">
                <Tag color={selectedPayment.status === "Completed" ? "green" : "orange"}>
                  {selectedPayment.status}
                </Tag>
              </Descriptions.Item>
              <Descriptions.Item label="Date">
                <Text>{selectedPayment.date}</Text>
              </Descriptions.Item>
              {selectedPayment.type === "Product" && (
                <>
                  <Descriptions.Item label="Product">
                    <Text>{selectedPayment.product}</Text>
                  </Descriptions.Item>
                  <Descriptions.Item label="Seller">
                    <Text>{selectedPayment.seller}</Text>
                  </Descriptions.Item>
                </>
              )}
              {selectedPayment.type === "Escrow" && (
                <>
                  <Descriptions.Item label="Escrow ID">
                    <Text>{selectedPayment.escrowId}</Text>
                  </Descriptions.Item>
                  <Descriptions.Item label="Buyer">
                    <Text>{selectedPayment.buyer}</Text>
                  </Descriptions.Item>
                  <Descriptions.Item label="Seller">
                    <Text>{selectedPayment.seller}</Text>
                  </Descriptions.Item>
                </>
              )}
            </Descriptions>
          </Box>
        )}
      </Modal>
    </Box>
  );
};

export default PaymentHistory;