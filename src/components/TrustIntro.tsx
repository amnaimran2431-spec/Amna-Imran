import React from 'react';
import { HOSPITAL_DATA } from '../data/hospitalData';

export const TrustIntro: React.FC = () => {
  return (
    <section id="trust-intro" className="py-20 bg-[#F5FAFA] border-b border-[#0B1720]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#087E8B] block mb-3">
            PATIENT-CENTRED ORTHOPAEDIC CARE
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#0B1720] leading-tight mb-5">
            CARE BUILT AROUND YOUR RECOVERY.
          </h2>
          <p className="text-base sm:text-lg text-[#65727A] leading-relaxed">
            At Orthopaedic Hospital &amp; Medical Complex, we aim to provide a clear, professional and supportive healthcare experience for patients seeking orthopaedic consultation and care.
          </p>
        </div>

        {/* 3 Trust Indicators (Clean editorial blocks, NO fake stats) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {HOSPITAL_DATA.trustIndicators.map((indicator) => (
            <div
              key={indicator.number}
              className="bg-white p-8 rounded-lg border border-[#0B1720]/10 shadow-[0_2px_8px_rgba(11,23,32,0.04)] hover:border-[#087E8B]/40 transition-all group"
            >
              <div className="text-3xl font-serif text-[#087E8B] mb-4 font-normal">
                {indicator.number}
              </div>
              <h3 className="text-sm font-bold tracking-wider uppercase text-[#0B1720] mb-3 group-hover:text-[#087E8B] transition-colors">
                {indicator.title}
              </h3>
              <p className="text-sm text-[#65727A] leading-relaxed font-normal">
                {indicator.description}
              </p>
              <div className="mt-6 w-8 h-[2px] bg-[#087E8B]/30 group-hover:w-16 group-hover:bg-[#087E8B] transition-all" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
