import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import WhyUsSection from "../pages/WhyUsSection";
import TestimonialsSection from "../pages/TestimonialsSection";
import DepartmentsSection from "../pages/DepartmentsSection";
import DoctorsSection from "../pages/DoctorsSection";
import AppointmentSection from "../pages/AppointmentSection";
import Register from "../features/auth/pages/Register";
import Login from "../features/auth/pages/Login";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/why-us" element={<WhyUsSection />} />
        <Route path="/testimonials" element={<TestimonialsSection />} />
        <Route path="/departments" element={<DepartmentsSection />} />
        <Route path="/doctors" element={<DoctorsSection />} />
        <Route path="/appointments" element={<AppointmentSection />} />
      </Route>

      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
