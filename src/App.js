import React, { useState, useEffect } from "react";
import FishingReportInput from "./components/FishingReportInput";
import FishTrackNavbar from "./components/FishTrackNavbar";
import Reports from "./components/Reports";

import "./App.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./components/Login";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };

  async function isAuth() {
    try {
      const response = await fetch("http://localhost:5000/auth/is-verify", {
        method: "GET",
        headers: { token: localStorage.token },
      });

      const parseRes = await response.json();

      parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    isAuth();
  });

  return (
    <>
      <Router>
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                !isAuthenticated ? (
                  <Login setAuth={setAuth} />
                ) : (
                  <Navigate to="/reports" />
                )
              }
            />
            <Route
              path="/login"
              element={
                !isAuthenticated ? (
                  <Login setAuth={setAuth} />
                ) : (
                  <Navigate to="/reports" />
                )
              }
            />
            <Route
              path="/reports"
              element={
                isAuthenticated ? (
                  <Reports setAuth={setAuth} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

// import "./App.css";
// import React from "react";
// import { Route, Routes } from "react-router-dom";
// import FishingReportInput from "./components/FishingReportInput";
// import FishingReports from "./components/FishingReports";
// import FishTrackNavbar from "./components/FishTrackNavbar";

// function App() {
//   return (
//     <>
//       <FishTrackNavbar />
//       <Routes>
//         <Route path="/FishingReportInput" element={<FishingReportInput />} />
//         <Route path="/FishingReports" element={<FishingReports />} />
//       </Routes>
//     </>
//   );
// }

// export default App;
