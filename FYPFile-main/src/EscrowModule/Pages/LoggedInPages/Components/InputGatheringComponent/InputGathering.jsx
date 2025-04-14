/* eslint-disable react/prop-types */
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  List,
  ListItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import AttachmentIcon from "@mui/icons-material/Attachment";
import DeleteIcon from "@mui/icons-material/Delete";
import { Colors } from "../../../../Theme/Theme";
import useInputGathering from "./hooks/useInputGathering";


function InputGathering({ item, forContract, addingTerms }) {
  const {
    terms,
    addTerm,
    setInputValue,
    inputValue,
    containerRef,
    deleteTerm,
    handleEnterKeyPress,
    attachments,
    isDialogOpen,
    setDialogOpen,
    handleFileSelect,
    removeAttachment,
    heading,
    description,
    label,
    isContract,
    handleSave,
  } = useInputGathering({ item, forContract, addingTerms });
  return (
    <>
      <Box
        sx={{
          p: "2rem",
          borderRadius: "8px",
          height: "fit-content",
          bgcolor: "white",
          border: `1px solid ${Colors.borderColor}`,
          flexBasis: "70%",
        }}
      >
        <Typography variant="h5">{heading}</Typography>
        <Typography
          variant="body1"
          sx={{ color: Colors.secondaryColor, margin: "0.8rem 0 2rem 0" }}
        >
          {description}
        </Typography>

        <Box
          sx={{
            height: "350px",
            overflow: "scroll",
            scrollbarWidth: "none",
            border: `1px solid ${Colors.borderColor}`,
            borderRadius: "8px",
            margin: "0 0 2rem 0",
            p: "1rem 2rem",
            display: "flex",
            gap: 2,
          }}
          ref={containerRef}
        >
          {terms.length > 0 || attachments.length > 0 ? (
            <>
              {terms.length > 0 ? (
                <Box sx={{ flexBasis: isContract ? "100%" : "60%" }}>
                  <Typography>Details</Typography>

                  <List sx={{ listStyleType: "decimal", paddingLeft: "1rem" }}>
                    {terms.map((term, index) => (
                      <ListItem
                        key={index}
                        sx={{
                          display: "list-item",
                          p: "0 0 0 0.2rem !important",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            color: Colors.secondaryColor,
                            justifyContent: "space-between",
                            alignItems: "center",
                            fontSize: "16px",
                          }}
                        >
                          {term}
                          <IconButton
                            edge="end"
                            aria-label="delete"
                            onClick={() => deleteTerm(index)}
                          >
                            <DeleteIcon sx={{ color: Colors.dangerColor }} />
                          </IconButton>
                        </Box>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              ) : (
                <Typography
                  sx={{
                    textAlign: "center",
                    color: Colors.secondaryColor,
                    padding: "1rem 0",
                    flexBasis: "60%",
                  }}
                >
                  There are currently no details Added.
                </Typography>
              )}

              {!isContract &&
                (attachments.length > 0 ? (
                  <Box sx={{ flexBasis: "40%" }}>
                    <Typography>Attachments</Typography>
                    {/* Attachments */}
                    {!isContract && attachments.length > 0 && (
                      <List
                        sx={{ listStyleType: "decimal", paddingLeft: "1rem" }}
                      >
                        {attachments.map((file, index) => (
                          <ListItem
                            key={index}
                            sx={{
                              display: "list-item",
                              p: "0 0 0 0.2rem !important",
                            }}
                          >
                            <ListItem
                              sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                p: "0 0 0 0.2rem !important",
                              }}
                            >
                              <Typography
                                sx={{
                                  fontSize: "14px",
                                  color: Colors.secondaryColor,
                                }}
                              >
                                {file.name}
                              </Typography>
                              <IconButton
                                edge="end"
                                aria-label="delete"
                                onClick={() => removeAttachment(index)}
                              >
                                <DeleteIcon
                                  sx={{ color: Colors.dangerColor }}
                                />
                              </IconButton>
                            </ListItem>
                          </ListItem>
                        ))}
                      </List>
                    )}
                  </Box>
                ) : (
                  <Typography
                    sx={{
                      textAlign: "center",
                      color: Colors.secondaryColor,
                      padding: "1rem 0",
                      flexBasis: "40%",
                    }}
                  >
                    There are currently no Attachments Added.
                  </Typography>
                ))}
            </>
          ) : (
            <Typography
              sx={{
                textAlign: "center",
                color: Colors.secondaryColor,
                padding: "1rem 0",
                flexBasis: "100%",
              }}
            >
              There are currently no {isContract ? "Conditions" : "Details"}{" "}
              Added.
            </Typography>
          )}
        </Box>

        <Box>
          <TextField
            variant="outlined"
            label={label}
            fullWidth
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleEnterKeyPress}
            InputProps={{
              startAdornment: !isContract && (
                <InputAdornment position="start">
                  <IconButton onClick={() => setDialogOpen(true)}>
                    <AttachmentIcon sx={{ color: Colors.primaryColor }} />
                  </IconButton>
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <Typography
                    component="span"
                    sx={{
                      color: "white",
                      cursor: "pointer",
                      bgcolor: "gray",
                      px: "1rem",
                      py: "0.3rem",
                      "&:hover": { bgcolor: "black" },
                      borderRadius: "4px",
                      fontSize: "0.875rem",
                      m: "0 0.5rem 0 0",
                    }}
                    onClick={addTerm}
                  >
                    Add {isContract ? "Term" : "Detail"}
                  </Typography>

                  <Typography
                    component="span"
                    sx={{
                      color: "white",
                      cursor: "pointer",
                      bgcolor: "#007bff",
                      px: "1rem",
                      py: "0.3rem",
                      "&:hover": { bgcolor: "#0056b3" },
                      borderRadius: "4px",
                      fontSize: "0.875rem",
                    }}
                    onClick={handleSave}
                  >
                    Save
                  </Typography>
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Box>

      <Dialog open={isDialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>Select Attachments</DialogTitle>
        <DialogContent>
          <input
            type="file"
            multiple
            accept="image/*,video/*"
            onChange={handleFileSelect}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default InputGathering;
