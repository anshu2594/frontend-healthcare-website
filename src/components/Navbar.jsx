import React, { useState } from "react";
import logo from "../assets/logo.png";
import doctor from "../assets/doctor.png";
import {
  House,
  Users,
  Calendar,
  MessageSquare,
  CreditCard,
  Settings,
  EllipsisVertical,
} from "lucide-react";

const Navbar = () => {
  const [active, setActive] = useState("Overview");

  const navItems = [
    { label: "Overview", icon: House },
    { label: "Patients", icon: Users },
    { label: "Schedule", icon: Calendar },
    { label: "Message", icon: MessageSquare },
    { label: "Transactions", icon: CreditCard },
  ];

  return (
    // ✅ FIX 1: Changed <navbar> (invalid HTML) to <header>
    // ✅ FIX 2: Used z-50 so navbar stays above all content
    <header className="fixed top-[18px] left-[18px] right-[18px] h-[72px] bg-white rounded-full shadow-md z-50 flex items-center justify-between px-8">
      {/* ── Logo ── */}
      <div className="flex items-center gap-2 cursor-pointer flex-shrink-0">
        <img
          src={logo}
          alt="Healthcare Logo"
          // ✅ FIX 3: Added flex-shrink-0 so image never squishes
          className="object-contain w-12 h-12 flex-shrink-0"
        />
        <div className="leading-tight">
          <h1 className="text-xl font-extrabold tracking-tight text-red-600">
            HEALTH<span className="text-red-400">.</span>CARE
          </h1>
          <p className="text-[11px] font-medium text-gray-400 whitespace-nowrap">
            Health Solution for Every Stage
          </p>
        </div>
      </div>

      {/* ── Nav Links ── */}
      {/* ✅ FIX 4: Removed duplicate/nested <nav> inside <navbar>  */}
      {/* ✅ FIX 5: Added flex-1 + justify-center so links stay centered */}
      <nav className="flex items-center gap-1 flex-1 justify-center">
        {navItems.map(({ label, icon: Icon }) => (
          <a
            key={label}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setActive(label);
            }}
            className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 active:scale-95
              ${
                active === label
                  ? // ✅ FIX 6: Active state so user knows which page they're on
                    "bg-red-600 text-white shadow-md shadow-red-200"
                  : "text-slate-600 hover:bg-red-50 hover:text-red-600"
              }`}
          >
            <Icon size={16} />
            <span>{label}</span>
          </a>
        ))}
      </nav>

      {/* ── Profile ── */}
      {/* ✅ FIX 7: Added flex-shrink-0 so profile never wraps or squishes */}
      <div className="flex items-center gap-3 flex-shrink-0">
        <img
          src={doctor}
          alt="Dr. Jose Simmons"
          className="object-cover w-10 h-10 rounded-full border border-gray-200 shadow-sm flex-shrink-0"
        />

        <div className="leading-tight">
          <h2 className="text-sm font-semibold text-gray-800 whitespace-nowrap">
            Dr. Jose Simmons
          </h2>
          <p className="text-[11px] text-gray-400 whitespace-nowrap">
            General Practitioner
          </p>
        </div>

        {/* Divider */}
        <div className="w-px h-8 bg-gray-200 mx-1" />

        {/* Action buttons */}
        <div className="flex items-center gap-1">
          <button
            title="Settings"
            className="p-2 text-gray-400 rounded-full hover:bg-red-50 hover:text-red-600 transition-all duration-200"
          >
            <Settings size={17} />
          </button>
          <button
            title="More options"
            className="p-2 text-gray-400 rounded-full hover:bg-red-50 hover:text-red-600 transition-all duration-200"
          >
            <EllipsisVertical size={17} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
