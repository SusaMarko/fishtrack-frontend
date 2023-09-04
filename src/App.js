import React, { useState, useEffect } from "react";
import FishingReportInput from "./components/FishingReportInput";
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
                isAuthenticated ? (
                  <Navigate to="/reports" />
                ) : (
                  <Login setAuth={setAuth} />
                )
              }
            />
            <Route
              path="/login-input"
              element={
                isAuthenticated ? (
                  <Navigate to="/input" />
                ) : (
                  <Login setAuth={setAuth} />
                )
              }
            />
            <Route
              path="/login-reports"
              element={
                isAuthenticated ? (
                  <Navigate to="/reports" />
                ) : (
                  <Login setAuth={setAuth} />
                )
              }
            />
            <Route
              path="/input"
              element={
                isAuthenticated ? (
                  <FishingReportInput setAuth={setAuth} />
                ) : (
                  <Navigate to="/login-input" />
                )
              }
            />
            <Route
              path="/reports"
              element={
                isAuthenticated ? (
                  <Reports setAuth={setAuth} />
                ) : (
                  <Navigate to="/login-reports" />
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
