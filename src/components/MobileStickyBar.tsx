import React from 'react';
import { Phone, Calendar, Navigation } from 'lucide-react';
import { HOSPITAL_DATA } from '../data/hospitalData';

interface MobileStickyBarProps {
  onBookAppointment: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onBookAppointment }) => {
  return (
    <aside
      aria-label="Mobile quick actions"
      className="fixed bottom-0 left-0 right-0 z-40 bg-[#0B1720]/95 backdrop-blur-md border-t border-white/15 px-3 py-2.5 md:hidden shadow-2xl"
    >
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* CALL */}
        <a
          href={HOSPITAL_DATA.phoneHref}
          className="flex flex-col items-center justify-center py-2 px-1 rounded bg-white/5 hover:bg-white/10 text-white transition-colors border border-white/10 active:scale-95"
        >
          <Phone className="w-4 h-4 text-[#35A7A5] mb-1" />
          <span className="text-[10px] font-bold uppercase tracking-wider">CALL</span>
        </a>

        {/* APPOINTMENT */}
        <button
          type="button"
          onClick={onBookAppointment}
          className="flex flex-col items-center justify-center py-2 px-1 rounded bg-[#087E8B] hover:bg-[#076d78] text-white transition-colors shadow-sm active:scale-95"
        >
          <Calendar className="w-4 h-4 text-white mb-1" />
          <span className="text-[10px] font-bold uppercase tracking-wider">APPOINTMENT</span>
        </button>

        {/* DIRECTIONS */}
        <a
          href={HOSPITAL_DATA.mapsQuery}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded bg-white/5 hover:bg-white/10 text-white transition-colors border border-white/10 active:scale-95"
        >
          <Navigation className="w-4 h-4 text-[#35A7A5] mb-1" />
          <span className="text-[10px] font-bold uppercase tracking-wider">DIRECTIONS</span>
        </a>
      </div>
    </aside>
  );
};
