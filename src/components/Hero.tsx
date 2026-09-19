import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, BookOpen, Award, Compass, ArrowRight, CheckCircle, Sparkles } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface HeroProps {
  onOpenEnquiryModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnquiryModal }) => {
  const trustBadges = [
    { icon: BookOpen, title: "Medical Coding Training", desc: "Foundational to Advanced" },
    { icon: Award, title: "Certification Preparation", desc: "CPC & CCS Exam Readiness" },
    { icon: Shield, title: "Specialty Training", desc: "E/M, Surgery, IP DRG & IVR" },
    { icon: Compass, title: "Career Guidance", desc: "Interview & Industry Prep" },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white pt-12 pb-20 md:pt-20 md:pb-28">
      {/* Background Glows & Patterns */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-teal-400 text-xs font-bold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-teal-400 animate-pulse" />
              <span>{siteConfig.instituteName}</span>
            </div>

            {/* Main Hero Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Build Your Career in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-300 to-emerald-400">
                Medical Coding
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              Industry-focused medical coding training designed to help you develop practical skills, prepare for professional certifications, and build a successful healthcare career in the healthcare industry.
            </p>

            {/* Key Bullet Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <span>Practical Case-Based Chart Practice</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <span>CPC & CCS Exam Orientations</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <span>4 Specialty Coding Modules</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <span>Interactive Classroom & Online Batches</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                to="/courses"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-blue-700 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-bold text-sm shadow-xl shadow-blue-700/25 hover:shadow-blue-700/40 transition-all flex items-center gap-2 group cursor-pointer"
              >
                <span>Explore Training</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <button
                onClick={onOpenEnquiryModal}
                className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold text-sm hover:border-slate-600 transition-all cursor-pointer"
              >
                Enquire Now
              </button>
            </div>

            {/* Badge Tag */}
            <div className="pt-2 text-xs text-slate-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>Professional Medical Coding Institute</span>
            </div>

          </div>

          {/* Right Column: Healthcare Tech & Medical Coding Visual Container */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Glow frame */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600 to-teal-500 opacity-30 blur-lg"></div>

              {/* Main Card Container */}
              <div className="relative rounded-2xl bg-slate-900 border border-slate-800 p-4 sm:p-6 shadow-2xl overflow-hidden">
                
                {/* Visual Header Bar */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    <span className="text-xs font-mono text-slate-400 ml-2">Medical Coding Workstation</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-teal-500/10 text-teal-400 text-[10px] font-mono border border-teal-500/20">
                    ICD-10 / CPT / HCPCS
                  </span>
                </div>

                {/* Main Feature Image */}
                <div className="relative rounded-xl overflow-hidden mb-4 aspect-video sm:aspect-[4/3]">
                  <img
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
                    alt="Medical Coding Workstation & Healthcare Records"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80"></div>
                  <div className="absolute bottom-3 left-3 right-3 text-left">
                    <p className="text-xs font-semibold text-teal-300 font-mono">CODE: ICD-10-CM & CPT-4</p>
                    <p className="text-sm font-bold text-white">Clinical Data Translation & RCM Operations</p>
                  </div>
                </div>

                {/* Simulated Chart Code Snippet Widget */}
                <div className="bg-slate-950 rounded-lg p-3 border border-slate-800 text-left font-mono text-xs space-y-1.5">
                  <div className="flex justify-between text-[11px] text-slate-400 pb-1 border-b border-slate-800">
                    <span>Chart #MC-2026</span>
                    <span className="text-emerald-400">Validated</span>
                  </div>
                  <p className="text-slate-300"><span className="text-blue-400">Diagnosis:</span> E11.9 (Type 2 Diabetes)</p>
                  <p className="text-slate-300"><span className="text-teal-400">Procedure:</span> 99214 (E/M Office Visit - MDM Moderate)</p>
                  <p className="text-slate-300"><span className="text-purple-400">Modifier:</span> 25 (Significant, Separately Identifiable)</p>
                </div>

                {/* Mini Trust Overlay Floating Card */}
                <div className="mt-4 bg-blue-950/70 border border-blue-800/60 rounded-xl p-3 flex items-center justify-between text-left">
                  <div>
                    <span className="text-xs font-bold text-blue-200 block">Career-Oriented Education</span>
                    <span className="text-[11px] text-blue-300">Healthcare Industry Focus</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-lg bg-blue-600 text-white text-xs font-bold shadow">
                    Practical Focus
                  </span>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Trust Badges Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {trustBadges.map((badge, idx) => (
            <div
              key={idx}
              className="bg-slate-900/80 border border-slate-800 hover:border-blue-700/50 rounded-2xl p-5 text-left transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 text-teal-400 flex items-center justify-center mb-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <badge.icon className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white mb-1">{badge.title}</h4>
              <p className="text-xs text-slate-400">{badge.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
