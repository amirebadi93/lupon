import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import Router from "./Routes.jsx";
import "./English.css";
import "./Persian.css";
// import { children } from "react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      {/* {children} */}
      <Router />
    </BrowserRouter>
  </StrictMode>
);
