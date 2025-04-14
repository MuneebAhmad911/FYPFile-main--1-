import React, { useEffect, useState } from "react";

const useHeader = ({ queries }) => {
  const scrolledToTop = window.scrollY === 0;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredButton, setHoveredButton] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [name, setName] = useState(null);
  const [itemIndex, setItemIndex] = useState(null);
  const [isAtTop, setIsAtTop] = useState(true);
  const [zIndex, setZIndex] = useState(12);
  const [topTextColor, setTopTextColor] = useState("");
  const [scrollTextColor, setScrollTextColor] = useState("");
  const [topBGColor, setTopBGColor] = useState("");
  const [scrollBGColor, setScrollBGColor] = useState("");
  const [onHoverBGColor, setOnHoverBGColor] = useState("");
  const [onHoverTextColor, setOnHoverTextColor] = useState("");


  useEffect(()=>{
    if(queries){
      setTopBGColor("white")
      setTopTextColor("black")
      setScrollBGColor("white")
      setOnHoverBGColor("rgb(1, 66, 106)")
      setScrollTextColor("black")
      setOnHoverTextColor("white")
    }
    else{
      setTopBGColor("rgb(1, 66, 106)")
      setTopTextColor("white")
      setScrollBGColor("white")
      setOnHoverBGColor("rgb(1, 66, 106)")
      setScrollTextColor("black")
      setOnHoverTextColor("white")

    }
  })


  // Monitor scroll position
  useEffect(() => {
    const checkScrollPosition = () => {
      if (typeof window !== "undefined") {
        const scrolledToTop = window.scrollY === 0;
        if (scrolledToTop) {
          // At the top of the page
          setIsAtTop(true);
        } else {
          // Scrolled down
          setIsAtTop(false);
        }
      }
    };

    // Check on initial render
    checkScrollPosition();

    // Listen for scroll events
    window.addEventListener("scroll", checkScrollPosition);

    // Cleanup event listener
    return () => {
      window.removeEventListener("scroll", checkScrollPosition);
    };
  }, [scrolledToTop, hoveredButton]);

  const handleMouseEnter = (index, name) => {
    setHoveredButton(name);
    setName(name);
    setItemIndex(index);
    setZIndex(12);
    setIsHovered(true)
  };
  
  const handleMouseLeave = () => {
    setHoveredButton(null);
    setName(null);
    setZIndex(12);
    setIsHovered(false)
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return {
    handleDrawerToggle,
    handleMouseEnter,
    handleMouseLeave,
    isAtTop,
    hoveredButton,
    mobileOpen,
    itemIndex,
    zIndex,
    name,
    topTextColor,
    scrollTextColor,
    topBGColor,
    scrollBGColor,
    onHoverBGColor,
    onHoverTextColor,
    isHovered
  };
};

export default useHeader;
