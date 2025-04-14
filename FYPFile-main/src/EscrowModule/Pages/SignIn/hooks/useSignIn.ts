import React, { useState, useContext } from "react";
import axios from "axios"; // Ensure axios is imported
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import {
  IsUserLoggedIn,
  UserContext,
} from "../../../providers/Hooks/useEscrowContext";

function useSignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [open, setOpen] = useState(false);
  const [password, setPassword] = useState("");
  const { user, setUser } = useContext(UserContext);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const { isUserLoggedIn, setIsUserLoggedIn } = useContext(IsUserLoggedIn);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateInputs()) {
      return;
    }
    console.log(email, password);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password,
        }
      );

      if (response.status === 200 && response.data) {
        const { token, user } = response.data;

        // Store user data and login state in localStorage
        localStorage.setItem("authToken", token);
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("isUserLoggedIn", JSON.stringify(true));

        setIsUserLoggedIn(true);
        setUser(user);

        if (user.role === "Buyer") {
          navigate("/escrowdashboard");
        } else if (user.role === "Seller") {
          navigate("/dashboard");
        } else if (user.role === "Admin") {
          navigate("/Admindashboard");
        }
      }
    } catch (error) {
      console.error("Error Logging In:", error);
      alert("Login failed, please try again.");
    }
  };

  const validateInputs = () => {
    let isValid = true;

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setEmailError(true);
      setEmailErrorMessage("Please enter a valid email address.");
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage("");
    }

    if (!password || password?.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage("Password must be at least 6 characters long.");
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage("");
    }

    return isValid;
    // return true;
  };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   if (!validateInputs()) {
  //     return;
  //   }

  //   try {
  //     const response = await axios.post(
  //       "http://localhost:5000/api/auth/login",
  //       { email, password }
  //     );

  //     console.log("Axios Response:", response.data); // Debugging log

  //     if (response.status === 200 && response.data) {
  //       const { token, user } = response.data; // Expect 'user' here
  //       console.log("User Logged In:", user);
  //       setIsUserLoggedIn(true);
  //       setUser(user);
  //       localStorage.setItem("authToken", token);
  //       if (user.role == "Buyer") {
  //         navigate("/escrowdashboard", { state: { isAdmin: false } });
  //       } else if (user.role == "Seller") {
  //         navigate("/dashboard", { state: { isAdmin: false } });
  //       } else if (user.role == "Admin") {
  //         navigate("/Admindashboard", { state: { isAdmin: true } });
  //       }
  //     }
  //   } catch (error) {
  //     console.error("Error Logging In user:", error);
  //     if (error.response) {
  //       console.error("Server responded with:", error.response.data);
  //       alert(`Error: ${error.response.data.message || "Login failed"}`);
  //     } else {
  //       alert("Unable to connect to the server. Please try again later.");
  //     }
  //   }
  // };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const googleLogin = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      navigate("/loggedin/escrowhistory");
      console.log("loggedif");
    },
    onError: () => {
      console.error("Google Signup Failed");
    },
  });
  return {
    validateInputs,
    handleSubmit,
    handleClickOpen,
    handleClose,
    googleLogin,
    emailError,
    emailErrorMessage,
    passwordError,
    passwordErrorMessage,
    open,
    setEmail,
    setPassword,
    isUserLoggedIn,
    navigate,
    user,
  };
}

export default useSignIn;
