import React from 'react';
import { Bone, Activity, ShieldAlert, Heart, Disc, Compass, Layers, CheckCircle } from 'lucide-react';
import { HOSPITAL_DATA } from '../data/hospitalData';

export const SpecialtiesSection: React.FC = () => {
  const getSpecialtyIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Bone className="w-5 h-5 text-[#35A7A5]" />;
      case 1:
        return <Disc className="w-5 h-5 text-[#35A7A5]" />;
      case 2:
        return <Activity className="w-5 h-5 text-[#35A7A5]" />;
      case 3:
        return <Compass className="w-5 h-5 text-[#35A7A5]" />;
      case 4:
        return <Layers className="w-5 h-5 text-[#35A7A5]" />;
      case 5:
        return <Heart className="w-5 h-5 text-[#35A7A5]" />;
      case 6:
        return <ShieldAlert className="w-5 h-5 text-[#35A7A5]" />;
      case 7:
        return <CheckCircle className="w-5 h-5 text-[#35A7A5]" />;
      default:
        return <Bone className="w-5 h-5 text-[#35A7A5]" />;
    }
  };

  return (
    <section id="specialties" className="py-24 bg-[#0B1720] text-white relative overflow-hidden">
      {/* Background Subtle Medical Grid */}
      <div className="absolute inset-0 bg-medical-grid-dark opacity-20 pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#35A7A5] block mb-3">
            ANATOMIC FOCUS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white leading-tight mb-4">
            AREAS OF CARE
          </h2>
          <p className="text-base text-gray-300 font-light leading-relaxed">
            Focused orthopaedic evaluation addressing specific joints, bones, and movement patterns with evidence-grounded clinical consideration.
          </p>
        </div>

        {/* 8 Specialties Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {HOSPITAL_DATA.specialties.map((item, idx) => (
            <div
              key={item.name}
              className="bg-[#102733]/80 p-6 rounded-lg border border-white/10 hover:border-[#35A7A5]/50 transition-all duration-300 hover:bg-[#102733] flex flex-col justify-between group"
            >
              <div>
                <div className="w-10 h-10 rounded bg-white/5 border border-white/10 flex items-center justify-center mb-5 group-hover:scale-105 group-hover:bg-[#087E8B]/20 transition-all">
                  {getSpecialtyIcon(idx)}
                </div>
                <h3 className="text-base font-serif font-semibold text-white mb-2 group-hover:text-[#35A7A5] transition-colors">
                  {item.name}
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center text-[11px] text-gray-400 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#35A7A5] mr-2" />
                <span>Clinical Evaluation</span>
              </div>
            </div>
          ))}
        </div>

        {/* Informational Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-gray-400">
            For specific consultations regarding your mobility concerns, call our team at{' '}
            <a href={HOSPITAL_DATA.phoneHref} className="text-[#35A7A5] hover:underline font-semibold">
              {HOSPITAL_DATA.phone}
            </a>.
          </p>
        </div>

      </div>
    </section>
  );
};
