import React from "react";
import { Star } from "lucide-react";

const doctors = [
  {
    name: "Dr. Sarah Mitchell",
    specialty: "Cardiologist",
    rating: "4.9",
    reviews: "320",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Dr. James Okafor",
    specialty: "Neurologist",
    rating: "4.8",
    reviews: "215",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Dr. Priya Sharma",
    specialty: "Pediatrician",
    rating: "5.0",
    reviews: "410",
    image:
      "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=400&q=80",
  },
];

const DoctorsSection = () => {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <p className="text-red-600 font-bold text-xs tracking-widest uppercase mb-2">
        Our Doctors
      </p>
      <h2 className="text-3xl font-extrabold text-[#1e3a5f] mb-3">
        Meet the experts
      </h2>
      <p className="text-gray-400 text-sm max-w-md leading-relaxed mb-10">
        Our team of experienced physicians is committed to your health and
        recovery.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {doctors.map(({ name, specialty, rating, reviews, image }) => (
          <div
            key={name}
            className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-md hover:shadow-red-100 hover:border-red-100 transition-all duration-300"
          >
            <img
              src={image}
              alt={name}
              className="w-full h-52 object-cover object-top"
            />
            <div className="p-5">
              <h3 className="text-[#1e3a5f] font-bold text-sm">{name}</h3>
              <p className="text-red-600 font-semibold text-xs mt-1 mb-3">
                {specialty}
              </p>
              <div className="flex items-center gap-1 text-xs text-gray-400">
                <Star size={13} className="text-amber-400 fill-amber-400" />
                <span className="font-semibold text-gray-600">{rating}</span>
                <span>· {reviews} reviews</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DoctorsSection;
