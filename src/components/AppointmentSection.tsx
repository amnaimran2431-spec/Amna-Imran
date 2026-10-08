import React, { useState } from 'react';
import { Calendar, Clock, Phone, Mail, User, CheckCircle2, AlertCircle, Shield, ArrowRight } from 'lucide-react';
import { HOSPITAL_DATA } from '../data/hospitalData';

interface AppointmentSectionProps {
  prefilledService?: string;
  prefilledDoctor?: string;
}

export const AppointmentSection: React.FC<AppointmentSectionProps> = ({
  prefilledService,
  prefilledDoctor,
}) => {
  const [formData, setFormData] = useState({
    patientName: '',
    phone: '',
    email: '',
    service: prefilledService || 'ORTHOPAEDIC CONSULTATION',
    preferredDoctor: prefilledDoctor || '',
    preferredDate: '',
    preferredTime: 'Morning (10:00 AM – 1:00 PM)',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    referenceId: string;
    patientName: string;
    service: string;
    date: string;
    time: string;
  } | null>(null);

  // Sync if prefilledService changes
  React.useEffect(() => {
    if (prefilledService) {
      setFormData((prev) => ({ ...prev, service: prefilledService }));
    }
  }, [prefilledService]);

  // Sync if prefilledDoctor changes
  React.useEffect(() => {
    if (prefilledDoctor) {
      setFormData((prev) => ({ ...prev, preferredDoctor: prefilledDoctor }));
    }
  }, [prefilledDoctor]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.patientName.trim()) {
      errs.patientName = 'Patient full name is required';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Contact phone number is required';
    } else if (formData.phone.replace(/[^0-9]/g, '').length < 8) {
      errs.phone = 'Please enter a valid phone number (e.g. 0300-1234567 or 042-35407172)';
    }

    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }

    if (!formData.preferredDate) {
      errs.preferredDate = 'Please select your preferred appointment date';
    } else {
      const selected = new Date(formData.preferredDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selected < today) {
        errs.preferredDate = 'Please select today or a future date';
      }
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate realistic request confirmation
    setTimeout(() => {
      setIsSubmitting(false);
      const refCode = `OMC-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmittedData({
        referenceId: refCode,
        patientName: formData.patientName,
        service: formData.service,
        date: formData.preferredDate,
        time: formData.preferredTime,
      });
    }, 800);
  };

  const resetForm = () => {
    setSubmittedData(null);
    setFormData({
      patientName: '',
      phone: '',
      email: '',
      service: 'ORTHOPAEDIC CONSULTATION',
      preferredDoctor: '',
      preferredDate: '',
      preferredTime: 'Morning (10:00 AM – 1:00 PM)',
      message: '',
    });
    setErrors({});
  };

  return (
    <section id="appointment" className="py-24 bg-[#0B1720] text-white relative overflow-hidden">
      {/* Background medical grid and soft radial glow */}
      <div className="absolute inset-0 bg-medical-grid-dark opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#087E8B]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading and Context */}
          <div className="lg:col-span-5 flex flex-col justify-between pt-4">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#35A7A5] block mb-3">
                CONSULTATION REQUEST
              </span>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white leading-tight mb-6">
                TAKE THE NEXT STEP <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-[#35A7A5]">
                  TOWARD BETTER MOBILITY.
                </span>
              </h2>

              <p className="text-base text-gray-300 font-light leading-relaxed mb-8">
                Request an appointment and begin a professional conversation about your orthopaedic care. Our coordination desk will review and confirm availability.
              </p>

              {/* Direct Call Alternative */}
              <div className="bg-[#102733] p-6 rounded-lg border border-white/10 mb-8 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded bg-[#087E8B]/20 text-[#35A7A5]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 uppercase tracking-wider block">
                      Prefer To Schedule By Phone?
                    </span>
                    <a
                      href={HOSPITAL_DATA.phoneHref}
                      className="text-lg font-bold text-white hover:text-[#35A7A5] transition-colors"
                    >
                      {HOSPITAL_DATA.phone}
                    </a>
                  </div>
                </div>
                <p className="text-xs text-gray-400">
                  Hospital Coordination Desk: 15 Jail Road, Shadman II, Lahore.
                </p>
              </div>

              {/* Patient Trust Pillars */}
              <div className="space-y-3 text-xs text-gray-300">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#35A7A5]" />
                  <span>Confidential patient handling</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#35A7A5]" />
                  <span>Timely verification by our desk</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Appointment Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-white text-[#17212B] rounded-xl p-6 sm:p-10 shadow-2xl border border-white/20">
              
              {submittedData ? (
                /* Success Confirmation State */
                <div className="py-8 text-center space-y-6">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div>
                    <span className="text-xs uppercase tracking-widest font-semibold text-emerald-700 block mb-1">
                      REQUEST SUBMITTED SUCCESSFULLY
                    </span>
                    <h3 className="text-2xl font-serif font-bold text-[#0B1720]">
                      Thank You, {submittedData.patientName}
                    </h3>
                    <p className="text-sm text-[#65727A] mt-2 max-w-md mx-auto">
                      Your consultation request has been received. Our hospital reception desk will contact you at your phone number to confirm your schedule.
                    </p>
                  </div>

                  {/* Summary Box */}
                  <div className="bg-[#F5FAFA] p-5 rounded-lg border border-[#0B1720]/10 max-w-md mx-auto text-left text-xs space-y-2 text-[#17212B]">
                    <div className="flex justify-between border-b border-[#0B1720]/5 pb-1.5">
                      <span className="text-[#65727A]">Booking Reference:</span>
                      <strong className="font-mono text-[#087E8B]">{submittedData.referenceId}</strong>
                    </div>
                    <div className="flex justify-between border-b border-[#0B1720]/5 pb-1.5">
                      <span className="text-[#65727A]">Selected Service:</span>
                      <span className="font-semibold">{submittedData.service}</span>
                    </div>
                    <div className="flex justify-between border-b border-[#0B1720]/5 pb-1.5">
                      <span className="text-[#65727A]">Requested Date:</span>
                      <span className="font-semibold">{submittedData.date}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#65727A]">Time Slot:</span>
                      <span className="font-semibold">{submittedData.time}</span>
                    </div>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={resetForm}
                      className="w-full sm:w-auto px-6 py-2.5 bg-[#087E8B] hover:bg-[#076d78] text-white rounded text-xs font-semibold uppercase tracking-wider transition-colors"
                    >
                      Submit Another Request
                    </button>
                    <a
                      href={HOSPITAL_DATA.phoneHref}
                      className="w-full sm:w-auto px-6 py-2.5 border border-[#0B1720]/20 text-[#0B1720] rounded text-xs font-semibold uppercase tracking-wider hover:bg-gray-50 transition-colors"
                    >
                      Call Desk Now: 042-35407172
                    </a>
                  </div>
                </div>
              ) : (
                /* Interactive Form */
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="border-b border-[#0B1720]/10 pb-4 mb-4">
                    <h3 className="text-xl font-serif font-bold text-[#0B1720]">
                      Request an Orthopaedic Appointment
                    </h3>
                    <p className="text-xs text-[#65727A] mt-1">
                      Complete this form to request your consultation slot at OMC Lahore.
                    </p>
                  </div>

                  {/* Patient Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0B1720] mb-1.5">
                      Patient Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={formData.patientName}
                        onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                        placeholder="e.g. Tariq Mehmood"
                        className={`w-full pl-10 pr-4 py-2.5 text-sm bg-white border rounded-md focus:outline-none transition-colors ${
                          errors.patientName
                            ? 'border-red-500 focus:border-red-600'
                            : 'border-gray-300 focus:border-[#087E8B] focus:ring-1 focus:ring-[#087E8B]'
                        }`}
                      />
                    </div>
                    {errors.patientName && (
                      <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.patientName}</span>
                      </p>
                    )}
                  </div>

                  {/* Phone & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#0B1720] mb-1.5">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. 0300-1234567"
                          className={`w-full pl-10 pr-4 py-2.5 text-sm bg-white border rounded-md focus:outline-none transition-colors ${
                            errors.phone
                              ? 'border-red-500 focus:border-red-600'
                              : 'border-gray-300 focus:border-[#087E8B] focus:ring-1 focus:ring-[#087E8B]'
                          }`}
                        />
                      </div>
                      {errors.phone && (
                        <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#0B1720] mb-1.5">
                        Email Address <span className="text-gray-400 font-normal">(Optional)</span>
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="patient@example.com"
                          className={`w-full pl-10 pr-4 py-2.5 text-sm bg-white border rounded-md focus:outline-none transition-colors ${
                            errors.email
                              ? 'border-red-500 focus:border-red-600'
                              : 'border-gray-300 focus:border-[#087E8B] focus:ring-1 focus:ring-[#087E8B]'
                          }`}
                        />
                      </div>
                      {errors.email && (
                        <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Service & Doctor Selection */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#0B1720] mb-1.5">
                        Preferred Service
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-gray-300 rounded-md focus:outline-none focus:border-[#087E8B] focus:ring-1 focus:ring-[#087E8B]"
                      >
                        {HOSPITAL_DATA.services.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#0B1720] mb-1.5">
                        Preferred Specialist <span className="text-gray-400 font-normal">(Optional)</span>
                      </label>
                      <select
                        value={formData.preferredDoctor}
                        onChange={(e) => setFormData({ ...formData, preferredDoctor: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-gray-300 rounded-md focus:outline-none focus:border-[#087E8B] focus:ring-1 focus:ring-[#087E8B]"
                      >
                        <option value="">Any Available Specialist</option>
                        {HOSPITAL_DATA.doctors.map((d) => (
                          <option key={d.id} value={d.name}>
                            {d.name} ({d.specialty})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Preferred Date & Time Slot */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#0B1720] mb-1.5">
                        Preferred Date <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Calendar className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          type="date"
                          value={formData.preferredDate}
                          onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                          className={`w-full pl-10 pr-4 py-2.5 text-sm bg-white border rounded-md focus:outline-none transition-colors ${
                            errors.preferredDate
                              ? 'border-red-500 focus:border-red-600'
                              : 'border-gray-300 focus:border-[#087E8B] focus:ring-1 focus:ring-[#087E8B]'
                          }`}
                        />
                      </div>
                      {errors.preferredDate && (
                        <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.preferredDate}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#0B1720] mb-1.5">
                        Preferred Time Slot
                      </label>
                      <select
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-gray-300 rounded-md focus:outline-none focus:border-[#087E8B] focus:ring-1 focus:ring-[#087E8B]"
                      >
                        <option value="Morning (10:00 AM – 1:00 PM)">Morning (10:00 AM – 1:00 PM)</option>
                        <option value="Afternoon (1:00 PM – 4:00 PM)">Afternoon (1:00 PM – 4:00 PM)</option>
                        <option value="Evening (5:00 PM – 8:00 PM)">Evening (5:00 PM – 8:00 PM)</option>
                      </select>
                    </div>
                  </div>

                  {/* Brief Concern Note */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0B1720] mb-1.5">
                      Brief Note / Area of Concern <span className="text-gray-400 font-normal">(Optional)</span>
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="e.g. Knee discomfort during stairs, previous fracture evaluation, joint stiffness..."
                      className="w-full p-3 text-sm bg-white border border-gray-300 rounded-md focus:outline-none focus:border-[#087E8B] focus:ring-1 focus:ring-[#087E8B]"
                    />
                  </div>

                  {/* Privacy Notice */}
                  <div className="bg-[#F5FAFA] p-3 rounded border border-[#0B1720]/10 text-[11px] text-[#65727A]">
                    <span className="font-semibold text-[#0B1720]">Privacy Notice: </span>
                    Please do not include highly sensitive medical history in this form. Our reception desk will verify details directly when contacting you.
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-[#087E8B] hover:bg-[#076d78] text-white rounded-md text-xs font-bold uppercase tracking-widest transition-all shadow-md active:scale-95 disabled:opacity-70 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>PROCESSING YOUR REQUEST...</span>
                    ) : (
                      <>
                        <span>REQUEST APPOINTMENT</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
