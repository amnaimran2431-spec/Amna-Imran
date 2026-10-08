import React from 'react';
import { ChevronRight } from 'lucide-react';
import { HOSPITAL_DATA } from '../data/hospitalData';

interface FeaturedExperienceProps {
  onBookAppointment: () => void;
}

export const FeaturedExperience: React.FC<FeaturedExperienceProps> = ({ onBookAppointment }) => {
  return (
    <section className="relative py-28 bg-[#0B1720] text-white overflow-hidden">
      {/* Background Image with Deep Navy Treatment */}
      <div className="absolute inset-0 z-0">
        <img
          src={HOSPITAL_DATA.images.orthopaedicExam}
          alt="Orthopaedic specialist consulting with patient in modern hospital room"
          className="w-full h-full object-cover object-center filter brightness-[0.4] contrast-[1.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1720] via-[#0B1720]/85 to-transparent" />
        <div className="absolute inset-0 bg-medical-grid-dark opacity-15" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          
          <div className="w-16 h-1 bg-[#087E8B] mb-8" />
          
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#35A7A5] block mb-4">
            PATIENT EDUCATION &amp; COMMUNICATION
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-normal leading-[1.12] mb-6 text-white">
            UNDERSTANDING YOUR CONDITION <br />
            <span className="italic text-gray-200">IS THE FIRST STEP.</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed mb-10 max-w-xl">
            Clear communication and thoughtful consultation help patients understand their concerns and make informed decisions about their care.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <button
              type="button"
              onClick={onBookAppointment}
              className="group inline-flex items-center gap-3 bg-[#087E8B] hover:bg-[#076d78] text-white px-7 py-3.5 rounded-md font-semibold text-xs tracking-wider uppercase transition-all shadow-lg active:scale-95"
            >
              <span>REQUEST AN APPOINTMENT</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <span className="text-xs text-gray-400">
              Or call our hospital reception: <strong className="text-white">{HOSPITAL_DATA.phone}</strong>
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};
