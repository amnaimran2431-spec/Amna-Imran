import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, ArrowUpRight } from 'lucide-react';
import { HOSPITAL_DATA } from '../data/hospitalData';

interface NavbarProps {
  onBookAppointment: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookAppointment }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0B1720]/95 backdrop-blur-md shadow-md py-3.5 border-b border-white/10 text-white'
            : 'bg-[#0B1720]/80 backdrop-blur-sm py-4 border-b border-white/10 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Left Brand Identity */}
            <a
              href="#home"
              onClick={(e) => scrollToSection(e, '#home')}
              className="flex items-center gap-3.5 group text-left"
            >
              <div className="w-10 h-10 rounded-sm bg-[#087E8B] flex items-center justify-center font-bold text-white text-lg tracking-wider border border-white/20 shadow-sm transition-transform group-hover:scale-105">
                OMC
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-white tracking-tight text-sm sm:text-base leading-tight">
                    Orthopaedic Hospital &amp; Medical Complex
                  </span>
                  <span className="font-urdu text-xs sm:text-sm text-[#35A7A5] font-semibold" dir="rtl">
                    {HOSPITAL_DATA.urduName}
                  </span>
                </div>
                <span className="text-[11px] text-gray-300 tracking-wider uppercase font-medium">
                  Lahore • Jail Road, Shadman II
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7">
              {HOSPITAL_DATA.navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="text-xs uppercase tracking-widest text-gray-300 hover:text-white transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#35A7A5] hover:after:w-full after:transition-all"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Right Action / Contact */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href={HOSPITAL_DATA.phoneHref}
                className="flex items-center gap-2 text-xs uppercase tracking-wider text-gray-200 hover:text-white py-2 px-3 rounded hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
                title="Call Hospital Direct Line"
              >
                <Phone className="w-3.5 h-3.5 text-[#35A7A5]" />
                <span className="font-semibold">{HOSPITAL_DATA.phone}</span>
              </a>

              <button
                type="button"
                onClick={onBookAppointment}
                className="inline-flex items-center gap-2 bg-[#087E8B] hover:bg-[#076d78] text-white px-4 py-2.5 rounded-md text-xs font-semibold tracking-wider uppercase transition-all shadow-sm hover:shadow active:scale-95"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>BOOK APPOINTMENT</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                onClick={onBookAppointment}
                className="md:hidden text-xs bg-[#087E8B] text-white px-3 py-1.5 rounded font-medium"
              >
                Book
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded text-gray-300 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#35A7A5]"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Slide-down Navigation Menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-[#0B1720]/98 backdrop-blur-lg pt-24 pb-8 px-6 flex flex-col justify-between text-white lg:hidden animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="space-y-6 overflow-y-auto">
            <div className="border-b border-white/10 pb-4">
              <p className="text-xs uppercase tracking-widest text-[#35A7A5] font-semibold mb-1">
                {HOSPITAL_DATA.locationKicker}
              </p>
              <h3 className="text-lg font-serif">Orthopaedic Hospital &amp; Medical Complex</h3>
              <p className="font-urdu text-sm text-[#35A7A5]" dir="rtl">{HOSPITAL_DATA.urduName}</p>
            </div>

            <nav className="flex flex-col space-y-3">
              {HOSPITAL_DATA.navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="text-base uppercase tracking-wider py-2 text-gray-200 hover:text-[#35A7A5] border-b border-white/5 flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-gray-500" />
                </a>
              ))}
            </nav>
          </div>

          <div className="pt-6 border-t border-white/10 space-y-3">
            <a
              href={HOSPITAL_DATA.phoneHref}
              className="flex items-center justify-center gap-2 w-full py-3 border border-white/20 rounded-md text-sm font-medium hover:bg-white/5 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#35A7A5]" />
              <span>Call: {HOSPITAL_DATA.phone}</span>
            </a>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onBookAppointment();
              }}
              className="w-full py-3.5 bg-[#087E8B] hover:bg-[#076d78] text-white rounded-md text-sm font-semibold tracking-wider uppercase text-center"
            >
              Book An Appointment
            </button>
            <p className="text-[11px] text-center text-gray-400">
              15 Jail Road, opposite Kinnaird College, Shadman II, Lahore
            </p>
          </div>
        </div>
      )}
    </>
  );
};
