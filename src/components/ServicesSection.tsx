import React, { useState } from 'react';
import { ArrowUpRight, Activity, Bone, Stethoscope, HeartPulse, ShieldAlert, Sparkles, X } from 'lucide-react';
import { HOSPITAL_DATA } from '../data/hospitalData';

interface ServicesSectionProps {
  onSelectServiceForBooking: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForBooking }) => {
  const [activeService, setActiveService] = useState<(typeof HOSPITAL_DATA.services)[0] | null>(null);

  const getServiceIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Stethoscope className="w-5 h-5 text-[#087E8B]" />;
      case 1:
        return <Bone className="w-5 h-5 text-[#087E8B]" />;
      case 2:
        return <ShieldAlert className="w-5 h-5 text-[#087E8B]" />;
      case 3:
        return <Activity className="w-5 h-5 text-[#087E8B]" />;
      case 4:
        return <Sparkles className="w-5 h-5 text-[#087E8B]" />;
      case 5:
        return <HeartPulse className="w-5 h-5 text-[#087E8B]" />;
      default:
        return <Stethoscope className="w-5 h-5 text-[#087E8B]" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-[#F5FAFA] border-t border-[#0B1720]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#087E8B] block mb-3">
            02 / SERVICES
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#0B1720] leading-tight mb-4">
            ORTHOPAEDIC CARE, <br />CLEARLY EXPLAINED.
          </h2>
          <p className="text-base sm:text-lg text-[#65727A] leading-relaxed">
            Explore areas of orthopaedic care and consultation in a clear, patient-friendly format.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {HOSPITAL_DATA.services.map((service, idx) => (
            <div
              key={service.id}
              onClick={() => setActiveService(service)}
              className="group cursor-pointer bg-white rounded-lg p-8 border border-[#0B1720]/10 hover:border-[#087E8B] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded bg-[#F5FAFA] group-hover:bg-[#DDEFF2] transition-colors">
                      {getServiceIcon(idx)}
                    </div>
                    <span className="text-xs font-semibold text-[#65727A] tracking-widest font-mono">
                      {service.number}
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-[#0B1720]/10 flex items-center justify-center text-[#65727A] group-hover:text-white group-hover:bg-[#087E8B] group-hover:border-[#087E8B] transition-all">
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                <h3 className="text-lg font-serif font-bold text-[#0B1720] mb-3 group-hover:text-[#087E8B] transition-colors leading-snug">
                  {service.title}
                </h3>
                
                <p className="text-sm text-[#65727A] leading-relaxed line-clamp-3 mb-6">
                  {service.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-[#0B1720]/5 flex items-center justify-between text-xs font-semibold text-[#087E8B]">
                <span>VIEW CLINICAL SCOPE</span>
                <span className="text-[11px] text-[#65727A] font-normal group-hover:text-[#087E8B]">
                  Details &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Clinical Disclaimer */}
        <div className="mt-12 p-4 bg-white/70 rounded-md border border-[#0B1720]/10 text-center max-w-2xl mx-auto">
          <p className="text-xs text-[#65727A]">
            <span className="font-semibold text-[#0B1720]">Clinical Note: </span>
            {HOSPITAL_DATA.disclaimer}
          </p>
        </div>

      </div>

      {/* Service Detail Modal */}
      {activeService && (
        <div
          className="fixed inset-0 z-50 bg-[#0B1720]/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActiveService(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-white rounded-lg max-w-lg w-full overflow-hidden shadow-2xl border border-[#0B1720]/20 animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-48 bg-[#0B1720] overflow-hidden">
              <img
                src={activeService.image}
                alt={activeService.title}
                className="w-full h-full object-cover opacity-80"
              />
              <button
                type="button"
                onClick={() => setActiveService(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[11px] uppercase tracking-widest text-[#35A7A5] font-semibold">
                  SERVICE OVERVIEW • {activeService.number}
                </span>
                <h3 className="text-xl font-serif text-white font-bold">
                  {activeService.title}
                </h3>
              </div>
            </div>

            <div className="p-6">
              <p className="text-sm text-[#17212B] leading-relaxed mb-5">
                {activeService.details}
              </p>

              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B1720] mb-2.5">
                  Common Areas of Attention
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {activeService.focusAreas.map((item) => (
                    <div key={item} className="text-xs text-[#65727A] flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#087E8B]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-[#0B1720]/10">
                <button
                  type="button"
                  onClick={() => {
                    const chosen = activeService.title;
                    setActiveService(null);
                    onSelectServiceForBooking(chosen);
                  }}
                  className="flex-1 bg-[#087E8B] hover:bg-[#076d78] text-white py-2.5 rounded-md text-xs font-semibold tracking-wider uppercase transition-colors text-center"
                >
                  Book for this Service
                </button>
                <button
                  type="button"
                  onClick={() => setActiveService(null)}
                  className="px-4 py-2.5 border border-[#0B1720]/20 text-[#0B1720] rounded-md text-xs font-semibold tracking-wider uppercase hover:bg-gray-50"
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
