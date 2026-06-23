import React from "react";
import DepartmentsSection from "./DepartmentsSection";
import WhyUsSection from "./WhyUsSection";
import DoctorsSection from "./DoctorsSection";
import TestimonialsSection from "./TestimonialsSection";
import AppointmentSection from "./AppointmentSection";

// ── HERO SECTION ──────────────────────────────────────────────────────────────
const HeroSection = () => {
  return (
    <section className="relative min-h-[88vh] overflow-hidden flex items-center">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1400&q=80')`,
        }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/97 via-white/75 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-24">
        <div className="max-w-xl">
          <p className="text-red-600 font-bold text-xs mb-4 tracking-widest uppercase">
            Medical And Health
          </p>

          <h1 className="text-[42px] md:text-[52px] font-extrabold text-[#1e3a5f] leading-[1.15] mb-5">
            A professional <br />
            and friendly care <br />
            provider.
          </h1>

          <p className="text-gray-400 text-sm mb-8 max-w-md leading-relaxed">
            Excepteur sint occaecat cupidatat non proident sunt officia
          </p>

          <a
            href="#appointment"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold text-sm px-7 py-3 rounded-full transition-all duration-300 shadow-lg shadow-red-200 hover:-translate-y-0.5"
          >
            All Doctors
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

// ── STATS SECTION ─────────────────────────────────────────────────────────────
const StatsSection = () => {
  const stats = [
    { value: "25K+", label: "Happy Patients" },
    { value: "120+", label: "Expert Doctors" },
    { value: "18+", label: "Years Experience" },
    { value: "99%", label: "Success Rate" },
  ];

  return (
    <section className="bg-red-600 py-10">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((s, i) => (
          <div
            key={i}
            className={`py-2 ${
              i < stats.length - 1 ? "border-r border-red-400/50" : ""
            }`}
          >
            <div className="text-3xl font-extrabold text-white mb-1">
              {s.value}
            </div>
            <div className="text-red-100 text-sm font-medium">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

// ── HOME (LANDING PAGE ONLY) ──────────────────────────────────────────────────
const Home = () => {
  return (
    <div className="font-sans">
      <HeroSection />
      <StatsSection />
      <DepartmentsSection />
      <WhyUsSection />
      <DoctorsSection />
      <TestimonialsSection />
      <AppointmentSection />
    </div>
  );
};

export default Home;
