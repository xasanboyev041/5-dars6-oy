import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserDetailPage from "./pages/UserDetailPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/users/:id" element={<UserDetailPage />} />
    </Routes>
  );
}

export default App;
