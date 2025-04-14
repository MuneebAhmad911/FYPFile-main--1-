import { useState, useEffect } from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Box from "@mui/material/Box";
import { Colors } from "../../../../Theme/Theme";

function StepperComponent({ item }) {
  const [steps, setSteps] = useState([]);
  const [step, setStep] = useState();
  console.log("Item in stepper:", item); // Debugging
  console.log("Current steps:", item.step);

  useEffect(() => {
    if (item.dispute) {
      setStep(4)
      setSteps(["Agreement", "Payment", "Delivery", "Inspection", "Dispute", "Closed"]);
    } 
    else if (item.timeBounded && !item.dispute) {
      setStep(4)
      setSteps(["Agreement", "Payment", "Give Service", "Inspection", "Approve for Next Cycle", "Closed"]);
    } 
    else if (!item.timeBounded && !item.dispute) {
      setStep(item.step)
      setSteps(["Agreement", "Payment", "Delivery", "Inspection", "Closed"]);
    }



  },[]); // Only depend on `item`

  return (
    <Box sx={{ p: "0 2rem" }}>
      <Stepper activeStep={step} alternativeLabel>
          {steps.map((label, index) => (
            <Step
              key={label}
              sx={{
                "& .MuiStepIcon-root": {
                  fontSize: "50px",
                  borderRadius: "30px",
                  border: `1px solid ${Colors.borderColor}`,
                  p: "0.3rem",
                },
                "& .MuiStepConnector-line": {
                  color: Colors.borderColor,
                  m: "0.8rem 0.35rem 0",
                },
              }}
            >
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
    </Box>
  );
}

export default StepperComponent;
