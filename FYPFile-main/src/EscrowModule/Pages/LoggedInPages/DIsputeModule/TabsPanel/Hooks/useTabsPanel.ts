import React, { useState } from "react";

function useTabsPanel() {
  const [value, setValaue] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleTabChange = (event, newValue) => {
    setValaue(newValue);
    setLoading(true);
  };

  const handleDataGridRendered = () => {
    setLoading(false);
  };
  return {
    value, setValaue, loading, setLoading, handleTabChange,handleDataGridRendered
  }
}

export default useTabsPanel;
