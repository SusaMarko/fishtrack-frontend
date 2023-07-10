import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import FishingReportInput from "./components/FishingReportInput";
import FishingReports from "./components/FishingReports";
import FishTrackNavbar from "./components/FishTrackNavbar";

function App() {
  return (
    <>
      <FishTrackNavbar />
      <Routes>
        <Route path="/FishingReportInput" element={<FishingReportInput />} />
        <Route path="/FishingReports" element={<FishingReports />} />
      </Routes>
    </>
  );
}

export default App;
