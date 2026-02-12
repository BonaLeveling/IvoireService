import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import Research from "./Research";
import Register from "./components/Register";
import Connexion from "./components/Login";
import Terms from "./components/Terms";
import UserDashboard from "./components/UserDashboard";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/search" element={<Research />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Connexion />} />
      <Route path="/terms" element={<Terms />} />
      
      <Route path="/dashboard" element={<UserDashboard />} />
    </Routes>
  </BrowserRouter>,
);
