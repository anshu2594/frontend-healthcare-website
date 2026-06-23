import React from "react";
import {
  HeartPulse,
  Brain,
  Bone,
  Eye,
  Baby,
  Wind,
} from "lucide-react";

const departments = [
  {
    icon: HeartPulse,
    name: "Cardiology",
    desc: "Advanced heart care with cutting-edge diagnostic and treatment technology.",
  },
  {
    icon: Brain,
    name: "Neurology",
    desc: "Expert care for brain, spine, and nervous system conditions.",
  },
  {
    icon: Bone,
    name: "Orthopedics",
    desc: "Comprehensive bone, joint, and muscle care for all ages.",
  },
  {
    icon: Eye,
    name: "Ophthalmology",
    desc: "Complete eye care from routine exams to complex surgeries.",
  },
  {
    icon: Baby,
    name: "Pediatrics",
    desc: "Gentle, specialized healthcare dedicated to children's wellbeing.",
  },
  {
    icon: Wind,
    name: "Pulmonology",
    desc: "Diagnosis and treatment of respiratory and lung conditions.",
  },
];

const DepartmentsSection = () => {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <p className="text-red-600 font-bold text-xs tracking-widest uppercase mb-2">
        Our Departments
      </p>
      <h2 className="text-3xl font-extrabold text-[#1e3a5f] mb-3">
        World-class medical specialties
      </h2>
      <p className="text-gray-400 text-sm max-w-md leading-relaxed mb-10">
        Comprehensive care across every specialty — delivered by experts who truly care.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {departments.map(({ icon: Icon, name, desc }) => (
          <div
            key={name}
            className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col gap-3 hover:shadow-md hover:shadow-red-100 hover:border-red-100 transition-all duration-300 cursor-default"
          >
            <div className="w-11 h-11 rounded-xl bg-red-50 flex items-center justify-center text-red-600">
              <Icon size={22} />
            </div>
            <h3 className="text-[#1e3a5f] font-bold text-sm">{name}</h3>
            <p className="text-gray-400 text-xs leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DepartmentsSection;