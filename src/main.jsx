<<<<<<< HEAD
import "./styles";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
=======
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "@/app";
>>>>>>> 3a835a8bf828e8cfe037ee331c4981704d7a61c7

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
