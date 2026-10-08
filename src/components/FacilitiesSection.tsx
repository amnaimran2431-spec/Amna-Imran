import React, { useState } from 'react';
import { Building, Sparkles } from 'lucide-react';
import { HOSPITAL_DATA } from '../data/hospitalData';

export const FacilitiesSection: React.FC = () => {
  const [selectedFacilityIndex, setSelectedFacilityIndex] = useState(0);
  const currentFacility = HOSPITAL_DATA.facilities[selectedFacilityIndex];

  return (
    <section id="facilities" className="py-24 bg-[#FCFCFA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#087E8B] block mb-3">
              04 / FACILITIES
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#0B1720] leading-tight mb-4">
              A PROFESSIONAL ENVIRONMENT FOR PATIENT CARE
            </h2>
            <p className="text-base text-[#65727A] leading-relaxed">
              Quiet, hygienic spaces configured to support comfortable medical consultations, accurate evaluation, and peaceful patient recovery in Lahore.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-[#65727A] bg-[#F5FAFA] py-2 px-3 rounded border border-[#0B1720]/10">
            <Building className="w-4 h-4 text-[#087E8B]" />
            <span>Facility categories for patient orientation</span>
          </div>
        </div>

        {/* Tab Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none border-b border-[#0B1720]/10">
          {HOSPITAL_DATA.facilities.map((fac, idx) => (
            <button
              key={fac.id}
              type="button"
              onClick={() => setSelectedFacilityIndex(idx)}
              className={`px-4 py-2.5 rounded text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all ${
                selectedFacilityIndex === idx
                  ? 'bg-[#0B1720] text-white shadow-sm'
                  : 'bg-transparent text-[#65727A] hover:text-[#0B1720] hover:bg-gray-100'
              }`}
            >
              {fac.title}
            </button>
          ))}
        </div>

        {/* Featured Facility Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-6 sm:p-8 rounded-xl border border-[#0B1720]/10 shadow-sm">
          
          {/* Large Image Frame */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/10] rounded-lg overflow-hidden border border-[#0B1720]/10 bg-[#0B1720]">
              <img
                src={currentFacility.image}
                alt={currentFacility.title}
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute top-4 left-4 bg-[#0B1720]/80 backdrop-blur-sm text-white px-3 py-1 rounded text-[11px] font-medium uppercase tracking-wider">
                {currentFacility.category}
              </div>
            </div>
          </div>

          {/* Descriptive Content */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#087E8B] font-semibold mb-2 block">
                SPACES &amp; AMENITIES
              </span>
              <h3 className="text-2xl font-serif text-[#0B1720] font-bold mb-4">
                {currentFacility.title}
              </h3>
              <p className="text-sm sm:text-base text-[#65727A] leading-relaxed mb-6">
                {currentFacility.description}
              </p>

              <div className="space-y-3 pt-4 border-t border-[#0B1720]/10 text-xs text-[#17212B]">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#087E8B]" />
                  <span>Located at OMC Complex, 15 Jail Road, Shadman II</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#087E8B]" />
                  <span>Maintained to healthcare sanitation standards</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#087E8B]" />
                  <span>Wheelchair-accessible corridors and patient reception</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#0B1720]/5 flex items-center justify-between text-xs text-[#65727A]">
              <span>Viewing {selectedFacilityIndex + 1} of {HOSPITAL_DATA.facilities.length}</span>
              <span className="text-[#087E8B] font-semibold">OMC Lahore</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
