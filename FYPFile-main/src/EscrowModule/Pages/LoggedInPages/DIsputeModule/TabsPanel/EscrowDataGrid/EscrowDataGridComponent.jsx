/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import {
  Box,
  Typography,
  CircularProgress,
  useMediaQuery,
} from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

import useEscrowDataGrid from "./Hooks/useEscrowDataGrid";
import { Colors } from "../../../../../Theme/Theme";

function EscrowDataGridComponent({ tableName, status, onRendered }) {
  const isSmallScreen = useMediaQuery("(min-width:820px)");
  const { loading, columns, rows, handleBoxClick,user } =
    useEscrowDataGrid({
      onRendered,
    });
  return (
    <>
      <Box sx={{ bgcolor: "white" }}>
        <Typography
          variant="subtitle2"
          sx={{
            p: "1.2rem 1rem",
            color: "#666",
            border: "1px solid rgb(216, 214, 214)",
            borderRadius: "4px",
          }}
        >
          Showing <strong>{status}</strong> transactions.
        </Typography>
      </Box>
      {isSmallScreen && (
        <Box
          sx={{
            display: "flex",
            p: "0.8rem 0",
            bgcolor: "#f9f9f9",
            // borderBottom: "1px solid rgb(216, 214, 214)",
            justifyContent: "space-between",
          }}
        >
          {columns.map((item, index) => {
            return (
              <Typography
                variant="p"
                key={index}
                sx={{
                  // width: item.width,
                  textAlign: item.textAlign,
                  fontFamily: "Roboto, serif",
                  fontOpticalSizing: "auto",
                  fontWeight: 300,
                  fontStyle: "normal",
                  fontVariationSettings: "wdth 100",
                  color: "#666",
                  fontSize: "15px",
                  padding: "0 1rem",
                  marginRight: item.m,
                }}
              >
                {item.headerName}
              </Typography>
            );
          })}
        </Box>
      )}
      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "300px",
          }}
        >
          <CircularProgress />
        </Box>
      ) : isSmallScreen ? (
        <Box
          sx={{
            border: `1px solid ${Colors.borderColor}`,
            borderRadius: "6px",
            bgcolor: "white",
          }}
        >
          {rows.map((item, index) => (
            <Box
              sx={{
                display: "flex",
                p: "1.3rem 1rem",
                // textAlign: "left",
                alignItems: "center",
                cursor: "pointer",
                borderBottom: `1px solid ${Colors.borderColor}`,
                justifyContent: "space-between",
              }}
              onClick={() =>
                handleBoxClick(item)
              }
              key={index}
            >
              <Typography
                sx={{
                  width: "fit-content",
                  fontSize: "14px",
                  fontWeight: 450,
                  fontFamily: "Roboto, serif",
                  fontStyle: "normal",
                  fontVariationSettings: "wdth 100",
                  // pr: "1rem",
                }}
              >
                {item.id}
              </Typography>
              <Box sx={{ display: "block", marginLeft: "-2rem" }}>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 450,
                    fontFamily: "Roboto, serif",
                    fontStyle: "normal",
                    fontVariationSettings: "wdth 100",
                  }}
                >
                  {" "}
                  {item.title}{" "}
                </Typography>
                <Typography sx={{ fontSize: "13px", color: Colors.backColor }}>
                  {" "}
                  {item.subtitle}{" "}
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 450,
                  fontFamily: "Roboto, serif",
                  fontStyle: "normal",
                  fontVariationSettings: "wdth 100",
                  marginLeft: "-2.8rem",
                }}
              >
                {item.amount}
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 450,
                  fontFamily: "Roboto, serif",
                  fontStyle: "normal",
                  fontVariationSettings: "wdth 100",
                  marginLeft: "0.5rem",
                }}
              >
                {item.created}
              </Typography>

              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 450,
                  fontFamily: "Roboto, serif",
                  fontStyle: "normal",
                  fontVariationSettings: "wdth 100",
                }}
              >
                {item.role}
              </Typography>
              <Box sx={{ display: "block", justifyItems: "right" }}>
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
                    mb: "0.2rem",
                    width: "fit-content",
                  }}
                >
                  <CircleIcon
                    sx={{ fontSize: "10px", marginRight: "0.4rem" }}
                  />
                  {item.status.primary}{" "}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 450,
                    fontFamily: "Roboto, serif",
                    fontStyle: "normal",
                    fontVariationSettings: "wdth 100",
                    borderRadius: "12px",
                    bgcolor: "#ebebeb",
                    color: " #4f4f4f",
                    p: "0.3rem 0.7rem 0.3rem 0.5rem",
                  }}
                >
                  <CircleIcon
                    sx={{ fontSize: "10px", marginRight: "0.4rem" }}
                  />
                  {item.status.secondary}{" "}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      ) : (
        //box for mobiles
        <Box>
          {" "}
          {rows.map((item, index) => (
            <Box
              key={index}
              display={"block"}
              sx={{
                bgcolor: "white",
                boxShadow: 1,
                borderRadius: "4px",
                m: "1rem 1.5rem",
                p: "2rem",
              }}
              onClick={() =>
                item.agreed ? handleBoxClick(item) : handleAgreement(item)
              }
            >
              {/* main content */}
              <Box
                display={"flex"}
                sx={{ justifyContent: "space-between", width: "100%" }}
              >
                {/* First Box(Id title category) */}

                <Box>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 450,
                      fontFamily: "Roboto, serif",
                      fontStyle: "normal",
                      fontVariationSettings: "wdth 100",
                      color: Colors.secondaryColor,
                    }}
                  >
                    {" "}
                    {item.id}{" "}
                  </Typography>
                  <Box sx={{ display: "block", width: 200 }}>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: 450,
                        fontFamily: "Roboto, serif",
                        fontStyle: "normal",
                        fontVariationSettings: "wdth 100",
                      }}
                    >
                      {" "}
                      {item.title}{" "}
                    </Typography>
                    <Typography
                      sx={{ fontSize: "13px", color: Colors.backColor }}
                    >
                      {" "}
                      {item.subtitle}{" "}
                    </Typography>
                  </Box>
                </Box>
                {/*  */}
                {/*  */}
                {/* Second Box(Role Amount Created at) */}
                <Box sx={{ textAlign: "right" }}>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 450,
                      fontFamily: "Roboto, serif",
                      fontStyle: "normal",
                      color: Colors.secondaryColor,
                    }}
                  >
                    {" "}
                    {item.role}{" "}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 550,
                      fontFamily: "Roboto, serif",
                      fontStyle: "normal",
                      // fontVariationSettings: "wdth 100",
                    }}
                  >
                    {" "}
                    {item.amount}{" "}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 450,
                      fontFamily: "Roboto, serif",
                      fontStyle: "normal",
                      // fontVariationSettings: "wdth 100",
                    }}
                  >
                    {" "}
                    {item.created}{" "}
                  </Typography>
                </Box>
              </Box>
              {/* Status */}
              <Box sx={{ display: "flex", mt: "1rem" }}>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 450,
                    fontFamily: "Roboto, serif",
                    fontStyle: "normal",
                    fontVariationSettings: "wdth 100",
                    bgcolor: "#fff1a8",
                    color: "#677702",
                    p: "0.3rem 1.5rem 0.3rem 1.3rem",
                    borderRadius: "12px",
                    m: "0 0.7rem 0.2rem 0",
                    width: "fit-content",
                  }}
                >
                  <CircleIcon
                    sx={{ fontSize: "10px", marginRight: "0.4rem" }}
                  />
                  {item.status.primary}{" "}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 450,
                    fontFamily: "Roboto, serif",
                    fontStyle: "normal",
                    fontVariationSettings: "wdth 100",
                    borderRadius: "12px",
                    bgcolor: "#ebebeb",
                    color: " #4f4f4f",
                    p: "0.3rem 1rem 0.3rem 0.7rem",
                  }}
                >
                  <CircleIcon
                    sx={{ fontSize: "10px", marginRight: "0.4rem" }}
                  />
                  {item.status.secondary}{" "}
                </Typography>
              </Box>{" "}
            </Box>
          ))}{" "}
        </Box>
      )}
      {/* </Box> */}
    </>
  );
}

export default EscrowDataGridComponent;

// rgb(37, 33, 59)
