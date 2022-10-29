import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import App from "./App";

import Login from "./pages/Login";


const theme = createTheme({
  palette: {
    primary: {
      main: "#C7F9CC",
    },
    secondary: {
      main: "#22577A",
    },
    button: {
      main: "#C7F9CC",
    },
  },
});

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
  </QueryClientProvider>
);
