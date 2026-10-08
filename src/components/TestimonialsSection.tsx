import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { HOSPITAL_DATA } from '../data/hospitalData';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + HOSPITAL_DATA.testimonials.length) % HOSPITAL_DATA.testimonials.length);
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % HOSPITAL_DATA.testimonials.length);
  };

  const current = HOSPITAL_DATA.testimonials[currentIndex];

  return (
    <section className="py-24 bg-[#FCFCFA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#087E8B] block mb-3">
            PATIENT VOICES
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#0B1720] leading-tight mb-4">
            PATIENT EXPERIENCES
          </h2>
          <p className="text-base text-[#65727A] leading-relaxed">
            Reflections from individuals and families who visited OMC for orthopaedic evaluations and consultation care.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto bg-[#F5FAFA] p-8 sm:p-12 rounded-xl border border-[#0B1720]/10 shadow-sm relative">
          
          <div className="flex items-start gap-4 mb-8">
            <div className="w-12 h-12 rounded bg-[#087E8B]/10 flex items-center justify-center text-[#087E8B] flex-shrink-0">
              <Quote className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#087E8B]">
                {current.serviceType}
              </span>
              <p className="text-xs text-[#65727A]">
                Consultation in Lahore
              </p>
            </div>
          </div>

          {/* Quote Text */}
          <blockquote className="text-xl sm:text-2xl md:text-3xl font-serif text-[#0B1720] leading-relaxed mb-8 italic">
            &ldquo;{current.comment}&rdquo;
          </blockquote>

          {/* Author Meta & Controls */}
          <div className="flex items-center justify-between pt-6 border-t border-[#0B1720]/10">
            <div>
              <p className="text-sm font-bold text-[#0B1720]">
                {current.patientName}
              </p>
              <p className="text-xs text-[#65727A]">
                {current.location}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full border border-[#0B1720]/20 flex items-center justify-center text-[#0B1720] hover:bg-white transition-colors"
                aria-label="Previous patient story"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <span className="text-xs font-medium text-[#65727A]">
                {currentIndex + 1} / {HOSPITAL_DATA.testimonials.length}
              </span>

              <button
                type="button"
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full border border-[#0B1720]/20 flex items-center justify-center text-[#0B1720] hover:bg-white transition-colors"
                aria-label="Next patient story"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

        {/* Informative Disclaimer */}
        <div className="mt-8 text-center">
          <p className="text-xs text-[#65727A]">
            Representative feedback reflecting general patient experiences. Clinical outcomes and recovery times vary based on individual diagnosis.
          </p>
        </div>

      </div>
    </section>
  );
};
