import React, { useState } from 'react';
import { Phone, MapPin, ChevronRight, X } from 'lucide-react';
import { HOSPITAL_DATA } from '../data/hospitalData';

export const Footer: React.FC = () => {
  const [modalType, setModalType] = useState<'privacy' | 'terms' | null>(null);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0B1720] text-white border-t border-white/10 pt-16 pb-24 md:pb-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14 border-b border-white/10">
          
          {/* Brand Identity Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-sm bg-[#087E8B] flex items-center justify-center font-bold text-white text-lg tracking-wider border border-white/20">
                OMC
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg text-white leading-tight">
                  Orthopaedic Hospital &amp; Medical Complex
                </h3>
                <p className="font-urdu text-sm text-[#35A7A5]" dir="rtl">
                  {HOSPITAL_DATA.urduName}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed max-w-sm">
              Professional orthopaedic healthcare and patient-focused medical services in Lahore. Dedicated to clear consultations, mobility restoration, and compassionate clinical care.
            </p>

            <div className="pt-2 text-xs text-gray-400">
              <p>Jail Road • Shadman II • Lahore, Pakistan</p>
            </div>
          </div>

          {/* Quick Navigation (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#35A7A5] mb-4">
              HOSPITAL DIRECTORY
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300">
              {HOSPITAL_DATA.navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(item.href);
                    }}
                    className="hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3 h-3 text-[#087E8B]" />
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Desk Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#35A7A5] mb-4">
              CONTACT &amp; VISITS
            </h4>

            <div className="flex items-start gap-3 text-xs text-gray-300">
              <Phone className="w-4 h-4 text-[#35A7A5] flex-shrink-0 mt-0.5" />
              <div>
                <a href={HOSPITAL_DATA.phoneHref} className="text-white font-bold hover:underline block text-sm">
                  {HOSPITAL_DATA.phone}
                </a>
                <span className="text-[11px] text-gray-400">Reception &amp; Appointment Desk</span>
              </div>
            </div>

            <div className="flex items-start gap-3 text-xs text-gray-300">
              <MapPin className="w-4 h-4 text-[#35A7A5] flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-gray-200">
                  {HOSPITAL_DATA.addressShort}
                </p>
                <p className="text-[11px] text-gray-400">
                  Opposite Kinnaird College for Women, Lahore
                </p>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={HOSPITAL_DATA.mapsQuery}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-xs text-[#35A7A5] hover:underline"
              >
                Open location on Google Maps &rarr;
              </a>
            </div>
          </div>

        </div>

        {/* Informational Disclaimer */}
        <div className="py-6 border-b border-white/5 text-[11px] text-gray-400 leading-relaxed">
          <p>
            <strong className="text-gray-300">Notice: </strong>
            {HOSPITAL_DATA.disclaimer}
          </p>
        </div>

        {/* Bottom Legal Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>
            &copy; 2026 Orthopaedic Hospital &amp; Medical Complex (OMC), Lahore. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => setModalType('privacy')}
              className="hover:text-white transition-colors underline-offset-4 hover:underline"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => setModalType('terms')}
              className="hover:text-white transition-colors underline-offset-4 hover:underline"
            >
              Terms &amp; Conditions
            </button>
          </div>
        </div>

      </div>

      {/* Legal Policy Modals */}
      {modalType && (
        <div
          className="fixed inset-0 z-50 bg-[#0B1720]/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setModalType(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-white text-[#17212B] rounded-lg max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-gray-200 animate-in fade-in duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-gray-200 mb-4">
              <h3 className="font-serif font-bold text-xl text-[#0B1720]">
                {modalType === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
              </h3>
              <button
                type="button"
                onClick={() => setModalType(null)}
                className="text-gray-400 hover:text-gray-600 p-1"
                aria-label="Close legal modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="text-xs text-[#65727A] space-y-3 max-h-[60vh] overflow-y-auto pr-2 leading-relaxed">
              {modalType === 'privacy' ? (
                <>
                  <p>
                    Orthopaedic Hospital &amp; Medical Complex (OMC), Lahore values patient confidentiality. Information submitted through this website is exclusively utilized to coordinate appointments and facilitate patient inquiries.
                  </p>
                  <p>
                    We advise patients not to submit sensitive diagnostic files or complete medical histories over unencrypted public web forms. Consultations and diagnostic evaluations are conducted in person at 15 Jail Road, Shadman II, Lahore.
                  </p>
                  <p>
                    For queries regarding patient record management, please contact the hospital administration desk directly at 042-35407172.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    The information provided on this website is for general informational and educational purposes related to orthopaedic healthcare. It does not constitute individual clinical advice or formal medical diagnosis.
                  </p>
                  <p>
                    Clinical decisions, prescriptions, and surgical evaluations require direct physical examination by a registered medical practitioner at Orthopaedic Hospital &amp; Medical Complex.
                  </p>
                  <p>
                    Appointment bookings requested online are subject to verification and schedule confirmation by the hospital reception.
                  </p>
                </>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200 text-right">
              <button
                type="button"
                onClick={() => setModalType(null)}
                className="px-5 py-2 bg-[#087E8B] hover:bg-[#076d78] text-white rounded text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                Understood
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
