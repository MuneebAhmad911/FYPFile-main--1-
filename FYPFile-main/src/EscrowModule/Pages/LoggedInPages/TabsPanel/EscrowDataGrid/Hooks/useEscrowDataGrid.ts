import { EscrowTransaction } from "./../../../../../types/index";
import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../../../../providers/Hooks/useEscrowContext";

import { fetchEscrowTransactions } from "../../../../../services";

function useEscrowDataGrif({ backendAPI }) {
  const { user } = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const [openDialog, setOpenDialog] = useState(false);
  const [escrowHistory, setEscrowHistory] = useState<EscrowTransaction[]>([]);
  const [selectedItem, setSelectedItem] = useState<EscrowTransaction | null>(
    null
  );
  const navigate = useNavigate();

  const handleDeleteClick = (item) => {
    setSelectedItem(item);
    setOpenDialog(true);
  };
  const handleUpdate = (item) => {
    navigate("/startescrow", { state: { item, forUpdate: true } });
  };
  const handleRowClick = (item) => {
    setSelectedItem(item);
  };

  const handleDelete = async () => {
    setLoading(true);
    try {
      await axios.delete(`${backendAPI}/${selectedItem?._id}`);
      setEscrowHistory((prevHistory) =>
        prevHistory.filter((item) => item._id !== selectedItem?._id)
      );

      return true;
    } catch (error) {
      console.error("Error deleting transaction:", error);
      setLoading(false);
      throw error;
    } finally {
      setOpenDialog(false);
    }
  };

  const handleView = (item) => {
    handleBoxClick(item);
  };

  useEffect(() => {
    if (!user || !user._id) return;

    const getTransactions = async () => {
      try {
        setLoading(true);
        const data = await fetchEscrowTransactions(backendAPI, user._id);
        setEscrowHistory(data);
      } catch (error) {
        console.error("Error fetching escrow transactions:", error);
      } finally {
        setLoading(false);
      }
    };
    getTransactions();
  }, []);

  const columns = [
    { headerName: "ID", m: 2, textAlign: "left" },
    { headerName: "TITLE", m: 2, textAlign: "left" },
    { headerName: "AMOUNT", m: 2, textAlign: "left" },
    { headerName: "CREATED AT", m: 2, textAlign: "left" },
    { headerName: "ROLE", m: 1, textAlign: "left" },
    { headerName: "STATUS", m: 3, textAlign: "right" },
  ];
  const rows = escrowHistory.map((transaction: EscrowTransaction) => {
    let primaryStatus = "";
    let secondaryStatus = "";

    switch (transaction.step) {
      case 0:
        primaryStatus = "Awaiting Agreement";
        secondaryStatus = "Requires Seller's Action";
        break;
      case 1:
        primaryStatus = "Agreement Reached";
        secondaryStatus = "Awaiting Payment";
        break;
      case 2:
        primaryStatus = "Payment Received";
        secondaryStatus = "Awaiting Delivery";
        break;
      case 3:
        primaryStatus = transaction.dispute
          ? "In Dispute"
          : "Delivery Confirmed";
        secondaryStatus = "Inspection Period";
        break;
      case 4:
        primaryStatus = transaction.timeBounded
          ? "Approval Pending"
          : "Delivery Confirmed";
        secondaryStatus = "Next Cycle";
        break;
      default:
        primaryStatus = "Transaction Closed";
        secondaryStatus = "Thank You for your Trust";
    }

    return {
      _id: transaction._id,
      transactionId: transaction.transactionId,
      title: transaction.title,
      subtitle: transaction.subtitle,
      created: transaction.created,
      amount: transaction.amount,
      currency: transaction.currency,
      role: transaction.role,
      status: {
        primary: primaryStatus,
        secondary: secondaryStatus,
      },
      agreed: transaction.agreed,
      step: transaction.step,
      contract: transaction.contract,
      dispute: transaction.dispute,
      disputeDetails: transaction.disputeDetails,
      inspectionPeriod: transaction.inspectionPeriod,
      itemDescription: transaction.itemDescription,
      itemName: transaction.itemName,
      secondPersonEmail: transaction.secondPersonEmail,
      secondPersonNumber: transaction.secondPersonNumber,
      timeBounded: transaction.timeBounded,
      creatorId: transaction.creatorId,
    };
  });

  const handleBoxClick = (item) => {
    navigate(`/escrowdashboard/escrowdetails`, { state: { item } });
  };
  const handleDispute = (item) => {
    navigate(`/escrowdashboard/disputedetails`, { state: { item } });
  };

  return {
    loading,
    columns,
    rows,
    handleBoxClick,
    handleDispute,
    handleDeleteClick,
    handleUpdate,
    handleRowClick,
    handleDelete,
    handleView,
    selectedItem,
    openDialog,
  };
}

export default useEscrowDataGrif;
