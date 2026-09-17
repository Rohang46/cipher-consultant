import React from 'react';
import { ShieldAlert, BookOpen, Clock, FileText } from 'lucide-react';
import { CertificationCard } from '../components/CertificationCard';
import { CTABanner } from '../components/CTABanner';
import { certificationsData } from '../data/certifications';
import { siteConfig } from '../config/siteConfig';

interface CertificationsProps {
  onOpenEnquiryModal: (certTitle?: string) => void;
}

export const Certifications: React.FC<CertificationsProps> = ({ onOpenEnquiryModal }) => {
  return (
    <div className="space-y-16 py-12 text-left">
      
      {/* Header Banner */}
      <section className="bg-slate-950 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-400 bg-teal-500/10 border border-teal-500/20 px-3 py-1 rounded-full inline-block">
            Credential Preparation
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            Professional Medical Coding Certifications
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Cipher Consultant provides structured examination preparation programs for learners aiming to prepare for professional medical coding credential examinations such as CPC and CCS.
          </p>
        </div>
      </section>

      {/* Disclaimers Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 bg-slate-900 border border-slate-800 text-slate-300 rounded-3xl text-xs sm:text-sm leading-relaxed space-y-2">
          <div className="flex items-center gap-2 font-bold text-amber-400">
            <ShieldAlert className="w-5 h-5 flex-shrink-0" />
            <span>Important Certification Notice & Credential Guidance</span>
          </div>
          <p>{siteConfig.disclaimers.general}</p>
          <p className="text-slate-400 text-xs">{siteConfig.disclaimers.affiliation}</p>
        </div>
      </section>

      {/* Main Certification Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {certificationsData.map((cert) => (
            <CertificationCard
              key={cert.id}
              cert={cert}
              onEnquire={(title) => onOpenEnquiryModal(title)}
            />
          ))}
        </div>
      </section>

      {/* Preparation Strategy Breakdown */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full inline-block mb-3">
              Preparation Methodology
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              How We Prepare Candidates for Board Exams
            </h2>
            <p className="mt-2 text-slate-600 text-sm">
              Our certification training tracks focus on manual lookup speed, guideline interpretation, and mock test drills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">1. Codebook Navigation</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Tabbing, highlighting essential guidelines, and developing rapid manual lookup reflexes across ICD, CPT, and HCPCS manuals.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">2. Case Rationales Analysis</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Deconstructing multiple-choice chart questions to understand official guidelines and why specific modifiers or codes are assigned.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">3. Timed Mock Testing</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Full-length simulated mock exam sessions under real testing time limits to build stamina and time management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reusable CTA Banner */}
      <CTABanner onOpenEnquiryModal={() => onOpenEnquiryModal()} />

    </div>
  );
};
