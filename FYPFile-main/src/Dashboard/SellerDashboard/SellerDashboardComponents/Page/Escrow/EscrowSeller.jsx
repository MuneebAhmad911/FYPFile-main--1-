import React, { useState } from "react";
import { Tabs, Table, Tag, Modal, Button, Descriptions, Typography } from "antd";
import { Box, Card } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ProceedToPayment from "../../../../../EscrowModule/Pages/LoggedInPages/Details/ProceedToPaymentComponent/ProceedToPayment";

const { TabPane } = Tabs;
const { Text } = Typography;
import {Typography as Typo} from "@mui/material";

// Sample Data
const escrowData = [
    {
      agreed: true,
      amount: "10",
      contract: ["hehehhehe", "heheheh"],
      created: "1737915881575",
      currency: "USD",
      dispute: false,
      disputeDetails: [],
      id: "1737915",
      role: "Buyer",
      step: 4,
      status: {
        primary: "Awaiting Agreement",
        secondary: "Requires Seller's Action",
      },
      subtitle: "Domain Name",
      title: "My Transaction",
      timeBounded: true,
      sellerID:"1111737915",
      buyerID:"2221737915",
      adminRemarks:["This Issue is casued By this indiviual","",""]
    },
    {
      agreed: false,
      amount: "10",
      contract: ["hehehhehe", "heheheh"],
      created: "1737915881575",
      currency: "USD",
      dispute: false,
      disputeDetails: [],
      id: "1737915",
      role: "Buyer",
      step: 0,
      status: {
        primary: "Awaiting Agreement",
        secondary: "Requires Seller's Action",
      },
      subtitle: "Domain Name",
      title: "My Transaction",
      timeBounded: false,
      sellerID:"1111737915",
      buyerID:"2221737915",
      adminRemarks:[]

    },
    {
      agreed: false,
      amount: "10",
      contract: ["hehehhehe", "heheheh"],
      created: "1737915881575",
      currency: "USD",
      dispute: false,
      disputeDetails: [],
      id: "1737915",
      role: "Seller",
      step: 0,
      status: {
        primary: "Awaiting Agreement",
        secondary: "Requires Seller's Action",
      },
      subtitle: "Domain Name",
      title: "My Transaction",
      timeBounded: false,
      sellerID:"1111737915",
      buyerID:"2221737915",
      adminRemarks:[]

    },
    {
      agreed: true,
      amount: "10",
      contract: ["hehehhehe", "heheheh"],
      created: "1737915881575",
      currency: "USD",
      dispute: false,
      disputeDetails: [],
      id: "1737915",
      role: "Buyer",
      step: 1,
      status: {
        primary: "Awaiting Agreement",
        secondary: "Requires Seller's Action",
      },
      subtitle: "Domain Name",
      title: "LOLOLOLO",
      timeBounded: false,
      sellerID:"1111737915",
      buyerID:"2221737915",
      adminRemarks:[]

    },
    {
      agreed: false,
      amount: "10",
      contract: ["hehehhehe", "heheheh"],
      created: "1737915881575",
      currency: "USD",
      dispute: false,
      disputeDetails: [],
      id: "1737915",
      role: "Seller",
      step: 2,
      status: {
        primary: "Awaiting Agreement",
        secondary: "Requires Seller's Action",
      },
      subtitle: "Domain Name",
      title: "My Transaction",
      timeBounded: false,
      sellerID:"1111737915",
      buyerID:"2221737915",
      adminRemarks:[]

    },
    {
      agreed: false,
      amount: "10",
      contract: ["hehehhehe", "heheheh"],
      created: "1737915881575",
      currency: "USD",
      dispute: false,
      disputeDetails: [],
      id: "1737915",
      role: "Buyer",
      step: 2,
      status: {
        primary: "Awaiting Agreement",
        secondary: "Requires Seller's Action",
      },
      subtitle: "Domain Name",
      title: "My Transaction",
      timeBounded: false,
      sellerID:"1111737915",
      buyerID:"2221737915",
      adminRemarks:[]

    },
    {
      agreed: true,
      amount: "100",
      contract: ["hehehhehe", "heheheh"],
      created: "17379158899",
      currency: "pkr",
      dispute: true,
      disputeDetails: [
        "the Issue Arised because hw did not send me the right product",
        "the Issue Arised because hw did not send me the right product",
      ],
      id: "1737915",
      role: "Buyer",
      step: 3,
      status: {
        primary: "Awaiting Agreement",
        secondary: "Requires Seller's Action",
      },
      disputeStatus: {
        primary: "Being Resolved",
      },
      subtitle: "Domain Name",
      title: "My Disputee",
      timeBounded: false,
      sellerID:"1111737915",
      buyerID:"2221737915",
      adminRemarks:[]

    },
    {
      agreed: false,
      amount: "10",
      contract: ["hehehhehe", "heheheh"],
      created: "1737915881575",
      currency: "USD",
      dispute: false,
      disputeDetails: [],
      id: "1737915",
      role: "Buyer",
      step: 4,
      status: {
        primary: "Awaiting Agreement",
        secondary: "Requires Seller's Action",
      },
      subtitle: "Domain Name",
      title: "My Transaction",
      timeBounded: false,
      sellerID:"1111737915",
      buyerID:"2221737915",
      adminRemarks:[]

    },
  ]

const EscrowSeller = () => {
  const navigate = useNavigate();
  const [selectedEscrow, setSelectedEscrow] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Simulate the current user's ID (replace with actual user ID)
  const currentUserId = "2221737915"; // Example: Buyer ID

  // Filter escrows where the current user is involved
  const userEscrows = escrowData.filter(
    (e) => e.buyerID === currentUserId || e.sellerID === currentUserId
  );

  // Columns for the Table
  const columns = [
    {
      title: "Escrow ID",
      dataIndex: "id",
      key: "id",
      render: (text) => `#ESC-${text}`,
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
              : status.primary === "Completed"
              ? "green"
              : "blue"
          }
        >
          {status.primary}
        </Tag>
      ),
      responsive: ["sm"],
    },
    {
      title: "Step",
      dataIndex: "step",
      key: "step",
      render: (step) => `Step ${step}`,
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
    setSelectedEscrow(record);
    setIsModalVisible(true);
  };

  // Handle Modal Close
  const handleModalClose = () => {
    setIsModalVisible(false);
    setSelectedEscrow(null);
  };

  // Handle Accept Transaction
  const handleAcceptTransaction = () => {
    console.log("Transaction accepted:", selectedEscrow.id);
    // Add logic to accept the transaction
  };

  // Handle Reject Transaction
  const handleRejectTransaction = () => {
    console.log("Transaction rejected:", selectedEscrow.id);
    // Add logic to reject the transaction
  };

  // Handle Delivery
  const handleDelivery = () => {
    console.log("Product delivered:", selectedEscrow.id);
    // Add logic to mark product as delivered
  };

  // Handle File Dispute
  const handleFileDispute = () => {
    console.log("Dispute filed:", selectedEscrow.id);
    // Add logic to file a dispute
  };

  // Handle Satisfied
  const handleSatisfied = () => {
    console.log("Buyer satisfied:", selectedEscrow.id);
    // Add logic to mark buyer as satisfied
  };

  // Handle Create Escrow
  const handleCreateEscrow = () => {
    navigate("/create-escrow");
  };

  return (
    <Box sx={{ padding: "20px", backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
      <Card sx={{ borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0,0,0,0.1)" }}>
        <Tabs defaultActiveKey="1" tabPosition="top" centered>
          <TabPane tab="Ongoing Escrows" key="1">
            <Table
              columns={columns}
              dataSource={userEscrows.filter((e) => e.step < 4)}
              onRow={(record) => ({
                onClick: () => handleRowClick(record),
              })}
              rowKey="id"
              scroll={{ x: true }}
            />
          </TabPane>
          <TabPane tab="Completed Escrows" key="2">
            <Table
              columns={columns}
              dataSource={userEscrows.filter((e) => e.step === 4)}
              onRow={(record) => ({
                onClick: () => handleRowClick(record),
              })}
              rowKey="id"
              scroll={{ x: true }}
            />
          </TabPane>
          <TabPane tab="Action Needed" key="3">
            <Table
              columns={columns}
              dataSource={userEscrows.filter((e) => !e.agreed)}
              onRow={(record) => ({
                onClick: () => handleRowClick(record),
              })}
              rowKey="id"
              scroll={{ x: true }}
            />
          </TabPane>
        </Tabs>
        {/* Move the "Create Escrow" button to the bottom */}
        <Box sx={{ display: "flex", justifyContent: "flex-end", marginTop: "20px", padding: "20px" }}>
          <Button type="primary" onClick={handleCreateEscrow}>
            Create Escrow
          </Button>
        </Box>
      </Card>

      {/* Escrow Details Modal */}
      <Modal
        title={`Escrow Details - #ESC-${selectedEscrow?.id}`}
        open={isModalVisible}
        onCancel={handleModalClose}
        footer={null}
        width={window.innerWidth < 768 ? "90%" : 800}
      >
        {selectedEscrow && (
          <Box>
            <Descriptions bordered column={1}>
              <Descriptions.Item label="Title">
                <Text strong>{selectedEscrow.title}</Text>
              </Descriptions.Item>
              <Descriptions.Item label="Subtitle">
                <Text>{selectedEscrow.subtitle}</Text>
              </Descriptions.Item>
              <Descriptions.Item label="Status">
                <Tag
                  color={
                    selectedEscrow.status.primary === "Awaiting Agreement"
                      ? "gold"
                      : selectedEscrow.status.primary === "Completed"
                      ? "green"
                      : "blue"
                  }
                >
                  {selectedEscrow.status.primary}
                </Tag>
              </Descriptions.Item>
              <Descriptions.Item label="Step">
                <Text>Step {selectedEscrow.step}</Text>
              </Descriptions.Item>
              <Descriptions.Item label="Amount">
                <Text strong>
                  {selectedEscrow.amount} {selectedEscrow.currency}
                </Text>
              </Descriptions.Item>
              <Descriptions.Item label="Created">
                <Text>{selectedEscrow.created}</Text>
              </Descriptions.Item>
              <Descriptions.Item label="Contract">
                <ul>
                  {selectedEscrow.contract.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </Descriptions.Item>
              <Descriptions.Item label="Role">
                <Text>{selectedEscrow.role}</Text>
              </Descriptions.Item>
              <Descriptions.Item label="Time Bounded">
                <Text>{selectedEscrow.timeBounded ? "Yes" : "No"}</Text>
              </Descriptions.Item>
              <Descriptions.Item label="Admin Remarks">
                <ul>
                  {selectedEscrow.adminRemarks.map((remark, index) => (
                    <li key={index}>{remark}</li>
                  ))}
                </ul>
              </Descriptions.Item>
            </Descriptions>

            {/* Step-Based Logic */}
            {selectedEscrow.step === 0 && selectedEscrow.role === "Buyer" && !selectedEscrow.agreed && (
              <Typo
                          sx={{
                            borderTop: `1px solid ${Colors.borderColor}`,
                            mt: "1.2rem",
                            p: "1.5rem 0 0",
                            textAlign: "center",
                            fontSize: "15px",
                            color: Colors.EscrowDetailsColor,
                            "&:hover": {
                              color: "black",
                            },
                          }}
                        >
                          The Transaction is not yet accepted buy the seller. Please ask the
                          seller to accept it. <br /> You can move forward only when the
                          seller accept the terms.
                        </Typo>
            )}

            {selectedEscrow.step === 0 && selectedEscrow.role === "Seller" && !selectedEscrow.agreed && (
              <Box
                sx={{
                  border: "0.5px solid rgb(34, 92, 171)",
                  p: "1rem 1rem",
                  mt: "1.5rem",
                  borderRadius: "10px",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    p: "0.5rem 0",
                    color: "#2266AC",
                    fontSize: "20px",
                    fontWeight: 550,
                    fontFamily: "Roboto, serif",
                    fontStyle: "normal",
                  }}
                >
                  Agree to the Transaction
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#333",
                    fontSize: "14px",
                    fontWeight: 450,
                    fontFamily: "Roboto, serif",
                    fontStyle: "normal",
                  }}
                >
                  Buyer has initiated the transaction. Please accept it so that the transaction can move forward.
                </Typography>
                <Box sx={{ display: "flex", gap: 2, justifyContent: "flex-end" }}>
                  <Typography
                    variant="h6"
                    sx={{
                      p: "0.5rem 1rem",
                      bgcolor: "#2266AC",
                      textDecoration: "none",
                      cursor: "pointer",
                      "&:hover": {
                        bgcolor: "#1A4F8B",
                      },
                      color: "white",
                      mt: "0.5rem",
                      fontSize: "14px",
                      fontWeight: 550,
                      fontFamily: "Roboto, serif",
                      fontStyle: "normal",
                      width: "fit-content",
                      justifySelf: "right",
                      borderRadius: "9px",
                    }}
                    onClick={handleAcceptTransaction}
                  >
                    Accept
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      p: "0.5rem 1rem",
                      bgcolor: "#2266AC",
                      textDecoration: "none",
                      cursor: "pointer",
                      "&:hover": {
                        bgcolor: "#1A4F8B",
                      },
                      color: "white",
                      mt: "0.5rem",
                      fontSize: "14px",
                      fontWeight: 550,
                      fontFamily: "Roboto, serif",
                      fontStyle: "normal",
                      width: "fit-content",
                      justifySelf: "right",
                      borderRadius: "9px",
                    }}
                    onClick={handleRejectTransaction}
                  >
                    Reject
                  </Typography>
                </Box>
              </Box>
            )}

            {selectedEscrow.step === 1 && selectedEscrow.role === "Buyer" && selectedEscrow.agreed && (
              <Box>
                <ProceedToPayment item={selectedEscrow} />
              </Box>
            )}

            {selectedEscrow.step === 2 && selectedEscrow.role === "Seller" && (
              <Box
                sx={{
                  border: "0.5px solid rgb(34, 92, 171)",
                  p: "1rem 1rem",
                  mt: "1.5rem",
                  borderRadius: "10px",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    p: "0.5rem 0",
                    color: "#2266AC",
                    fontSize: "20px",
                    fontWeight: 550,
                    fontFamily: "Roboto, serif",
                    fontStyle: "normal",
                  }}
                >
                  Please Deliver the Product to the Buyer
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#333",
                    fontSize: "14px",
                    fontWeight: 450,
                    fontFamily: "Roboto, serif",
                    fontStyle: "normal",
                  }}
                >
                  Please go to your nearest courier service and deliver the product to the buyer. If it is a service, please complete it.
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    p: "0.5rem",
                    bgcolor: "#2266AC",
                    textDecoration: "none",
                    cursor: "pointer",
                    "&:hover": {
                      bgcolor: "#1A4F8B",
                    },
                    color: "white",
                    mt: "0.5rem",
                    fontSize: "14px",
                    fontWeight: 550,
                    fontFamily: "Roboto, serif",
                    fontStyle: "normal",
                    width: "fit-content",
                    justifySelf: "right",
                    borderRadius: "9px",
                  }}
                  onClick={handleDelivery}
                >
                  Delivered
                </Typography>
              </Box>
            )}

            {selectedEscrow.step === 2 && selectedEscrow.role === "Buyer" && (
              <Typography
                sx={{
                  borderTop: `1px solid #ccc`,
                  mt: "1.2rem",
                  p: "1.5rem 0 0",
                  textAlign: "center",
                  fontSize: "15px",
                  color: "#666",
                  "&:hover": {
                    color: "black",
                  },
                }}
              >
                The Seller has been asked to deliver the product to you. You will receive the product very soon. <br /> Your patience is highly appreciated.
              </Typography>
            )}

            {selectedEscrow.step === 3 && !selectedEscrow.dispute && selectedEscrow.role === "Buyer" && (
              <Box
                sx={{
                  border: "0.5px solid rgb(34, 92, 171)",
                  p: "1rem 1rem",
                  mt: "1.5rem",
                  borderRadius: "10px",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    p: "0.5rem 0",
                    color: "#2266AC",
                    fontSize: "20px",
                    fontWeight: 550,
                    fontFamily: "Roboto, serif",
                    fontStyle: "normal",
                  }}
                >
                  Issue with the Product?
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#333",
                    fontSize: "14px",
                    fontWeight: 450,
                    fontFamily: "Roboto, serif",
                    fontStyle: "normal",
                  }}
                >
                  If you have any issue with the product or service, you can file for a dispute. Our team will help you resolve it.
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    p: "0.5rem",
                    bgcolor: "#2266AC",
                    textDecoration: "none",
                    cursor: "pointer",
                    "&:hover": {
                      bgcolor: "#1A4F8B",
                    },
                    color: "white",
                    mt: "0.5rem",
                    fontSize: "14px",
                    fontWeight: 550,
                    fontFamily: "Roboto, serif",
                    fontStyle: "normal",
                    width: "fit-content",
                    justifySelf: "right",
                    borderRadius: "9px",
                  }}
                  onClick={handleFileDispute}
                >
                  File Dispute
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    p: "0.5rem",
                    bgcolor: "#2266AC",
                    textDecoration: "none",
                    cursor: "pointer",
                    "&:hover": {
                      bgcolor: "#1A4F8B",
                    },
                    color: "white",
                    mt: "0.5rem",
                    fontSize: "14px",
                    fontWeight: 550,
                    fontFamily: "Roboto, serif",
                    fontStyle: "normal",
                    width: "fit-content",
                    justifySelf: "right",
                    borderRadius: "9px",
                  }}
                  onClick={handleSatisfied}
                >
                  Satisfied
                </Typography>
              </Box>
            )}

            {selectedEscrow.step === 4 && selectedEscrow.role === "Buyer" && selectedEscrow.timeBounded && (
              <Box
                sx={{
                  border: "0.5px solid rgb(34, 92, 171)",
                  p: "1rem 1rem",
                  mt: "1.5rem",
                  borderRadius: "10px",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    p: "0.5rem 0",
                    color: "#2266AC",
                    fontSize: "20px",
                    fontWeight: 550,
                    fontFamily: "Roboto, serif",
                    fontStyle: "normal",
                  }}
                >
                  Approve for the Next Cycle
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#333",
                    fontSize: "14px",
                    fontWeight: 450,
                    fontFamily: "Roboto, serif",
                    fontStyle: "normal",
                  }}
                >
                  The last cycle has been completed. Please allow for the next cycle if there is no issue, so that the transaction can move forward. If there is an issue, you can file for a dispute.
                </Typography>
                <Box sx={{ display: "flex", gap: 2, justifyContent: "flex-end" }}>
                  <Typography
                    variant="h6"
                    sx={{
                      p: "0.5rem 1rem",
                      bgcolor: "#2266AC",
                      textDecoration: "none",
                      cursor: "pointer",
                      "&:hover": {
                        bgcolor: "#1A4F8B",
                      },
                      color: "white",
                      mt: "0.5rem",
                      fontSize: "14px",
                      fontWeight: 550,
                      fontFamily: "Roboto, serif",
                      fontStyle: "normal",
                      width: "fit-content",
                      justifySelf: "right",
                      borderRadius: "9px",
                    }}
                    onClick={handleAcceptTransaction}
                  >
                    Allow
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      p: "0.5rem 1rem",
                      bgcolor: "#2266AC",
                      textDecoration: "none",
                      cursor: "pointer",
                      "&:hover": {
                        bgcolor: "#1A4F8B",
                      },
                      color: "white",
                      mt: "0.5rem",
                      fontSize: "14px",
                      fontWeight: 550,
                      fontFamily: "Roboto, serif",
                      fontStyle: "normal",
                      width: "fit-content",
                      justifySelf: "right",
                      borderRadius: "9px",
                    }}
                    onClick={handleRejectTransaction}
                  >
                    Dispute
                  </Typography>
                </Box>
              </Box>
            )}

            {selectedEscrow.step === 4 && selectedEscrow.role === "Seller" && selectedEscrow.timeBounded && (
              <Typography
                sx={{
                  borderTop: `1px solid #ccc`,
                  mt: "1.2rem",
                  p: "1.5rem 0 0",
                  textAlign: "center",
                  fontSize: "15px",
                  color: "#666",
                  "&:hover": {
                    color: "black",
                  },
                }}
              >
                The Next Cycle is not yet approved by the Buyer. Please ask the Buyer to approve it. <br /> You can move forward only when the Buyer approves it.
              </Typography>
            )}
          </Box>
        )}
      </Modal>
    </Box>
  );
};

export default EscrowSeller;