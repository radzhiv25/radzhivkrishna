import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import "./index.css";
import App from "./App.jsx";

// Initialize theme on page load
const initializeTheme = () => {
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};

// Initialize theme before rendering
initializeTheme();

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </StrictMode>
  </BrowserRouter>
);
