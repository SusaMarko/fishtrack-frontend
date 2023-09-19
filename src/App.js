import React, { useState, useEffect } from "react";
import FishingReportInput from "./components/FishingReportInput";
import Reports from "./components/Reports";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login";
import EditFishingReport from "./components/EditFishingReport";

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
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Router>
        <div className="container mx-auto p-4">
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
              path="/login-edit"
              element={
                isAuthenticated ? (
                  <Navigate to="/edit" />
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
            <Route
              path="/edit"
              element={
                isAuthenticated ? (
                  <EditFishingReport setAuth={setAuth} />
                ) : (
                  <Navigate to="/login-edit" />
                )
              }
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
