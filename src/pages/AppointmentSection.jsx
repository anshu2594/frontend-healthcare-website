import React, { useState } from "react";

const AppointmentSection = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    department: "",
    date: "",
  });

  const departments = [
    "Cardiology",
    "Neurology",
    "Orthopedics",
    "Ophthalmology",
    "Pediatrics",
    "Pulmonology",
  ];

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Appointment requested for ${form.name}. We'll confirm shortly!`);
  };

  return (
    <section id="appointment" className="bg-[#1e3a5f] py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left copy */}
        <div>
          <p className="text-red-400 font-bold text-xs tracking-widest uppercase mb-3">
            Book a Visit
          </p>
          <h2 className="text-3xl font-extrabold text-white mb-4 leading-snug">
            Book an Appointment
          </h2>
          <p className="text-white/60 text-sm leading-relaxed max-w-sm">
            Schedule a consultation with our specialists at a time that works
            for you. Same-day slots available.
          </p>

          <div className="mt-8 flex flex-col gap-3 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0" />
              No referral needed for most departments
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0" />
              Confirmation within 2 hours
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0" />
              Free cancellation up to 24 hours before
            </div>
          </div>
        </div>

        {/* Right form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col gap-4"
        >
          <div className="flex flex-col gap-1">
            <label className="text-white/60 text-xs font-semibold">
              Full name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="e.g. Anika Mehta"
              required
              className="bg-white/8 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-red-500 transition-colors"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-white/60 text-xs font-semibold">
              Phone number
            </label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              required
              className="bg-white/8 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-red-500 transition-colors"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-white/60 text-xs font-semibold">
              Department
            </label>
            <select
              name="department"
              value={form.department}
              onChange={handleChange}
              required
              className="bg-white/8 border border-white/15 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-red-500 transition-colors appearance-none"
              style={{
                backgroundColor: "rgba(255,255,255,0.05)",
                color: form.department ? "#fff" : "rgba(255,255,255,0.3)",
              }}
            >
              <option
                value=""
                disabled
                style={{ color: "#999", background: "#1e3a5f" }}
              >
                Select a department
              </option>
              {departments.map((d) => (
                <option
                  key={d}
                  value={d}
                  style={{ color: "#fff", background: "#1e3a5f" }}
                >
                  {d}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-white/60 text-xs font-semibold">
              Preferred date
            </label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              required
              min={new Date().toISOString().split("T")[0]}
              className="bg-white/8 border border-white/15 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-red-500 transition-colors"
              style={{ colorScheme: "dark" }}
            />
          </div>

          <button
            type="submit"
            className="mt-2 bg-red-600 hover:bg-red-700 text-white font-bold text-sm px-7 py-3 rounded-full transition-all duration-300 shadow-lg shadow-red-900/40 hover:-translate-y-0.5 self-start"
          >
            Confirm Appointment →
          </button>
        </form>
      </div>
    </section>
  );
};

export default AppointmentSection;
