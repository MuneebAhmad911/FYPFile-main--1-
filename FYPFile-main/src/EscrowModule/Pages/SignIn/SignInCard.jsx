import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormLabel,
  FormControl,
  FormControlLabel,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { Card } from "../../../constants/SignInConstants";
import ForgotPassword from "./ForgotPassword";
import { GoogleIcon, FacebookIcon } from "./CustomIcons";
import useSignIn from "./hooks/useSignIn";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SignInCard() {
  const {
    open,
    emailError,
    passwordError,
    emailErrorMessage,
    passwordErrorMessage,
    setEmail,
    handleClose,
    setPassword,
    googleLogin,
    handleSubmit,
    validateInputs,
    handleClickOpen,
    navigate,
    user,
    isUserLoggedIn,
  } = useSignIn();
  useEffect(() => {
    if (isUserLoggedIn) {
      if (user.role === "Buyer") {
        navigate("/escrowdashboard");
      } else if (user.role === "Seller") {
        navigate("/dashboard");
      } else if (user.role === "admin") {
        navigate("/Admindashboard");
      }
    }
    // console.log(isUserLoggedIn);
  }, [isUserLoggedIn]);
  return (
    <Card variant="outlined">
      <Typography
        component="h1"
        variant="h4"
        sx={{ width: "100%", fontSize: "clamp(2rem, 10vw, 2.15rem)" }}
      >
        Sign in
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{ display: "flex", flexDirection: "column", width: "100%", gap: 2 }}
      >
        <FormControl>
          <FormLabel htmlFor="email">Email</FormLabel>
          <TextField
            error={emailError}
            helperText={emailErrorMessage}
            id="email"
            type="email"
            name="email"
            placeholder="your@email.com"
            autoComplete="email"
            autoFocus
            required
            fullWidth
            variant="outlined"
            color={emailError ? "error" : "primary"}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Link
              component="button"
              type="button"
              onClick={handleClickOpen}
              variant="body2"
              sx={{ alignSelf: "baseline" }}
            >
              Forgot your password?
            </Link>
          </Box>
          <TextField
            error={passwordError}
            helperText={passwordErrorMessage}
            name="password"
            placeholder="••••••"
            type="password"
            id="password"
            autoComplete="current-password"
            required
            fullWidth
            variant="outlined"
            color={passwordError ? "error" : "primary"}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <ForgotPassword open={open} handleClose={handleClose} isPass/>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          onClick={validateInputs}
        >
          Sign in
        </Button>
      </Box>
      <Divider>or</Divider>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          alignItems: "center",
        }}
      >
        <Typography sx={{ textAlign: "center" }}>
          Don&apos;t have an account?{" "}
          <Link
            component="button"
            onClick={() => navigate("/signup")}
            variant="body2"
            sx={{ alignSelf: "center" }}
          >
            Sign up
          </Link>
        </Typography>
        {/* <Button
          component={Link}
          fullWidth
          variant="outlined"
          onClick={googleLogin}
          startIcon={<GoogleIcon />}
        >
          Sign in with Google
        </Button>
        <Button
          fullWidth
          variant="outlined"
          onClick={() => setIsUserLoggedIn(true)}
          startIcon={<FacebookIcon />}
        >
          Sign in with Facebook
        </Button> */}
      </Box>
    </Card>
  );
}
