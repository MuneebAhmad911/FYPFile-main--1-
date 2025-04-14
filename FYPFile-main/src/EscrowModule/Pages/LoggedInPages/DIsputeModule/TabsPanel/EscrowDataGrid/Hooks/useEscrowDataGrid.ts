import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  useEscrowHistory,
  UserContext,
} from "../../../../../../providers/Hooks/useEscrowContext";

function useEscrowDataGrif({ onRendered }) {
  const { escrowHistory } = useEscrowHistory();
  const [loading, setLoading] = useState(true);
  const { user } = useContext(UserContext);
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
      if (onRendered) onRendered();
    }, 500);

    return () => clearTimeout(timer);
  }, [status]);

  const columns = [
    { headerName: "ID", m: "", textAlign: "left" },
    { headerName: "TITLE", m: "", textAlign: "left" },
    { headerName: "AMOUNT", m: "", textAlign: "left" },
    { headerName: "CREATED", m: "", textAlign: "left" },
    { headerName: "ROLE", m: "7rem", textAlign: "left" },
    { headerName: "STATUS", m: "", textAlign: "right" },
  ];

  const [rows, setRows] = useState([]);

  useEffect(() => {
    const filteredRows = escrowHistory
      .filter((transaction) => transaction.dispute) // Include only disputed transactions
      .map((transaction) => {
        let primaryStatus = "";
        let secondaryStatus = "";

        // Assign values based on the step
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
            if (transaction.dispute) {
              primaryStatus = "In Dispute";
              secondaryStatus = "Inspection Period";
            } else {
              primaryStatus = "Delivery Confirmed";
              secondaryStatus = "Inspection Period";
            }
            break;
          default:
            primaryStatus = "Transaction Closed";
            secondaryStatus = "Thank You for your Trust";
        }

        return {
          id: transaction.id,
          title: transaction.title,
          subtitle: transaction.subtitle,
          created: transaction.created,
          amount: transaction.amount,
          role: transaction.role,
          status: {
            primary: primaryStatus,
            secondary: secondaryStatus,
          },
          dispute: transaction.dispute,
          disputeDetails: transaction.disputeDetails,
          step: transaction.step,
          currency: transaction.currency,
          agreed: transaction.agreed,
          contract: transaction.contract,
          disputeStatus: {
            primary: primaryStatus,
          },
        };
      });

    // Update the state
    setRows(filteredRows);
  }, [escrowHistory]);

  const navigate = useNavigate();

  const handleBoxClick = (item) => {
    console.log(user.role);
    if (user.role === "Admin") {
      navigate(`/Admindashboard/disputedetails`, { state: { item } });
    } else {
      navigate(`/escrowdashboard/disputedetails`, { state: { item } });
    }
  };

  return {
    user,
    rows,
    columns,
    loading,
    handleBoxClick,
  };
}

export default useEscrowDataGrif;
