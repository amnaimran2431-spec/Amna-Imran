import React, { useState } from 'react';
import { Calendar, User, Clock, ArrowRight, X, ShieldCheck } from 'lucide-react';
import { HOSPITAL_DATA } from '../data/hospitalData';

interface DoctorsSectionProps {
  onBookWithDoctor: (doctorName: string) => void;
}

export const DoctorsSection: React.FC<DoctorsSectionProps> = ({ onBookWithDoctor }) => {
  const [selectedDoctor, setSelectedDoctor] = useState<(typeof HOSPITAL_DATA.doctors)[0] | null>(null);

  return (
    <section id="doctors" className="py-24 bg-[#FCFCFA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#087E8B] block mb-3">
              03 / OUR MEDICAL TEAM
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#0B1720] leading-tight mb-4">
              MEET YOUR CARE TEAM
            </h2>
            <p className="text-base text-[#65727A] leading-relaxed">
              Consultant specialists committed to ethical evaluations, careful listening, and comprehensive musculoskeletal care in Lahore.
            </p>
          </div>

          {/* Editorial Note on Profile Configurations */}
          <div className="text-xs text-[#65727A] bg-[#F5FAFA] p-3 rounded border border-[#0B1720]/10 max-w-sm">
            <span className="font-semibold text-[#0B1720] block mb-0.5">Clinical Note:</span>
            Doctor rosters and consultation timings are scheduled by appointment. Contact hospital reception at 042-35407172 for current day schedules.
          </div>
        </div>

        {/* Doctor Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {HOSPITAL_DATA.doctors.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-lg border border-[#0B1720]/10 shadow-[0_2px_8px_rgba(11,23,32,0.03)] overflow-hidden flex flex-col justify-between hover:border-[#087E8B]/40 hover:shadow-md transition-all duration-300 group"
            >
              <div>
                {/* Portrait Area */}
                <div className="relative aspect-[4/4] bg-[#0B1720] overflow-hidden">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="w-full h-full object-cover object-top filter contrast-[1.02] group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1720]/80 via-transparent to-transparent opacity-60" />
                  
                  {/* Subtle profile tag */}
                  <div className="absolute top-3 left-3 bg-[#0B1720]/80 backdrop-blur-sm px-2.5 py-1 rounded text-[10px] text-gray-200 border border-white/10 uppercase tracking-wider">
                    OMC Specialist
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6">
                  <div className="mb-2">
                    <span className="text-[11px] font-semibold text-[#087E8B] uppercase tracking-wider block">
                      {doc.specialty}
                    </span>
                    <h3 className="text-xl font-serif font-bold text-[#0B1720] mt-1 group-hover:text-[#087E8B] transition-colors">
                      {doc.name}
                    </h3>
                  </div>

                  <p className="text-xs text-[#65727A] font-medium mb-3">
                    {doc.title}
                  </p>

                  <p className="text-xs text-[#65727A] leading-relaxed line-clamp-3 mb-4">
                    {doc.bio}
                  </p>

                  <div className="flex items-center gap-2 text-xs text-[#17212B] bg-[#F5FAFA] py-2 px-3 rounded border border-[#0B1720]/5 mb-2">
                    <Clock className="w-3.5 h-3.5 text-[#087E8B]" />
                    <span>{doc.availability}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedDoctor(doc)}
                  className="flex-1 py-2.5 px-3 border border-[#0B1720]/20 hover:border-[#087E8B] text-[#0B1720] hover:text-[#087E8B] rounded text-xs font-semibold tracking-wider uppercase transition-colors text-center"
                >
                  View Profile
                </button>
                <button
                  type="button"
                  onClick={() => onBookWithDoctor(doc.name)}
                  className="bg-[#087E8B] hover:bg-[#076d78] text-white py-2.5 px-3 rounded text-xs font-semibold tracking-wider uppercase transition-colors"
                  title="Book appointment with this doctor"
                >
                  Book
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Doctor Profile Modal */}
      {selectedDoctor && (
        <div
          className="fixed inset-0 z-50 bg-[#0B1720]/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedDoctor(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-white rounded-lg max-w-lg w-full overflow-hidden shadow-2xl border border-[#0B1720]/20 animate-in fade-in duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-44 bg-[#0B1720]">
              <img
                src={selectedDoctor.image}
                alt={selectedDoctor.name}
                className="w-full h-full object-cover object-top opacity-75"
              />
              <button
                type="button"
                onClick={() => setSelectedDoctor(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[11px] uppercase tracking-widest text-[#35A7A5] font-semibold">
                  {selectedDoctor.specialty}
                </span>
                <h3 className="text-xl font-serif text-white font-bold">
                  {selectedDoctor.name}
                </h3>
              </div>
            </div>

            <div className="p-6">
              <div className="mb-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B1720] mb-1">
                  Professional Focus
                </h4>
                <p className="text-sm text-[#65727A] leading-relaxed">
                  {selectedDoctor.bio}
                </p>
              </div>

              <div className="space-y-2 mb-6 text-xs text-[#17212B]">
                <div className="flex items-center gap-2 p-2.5 bg-[#F5FAFA] rounded">
                  <Clock className="w-4 h-4 text-[#087E8B]" />
                  <span><strong>Schedule:</strong> {selectedDoctor.availability}</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 bg-[#F5FAFA] rounded">
                  <ShieldCheck className="w-4 h-4 text-[#087E8B]" />
                  <span><strong>Location:</strong> OMC Lahore, 15 Jail Road, Shadman II</span>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-[#0B1720]/10">
                <button
                  type="button"
                  onClick={() => {
                    const name = selectedDoctor.name;
                    setSelectedDoctor(null);
                    onBookWithDoctor(name);
                  }}
                  className="flex-1 bg-[#087E8B] hover:bg-[#076d78] text-white py-2.5 rounded text-xs font-semibold tracking-wider uppercase transition-colors text-center"
                >
                  Book Consultation
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedDoctor(null)}
                  className="px-4 py-2.5 border border-[#0B1720]/20 text-[#0B1720] rounded text-xs font-semibold tracking-wider uppercase hover:bg-gray-50"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
