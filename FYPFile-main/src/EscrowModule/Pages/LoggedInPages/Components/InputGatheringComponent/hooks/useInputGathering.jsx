/* eslint-disable no-unused-vars */
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserContext } from "../../../../../providers/Hooks/useEscrowContext";
import { v4 as uuidv4 } from "uuid";

function useInputGathering({ item, forContract, addingTerms }) {
  const { user, setUser } = useContext(UserContext);
  const isContract = forContract;
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [terms, setTerms] = useState([]);
  const containerRef = React.useRef(null);
  const [inputValue, setInputValue] = useState("");
  const [attachments, setAttachments] = useState([]);
  const [isDialogOpen, setDialogOpen] = useState(false);

  const heading = isContract ? "Terms and Conditions" : "Dispute Information";
  const description = isContract
    ? "Add the terms and conditions that will be upheld by both parties to ensure no issues occur when the transaction is done."
    : "Provide the necessary information about the dispute, including details that will help in resolution.";
  const navigateTO = isContract ? `/escrowdashboard` : `/escrowdashboard`;
  const label = isContract ? "Terms" : "Dispute Details";

  useEffect(() => {
    if (addingTerms) {
      if (isContract) {
        setTerms(item?.contract || []);
      } else {
        setTerms(item?.disputeDetails || []);
      }
    } else {
      setTerms([]);
    }
  }, [addingTerms, item?.contract]);

  const handleFileSelect = (event) => {
    const files = Array.from(event.target.files);
    setAttachments((prev) => [...prev, ...files]);
    setDialogOpen(false);
  };

  const removeAttachment = (index) => {
    setAttachments((prev) => prev.filter((_, i) => i !== index));
  };

  const deleteTerm = (index) => {
    const updatedTerms = terms.filter((_, i) => i !== index);
    setTerms(updatedTerms);
  };

  useEffect(() => {
    setIndex((prevIndex) => {
      setIndex(prevIndex + 1);
    });
  }, [terms]);

  const addTerm = () => {
    if (inputValue.trim() === "") {
      alert("Please enter a term before adding!");
      return;
    }
    setTerms((prevTerms) => [...prevTerms, inputValue.trim()]);
    setInputValue("");
  };

  const handleEnterKeyPress = (event) => {
    if (event.key === "Enter") {
      addTerm();
    }
  };

  const contractHandling = async () => {
    try {
      if (addingTerms) {
        const updatedTransaction = { ...item, contract: terms };
        await axios.put(`http://localhost:5000/api/escrow/${item.id}`, {
          contract: terms,
        });

        navigate(navigateTO, { state: { item: updatedTransaction } });
      } else {
        const transaction = {
          transactionId: uuidv4().slice(0, 8),
          title: item.TransactionTitle,
          subtitle: item.ItemCategory,
          created: Date.now().toString(),
          amount: item.Price,
          currency: item.Currency,
          role: item.MyRole,
          status: {
            primary: "Awaiting Agreement",
            secondary: "Requires Seller's Action",
          },
          step: 0,
          agreed: false,
          contract: terms,
          dispute: false,
          disputeDetails: [],
          itemName: item.ItemName,
          inspectionPeriod: item.InspectionPeriod,
          itemDescription: item.ItemDescription,
          secondPersonEmail: item.secondPersonEmail,
          secondPersonNumber: item.secondPersonNumber,
          timeBounded: false,
          creatorId: user._id.toString(),
        };

        const response = await axios.post(
          "http://localhost:5000/api/escrow",
          transaction
        );

        navigate(navigateTO, { state: { item: response.data.newTransaction } });
      }
    } catch (error) {
      console.error("Error handling contract:", error);
    }
  };

  const disputeHandling = async () => {
    try {
      const updatedTransaction = {
        ...item,
        dispute: true,
        disputeDetails: [...(item.disputeDetails || []), ...terms],
      };
      await axios.put(`/api/escrow/${item.id}`, updatedTransaction);
      navigate(navigateTO, { state: { item: updatedTransaction } });
    } catch (error) {
      console.error("Error updating dispute:", error);
    }
  };

  const handleSave = () => {
    if (terms.length > 0) {
      if (forContract) {
        contractHandling();
      } else {
        disputeHandling();
      }
    } else {
      alert("Please add at least one term before saving!");
    }
  };

  return {
    terms,
    setTerms,
    index,
    addTerm,
    setInputValue,
    inputValue,
    containerRef,
    deleteTerm,
    handleEnterKeyPress,
    attachments,
    isDialogOpen,
    setDialogOpen,
    setAttachments,
    handleFileSelect,
    removeAttachment,
    heading,
    description,
    label,
    isContract,
    handleSave,
  };
}

export default useInputGathering;
