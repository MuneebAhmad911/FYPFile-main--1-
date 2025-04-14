import React from "react";
import { Box, Chip, Typography } from "@mui/material";

const TagsFilter = ({ tags, selectedTags, setSelectedTags }) => {
  const handleTagClick = (tag) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tag) ? prevTags.filter((t) => t !== tag) : [...prevTags, tag]
    );
  };

  return (
    <Box sx={{ mb: 3 }}>
      {/* Heading for the tags filter */}
      <Typography variant="h6" fontWeight={600} sx={{ mb: 1 }}>
        Filter by Tags
      </Typography>

      {/* Tags list */}
      <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
        {tags.map((tag) => (
          <Chip
            key={tag}
            label={tag}
            onClick={() => handleTagClick(tag)}
            onDelete={selectedTags.includes(tag) ? () => handleTagClick(tag) : undefined}
            color={selectedTags.includes(tag) ? "primary" : "default"}
            variant={selectedTags.includes(tag) ? "filled" : "outlined"}
            sx={{
              cursor: "pointer",
              fontSize: "14px",
              padding: "6px",
              borderRadius: "16px",
              "&:hover": { backgroundColor: selectedTags.includes(tag) ? "#1565c0" : "#f0f0f0" },
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default TagsFilter;
