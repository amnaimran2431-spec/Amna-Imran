import React, { useState } from 'react';
import { ArrowRight, MapPin, Building2, CheckCircle2 } from 'lucide-react';
import { HOSPITAL_DATA } from '../data/hospitalData';

export const AboutSection: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="about" className="py-24 bg-[#FCFCFA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Asymmetrical Editorial Photography */}
          <div className="lg:col-span-6 relative">
            <div className="relative">
              
              {/* Primary Image */}
              <div className="rounded-lg overflow-hidden border border-[#0B1720]/10 shadow-lg bg-white aspect-[4/3] sm:aspect-[16/11]">
                <img
                  src={HOSPITAL_DATA.images.hospitalReception}
                  alt="Hospital reception and patient entrance at OMC Lahore"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Smaller Overlapping Editorial Card */}
              <div className="sm:absolute -bottom-8 -right-6 mt-4 sm:mt-0 max-w-xs bg-[#0B1720] text-white p-5 rounded-lg border border-white/10 shadow-xl">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-[#087E8B] rounded text-white mt-0.5">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#35A7A5] block font-semibold">
                      CENTRAL LAHORE LOCATION
                    </span>
                    <p className="text-xs text-gray-200 mt-1 leading-snug">
                      Opposite Kinnaird College on Jail Road, Shadman II.
                    </p>
                  </div>
                </div>
              </div>

              {/* Subtle background decorative box */}
              <div className="hidden lg:block absolute -top-6 -left-6 w-32 h-32 border-l-2 border-t-2 border-[#087E8B]/30 pointer-events-none" />
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-6 flex flex-col items-start">
            
            {/* Section Label */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#087E8B]">
                01 / ABOUT OMC
              </span>
              <span className="font-urdu text-xs text-[#65727A]" dir="rtl">
                {HOSPITAL_DATA.urduName}
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0B1720] leading-[1.15] mb-6">
              A PROFESSIONAL APPROACH TO ORTHOPAEDIC CARE
            </h2>

            {/* Content Paragraphs */}
            <div className="space-y-4 text-base text-[#65727A] leading-relaxed mb-8">
              <p>
                Orthopaedic Hospital &amp; Medical Complex (OMC), Lahore is focused on providing patients with a professional environment for orthopaedic consultation, evaluation and care.
              </p>
              <p>
                Our website should make it easy for patients and families to understand available services, find the hospital, and request an appointment.
              </p>
              
              {expanded && (
                <div className="pt-2 space-y-4 animate-in fade-in duration-300">
                  <p>
                    Whether addressing mobility challenges, recovering from joint strains, or requiring structured clinical review, OMC offers dedicated spaces where patients are listened to with care.
                  </p>
                  <div className="bg-[#F5FAFA] p-4 rounded-md border border-[#0B1720]/10 text-xs text-[#17212B] space-y-2">
                    <div className="flex items-center gap-2 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#087E8B]" />
                      <span>Dedicated orthopaedic consultations by appointment</span>
                    </div>
                    <div className="flex items-center gap-2 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#087E8B]" />
                      <span>Central accessibility in Shadman II, Lahore</span>
                    </div>
                    <div className="flex items-center gap-2 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#087E8B]" />
                      <span>Supportive patient reception and coordination staff</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* CTA Button */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => setExpanded(!expanded)}
                className="group inline-flex items-center gap-2 px-6 py-3 border border-[#0B1720]/20 hover:border-[#087E8B] text-[#0B1720] hover:text-[#087E8B] rounded-md text-xs font-semibold tracking-wider uppercase transition-all bg-white shadow-sm"
              >
                <span>{expanded ? 'SHOW LESS' : 'LEARN MORE ABOUT OMC'}</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-[#65727A] hover:text-[#087E8B] transition-colors py-3 px-2"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>View Hospital Location</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
