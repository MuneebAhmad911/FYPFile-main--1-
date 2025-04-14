import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Core/App/App.jsx";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="583683894165-ucj32q9j8e4oa3u23rn5rsjs2ibt3ndg.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
