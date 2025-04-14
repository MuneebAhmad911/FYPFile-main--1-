import React, { useState, useEffect } from "react";

function useReusableComponent({ BoxIcon, CarIcon, ServiceIcon }) {
  const [role, setRole] = useState("Selling");
  const [curreny, setCurreny] = useState("PKR");
  const [value, setValue] = useState("Domains");
  const [currentIndex, setCurrentIndex] = useState(0);
  const selectOptions2 = ["PKR", "USD", "CAD", "UK"];
  const spanStyle1 = {};
  const spanStyle2 = {};

  const imgStyle = {};
  const myobj = [
    {
      picture: BoxIcon,
      MainHeading: ["Complete protection for ", "merchandise"],
      subheading: [
        { text: "Buyer and seller agree on terms" },
        { text: "Buyer pays TrustBridge" },
        { text: "Seller ships the merchandise" },
        { text: "Buyer inspects goods" },
        { text: "Buyer approves goods" },
        { text: "TrustBridge pays the seller" },
      ],
    },
    {
      picture: CarIcon,
      MainHeading: [
        "Buy or sell your",
        "vehicle safely",
        "and confidently",
      ],
      subheading: [
        { text: " Buyer and seller agree on terms" },
        { text: "Buyer pays TrustBridge" },
        { text: "Seller ships the vehicle" },
        { text: "Buyer inspects vehicle" },
        { text: "Buyer approves vehicle" },
        { text: "TrustBridge pays the seller" },
      ],
    },
    {
      picture: ServiceIcon,
      MainHeading: [
        "Pay for services as",
        "you go with",
        "milestone payments",
        // "",
      ],
      subheading: [
        { text: "Buyer and seller agree on terms" },
        { text: "Buyer pays TrustBridge" },
        { text: "Seller provides the service" },
        { text: "Seller provides the service" },
        { text: "Buyer approves the milestone" },
        { text: "TrustBridge pays the seller" },
      ],
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0); // Initial active index
  const totalItems = 6;
  const totalMembers = 3;
  useEffect(() => {
    // Update activeIndex every 1 second
    const activeIndexInterval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % totalItems);
    }, 1500);

    // Update currentIndex every 8 seconds
    const currentIndexInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalMembers);
    }, 9000);

    // Cleanup intervals
    return () => {
      clearInterval(activeIndexInterval);
      clearInterval(currentIndexInterval);
    };
  }, [totalItems]);
  return {
    role,
    value,
    curreny,
    currentIndex,
    selectOptions2,
    spanStyle1,
    spanStyle2,
    imgStyle,
    myobj,
    activeIndex,
    setRole,
    setCurreny,
    setValue,
  };
}

export default useReusableComponent;
