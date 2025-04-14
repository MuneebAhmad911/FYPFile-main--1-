import { useContext, useState } from "react";
import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import { useLocation, useNavigate } from "react-router-dom";
import { Colors, Fonts } from "../../../../../../../Theme/Theme";
import StepperComponent from "../../../../StepperComponent/StepperComponent";
import { UserContext } from "../../../../../../../providers/Hooks/useEscrowContext";
import ProceedToPayment from "../../../../ProceedToPaymentComponent/ProceedToPayment";
import updateTransaction from "../../../../../../../services/updateEscrowTransaction";
import EditIcon from "@mui/icons-material/Edit"; // Update icon
import UpdateModal from "../../../../../../../Components/DIalogueBox";

function EscrowMainDetails() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();
  const { item } = location.state;
  console.log("item in maindetail: ", item);
  const handleAddContractTerms = () => {
    navigate("/Contract", { state: { item, addingTerms: true } });
  };
  const handleFileDispute = () => {
    navigate("/FileDispute", { state: { item, addingTerms: true } });
  };
  const [open, setOpen] = useState(false);

  const handleUpdate = () => {
    setOpen(true);
  };

  const handleDelivery = () => {};
  const handleSatisfied = () => {};
  const handleAcceptTransaction = async () => {
    try {
      const updatedTransaction = { ...item, agreed: true, step: item.step + 1 };
      console.log("updated teansation is : ", updatedTransaction);
      console.log("updated teansation is : ", updatedTransaction._id);
      const id = updatedTransaction._id;
      await updateTransaction({ id, updatedTransaction });
      console.log("Transaction accepted successfully!");
    } catch (error) {
      console.error("Error accepting transaction:", error);
    }
  };

  const handleRejectTransaction = () => {};
  return (
    <>
      <Box
        sx={{
          borderRadius: "8px",
          border: `1px solid ${Colors.borderColor}`,
          p: "2rem",
          marginRight: "1rem",
          flexBasis: "80%",
          bgcolor: "white",
        }}
      >
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 550,
                fontFamily: "Roboto, serif",
                fontStyle: "normal",
                fontVariationSettings: "wdth 100",
                fontSize: "30px",
                color: Colors.secondary,
              }}
            >
              {item.title}
            </Typography>
            <Tooltip title="Update">
              <IconButton
                onClick={() => handleUpdate(item)}
                sx={{ color: "#1976d2" }}
              >
                <EditIcon />
              </IconButton>
            </Tooltip>
            <UpdateModal
              open={open}
              onClose={() => setOpen(false)}
              data={item}
            />
          </Box>
          <Typography variant="body1" sx={{ m: "0.6rem 0 1rem 0" }}>
            Transaction #{item.id}
          </Typography>
          <Typography variant="body1" sx={{ m: "0 0 1rem 0" }}>
            <span style={{ color: "blue" }}>User {item.sellerID}</span> is
            buying/selling general merchandise from{" "}
            <span style={{ color: "blue" }}>User {item.buyerID}</span>. The
            inspection period for this transaction is 1 calendar day.
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 450,
                fontFamily: "Roboto, serif",
                fontStyle: "normal",
                fontVariationSettings: "wdth 100",
                bgcolor: "#fff1a8",
                color: "#677702",
                p: "0.3rem 0.7rem 0.3rem 0.5rem",
                borderRadius: "12px",
                mb: "1rem",
                width: "fit-content",
              }}
            >
              <CircleIcon sx={{ fontSize: "10px", marginRight: "0.4rem" }} />
              {item.status.primary}
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 450,
                fontFamily: "Roboto, serif",
                fontStyle: "normal",
                fontVariationSettings: "wdth 100",
                bgcolor: "#ebebeb",
                color: " #4f4f4f",
                p: "0.3rem 0.7rem 0.3rem 0.5rem",
                borderRadius: "12px",
                mb: "1rem",
                width: "fit-content",
              }}
            >
              <CircleIcon sx={{ fontSize: "10px", marginRight: "0.4rem" }} />
              {item.status.secondary}
            </Typography>
          </Box>
        </Box>
        <Box>
          <StepperComponent item={item} />
        </Box>
        {/* {item.step == 0 &&
          item.creatorId == user._id.toString() &&
          item.agreed == false && (
            <Typography
              sx={{
                borderTop: `1px solid ${Colors.borderColor}`,
                mt: "1.2rem",
                p: "1.5rem 0 0",
                textAlign: "center",
                fontSize: "15px",
                color: Colors.EscrowDetailsColor,
                "&:hover": {
                  color: "black",
                },
              }}
            >
              The Transaction is not yet accepted buy the{" "}
              {item.secondPersonEmail}. Please ask {item.secondPersonEmail} to
              accept it.
              <br /> You can move forward only when they accept the terms.
            </Typography>
          )} */}
        {item.step == 0 &&
          item.creatorId == user._id.toString() &&
          item.agreed == false && (
            <Box
              sx={{
                border: "0.5px solid rgb(34, 92, 171)",
                p: "1rem 1rem",
                mt: "1.5rem",
                borderRadius: "10px",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  p: "0.5rem 0",
                  color: Colors.EscrowDetailsColor,
                  fontSize: "20px",
                  fontWeight: 550,
                  fontFamily: "Roboto, serif",
                  fontStyle: "normal",
                }}
              >
                Agree to the Transaction
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: Colors.fontColor,
                  fontSize: "14px",
                  fontWeight: 450,
                  fontFamily: "Roboto, serif",
                  fontStyle: "normal",
                }}
              >
                The transaction for this has been started. Pleae accept it so
                that the transaction can move forward.
              </Typography>
              <Box sx={{ display: "flex", gap: 2, justifyContent: "flex-end" }}>
                <Typography
                  variant="h6"
                  sx={{
                    p: "0.5rem 1rem",
                    bgcolor: Colors.EscrowDetailsColor,
                    textDecoration: "none",
                    cursor: "pointer",
                    "&:hover": {
                      bgcolor: Colors.secondNavColor,
                    },
                    color: "white",
                    mt: "0.5rem",
                    fontSize: "14px",
                    fontWeight: 550,
                    fontFamily: "Roboto, serif",
                    fontStyle: "normal",
                    width: "fit-content",
                    justifySelf: "right",
                    borderRadius: "9px",
                  }}
                  onClick={handleAcceptTransaction}
                >
                  Accept
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    p: "0.5rem 1rem",
                    bgcolor: Colors.EscrowDetailsColor,
                    textDecoration: "none",
                    cursor: "pointer",
                    "&:hover": {
                      bgcolor: Colors.secondNavColor,
                    },
                    color: "white",
                    mt: "0.5rem",
                    fontSize: "14px",
                    fontWeight: 550,
                    fontFamily: "Roboto, serif",
                    fontStyle: "normal",
                    width: "fit-content",
                    justifySelf: "right",
                    borderRadius: "9px",
                  }}
                  onClick={handleRejectTransaction}
                >
                  Reject
                </Typography>
              </Box>
            </Box>
          )}
        {item.step == 1 && item.role == "Buyer" && item.agreed == true && (
          <Box>
            <ProceedToPayment item={item} />
          </Box>
        )}
        {item.step == 2 && item.role == "Seller" && (
          <Box
            sx={{
              border: "0.5px solid rgb(34, 92, 171)",
              p: "1rem 1rem",
              mt: "1.5rem",
              borderRadius: "10px",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                p: "0.5rem 0",
                color: Colors.EscrowDetailsColor,
                fontSize: "20px",
                fontWeight: 550,
                fontFamily: "Roboto, serif",
                fontStyle: "normal",
              }}
            >
              Please Deliver the Product to the Buyer
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: Colors.fontColor,
                fontSize: "14px",
                fontWeight: 450,
                fontFamily: "Roboto, serif",
                fontStyle: "normal",
              }}
            >
              Please go to your near courier servive and deliver the product to
              the buyer. if it is a service then please complete it.
            </Typography>
            <Typography
              variant="h6"
              sx={{
                p: "0.5rem",
                bgcolor: Colors.EscrowDetailsColor,
                textDecoration: "none",
                cursor: "pointer",
                "&:hover": {
                  bgcolor: Colors.secondNavColor,
                },
                color: "white",
                mt: "0.5rem",
                fontSize: "14px",
                fontWeight: 550,
                fontFamily: "Roboto, serif",
                fontStyle: "normal",
                width: "fit-content",
                justifySelf: "right",
                borderRadius: "9px",
              }}
              onClick={handleDelivery}
            >
              Delivered
            </Typography>
          </Box>
        )}
        {item.step == 2 && item.role == "Buyer" && (
          <Typography
            sx={{
              borderTop: `1px solid ${Colors.borderColor}`,
              mt: "1.2rem",
              p: "1.5rem 0 0",
              textAlign: "center",
              fontSize: "15px",
              color: Colors.EscrowDetailsColor,
              "&:hover": {
                color: "black",
              },
            }}
          >
            The Seller has been asked to deliver the product to you. You will
            receive the product very soon. <br /> Your Patience is highly
            appreciated.
          </Typography>
        )}
        {(item.step == 3 && !item.dispute && item.role) ||
          (item.MyRole == "Buyer" && (
            <Box
              sx={{
                border: "0.5px solid rgb(34, 92, 171)",
                p: "1rem 1rem",
                mt: "1.5rem",
                borderRadius: "10px",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  p: "0.5rem 0",
                  color: Colors.EscrowDetailsColor,
                  fontSize: "20px",
                  fontWeight: 550,
                  fontFamily: "Roboto, serif",
                  fontStyle: "normal",
                }}
              >
                Issue with the Product?
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: Colors.fontColor,
                  fontSize: "14px",
                  fontWeight: 450,
                  fontFamily: "Roboto, serif",
                  fontStyle: "normal",
                }}
              >
                If you have any issue with the product or service you can file
                for dispute. our team will help you resolve it.
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  p: "0.5rem",
                  bgcolor: Colors.EscrowDetailsColor,
                  textDecoration: "none",
                  cursor: "pointer",
                  "&:hover": {
                    bgcolor: Colors.secondNavColor,
                  },
                  color: "white",
                  mt: "0.5rem",
                  fontSize: "14px",
                  fontWeight: 550,
                  fontFamily: "Roboto, serif",
                  fontStyle: "normal",
                  width: "fit-content",
                  justifySelf: "right",
                  borderRadius: "9px",
                }}
                onClick={handleFileDispute}
              >
                File Dispute?
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  p: "0.5rem",
                  bgcolor: Colors.EscrowDetailsColor,
                  textDecoration: "none",
                  cursor: "pointer",
                  "&:hover": {
                    bgcolor: Colors.secondNavColor,
                  },
                  color: "white",
                  mt: "0.5rem",
                  fontSize: "14px",
                  fontWeight: 550,
                  fontFamily: "Roboto, serif",
                  fontStyle: "normal",
                  width: "fit-content",
                  justifySelf: "right",
                  borderRadius: "9px",
                }}
                onClick={handleSatisfied}
              >
                Satisfied
              </Typography>
            </Box>
          ))}
        {item.step == 4 && item.role == "Buyer" && item.timeBounded == true && (
          <Box
            sx={{
              border: "0.5px solid rgb(34, 92, 171)",
              p: "1rem 1rem",
              mt: "1.5rem",
              borderRadius: "10px",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                p: "0.5rem 0",
                color: Colors.EscrowDetailsColor,
                fontSize: "20px",
                fontWeight: 550,
                fontFamily: "Roboto, serif",
                fontStyle: "normal",
              }}
            >
              Approve for the next cycle
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: Colors.fontColor,
                fontSize: "14px",
                fontWeight: 450,
                fontFamily: "Roboto, serif",
                fontStyle: "normal",
              }}
            >
              The last cycle has been completed. Please allow for the next cycle
              if there is no issue, so that the transaction can move forward. If
              there is issue, you can file for a Dispute.
            </Typography>
            <Box sx={{ display: "flex", gap: 2, justifyContent: "flex-end" }}>
              <Typography
                variant="h6"
                sx={{
                  p: "0.5rem 1rem",
                  bgcolor: Colors.EscrowDetailsColor,
                  textDecoration: "none",
                  cursor: "pointer",
                  "&:hover": {
                    bgcolor: Colors.secondNavColor,
                  },
                  color: "white",
                  mt: "0.5rem",
                  fontSize: "14px",
                  fontWeight: 550,
                  fontFamily: "Roboto, serif",
                  fontStyle: "normal",
                  width: "fit-content",
                  justifySelf: "right",
                  borderRadius: "9px",
                }}
                onClick={handleAcceptTransaction}
              >
                Allow
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  p: "0.5rem 1rem",
                  bgcolor: Colors.EscrowDetailsColor,
                  textDecoration: "none",
                  cursor: "pointer",
                  "&:hover": {
                    bgcolor: Colors.secondNavColor,
                  },
                  color: "white",
                  mt: "0.5rem",
                  fontSize: "14px",
                  fontWeight: 550,
                  fontFamily: "Roboto, serif",
                  fontStyle: "normal",
                  width: "fit-content",
                  justifySelf: "right",
                  borderRadius: "9px",
                }}
                onClick={handleRejectTransaction}
              >
                Dispute
              </Typography>
            </Box>
          </Box>
        )}
        {item.step == 4 &&
          item.role == "Seller" &&
          item.timeBounded == true && (
            <Typography
              sx={{
                borderTop: `1px solid ${Colors.borderColor}`,
                mt: "1.2rem",
                p: "1.5rem 0 0",
                textAlign: "center",
                fontSize: "15px",
                color: Colors.EscrowDetailsColor,
                "&:hover": {
                  color: "black",
                },
              }}
            >
              The Next Cycle is not yet Approved buy the Buyer. Please ask the
              Buyer to Approve it. <br /> You can move forward only when the
              Buyer Approves it.
            </Typography>
          )}
      </Box>
      <Box
        sx={{
          p: "2rem",
          borderRadius: "8px",
          m: "2rem 0",
          border: `1px solid ${Colors.borderColor}`,
          marginRight: "1rem",
          bgcolor: "white",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontSize: "22px",
            fontFamily: Fonts.primaryFont,
            fontWeight: 600,
            color: Colors.EscrowDetailsColor,
          }}
        >
          Contract Details
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: "14px",
            fontFamily: Fonts.primaryFont,
            fontWeight: 600,
            mb: "1rem",
            // color: Colors.backColor,
          }}
        >
          Contract Details that were agreed on by both the buyer and seller
        </Typography>

        {item.contract.map((contract, index) => (
          <Typography
            key={index}
            sx={{
              fontSize: "14px",
              color: Colors.backColor,
              lineHeight: 2,
              fontWeight: 600,
            }}
          >
            {index + 1}.{contract}
          </Typography>
        ))}
        <Box
          sx={{
            borderTop: `1px solid ${Colors.borderColor}`,
            pt: "0.5rem",
            mt: "0.5rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              pt: "0.5rem",
              color: Colors.EscrowDetailsColor,
              textDecoration: "none",
              cursor: "pointer",
              "&:hover": {
                textDecoration: "underline",
                color: "black",
              },
              fontSize: "14px",
              fontWeight: 450,
              fontFamily: "Roboto, serif",
              fontStyle: "normal",
              fontVariationSettings: "wdth 100",
            }}
            onClick={handleAddContractTerms}
          >
            Click here to Add More Contract Terms.
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          p: "2rem",
          borderRadius: "8px",
          m: "2rem 0",
          border: `1px solid ${Colors.borderColor}`,
          marginRight: "1rem",
          bgcolor: "white",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontSize: "18px",
            fontFamily: Fonts.primaryFont,
            fontWeight: 600,
            mb: "1rem",
            color: Colors.EscrowDetailsColor,
          }}
        >
          Item Details{" "}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            // p: "0.5rem 0 1.5rem 0",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: Colors.fontColor,
              fontSize: "15px",
              fontFamily: Fonts.primaryFont,
            }}
          >
            Iphone
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: Colors.fontColor,
              fontSize: "15px",
              fontFamily: Fonts.primaryFont,
            }}
          >
            $100
          </Typography>
        </Box>
        <Typography
          variant="body1"
          sx={{
            color: Colors.fontColor,
            fontSize: "15px",
            fontFamily: Fonts.primaryFont,
            m: "0 0 1rem",
          }}
        >
          {item.title}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            p: "0 0 0.5rem 0",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: Colors.fontColor,
              fontSize: "15px",
              fontFamily: Fonts.primaryFont,
            }}
          >
            Subtotal:
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: Colors.fontColor,
              fontSize: "15px",
              fontFamily: Fonts.primaryFont,
            }}
          >
            $100
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            // mt: "1rem",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: Colors.fontColor,
              fontSize: "15px",
              fontFamily: Fonts.primaryFont,
              mb: "0.5rem",
            }}
          >
            Fee:
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: Colors.fontColor,
              fontSize: "15px",
              fontFamily: Fonts.primaryFont,
            }}
          >
            $0
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="body1"
            sx={{
              color: Colors.fontColor,
              fontSize: "15px",
              fontFamily: Fonts.primaryFont,
              fontWeight: "600",
            }}
          >
            Total:
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: Colors.fontColor,
              fontSize: "15px",
              fontFamily: Fonts.primaryFont,
              fontWeight: "600",
            }}
          >
            $100
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          p: "1rem 2rem",
          borderRadius: "8px",
          m: "2rem 0",
          border: `1px solid ${Colors.borderColor}`,
          marginRight: "1rem",
          bgcolor: "white",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontSize: "18px",
            fontFamily: Fonts.primaryFont,
            fontWeight: 600,
            mb: "1rem",
            color: Colors.EscrowDetailsColor,
          }}
        >
          Payment processing fees
        </Typography>
        <Typography variant="body1">
          Depending on the payment method you will use, there may be additional
          processing fees as outlined below. International wire transfer{" "}
        </Typography>
      </Box>
    </>
  );
}

export default EscrowMainDetails;
