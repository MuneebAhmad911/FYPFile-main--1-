import {
  Box,
  FormControl,
  InputLabel,
  Select,
  Grid2 as Grid,
  Typography,
  TextField,
  Button,
  Divider,
  MenuItem,
} from "@mui/material";
import { Controller } from "react-hook-form";
import { Colors, Fonts } from "../../../../Theme/Theme.jsx";
import useStartEscrow from "./Hooks/useStartEscrow.ts";
import LoggedInNavbarLayout from "../../LoggedInNavBar/LoggedInNavbarLayout/LoggedNavLayout.jsx";

export const SelectComponent = ({ name, control, label, options = [] }) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => (
          <FormControl
            fullWidth
            error={!!fieldState.error}
            sx={{ mt: "0.3rem" }}
          >
            <InputLabel>{label}</InputLabel>
            <Select {...field} label={label}>
              {options.map((option, index) => (
                <MenuItem key={index} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
        rules={{ required: `${label} is required` }}
      />
    </>
  );
};

export function IntializeEscrow() {
  const {
    watch,
    errors,
    control,
    showBox,
    register,
    onSubmit,
    secondPerson,
    handleSubmit,
    selectRoleOption,
    selecCurrencyOption,
  } = useStartEscrow();

  const Price = watch("Price");
  const ItemCategory = watch("ItemCategory");
  const ItemDescription = watch("ItemDescription");
  const TransactionTitle = watch("TransactionTitle");
  const InspectionPeriod = watch("InspectionPeriod");

  return (
    <>
      <Box sx={{ bgcolor: Colors.tertiary, p: "0 0 3rem 0" }}>
        <LoggedInNavbarLayout />
        <Box
          sx={{
            margin: {
              xs: "3rem 3rem 0",
              md: "3rem 15rem 0",
            },
            boxShadow: "0 4px 8px hsla(185, 8%, 67%, .5)",
            borderRadius: "8px",
            backgroundColor: "#fff",
            p: { xs: "1rem 1rem", sm: "3rem 5rem", md: "4rem 5rem" },
          }}
        >
          <Typography
            variant="h5"
            sx={{
              color: Colors.fontColor,
              fontFamily: Fonts.primaryFont,
              mb: "0.5rem",
            }}
          >
            Start Transaction
          </Typography>
          <Divider />
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              variant="outlined"
              label="Transaction Title"
              fullWidth
              autoFocus
              {...register("TransactionTitle", {
                required: "Required",
              })}
              error={!!errors.TransactionTitle}
              helperText={errors.TransactionTitle?.message || " "}
              sx={{ mt: "1rem" }}
            />

            <Grid container spacing={4} sx={{}}>
              <Grid
                item
                size={{ xs: 12, sm: 4, md: 4 }}
                xs={4}
                sx={{
                  "@media (min-width:660px)": {
                    size: 12,
                  },
                }}
              >
                <SelectComponent
                  name="MyRole"
                  control={control}
                  label="My Role"
                  options={selectRoleOption}
                />
              </Grid>
              <Grid
                item
                size={{ xs: 12, sm: 4, md: 4 }}
                xs={4}
                sx={{
                  "@media (min-width:660px)": {
                    size: 12,
                  },
                }}
              >
                <SelectComponent
                  name="Currency"
                  control={control}
                  label="Currency"
                  options={selecCurrencyOption}
                />
              </Grid>
              <Grid
                item
                size={{ xs: 12, sm: 4, md: 4 }}
                xs={4}
                sx={{
                  "@media (min-width:660px)": {
                    size: 12,
                  },
                }}
              >
                <TextField
                  variant="outlined"
                  label="Inspection Period (Days)"
                  placeholder={"1"}
                  {...register("InspectionPeriod", {
                    required: "Required",
                    min: {
                      value: 1,
                      message: "Inspection Period must be greater than 0",
                    },
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "Inspection Period must be a valid integer",
                    },
                  })}
                  error={!!errors.InspectionPeriod}
                  helperText={errors.InspectionPeriod?.message || " "}
                  sx={{ mt: "0.3rem" }}
                  fullWidth
                />
              </Grid>
            </Grid>
            <Typography
              sx={{
                p: "0.5rem 0 0.5rem",
                fontWeight: "600",
                fontSize: "15px",
                m: "0.5rem 0 0.5rem 0 ",
                color: Colors.button,
              }}
            >
              Transaction Details
            </Typography>
            {/* {!showBox && ( */}
            <Box>
              <Grid container spacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item size={{ xs: 12, sm: 6 }}>
                  <TextField
                    variant="outlined"
                    label="Item Name"
                    fullWidth
                    {...register("ItemName", { required: "Required" })}
                    error={!!errors.ItemName}
                    helperText={errors.ItemName?.message || " "}
                    sx={{ mt: "0.3rem" }}
                  />
                </Grid>
                <Grid item size={{ xs: 12, sm: 6 }}>
                  <TextField
                    variant="outlined"
                    label="Price"
                    fullWidth
                    defaultValue="0"
                    {...register("Price", {
                      required: "Required",
                      min: {
                        value: 0,
                        message: "Price must be greater than 0",
                      },
                      pattern: {
                        value: /^[0-9]+$/,
                        message: "Inspection Period must be an integer",
                      },
                    })}
                    error={!!errors.Price}
                    helperText={errors.Price?.message || " "}
                    sx={{ mt: "0.3rem" }}
                  />
                </Grid>
              </Grid>

              <TextField
                variant="outlined"
                label="Item Category"
                fullWidth
                {...register("ItemCategory", {
                  required: "Required",
                })}
                error={!!errors.ItemCategory}
                helperText={errors.ItemCategory?.message || " "}
                sx={{ mt: "0.3rem" }}
              />

              <TextField
                variant="outlined"
                label="Item Description"
                fullWidth
                {...register("ItemDescription", {
                  required: "Required",
                })}
                error={!!errors.ItemDescription}
                helperText={errors.ItemDescription?.message || " "}
              />
              {!showBox && (
                <Button
                  variant="contained"
                  type="submit"
                  sx={{
                    mt: "0.3rem",
                    float: "right",
                    bgcolor: Colors.button,
                  }}
                >
                  Add Item
                </Button>
              )}
            </Box>
            {/* // )} */}
            {showBox && (
              <Box>
                <Box
                  sx={{
                    p: "2rem 2rem",
                    border: `1px solid ${Colors.borderColor}`,
                    boxShadow: "0 1px 1px hsla(185, 8%, 67%, .5)",
                    borderRadius: "8px",
                    m: "1rem 0 2rem 0",
                  }}
                >
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "600",
                        fontFamily: Fonts.primaryFont,
                        fontSize: "14px",
                      }}
                    >
                      {TransactionTitle}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ color: Colors.fontColor }}
                    >
                      ${Price}
                    </Typography>
                  </Box>
                  <Typography
                    variant="body1"
                    sx={{
                      color: Colors.fontColor,
                      fontFamily: Fonts.primaryFont,
                      fontStyle: "italic",
                    }}
                  >
                    {ItemCategory}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: Colors.fontColor,
                      fontFamily: Fonts.primaryFont,
                    }}
                  >
                    {ItemDescription}
                  </Typography>
                  <Typography variant="body1" sx={{ m: "1rem 0 0 0 " }}>
                    Inspection Period is {InspectionPeriod}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    p: "4rem 0.5rem",
                    borderTop: `0.5px solid ${Colors.borderColor}`,
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: "17px",
                      fontFamily: Fonts.primaryFont,
                      fontWeight: 600,
                      mb: "1rem",
                      color: Colors.button,
                    }}
                  >
                    Transaction Summary
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      p: "0.5rem 0 1.5rem 0",
                      borderBottom: `1px solid ${Colors.borderColor}`,
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
                      ${Price}
                    </Typography>
                  </Box>
                  <Divider />
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mt: "1rem",
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
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        color: Colors.fontColor,
                        fontSize: "15px",
                        fontFamily: Fonts.primaryFont,
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
                      }}
                    >
                      ${Price}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            )}

            <Box
              sx={{
                display: showBox ? "block" : "none",
                borderTop: `1px solid ${Colors.borderColor}`,
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontFamily: Fonts.secondaryFont,
                  color: "rgb(34, 92, 171)",
                  fontSize: "16px",
                  fontWeight: 600,
                  m: "1rem 0",
                }}
              >
                {secondPerson} Details
              </Typography>
              <Box display={"flex"} sx={{ gap: 3 }}>
                <TextField
                  variant="outlined"
                  label={`${secondPerson} Email`}
                  fullWidth
                  {...register("secondPersonEmail", {
                    required: showBox
                      ? `${secondPerson} Email is required`
                      : false,
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Invalid email format",
                    },
                  })}
                  error={!!errors.secondPersonEmail}
                  helperText={errors.secondPersonEmail?.message || " "}
                />
                <TextField
                  variant="outlined"
                  label={`${secondPerson} Number`}
                  fullWidth
                  {...register("secondPersonNumber", {
                    pattern: {
                      value: /^[0-9]{11}$/,
                      message: "Invalid phone number format",
                    },
                  })}
                  error={!!errors.secondPersonEmail}
                  helperText={errors.secondPersonEmail?.message || " "}
                />
              </Box>
              <Button
                variant="contained"
                type="submit"
                sx={{ m: "0.5rem 0", float: "right", bgcolor: Colors.button }}
              >
                Submit
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </>
  );
}

export default IntializeEscrow;
