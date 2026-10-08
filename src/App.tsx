/**
 * Orthopaedic Hospital & Medical Complex (OMC), Lahore — او ایم سی ہسپتال
 * Complete production-ready responsive healthcare web application.
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustIntro } from './components/TrustIntro';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { SpecialtiesSection } from './components/SpecialtiesSection';
import { FeaturedExperience } from './components/FeaturedExperience';
import { DoctorsSection } from './components/DoctorsSection';
import { PatientJourney } from './components/PatientJourney';
import { FacilitiesSection } from './components/FacilitiesSection';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { EmergencyNotice } from './components/EmergencyNotice';
import { AppointmentSection } from './components/AppointmentSection';
import { ContactLocationSection } from './components/ContactLocationSection';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('ORTHOPAEDIC CONSULTATION');
  const [selectedDoctor, setSelectedDoctor] = useState<string>('');

  const scrollToAppointment = () => {
    const el = document.getElementById('appointment');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceForBooking = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    scrollToAppointment();
  };

  const handleBookWithDoctor = (doctorName: string) => {
    setSelectedDoctor(doctorName);
    scrollToAppointment();
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FCFCFA] text-[#17212B] font-sans antialiased selection:bg-[#35A7A5]/20 selection:text-[#0B1720]">
      {/* Top Sticky Header */}
      <Navbar onBookAppointment={scrollToAppointment} />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onBookAppointment={scrollToAppointment} />

        {/* Trust Introduction */}
        <TrustIntro />

        {/* About OMC */}
        <AboutSection />

        {/* Services Section */}
        <ServicesSection onSelectServiceForBooking={handleSelectServiceForBooking} />

        {/* Specialties / Areas of Care (Dark Navy) */}
        <SpecialtiesSection />

        {/* Featured Medical Experience Image Section */}
        <FeaturedExperience onBookAppointment={scrollToAppointment} />

        {/* Medical Team / Doctors */}
        <DoctorsSection onBookWithDoctor={handleBookWithDoctor} />

        {/* Patient Journey Process */}
        <PatientJourney />

        {/* Facilities Section */}
        <FacilitiesSection />

        {/* Editorial Photo Gallery */}
        <GallerySection />

        {/* Patient Experiences / Testimonials */}
        <TestimonialsSection />

        {/* Emergency / Important Assistance Strip */}
        <EmergencyNotice />

        {/* Appointment CTA & Interactive Booking Form */}
        <AppointmentSection
          prefilledService={selectedService}
          prefilledDoctor={selectedDoctor}
        />

        {/* Contact & Verified Location */}
        <ContactLocationSection />
      </main>

      {/* Hospital Footer */}
      <Footer />

      {/* Mobile Sticky Quick Action Bar */}
      <MobileStickyBar onBookAppointment={scrollToAppointment} />
    </div>
  );
}
