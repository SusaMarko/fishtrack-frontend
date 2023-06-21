import "./App.css";
import React from "react";
import FishingReportInput from "./components/FishingReportInput";
import FishingReports from "./components/FishingReports";
import FishTrackNavbar from "./components/FishTrackNavbar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <FishTrackNavbar />
      <FishingReportInput />
      <FishingReports />
    </>
  );
}

export default App;
