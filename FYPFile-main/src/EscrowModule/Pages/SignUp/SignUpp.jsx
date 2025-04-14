import {
  TextField,
  FormControl,
  FormLabel,
  Button,
  Typography,
  Box,
  Divider,
  Checkbox,
  FormControlLabel,
  Select,
  MenuItem,
} from "@mui/material";
import * as React from "react";
import Link from "@mui/material/Link";
import useSignUp from "./hooks/useSignUp.ts";
import AppTheme from "../shared-theme/AppTheme";
import CssBaseline from "@mui/material/CssBaseline";
import ForgotPassword from "../SignIn/ForgotPassword.jsx";
import { Card, SignUpContainer } from "../../../constants/SignUpConstants";

export default function SignUp({ isEscrow }) {
  const [role, setRole] = React.useState("");
  const {
    handleSubmit,
    validateInputs,
    nameError,
    nameErrorMessage,
    passwordError,
    passwordErrorMessage,
    emailError,
    emailErrorMessage,
    handleClose,
    open,
    msg,
  } = useSignUp({ isEscrow, role });

  return (
    <AppTheme>
      <CssBaseline enableColorScheme />
      <SignUpContainer direction="column" justifyContent="space-between">
        <Card variant="outlined">
          <Typography
            component="h1"
            variant="h4"
            sx={{ width: "100%", fontSize: "clamp(2rem, 10vw, 2.15rem)" }}
          >
            Sign up
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <FormControl sx={{ display: "flex" }}>
              <FormLabel htmlFor="name">Full name</FormLabel>
              <TextField
                autoComplete="name"
                name="name"
                required
                fullWidth
                id="name"
                placeholder="Jon Snow"
                error={nameError}
                helperText={nameErrorMessage}
                color={nameError ? "error" : "primary"}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <TextField
                required
                fullWidth
                id="email"
                placeholder="your@email.com"
                name="email"
                autoComplete="email"
                variant="outlined"
                error={emailError}
                helperText={emailErrorMessage}
                color={passwordError ? "error" : "primary"}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <TextField
                required
                fullWidth
                name="password"
                placeholder="••••••"
                type="password"
                id="password"
                autoComplete="new-password"
                variant="outlined"
                error={passwordError}
                helperText={passwordErrorMessage}
                color={passwordError ? "error" : "primary"}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="role">Role</FormLabel>
              <Select
                id="role"
                name="role"
                required
                fullWidth
                value={role}
                onChange={(e) => setRole(e.target.value)}
                sx={{
                  "& .MuiSelect-icon": {
                    display: "none",
                  },
                }}
              >
                <MenuItem value="Buyer">Buyer</MenuItem>
                <MenuItem value="Seller">Seller</MenuItem>
              </Select>
            </FormControl>

            <FormControlLabel
              control={<Checkbox value="allowExtraEmails" color="primary" />}
              label="I want to receive updates via email."
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={validateInputs}
            >
              Sign up
            </Button>
            <ForgotPassword
              open={open}
              handleClose={handleClose}
              isPass={false}
              msg={msg == null ? null : msg}
            />
          </Box>
          <Divider>
            <Typography sx={{ color: "text.secondary" }}>or</Typography>
          </Divider>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {/* <Button
              fullWidth
              variant="outlined"
              // onClick={googleLogin} // Show Google login when clicked
              startIcon={<GoogleIcon />}
            >
              Sign up with Google
            </Button> */}

            {/* Google Login component is conditionally rendered */}

            <Typography sx={{ textAlign: "center" }}>
              Already have an account?{" "}
              <Link
                href="/material-ui/getting-started/templates/sign-in/"
                variant="body2"
                sx={{ alignSelf: "center" }}
              >
                Sign in
              </Link>
            </Typography>
          </Box>
        </Card>
      </SignUpContainer>
    </AppTheme>
  );
}
