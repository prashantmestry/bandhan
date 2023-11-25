import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

const customTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1366,
      xl: 1536,
    },
  },
});

const routes = [{}];

root.render(
  <React.StrictMode>
    <ThemeProvider theme={customTheme}>
      <BrowserRouter routes={routes}>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
