import React from 'react';
import { Phone, ArrowDown, Shield, MapPin, ChevronRight } from 'lucide-react';
import { HOSPITAL_DATA } from '../data/hospitalData';

interface HeroProps {
  onBookAppointment: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookAppointment }) => {
  const scrollToExplore = () => {
    const el = document.getElementById('trust-intro');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] lg:min-h-[94vh] flex items-center pt-24 pb-16 bg-[#0B1720] text-white overflow-hidden"
    >
      {/* Background Medical Grid & Ambient Glow */}
      <div className="absolute inset-0 bg-medical-grid-dark opacity-35 pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#087E8B]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 left-10 w-80 h-80 bg-[#35A7A5]/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Editorial Content (7 columns on desktop) */}
          <div className="lg:col-span-7 flex flex-col items-start z-10 pt-4">
            
            {/* Location & Urdu Eyebrow Badge */}
            <div className="inline-flex items-center gap-3 mb-6 flex-wrap">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#35A7A5] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#35A7A5] inline-block animate-pulse" />
                ORTHOPAEDIC HOSPITAL &amp; MEDICAL COMPLEX
              </span>
              <span className="text-gray-500">|</span>
              <span className="font-urdu text-sm text-gray-200" dir="rtl">
                {HOSPITAL_DATA.urduName}
              </span>
            </div>

            {/* Main Editorial Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-serif font-normal leading-[1.08] tracking-tight text-white mb-6">
              MOVING YOU <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-[#35A7A5]">
                TOWARD A
              </span> <br />
              HEALTHIER FUTURE
            </h1>

            {/* Decorative Teal Line */}
            <div className="w-20 h-[3px] bg-[#087E8B] mb-6" />

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-gray-300 font-light max-w-xl leading-relaxed mb-8">
              Professional orthopaedic care focused on helping patients understand their condition, explore treatment options, and move with greater confidence.
            </p>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                type="button"
                onClick={onBookAppointment}
                className="group inline-flex items-center justify-center gap-3 bg-[#087E8B] hover:bg-[#076d78] text-white px-7 py-3.5 rounded-md font-semibold text-xs tracking-wider uppercase transition-all shadow-lg shadow-[#087E8B]/20 active:scale-95"
              >
                <span>BOOK AN APPOINTMENT</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href={HOSPITAL_DATA.phoneHref}
                className="inline-flex items-center justify-center gap-2.5 bg-white/5 hover:bg-white/10 text-white border border-white/20 px-6 py-3.5 rounded-md font-medium text-xs tracking-wider uppercase transition-colors"
              >
                <Phone className="w-4 h-4 text-[#35A7A5]" />
                <span>CALL {HOSPITAL_DATA.phone}</span>
              </a>
            </div>

            {/* Subtle Location Kicker & Notice */}
            <div className="flex items-center gap-6 pt-4 border-t border-white/10 text-xs text-gray-400">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#35A7A5]" />
                <span>{HOSPITAL_DATA.locationKicker}</span>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 text-gray-400">
                <Shield className="w-3.5 h-3.5 text-[#35A7A5]" />
                <span>Opposite Kinnaird College</span>
              </div>
            </div>

          </div>

          {/* Right Image Composition (5 columns on desktop) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Decorative Frame */}
              <div className="absolute -inset-3 rounded-xl border border-white/10 pointer-events-none transform translate-x-2 translate-y-2 hidden sm:block" />
              
              {/* Main Realistic Image Card */}
              <div className="relative rounded-lg overflow-hidden border border-white/20 shadow-2xl bg-[#102733] aspect-[4/3] sm:aspect-[4/3] lg:aspect-[4/5] max-h-[540px]">
                <img
                  src={HOSPITAL_DATA.images.heroConsultation}
                  alt="Doctor consulting patient in modern orthopaedic clinic"
                  className="w-full h-full object-cover object-center filter saturate-[0.95]"
                  loading="eager"
                />
                
                {/* Subtle gradient overlay at bottom of photo */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1720] via-transparent to-transparent opacity-80" />

                {/* Overlaid Editorial Meta Box */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded bg-[#0B1720]/85 backdrop-blur-md border border-white/10">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="text-[#35A7A5] font-semibold uppercase tracking-wider text-[11px]">
                      PATIENT-FIRST CONSULTATIONS
                    </span>
                    <span className="text-gray-400 text-[11px]">OMC • Lahore</span>
                  </div>
                  <p className="text-xs text-gray-200 font-light leading-snug">
                    Dedicated discussion of bone, joint, and musculoskeletal mobility.
                  </p>
                </div>
              </div>

              {/* Accent Floating Badge */}
              <div className="absolute -top-4 -left-4 hidden md:flex items-center gap-2 bg-[#102733] border border-white/15 px-3 py-1.5 rounded shadow-lg text-[11px] text-gray-200">
                <div className="w-2 h-2 rounded-full bg-[#35A7A5]" />
                <span>Specialized Orthopaedic Care</span>
              </div>

            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 pt-6 flex justify-center">
          <button
            type="button"
            onClick={scrollToExplore}
            className="group flex flex-col items-center gap-2 text-[11px] uppercase tracking-widest text-gray-400 hover:text-white transition-colors"
          >
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown className="w-3.5 h-3.5 text-[#35A7A5] transition-transform group-hover:translate-y-1" />
          </button>
        </div>

      </div>
    </section>
  );
};
