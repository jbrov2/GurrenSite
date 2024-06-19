import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// Supports weights 200-900
import "@fontsource/rubik-mono-one";
// Supports weights 300-700
import "@fontsource-variable/comfortaa";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
