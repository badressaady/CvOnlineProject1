import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { CvProvider } from "./context/CvContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode >
    
    <CvProvider >
      <RouterProvider router={router} />
    </CvProvider>
  </React.StrictMode >
);
