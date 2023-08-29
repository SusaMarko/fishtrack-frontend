import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import FishTrackNavbar from "./components/FishTrackNavbar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FishTrackNavbar />
    <App />
  </React.StrictMode>
);
