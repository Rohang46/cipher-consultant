import React from 'react';
import { Target, Compass, Award, CheckCircle2, ShieldCheck, HeartHandshake, BookOpen } from 'lucide-react';
import { CTABanner } from '../components/CTABanner';
import { siteConfig } from '../config/siteConfig';

interface AboutProps {
  onOpenEnquiryModal: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenEnquiryModal }) => {
  const focusAreas = [
    "Medical Coding Fundamentals",
    "Certification Preparation",
    "Specialty Coding",
    "Practical Coding Skills",
    "Healthcare Documentation",
    "Career Preparation",
    "Interview Preparation",
    "Professional Development"
  ];

  const coreValues = [
    {
      title: "Practical Learning",
      desc: "Anchoring every concept in real-world clinical charts, operative notes, and codebook lookups.",
      icon: BookOpen
    },
    {
      title: "Professional Excellence",
      desc: "Maintaining accurate, compliant, and detailed healthcare coding instruction standards.",
      icon: Award
    },
    {
      title: "Continuous Improvement",
      desc: "Keeping curriculum aligned with updated ICD-10, CPT, and HCPCS annual guidelines.",
      icon: Compass
    },
    {
      title: "Industry Readiness",
      desc: "Preparing students with technical domain knowledge expected in healthcare RCM organizations.",
      icon: Target
    },
    {
      title: "Student Success",
      desc: "Dedicated guidance, mentorship, and exam readiness support for every learner.",
      icon: HeartHandshake
    },
    {
      title: "Integrity",
      desc: "Ethical training practices, transparent guidance, and honest credential preparation standards.",
      icon: ShieldCheck
    }
  ];

  return (
    <div className="space-y-16 py-12">
      
      {/* Page Header Banner */}
      <section className="bg-slate-950 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto text-left space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-400 bg-teal-500/10 border border-teal-500/20 px-3 py-1 rounded-full inline-block">
            About Our Institute
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            About Cipher Consultant
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            {siteConfig.instituteName} focuses on helping learners develop medical coding knowledge and practical skills required for careers in the healthcare coding and revenue cycle industry in Pune, Maharashtra.
          </p>
        </div>
      </section>

      {/* Main Focus Areas & Intro */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 text-left space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Empowering Healthcare Coding Professionals
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Medical coding is the bridge between clinical healthcare delivery and healthcare financial administration. At Cipher Consultant, we train students and working professionals to convert diagnostic notes, laboratory reports, and surgical procedures into standardized code sets.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              Our institute in Pune emphasizes practical learning, official coding guidelines, and exam preparation. Whether you are starting with a Life Sciences degree or aiming for professional credentials like CPC or CCS, our structured modules provide the knowledge necessary to grow in healthcare revenue cycle management (RCM).
            </p>

            {/* Focus Areas Grid */}
            <div className="pt-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                Key Institute Focus Areas:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 font-semibold">
                {focusAreas.map((area, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 aspect-[4/3] relative">
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80"
                alt="Cipher Consultant Training Environment"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-slate-950/30"></div>
              <div className="absolute bottom-4 left-4 right-4 bg-slate-950/80 backdrop-blur-md p-4 rounded-2xl border border-slate-800 text-white text-left">
                <span className="text-xs font-bold text-teal-400 block font-mono">PUNE INSTITUTE</span>
                <p className="text-sm font-bold">Dedicated Medical Coding Classroom & Digital Training</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            
            {/* Our Mission */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900">Our Mission</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                To provide high-quality, practical, and industry-oriented medical coding training that empowers learners with technical skills, clinical documentation comprehension, and credential readiness required for careers in healthcare revenue cycle management.
              </p>
            </div>

            {/* Our Vision */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900">Our Vision</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                To be a trusted medical coding training institute in Pune, recognized for educational excellence, practical chart-based learning, and building industry-ready healthcare coding professionals.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Our Training Approach */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="bg-slate-900 text-white p-8 sm:p-12 rounded-3xl border border-slate-800 shadow-xl space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-400 bg-teal-500/10 border border-teal-500/20 px-3 py-1 rounded-full inline-block">
            Pedagogy & Standard
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight">
            Our Training Approach
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed max-w-3xl">
            We believe that effective medical coding training combines conceptual scientific foundation with repetitive manual lookup and clinical chart analysis.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center font-bold">1</div>
              <h4 className="font-bold text-white text-base">Anatomy & Guideline Mastery</h4>
              <p className="text-xs text-slate-400">Deep dive into ICD-10-CM guidelines and body systems before coding lookup.</p>
            </div>

            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-teal-600/20 text-teal-400 flex items-center justify-center font-bold">2</div>
              <h4 className="font-bold text-white text-base">Real Chart Deconstruction</h4>
              <p className="text-xs text-slate-400">Analysis of real-world operative notes, ED visit logs, and inpatient discharge charts.</p>
            </div>

            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-600/20 text-emerald-400 flex items-center justify-center font-bold">3</div>
              <h4 className="font-bold text-white text-base">Exam & Career Readiness</h4>
              <p className="text-xs text-slate-400">Timed mock test practice for CPC/CCS alongside technical interview coaching.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full inline-block mb-3">
            Guiding Principles
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Our Core Values
          </h2>
          <p className="mt-2 text-slate-600 text-sm">
            Principles that guide our curriculum design, student mentorship, and training delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {coreValues.map((val, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all space-y-3"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
                <val.icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">{val.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reusable CTA Banner */}
      <CTABanner onOpenEnquiryModal={onOpenEnquiryModal} />

    </div>
  );
};
