/* eslint-disable react-refresh/only-export-components */
import { useState, useContext,useEffect } from "react";
import { createContext } from "react";

export const EscrowHistoryContext = createContext();
export const UserContext = createContext();
export const IsUserLoggedIn = createContext();
export const useEscrowHistory = () => {
  return useContext(EscrowHistoryContext);
};
export const useDisputeHistory = () => {
  return useContext(DisputeHistoryContext);
};
// Create contexts

function useEscrowContext() {
  const [escrowHistory, setEscrowHistory] = useState(
    [
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
);

// Retrieve data from localStorage on initial load
const storedUser = JSON.parse(localStorage.getItem("user"));
const storedIsUserLoggedIn = JSON.parse(localStorage.getItem("isUserLoggedIn"));

const [user, setUser] = useState(storedUser || []);
const [isUserLoggedIn, setIsUserLoggedIn] = useState(storedIsUserLoggedIn || false);

useEffect(() => {
  // If the user is logged in, store them in localStorage
  if (isUserLoggedIn && user) {
    localStorage.setItem("isUserLoggedIn", JSON.stringify(true));
    localStorage.setItem("user", JSON.stringify(user));
  } else {
    localStorage.removeItem("isUserLoggedIn");
    localStorage.removeItem("user");
  }
}, [isUserLoggedIn, user]);




  // Add a new escrow transaction
  const addEscrowTransaction = (newTransaction) => {
    setEscrowHistory((prevHistory) => [...prevHistory, newTransaction]);
    console.log(newTransaction);
  };

  // Delete a specific escrow transaction by id
  const deleteEscrowTransaction = (id) => {
    setEscrowHistory((prevHistory) =>
      prevHistory.filter((transaction) => transaction.id !== id)
    );
  };

  // Update dispute details for a specific escrow transaction by id
  const updateDisputeDetails = (id, disputeDetails) => {
    setEscrowHistory((prevHistory) =>
      prevHistory.map((transaction) =>
        transaction.id === id
          ? { ...transaction, dispute: true, disputeDetails }
          : transaction
      )
    );
  };
  return {
    user,
    setUser,
    escrowHistory,
    setEscrowHistory,
    isUserLoggedIn,
    setIsUserLoggedIn,
    addEscrowTransaction,
    deleteEscrowTransaction,
    updateDisputeDetails,
    EscrowHistoryContext,
    UserContext,
    IsUserLoggedIn,
  };
}

export default useEscrowContext;
