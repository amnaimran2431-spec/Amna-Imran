import React from 'react';
import { Phone, AlertCircle } from 'lucide-react';
import { HOSPITAL_DATA } from '../data/hospitalData';

export const EmergencyNotice: React.FC = () => {
  return (
    <section className="bg-[#102733] border-y border-[#35A7A5]/30 py-8 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-full bg-[#087E8B]/30 border border-[#35A7A5]/40 flex items-center justify-center flex-shrink-0 mx-auto md:mx-0">
              <AlertCircle className="w-6 h-6 text-[#35A7A5]" />
            </div>
            <div>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <span className="text-sm font-bold tracking-widest uppercase text-[#35A7A5]">
                  NEED MEDICAL ASSISTANCE?
                </span>
                <span className="text-gray-400 text-xs hidden sm:inline">•</span>
                <span className="text-xs text-gray-300 hidden sm:inline">042-35407172</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-300 mt-1 max-w-2xl font-light">
                {HOSPITAL_DATA.emergencyNote}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 flex-shrink-0">
            <a
              href={HOSPITAL_DATA.phoneHref}
              className="inline-flex items-center gap-2.5 bg-[#087E8B] hover:bg-[#076d78] text-white px-6 py-3 rounded-md text-xs font-bold tracking-wider uppercase transition-all shadow-md active:scale-95"
            >
              <Phone className="w-4 h-4" />
              <span>CALL OMC: 042-35407172</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
