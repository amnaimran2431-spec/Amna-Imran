import React from 'react';
import { MapPin, Phone, Clock, Navigation, Building2, CheckCircle2 } from 'lucide-react';
import { HOSPITAL_DATA } from '../data/hospitalData';

export const ContactLocationSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-[#FCFCFA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#087E8B] block mb-3">
            05 / CONTACT &amp; LOCATION
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#0B1720] leading-tight mb-4">
            VISIT OMC LAHORE
          </h2>
          <p className="text-base text-[#65727A] leading-relaxed">
            Conveniently situated in Shadman II on main Jail Road, directly across from Kinnaird College for Women.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Contact Details Card (5 cols) */}
          <div className="lg:col-span-5 bg-white p-8 rounded-xl border border-[#0B1720]/10 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="font-serif font-bold text-xl text-[#0B1720]">
                  Hospital Reception &amp; Help Desk
                </span>
              </div>

              {/* Address */}
              <div className="mb-6 flex items-start gap-3.5">
                <div className="p-2.5 rounded bg-[#F5FAFA] text-[#087E8B] flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B1720] mb-1">
                    Hospital Address
                  </h4>
                  <p className="text-sm text-[#17212B] leading-relaxed">
                    {HOSPITAL_DATA.address}
                  </p>
                  <p className="text-xs text-[#087E8B] font-medium mt-1">
                    Landmark: {HOSPITAL_DATA.landmark}
                  </p>
                </div>
              </div>

              {/* Phone Line */}
              <div className="mb-6 flex items-start gap-3.5">
                <div className="p-2.5 rounded bg-[#F5FAFA] text-[#087E8B] flex-shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B1720] mb-1">
                    Direct Telephone Line
                  </h4>
                  <a
                    href={HOSPITAL_DATA.phoneHref}
                    className="text-lg font-serif font-bold text-[#087E8B] hover:underline"
                  >
                    {HOSPITAL_DATA.phone}
                  </a>
                  <p className="text-xs text-[#65727A] mt-0.5">
                    For inquiries, appointment bookings, and consultation schedules.
                  </p>
                </div>
              </div>

              {/* Consultation Scheduling Hours */}
              <div className="mb-6 flex items-start gap-3.5">
                <div className="p-2.5 rounded bg-[#F5FAFA] text-[#087E8B] flex-shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B1720] mb-1">
                    Consultation &amp; Desk Hours
                  </h4>
                  <p className="text-xs text-[#17212B]">
                    <strong>Monday – Saturday:</strong> Specialist appointments scheduled according to doctor roster.
                  </p>
                  <p className="text-xs text-[#65727A] mt-0.5">
                    Please call ahead to confirm individual consultant timings.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="pt-6 border-t border-[#0B1720]/10 flex flex-col sm:flex-row gap-3">
              <a
                href={HOSPITAL_DATA.phoneHref}
                className="flex-1 py-3 bg-[#087E8B] hover:bg-[#076d78] text-white rounded text-xs font-bold uppercase tracking-wider text-center transition-colors"
              >
                Call: {HOSPITAL_DATA.phone}
              </a>
              <a
                href={HOSPITAL_DATA.mapsQuery}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 border border-[#0B1720]/20 hover:border-[#087E8B] text-[#0B1720] hover:text-[#087E8B] rounded text-xs font-bold uppercase tracking-wider text-center transition-colors flex items-center justify-center gap-1.5"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>

          {/* Location Visual Card (7 cols) */}
          <div className="lg:col-span-7 bg-[#102733] text-white p-8 sm:p-10 rounded-xl border border-white/10 shadow-sm flex flex-col justify-between relative overflow-hidden">
            {/* Background Map Grid */}
            <div className="absolute inset-0 bg-medical-grid-dark opacity-30 pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-[#35A7A5]" />
                  <span className="text-xs uppercase tracking-widest text-[#35A7A5] font-semibold">
                    LOCATION HIGHLIGHTS
                  </span>
                </div>
                <span className="font-urdu text-sm text-gray-300" dir="rtl">
                  {HOSPITAL_DATA.urduName}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif text-white font-normal mb-4">
                Accessible Orthopaedic Care in Central Lahore
              </h3>

              <p className="text-sm text-gray-300 font-light leading-relaxed mb-6">
                Situated on the vibrant arterial Jail Road corridor, Orthopaedic Hospital &amp; Medical Complex (OMC) is easily reachable from Gulberg, Shadman, Model Town, Cantt, and surrounding Lahore neighborhoods.
              </p>

              {/* Location Landmark List */}
              <div className="space-y-3 mb-8 bg-black/25 p-5 rounded-lg border border-white/10 text-xs text-gray-200">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#35A7A5] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Directly Opposite:</strong> Kinnaird College for Women, Jail Road entrance.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#35A7A5] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Neighborhood:</strong> Shadman II, central medical &amp; educational hub.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#35A7A5] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Convenience:</strong> Dedicated patient drop-off and hospital reception assistance.
                  </span>
                </div>
              </div>
            </div>

            {/* Navigation CTA */}
            <div className="relative z-10 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-gray-400">
                <span>15 Jail Road • Shadman II • Lahore</span>
              </div>

              <a
                href={HOSPITAL_DATA.mapsQuery}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#35A7A5] hover:bg-[#2e9492] text-[#0B1720] px-6 py-3 rounded text-xs font-bold uppercase tracking-wider transition-all"
              >
                <Navigation className="w-4 h-4" />
                <span>OPEN IN GOOGLE MAPS</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
