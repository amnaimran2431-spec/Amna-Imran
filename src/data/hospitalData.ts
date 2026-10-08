/**
 * Orthopaedic Hospital & Medical Complex (OMC), Lahore
 * Central configuration object storing verified business information,
 * medical editorial content, navigation, and service categories.
 */

import heroConsultationImg from '../assets/images/hero_consultation_1791437181177.jpg';
import hospitalReceptionImg from '../assets/images/hospital_reception_1791437198451.jpg';
import orthopaedicExamImg from '../assets/images/orthopaedic_exam_1791437211413.jpg';
import rehabCareImg from '../assets/images/rehab_care_1791437223641.jpg';
import doctorPortraitImg from '../assets/images/doctor_portrait_1_1791437237725.jpg';
import corridorImg from '../assets/images/hospital_corridor_1791437250855.jpg';

export const HOSPITAL_DATA = {
  name: 'Orthopaedic Hospital & Medical Complex (OMC), Lahore',
  shortName: 'OMC',
  urduName: 'او ایم سی ہسپتال',
  subtitle: 'Orthopaedic Hospital & Medical Complex',
  phone: '042-35407172',
  phoneHref: 'tel:+924235407172',
  address: '15 Jail Road, opposite Kinnaird College, Shadman II, Shadman 2, Shadman, Lahore, Pakistan',
  addressShort: '15 Jail Road, opposite Kinnaird College, Shadman II, Lahore',
  locationKicker: 'JAIL ROAD • SHADMAN • LAHORE',
  city: 'Lahore, Pakistan',
  landmark: 'Opposite Kinnaird College for Women',
  mapsQuery: 'https://www.google.com/maps/search/?api=1&query=15+Jail+Road+opposite+Kinnaird+College+Shadman+Lahore',
  
  disclaimer: 'Website information is provided for general informational and appointment scheduling purposes. It does not replace professional clinical diagnosis or personalized medical advice. Treatment decisions are based on individual clinical assessment.',
  
  emergencyNote: 'For urgent medical concerns, please contact the hospital directly at 042-35407172 to confirm immediate clinical availability and advisory guidance.',

  navLinks: [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT', href: '#about' },
    { label: 'SERVICES', href: '#services' },
    { label: 'SPECIALTIES', href: '#specialties' },
    { label: 'DOCTORS', href: '#doctors' },
    { label: 'FACILITIES', href: '#facilities' },
    { label: 'CONTACT', href: '#contact' },
  ],

  trustIndicators: [
    {
      number: '01',
      title: 'PATIENT FOCUSED',
      description: 'Consultations designed around clear communication, patient dignity, and informed care choices.',
    },
    {
      number: '02',
      title: 'ORTHOPAEDIC CARE',
      description: 'Dedicated evaluation of bones, joints, spine, ligaments, and musculoskeletal health.',
    },
    {
      number: '03',
      title: 'LAHORE LOCATION',
      description: 'Conveniently accessible on Jail Road, Shadman II, directly opposite Kinnaird College.',
    },
  ],

  services: [
    {
      id: 'consultation',
      number: '01',
      title: 'ORTHOPAEDIC CONSULTATION',
      summary: 'Professional evaluation and structured discussion of bone, joint, and musculoskeletal concerns.',
      details: 'Comprehensive clinical evaluation for adults and children experiencing mobility limitations, chronic discomfort, or postural concerns. Our specialists prioritize listening, physical examination, and clear explanations.',
      image: heroConsultationImg,
      focusAreas: ['Clinical History Review', 'Physical Joint Assessment', 'Imaging Coordination', 'Second Opinions'],
    },
    {
      id: 'joint-care',
      number: '02',
      title: 'JOINT & MUSCULOSKELETAL CARE',
      summary: 'Assessment and management of common joint and musculoskeletal problems across all age groups.',
      details: 'Targeted care for hips, knees, shoulders, and peripheral joints. Evaluation includes arthritis assessment, cartilage wear, stiffness management, and conservative treatment planning.',
      image: orthopaedicExamImg,
      focusAreas: ['Knee & Hip Evaluation', 'Shoulder Mobility', 'Cartilage Assessment', 'Conservative Care Plans'],
    },
    {
      id: 'fracture-care',
      number: '03',
      title: 'FRACTURE & INJURY CARE',
      summary: 'Evaluation and follow-up for orthopaedic injuries, trauma stabilization, and bone healing.',
      details: 'Careful diagnostic assessment, splinting, casting, and follow-up monitoring for bone fractures and soft tissue sprains to ensure proper structural realignment and healing.',
      image: corridorImg,
      focusAreas: ['Acute Fracture Care', 'Casting & Immobilization', 'Bone Healing Monitoring', 'Post-Trauma Follow-Up'],
    },
    {
      id: 'sports-injuries',
      number: '04',
      title: 'SPORTS INJURY CARE',
      summary: 'Assessment of acute and repetitive strain injuries associated with sports and physical activity.',
      details: 'Specialized evaluation for athletes and active individuals with ligament tears, meniscus injuries, rotator cuff strains, and tendonitis to safely support return to movement.',
      image: rehabCareImg,
      focusAreas: ['Ligament & Meniscus Tears', 'Tendonitis & Sprains', 'Return-to-Play Guidance', 'Overuse Injuries'],
    },
    {
      id: 'spine-care',
      number: '05',
      title: 'SPINE & BACK CARE',
      summary: 'Professional clinical evaluation of cervical, thoracic, and lumbar spine-related concerns.',
      details: 'Non-operative and surgical advisory evaluation for lower back discomfort, sciatica, neck stiffness, disc concerns, and posture-related spinal alignment issues.',
      image: orthopaedicExamImg,
      focusAreas: ['Lumbar & Cervical Spine', 'Sciatic Nerve Care', 'Postural Analysis', 'Disc Condition Guidance'],
    },
    {
      id: 'rehabilitation',
      number: '06',
      title: 'REHABILITATION & RECOVERY',
      summary: 'Supportive recovery and rehabilitation pathways where clinically appropriate.',
      details: 'Post-consultation supportive movement guidance, coordinated physiotherapy pathways, mobility retraining, and tailored strengthening exercises.',
      image: rehabCareImg,
      focusAreas: ['Mobility Restoration', 'Strength & Flexibility', 'Gait Training', 'Post-Treatment Guidance'],
    },
  ],

  specialties: [
    { name: 'Bone & Joint Care', description: 'Comprehensive diagnostic evaluation of skeletal structure and joints.' },
    { name: 'Knee Care', description: 'Assessment of knee ligaments, meniscus, arthritis, and mobility issues.' },
    { name: 'Shoulder Care', description: 'Evaluation for rotator cuff concerns, frozen shoulder, and impingement.' },
    { name: 'Hip Care', description: 'Clinical examination of hip joint stability, pelvic discomfort, and stiffness.' },
    { name: 'Spine & Back Care', description: 'Evaluation of back posture, vertebral disc issues, and spinal alignment.' },
    { name: 'Sports Injuries', description: 'Care for active individuals experiencing acute strain or trauma.' },
    { name: 'Fracture Care', description: 'Assessment, stabilization, and progressive healing reviews.' },
    { name: 'Musculoskeletal Conditions', description: 'Management of tendons, muscles, ligaments, and soft tissue health.' },
  ],

  // Clearly marked editable doctor profile structures
  doctors: [
    {
      id: 'doc-1',
      name: 'Consultant Orthopaedic Surgeon',
      title: 'Head of Orthopaedic Clinical Services',
      specialty: 'Orthopaedic Consultation & Joint Care',
      experience: 'Senior Clinical Consultant',
      bio: 'Focused on comprehensive orthopaedic evaluations, patient education, and tailored conservative and surgical pathways for joint preservation.',
      availability: 'Mon – Sat (By Appointment)',
      editableNote: 'Hospital Consultant Profile (Editable in hospitalData.ts)',
      image: doctorPortraitImg,
    },
    {
      id: 'doc-2',
      name: 'Consultant Joint & Trauma Specialist',
      title: 'Orthopaedic Specialist',
      specialty: 'Fracture Care & Trauma Management',
      experience: 'Consultant Specialist',
      bio: 'Dedicated to thorough clinical assessment of acute musculoskeletal injuries, fracture stabilization, and progressive healing follow-up.',
      availability: 'Mon – Fri (By Appointment)',
      editableNote: 'Hospital Consultant Profile (Editable in hospitalData.ts)',
      image: orthopaedicExamImg,
    },
    {
      id: 'doc-3',
      name: 'Orthopaedic & Sports Care Specialist',
      title: 'Consultant in Sports & Musculoskeletal Care',
      specialty: 'Sports Injuries & Ligament Care',
      experience: 'Clinical Specialist',
      bio: 'Specializing in physical activity injuries, tendon health, and structured recovery guidance for active adults and athletes.',
      availability: 'Mon – Sat (By Appointment)',
      editableNote: 'Hospital Consultant Profile (Editable in hospitalData.ts)',
      image: heroConsultationImg,
    },
  ],

  patientJourney: [
    {
      step: '01',
      title: 'BOOK',
      subtitle: 'Schedule Easily',
      description: 'Request an appointment through our online form or call 042-35407172 directly with your preferred day and time.',
    },
    {
      step: '02',
      title: 'CONSULT',
      subtitle: 'Detailed Discussion',
      description: 'Meet with an orthopaedic professional in a calm, attentive setting to discuss your history and daily mobility.',
    },
    {
      step: '03',
      title: 'ASSESS',
      subtitle: 'Clinical Evaluation',
      description: 'Receive careful physical assessment and review of existing or coordinated imaging studies for precise clarity.',
    },
    {
      step: '04',
      title: 'PLAN',
      subtitle: 'Tailored Next Steps',
      description: 'Review clear, individualized options—from lifestyle guidance and physical therapy to structured medical care.',
    },
  ],

  facilities: [
    {
      id: 'reception',
      title: 'PATIENT RECEPTION & LOUNGE',
      category: 'Patient Welcome',
      description: 'A welcoming, spacious front reception and waiting lounge designed for comfort, ease of registration, and patient assistance on Jail Road.',
      image: hospitalReceptionImg,
    },
    {
      id: 'consultation-suites',
      title: 'CONSULTATION SUITES',
      category: 'Clinical Environment',
      description: 'Private, quiet medical consultation rooms equipped for one-on-one doctor-patient dialogue, visual bone models, and careful examination.',
      image: heroConsultationImg,
    },
    {
      id: 'examination-spaces',
      title: 'ORTHOPAEDIC EXAMINATION ROOMS',
      category: 'Diagnostic Area',
      description: 'Dedicated examination spaces arranged with specialized examination tables and mobility evaluation tools.',
      image: orthopaedicExamImg,
    },
    {
      id: 'rehabilitation-space',
      title: 'REHABILITATION & MOVEMENT SPACES',
      category: 'Supportive Care',
      description: 'Supportive recovery spaces configured for guided gait practice, mobility restoration, and functional movement assessment.',
      image: rehabCareImg,
    },
    {
      id: 'clinical-corridors',
      title: 'MODERN CLINICAL WINGS',
      category: 'Hospital Complex',
      description: 'Well-maintained, accessible medical corridors ensuring seamless transit between reception, consultation, and support spaces.',
      image: corridorImg,
    },
  ],

  gallery: [
    {
      id: 'g1',
      title: 'Orthopaedic Consultation Suite',
      category: 'Consultation',
      image: heroConsultationImg,
      caption: 'Detailed doctor-patient dialogue in a professional medical consultation room.',
    },
    {
      id: 'g2',
      title: 'Hospital Reception & Entry',
      category: 'Facilities',
      image: hospitalReceptionImg,
      caption: 'Main reception counter and patient waiting area at OMC on Jail Road.',
    },
    {
      id: 'g3',
      title: 'Mobility & Joint Assessment',
      category: 'Clinical Care',
      image: orthopaedicExamImg,
      caption: 'Comprehensive physical examination and bone model demonstration.',
    },
    {
      id: 'g4',
      title: 'Rehabilitation & Recovery Space',
      category: 'Rehabilitation',
      image: rehabCareImg,
      caption: 'Supportive physical therapy and functional mobility training area.',
    },
    {
      id: 'g5',
      title: 'Consultant Clinical Attire',
      category: 'Medical Staff',
      image: doctorPortraitImg,
      caption: 'Orthopaedic medical specialist in hospital complex setting.',
    },
    {
      id: 'g6',
      title: 'Hospital Complex Interior',
      category: 'Facilities',
      image: corridorImg,
      caption: 'Polished, hygienic medical corridors connecting patient care zones.',
    },
  ],

  // Clearly marked sample testimonials for patient experience
  testimonials: [
    {
      id: 't1',
      initials: 'M.A.',
      patientName: 'M. Ahmed',
      location: 'Shadman, Lahore',
      comment: 'The staff made the appointment process clear and comfortable. The doctor took time to explain my knee condition with models so I knew what was happening.',
      serviceType: 'Knee & Joint Consultation',
    },
    {
      id: 't2',
      initials: 'F.K.',
      patientName: 'Farhana K.',
      location: 'Gulberg, Lahore',
      comment: 'The consultation experience was professional and easy to understand. Parking and finding the hospital on Jail Road right opposite Kinnaird College was straightforward.',
      serviceType: 'Spine & Back Care',
    },
    {
      id: 't3',
      initials: 'T.R.',
      patientName: 'Taimoor R.',
      location: 'Cantt, Lahore',
      comment: 'The environment felt organized and welcoming. Follow-up instructions after my minor sports sprain were clear and very helpful for my recovery.',
      serviceType: 'Sports Injury Care',
    },
  ],

  images: {
    heroConsultation: heroConsultationImg,
    hospitalReception: hospitalReceptionImg,
    orthopaedicExam: orthopaedicExamImg,
    rehabCare: rehabCareImg,
    doctorPortrait: doctorPortraitImg,
    corridor: corridorImg,
  },
};
