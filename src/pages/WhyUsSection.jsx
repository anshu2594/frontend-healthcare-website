import React from "react";
import { BadgeCheck, Microscope, Clock, HouseHeart } from "lucide-react";

const reasons = [
  {
    icon: BadgeCheck,
    title: "Board-Certified Specialists",
    desc: "Every physician is rigorously certified and continuously trained in the latest medical advances.",
  },
  {
    icon: Microscope,
    title: "State-of-the-Art Facilities",
    desc: "Our hospitals are equipped with the latest diagnostic and surgical technology worldwide.",
  },
  {
    icon: Clock,
    title: "24/7 Emergency Care",
    desc: "Round-the-clock emergency services ensuring you're always covered when it matters most.",
  },
  {
    icon: HouseHeart,
    title: "Patient-Centered Approach",
    desc: "Care plans tailored to your unique needs, with full transparency at every step.",
  },
];

const WhyUsSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <p className="text-red-600 font-bold text-xs tracking-widest uppercase mb-2">
          Why Choose Us
        </p>
        <h2 className="text-3xl font-extrabold text-[#1e3a5f] mb-3">
          Healthcare you can trust
        </h2>
        <p className="text-gray-400 text-sm max-w-md leading-relaxed mb-10">
          We combine world-class expertise with compassionate, patient-first
          care.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {reasons.map(({ icon: Icon, title, desc }, i) => (
            <div key={title} className="flex gap-4 items-start">
              <div className="min-w-[40px] h-10 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Icon size={16} className="text-red-600" />
                  <h3 className="text-[#1e3a5f] font-bold text-sm">{title}</h3>
                </div>
                <p className="text-gray-400 text-xs leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
