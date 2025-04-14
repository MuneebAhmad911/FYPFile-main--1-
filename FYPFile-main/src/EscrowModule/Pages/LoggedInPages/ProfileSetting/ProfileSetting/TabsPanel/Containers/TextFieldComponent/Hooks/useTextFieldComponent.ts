import React, { useState } from "react";

function useTextFieldComponent(data) {
  const { label, type, value, subtexts } = data;
  const countries = [
    { code: "US", name: "United States", flag: "🇺🇸" },
    { code: "PK", name: "Pakistan", flag: "🇵🇰" },
    { code: "IN", name: "India", flag: "🇮🇳" },
    // Add more countries as needed
  ];
  const [isFieldDisabled, setIsFieldDisabled] = useState(true);
  const [valuee, setValuee] = useState(value || "");
  const [selectedCountry, setSelectedCountry] = useState(
    countries.find((c) => c.name === valuee) || countries[1]
  ); // Default country
  const [error, setError] = useState("");
  // const [tooltipTitle, setTooltipTitle] = useState("Edit");
  const validate = () => {
    let errorMessage = "";
    if (
      type === "email" &&
      valuee &&
      !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(valuee)
    ) {
      errorMessage = "Invalid email address.";
    } else if (type === "phone" && valuee) {
      if (!/^\+\d{7,15}$/.test(valuee)) {
        errorMessage = "Invalid phone number.";
      }
    } else if (type === "number" && valuee) {
      if (isNaN(valuee) || valuee < 18) {
        errorMessage = "Age must be a number and at least 18.";
      }
    } else if (type === "text" && !valuee.trim()) {
      errorMessage = "This field cannot be empty.";
    }
    setError(errorMessage);
    return !errorMessage;
  };

  const handleSave = () => {
    if (validate()) {
      setIsFieldDisabled(true);
    }
  };
  return {
    valuee,
    error,
    countries,
    isFieldDisabled,
    selectedCountry,
    setValuee,
    validate,
    setError,
    handleSave,
    setIsFieldDisabled,
    setSelectedCountry,
  };
}

export default useTextFieldComponent;
