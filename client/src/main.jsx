import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { ProvileProvider } from "./context/profileContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProvileProvider>
      <App />
    </ProvileProvider>
  </React.StrictMode>
);
