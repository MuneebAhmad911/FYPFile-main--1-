import React, { useState } from "react";
import {
  Tabs,
  Table,
  Tag,
  Modal,
  Button,
  Descriptions,
  Typography,
  Upload,
  message,
  Input,
} from "antd";
import { Box, Card } from "@mui/material";
import { UploadOutlined } from "@ant-design/icons";

const { Text } = Typography;
const { TextArea } = Input;

// Sample Data
const disputeData = [
  {
    id: "1737915",
    title: "My Disputee",
    subtitle: "Domain Name",
    status: {
      primary: "Awaiting Agreement",
      secondary: "Requires Seller's Action",
    },
    disputeStatus: { primary: "Being Resolved" },
    agreed: true,
    amount: "100",
    currency: "pkr",
    created: "17379158899",
    dispute: true,
    disputeDetails: [
      "The issue arose because he did not send me the right product.",
      "The product was damaged during shipping.",
    ],
    contract: ["hehehhehe", "heheheh"],
    role: "Buyer",
    step: 3,
    timeBounded: false,
    sellerID: "1111737915",
    buyerID: "2221737915",
    adminRemarks: [],
  },
  // Add more disputes here...
];

const DisputeSeller = () => {
  const [selectedDispute, setSelectedDispute] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEvidenceModalVisible, setIsEvidenceModalVisible] = useState(false);
  const [pointOfView, setPointOfView] = useState("");
  const [proofs, setProofs] = useState([]);

  // Simulate the current user's ID (replace with actual user ID)
  const currentUserId = "2221737915"; // Example: Buyer ID

  // Filter disputes where the current user is involved
  const userDisputes = disputeData.filter(
    (d) => d.buyerID === currentUserId || d.sellerID === currentUserId
  );

  // Columns for the Table
  const columns = [
    {
      title: "Dispute ID",
      dataIndex: "id",
      key: "id",
      render: (text) => `#DIS-${text}`,
      responsive: ["sm"], // Show on small screens and above
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      responsive: ["xs"], // Always show title
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
      responsive: ["sm"], // Show on small screens and above
    },
    {
      title: "Dispute Status",
      dataIndex: "disputeStatus",
      key: "disputeStatus",
      render: (disputeStatus) => (
        <Tag
          color={disputeStatus.primary === "Being Resolved" ? "blue" : "green"}
        >
          {disputeStatus.primary}
        </Tag>
      ),
      responsive: ["sm"], // Show on small screens and above
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      render: (amount, record) => `${amount} ${record.currency}`,
      responsive: ["sm"], // Show on small screens and above
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

  // Handle Provide Evidence Button Click
  const handleProvideEvidence = () => {
    setIsEvidenceModalVisible(true);
  };

  // Handle Evidence Submission
  const handleEvidenceSubmit = () => {
    if (!pointOfView.trim()) {
      message.error("Please provide your point of view.");
      return;
    }

    console.log("Point of View:", pointOfView);
    console.log("Proofs:", proofs);

    // Simulate API call to submit evidence
    message.success("Evidence submitted successfully!");
    setIsEvidenceModalVisible(false);
    setPointOfView("");
    setProofs([]);
  };

  // Handle File Upload
  const handleFileUpload = (file) => {
    setProofs([...proofs, file]);
    return false; // Prevent default upload behavior
  };

  return (
    <Box
      sx={{ padding: "20px", backgroundColor: "#f5f5f5", minHeight: "100vh" }}
    >
      <Card
        sx={{ borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0,0,0,0.1)" }}
      >
        <Tabs
          defaultActiveKey="1"
          tabPosition="top"
          centered
          items={[
            {
              label: "Ongoing Disputes",
              key: "1",
              children: (
                <Table
                  columns={columns}
                  dataSource={userDisputes.filter(
                    (d) => d.disputeStatus.primary === "Being Resolved"
                  )}
                  onRow={(record) => ({
                    onClick: () => handleRowClick(record),
                  })}
                  rowKey="id"
                  scroll={{ x: true }}
                />
              ),
            },
            {
              label: "Completed Disputes",
              key: "2",
              children: (
                <Table
                  columns={columns}
                  dataSource={userDisputes.filter(
                    (d) => d.disputeStatus.primary === "Resolved"
                  )}
                  onRow={(record) => ({
                    onClick: () => handleRowClick(record),
                  })}
                  rowKey="id"
                  scroll={{ x: true }}
                />
              ),
            },
          ]}
        />
      </Card>

      {/* Dispute Details Modal */}
      <Modal
        title={`Dispute Details - #DIS-${selectedDispute?.id}`}
        visible={isModalVisible} // Use `open` instead of `visible`
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
                <Tag
                  color={
                    selectedDispute.status.primary === "Awaiting Agreement"
                      ? "gold"
                      : "blue"
                  }
                >
                  {selectedDispute.status.primary}
                </Tag>
              </Descriptions.Item>
              <Descriptions.Item label="Dispute Status">
                <Tag
                  color={
                    selectedDispute.disputeStatus.primary === "Being Resolved"
                      ? "blue"
                      : "green"
                  }
                >
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

            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                gap: "10px",
                marginTop: "20px",
              }}
            >
              <Button type="primary" onClick={handleProvideEvidence}>
                Provide Evidence
              </Button>
            </Box>
          </Box>
        )}
      </Modal>

      {/* Evidence Submission Modal */}
      <Modal
        title="Provide Evidence"
        visible={isEvidenceModalVisible} // Use `open` instead of `visible`
        onCancel={() => setIsEvidenceModalVisible(false)}
        footer={[
          <Button key="cancel" onClick={() => setIsEvidenceModalVisible(false)}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={handleEvidenceSubmit}>
            Submit
          </Button>,
        ]}
      >
        <TextArea
          placeholder="Explain your point of view..."
          value={pointOfView}
          onChange={(e) => setPointOfView(e.target.value)}
          rows={4}
          style={{ marginBottom: "20px" }}
        />
        <Upload
          beforeUpload={handleFileUpload}
          multiple
          showUploadList={{ showRemoveIcon: true }}
        >
          <Button icon={<UploadOutlined />}>
            Upload Proofs (Pictures/Videos)
          </Button>
        </Upload>
      </Modal>
    </Box>
  );
};

export default DisputeSeller;
