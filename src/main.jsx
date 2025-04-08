import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ModalProvider } from "./context/ModalContext.jsx";
import { LoginProvider } from "./context/AuthContext.jsx";
import { MealsProvider } from "./context/MealsContext.jsx";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LoginProvider>
      <MealsProvider>
        <ModalProvider>
          <ToastContainer />
          <App />
        </ModalProvider>
      </MealsProvider>
    </LoginProvider>
  </React.StrictMode>
);
