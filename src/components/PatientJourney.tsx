import React from 'react';
import { CalendarCheck, MessageSquare, ClipboardCheck, Activity } from 'lucide-react';
import { HOSPITAL_DATA } from '../data/hospitalData';

export const PatientJourney: React.FC = () => {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <CalendarCheck className="w-5 h-5 text-[#087E8B]" />;
      case 1:
        return <MessageSquare className="w-5 h-5 text-[#087E8B]" />;
      case 2:
        return <ClipboardCheck className="w-5 h-5 text-[#087E8B]" />;
      case 3:
        return <Activity className="w-5 h-5 text-[#087E8B]" />;
      default:
        return <CalendarCheck className="w-5 h-5 text-[#087E8B]" />;
    }
  };

  return (
    <section className="py-24 bg-[#F5FAFA] border-t border-[#0B1720]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#087E8B] block mb-3">
            PATIENT CARE PATHWAY
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#0B1720] leading-tight mb-4">
            YOUR VISIT, MADE SIMPLE.
          </h2>
          <p className="text-base sm:text-lg text-[#65727A] leading-relaxed">
            A clear, respectful process from initial scheduling to clinical consultation and informed treatment planning.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {HOSPITAL_DATA.patientJourney.map((item, index) => (
            <div
              key={item.step}
              className="relative bg-white p-7 rounded-lg border border-[#0B1720]/10 shadow-[0_2px_6px_rgba(11,23,32,0.03)] flex flex-col justify-between group hover:border-[#087E8B] transition-all"
            >
              <div>
                {/* Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-serif text-[#087E8B] font-light">
                    {item.step}
                  </span>
                  <div className="p-2.5 rounded bg-[#F5FAFA] group-hover:bg-[#DDEFF2] transition-colors">
                    {getStepIcon(index)}
                  </div>
                </div>

                {/* Step Title */}
                <h3 className="text-base font-bold uppercase tracking-wider text-[#0B1720] mb-1 group-hover:text-[#087E8B] transition-colors">
                  {item.title}
                </h3>
                <span className="text-xs text-[#087E8B] font-medium block mb-3">
                  {item.subtitle}
                </span>

                <p className="text-xs sm:text-sm text-[#65727A] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#0B1720]/5 text-[11px] text-[#65727A]">
                Step {index + 1} of 4
              </div>
            </div>
          ))}

        </div>

        {/* Clinical Disclaimer */}
        <div className="mt-12 text-center text-xs text-[#65727A]">
          <p className="italic">
            Treatment decisions and care pathways are strictly based on individual clinical assessment by your consulting physician.
          </p>
        </div>

      </div>
    </section>
  );
};
