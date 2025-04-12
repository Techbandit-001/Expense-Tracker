import React from "react";
import {createRoot} from "react-dom/client";
import App from "./App.jsx";
import "./index.css"; // Optional: Tailwind or global styles

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
