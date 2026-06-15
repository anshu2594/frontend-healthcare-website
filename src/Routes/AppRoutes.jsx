import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../features/auth/pages/Register";
import Login from "../features/auth/pages/Login";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
