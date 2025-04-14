import React from "react";
import {
  FormControl,
  Select,
  MenuItem,
  Box,
  Typography,
  useMediaQuery,
  Dialog,
  DialogContent,
  Button,
} from "@mui/material";

const SortDropdown = ({ sortOption, setSortOption, children }) => {
  const isMobile = useMediaQuery("(max-width:670px)");
  const at800 = useMediaQuery("(max-width:820px)");
  const [open, setOpen] = React.useState(false);

  return (
    <>
      {at800 ? (
        <>
          <Box
            sx={{
              mb: 2,
              borderRadius: "8px",
              boxShadow: "0 0 2px rgba(0, 0, 0, 0.3)",
              bgcolor: "white",
              p: "0.5rem 1rem",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              variant="contained"
              onClick={() => setOpen(true)}
              sx={{
                backgroundColor: "white",
                borderRadius: 1,
                minWidth: 200, // Match FormControl width
                padding: "6px 16px", // Approximate small Select padding
                boxShadow: "none", // Remove default button shadow
                color: "black", // Match text color to Select
                border: "1px solid rgba(0, 0, 0, 0.23)", // Mimic Select border
                "&:hover": {
                  backgroundColor: "#f5f5f5", // Light hover effect like Select
                },
                width: isMobile ? "100%" : "fit-content",
              }}
            >
              Show Filters
            </Button>
          </Box>
          <Dialog
            open={open}
            onClose={() => setOpen(false)}
            fullWidth
            // maxWidth={isMobile ? "xs" : "sm"} // Smaller dialog on mobile
            fullScreen={at800} // Fullscreen mode for mobile
            sx={{
              bgcolor: "transparent",
            }}
          >
            <DialogContent sx={{ p: isMobile ? 2 : 3 }}>
              <Box
                sx={{
                  mb: 2,
                  borderRadius: "8px",
                  boxShadow: "0 0 2px rgba(0, 0, 0, 0.3)",
                  bgcolor: "white",
                  p: "0.5rem 1rem",
                }}
              >
                <Box
                  display="flex"
                  flexDirection="column" // Stack items vertically
                  alignItems="flex-start" // Align to the start (left)
                  gap={2} // Add some space between elements
                >
                  <Box
                    display="flex"
                    flexDirection="column" // Stack items inside Sort By section
                    alignItems="flex-start"
                    gap={isMobile ? 1 : 2}
                    width="100%"
                  >
                    <Typography variant="body1" fontWeight={600}>
                      Sort By:
                    </Typography>
                    <FormControl sx={{ minWidth: isMobile ? "100%" : 200 }}>
                      <Select
                        value={sortOption}
                        onChange={(e) => setSortOption(e.target.value)}
                        size="small"
                        sx={{
                          backgroundColor: "white",
                          borderRadius: 1,
                          width: "100%",
                        }}
                      >
                        <MenuItem value="featured">Featured</MenuItem>
                        <MenuItem value="best-selling">Best Selling</MenuItem>
                        <MenuItem value="alphabetically-a-z">
                          Alphabetically, A-Z
                        </MenuItem>
                        <MenuItem value="alphabetically-z-a">
                          Alphabetically, Z-A
                        </MenuItem>
                        <MenuItem value="price-low-high">
                          Price, Low to High
                        </MenuItem>
                        <MenuItem value="price-high-low">
                          Price, High to Low
                        </MenuItem>
                      </Select>
                    </FormControl>
                    {children}
                  </Box>
                  {/* {!at800 && <Box>alignment here</Box>} */}
                  {/* Hide alignment box on small screens */}
                </Box>
              </Box>

              <Button
                fullWidth
                variant="contained"
                onClick={() => setOpen(false)}
                sx={{ mt: 2 }}
              >
                Close
              </Button>
            </DialogContent>
          </Dialog>
        </>
      ) : (
        <Box
          sx={{
            mb: 2,
            borderRadius: "8px",
            boxShadow: "0 0 2px rgba(0, 0, 0, 0.3)",
            bgcolor: "white",
            p: "0.5rem 1rem",
          }}
        >
          <Box
            display="flex"
            flexDirection={isMobile ? "column" : "row"} // Stack items on small screens
            alignItems={isMobile ? "flex-start" : "center"}
            justifyContent={isMobile ? "center" : "space-between"}
            gap={2}
          >
            <Box
              display="flex"
              flexDirection={isMobile ? "column" : "row"} // Stack items inside Sort By section
              alignItems={isMobile ? "flex-start" : "center"}
              gap={isMobile ? 1 : 2}
              width="100%"
            >
              <Typography variant="body1" fontWeight={600}>
                Sort By:
              </Typography>
              <FormControl sx={{ minWidth: isMobile ? "100%" : 200 }}>
                <Select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  size="small"
                  sx={{
                    backgroundColor: "white",
                    borderRadius: 1,
                    width: "100%",
                  }}
                >
                  <MenuItem value="featured">Featured</MenuItem>
                  <MenuItem value="best-selling">Best Selling</MenuItem>
                  <MenuItem value="alphabetically-a-z">
                    Alphabetically, A-Z
                  </MenuItem>
                  <MenuItem value="alphabetically-z-a">
                    Alphabetically, Z-A
                  </MenuItem>
                  <MenuItem value="price-low-high">Price, Low to High</MenuItem>
                  <MenuItem value="price-high-low">Price, High to Low</MenuItem>
                </Select>
              </FormControl>
              {children}
            </Box>
            {/* {!isMobile && <Box>alignment here</Box>}{" "} */}
            {/* Hide alignment box on small screens */}
          </Box>
        </Box>
      )}
    </>
  );
};

export default SortDropdown;
