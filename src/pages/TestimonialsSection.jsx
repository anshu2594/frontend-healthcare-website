import React, { useState, useEffect } from "react";
const TestimonialsSection = () => {
  const [active, setActive] = useState(0);
  const testimonials = [
    {
      text: "The care I received was exceptional. Every doctor was attentive and the facilities are world-class.",
      author: "Sarah M.",
      role: "Patient",
    },
    {
      text: "Fast appointments, accurate diagnoses, and compassionate staff. I couldn't ask for better healthcare.",
      author: "David K.",
      role: "Patient",
    },
    {
      text: "After years of searching, I finally found a hospital that truly listens and delivers real results.",
      author: "Priya T.",
      role: "Patient",
    },
  ];

  useEffect(() => {
    const t = setInterval(
      () => setActive((v) => (v + 1) % testimonials.length),
      4000,
    );
    return () => clearInterval(t);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-blue-800 to-blue-600 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle, white 1.5px, transparent 1.5px)",
          backgroundSize: "36px 36px",
        }}
      />
      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <span className="inline-block border border-white/30 bg-white/10 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">
          Patient Stories
        </span>
        <h2 className="text-3xl font-extrabold text-white mb-10">
          What Our Patients Say
        </h2>

        <div className="bg-white rounded-3xl p-10 shadow-2xl mb-6">
          <div className="text-5xl text-blue-300 mb-4 leading-none">"</div>
          <p className="text-gray-600 text-lg leading-relaxed mb-6 font-light">
            {testimonials[active].text}
          </p>
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-bold">
              {testimonials[active].author[0]}
            </div>
            <div className="text-left">
              <div className="font-bold text-gray-800 text-sm">
                {testimonials[active].author}
              </div>
              <div className="text-gray-400 text-xs">
                {testimonials[active].role}
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-2 justify-center">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`rounded-full transition-all duration-300 ${i === active ? "w-7 h-2.5 bg-white" : "w-2.5 h-2.5 bg-white/40"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default TestimonialsSection;
