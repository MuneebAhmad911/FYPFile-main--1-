import { Box, Card } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Tabs, Table, Tag, Modal, Descriptions, Typography, Button } from "antd";

const { TabPane } = Tabs;
const { Text } = Typography;

const DisputeAdmin = ({ ongoing }) => {
  const navigate = useNavigate();
  const [selectedDispute, setSelectedDispute] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Sample Data
  const disputeData = [
    {
      id: "12345",
      title: "Dispute 1",
      subtitle: "Payment Issue",
      status: { primary: "Awaiting Agreement" },
      disputeStatus: { primary: "Being Resolved" },
      amount: "100",
      currency: "USD",
      created: "2024-01-01",
      disputeDetails: ["Payment not received"],
      contract: ["Contract Clause 1", "Contract Clause 2"],
      role: "Buyer",
      step: 2,
      timeBounded: true,
    },
    {
      id: "12346",
      title: "Dispute 2",
      subtitle: "Product Not as Described",
      status: { primary: "Awaiting Agreement" },
      disputeStatus: { primary: "Resolved" },
      amount: "200",
      currency: "USD",
      created: "2024-02-01",
      disputeDetails: ["Product was different from the description"],
      contract: ["Contract Clause 3", "Contract Clause 4"],
      role: "Seller",
      step: 3,
      timeBounded: false,
    },
    {
      id: "12347",
      title: "Dispute 3",
      subtitle: "Fraudulent Transaction",
      status: { primary: "Escalated" },
      disputeStatus: { primary: "Closed" },
      amount: "500",
      currency: "USD",
      created: "2024-03-01",
      disputeDetails: ["Transaction flagged as fraudulent"],
      contract: ["Contract Clause 5", "Contract Clause 6"],
      role: "Buyer",
      step: 4,
      timeBounded: true,
    },
    {
      id: "12348",
      title: "Dispute 4",
      subtitle: "Service Not Delivered",
      status: { primary: "Being Reviewed" },
      disputeStatus: { primary: "Being Resolved" },
      amount: "150",
      currency: "USD",
      created: "2024-04-01",
      disputeDetails: ["Service was never delivered to the buyer"],
      contract: ["Contract Clause 7", "Contract Clause 8"],
      role: "Buyer",
      step: 1,
      timeBounded: false,
    },
    {
      id: "12349",
      title: "Dispute 5",
      subtitle: "Refund Request Denied",
      status: { primary: "Awaiting Agreement" },
      disputeStatus: { primary: "Resolved" },
      amount: "75",
      currency: "USD",
      created: "2024-05-01",
      disputeDetails: ["Seller refused to provide a refund"],
      contract: ["Contract Clause 9", "Contract Clause 10"],
      role: "Seller",
      step: 2,
      timeBounded: true,
    },
  ];
  

  // Columns for the Table
  const columns = [
    {
      title: "Dispute ID",
      dataIndex: "id",
      key: "id",
      render: (text) => `#DIS-${text}`,
      responsive: ["sm"],
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      responsive: ["xs"],
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Tag
          color={
            status.primary === "Awaiting Agreement"
              ? "gold"
              : status.primary === "Being Resolved"
              ? "blue"
              : "green"
          }
        >
          {status.primary}
        </Tag>
      ),
      responsive: ["sm"],
    },
    {
      title: "Dispute Status",
      dataIndex: "disputeStatus",
      key: "disputeStatus",
      render: (disputeStatus) => (
        <Tag color={disputeStatus.primary === "Being Resolved" ? "blue" : "green"}>
          {disputeStatus.primary}
        </Tag>
      ),
      responsive: ["sm"],
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      render: (amount, record) => `${amount} ${record.currency}`,
      responsive: ["sm"],
    },
  ];

  // Handle Row Click
  const handleRowClick = (record) => {
    setSelectedDispute(record);
    setIsModalVisible(true);
  };

  // Handle Modal Close
  const handleModalClose = () => {
    setIsModalVisible(false);
    setSelectedDispute(null);
  };

  // Handle Give Remarks
  const handleGiveRemarks = () => {
    navigate("/Admindashboard/updatedispute", { state: { item: selectedDispute } });
  };

  return (
    <Box sx={{ padding: "20px", backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
      <Card sx={{ borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0,0,0,0.1)" }}>
        {/* Conditionally Render Tabs */}
        {ongoing ? (
          <Tabs defaultActiveKey="2" tabPosition="top" centered>
            <TabPane tab="Ongoing Disputes" key="2">
              <Table
                columns={columns}
                dataSource={disputeData.filter((d) => d.disputeStatus.primary === "Being Resolved")}
                onRow={(record) => ({
                  onClick: () => handleRowClick(record),
                })}
                rowKey="id"
                scroll={{ x: true }}
              />
            </TabPane>
          </Tabs>
        ) : (
          <Tabs defaultActiveKey="1" tabPosition="top" centered>
            <TabPane tab="All Disputes" key="1">
              <Table
                columns={columns}
                dataSource={disputeData}
                onRow={(record) => ({
                  onClick: () => handleRowClick(record),
                })}
                rowKey="id"
                scroll={{ x: true }}
              />
            </TabPane>
            <TabPane tab="Ongoing Disputes" key="2">
              <Table
                columns={columns}
                dataSource={disputeData.filter((d) => d.disputeStatus.primary === "Being Resolved")}
                onRow={(record) => ({
                  onClick: () => handleRowClick(record),
                })}
                rowKey="id"
                scroll={{ x: true }}
              />
            </TabPane>
            <TabPane tab="Completed Disputes" key="3">
              <Table
                columns={columns}
                dataSource={disputeData.filter((d) => d.disputeStatus.primary === "Resolved")}
                onRow={(record) => ({
                  onClick: () => handleRowClick(record),
                })}
                rowKey="id"
                scroll={{ x: true }}
              />
            </TabPane>
            <TabPane tab="Closed Disputes" key="4">
              <Table
                columns={columns}
                dataSource={disputeData.filter((d) => d.disputeStatus.primary === "Closed")}
                onRow={(record) => ({
                  onClick: () => handleRowClick(record),
                })}
                rowKey="id"
                scroll={{ x: true }}
              />
            </TabPane>
          </Tabs>
        )}
      </Card>

      {/* Dispute Details Modal */}
      <Modal
        title={`Dispute Details - #DIS-${selectedDispute?.id}`}
        visible={isModalVisible}
        onCancel={handleModalClose}
        footer={null}
        width={window.innerWidth < 768 ? "90%" : 800}
      >
        {selectedDispute && (
          <Box>
            <Descriptions bordered column={1}>
              <Descriptions.Item label="Title">
                <Text strong>{selectedDispute.title}</Text>
              </Descriptions.Item>
              <Descriptions.Item label="Subtitle">
                <Text>{selectedDispute.subtitle}</Text>
              </Descriptions.Item>
              <Descriptions.Item label="Status">
                <Tag color={selectedDispute.status.primary === "Awaiting Agreement" ? "gold" : "blue"}>
                  {selectedDispute.status.primary}
                </Tag>
              </Descriptions.Item>
              <Descriptions.Item label="Dispute Status">
                <Tag color={selectedDispute.disputeStatus.primary === "Being Resolved" ? "blue" : "green"}>
                  {selectedDispute.disputeStatus.primary}
                </Tag>
              </Descriptions.Item>
              <Descriptions.Item label="Amount">
                <Text strong>
                  {selectedDispute.amount} {selectedDispute.currency}
                </Text>
              </Descriptions.Item>
              <Descriptions.Item label="Created">
                <Text>{selectedDispute.created}</Text>
              </Descriptions.Item>
              <Descriptions.Item label="Dispute Details">
                <ul>
                  {selectedDispute.disputeDetails.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </Descriptions.Item>
              <Descriptions.Item label="Contract">
                <ul>
                  {selectedDispute.contract.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </Descriptions.Item>
              <Descriptions.Item label="Role">
                <Text>{selectedDispute.role}</Text>
              </Descriptions.Item>
              <Descriptions.Item label="Step">
                <Text>{selectedDispute.step}</Text>
              </Descriptions.Item>
              <Descriptions.Item label="Time Bounded">
                <Text>{selectedDispute.timeBounded ? "Yes" : "No"}</Text>
              </Descriptions.Item>
            </Descriptions>

            {/* Action Buttons */}
            <Box sx={{ display: "flex", justifyContent: "flex-end", gap: "10px", marginTop: "20px" }}>
              <Button type="primary" onClick={handleGiveRemarks}>
                Give Remarks
              </Button>
            </Box>
          </Box>
        )}
      </Modal>
    </Box>
  );
};


export default DisputeAdmin;