import "./App.css";
import React from "react";
import FishingReportInput from "./components/FishingReportInput";
import FishingReports from "./components/FishingReports";
import FishTrackNavbar from "./components/FishTrackNavbar";

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
