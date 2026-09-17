import React from 'react';
import { SpecialtyCard } from '../components/SpecialtyCard';
import { CTABanner } from '../components/CTABanner';
import { specialtiesData } from '../data/specialties';
import { Sparkles } from 'lucide-react';

interface SpecialtyTrainingProps {
  onOpenEnquiryModal: (title?: string) => void;
}

export const SpecialtyTraining: React.FC<SpecialtyTrainingProps> = ({ onOpenEnquiryModal }) => {
  return (
    <div className="space-y-16 py-12 text-left">
      
      {/* Header Banner */}
      <section className="bg-slate-950 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-400 bg-teal-500/10 border border-teal-500/20 px-3 py-1 rounded-full inline-block">
            Advanced Skill Modules
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            Specialty Medical Coding Training
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Enhance your healthcare revenue cycle capabilities with specialized training tracks covering Evaluation & Management, Surgical Coding, IP DRG, and IVR specialty coding in Pune.
          </p>
        </div>
      </section>

      {/* Main Specialty Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {specialtiesData.map((spec) => (
            <SpecialtyCard
              key={spec.id}
              specialty={spec}
              onEnquire={(title) => onOpenEnquiryModal(title)}
            />
          ))}
        </div>
      </section>

      {/* Why Pursue Specialty Coding */}
      <section className="bg-slate-900 text-white py-16 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <Sparkles className="w-8 h-8 text-teal-400 mx-auto" />
            <h2 className="text-3xl font-extrabold text-white">Why Learn Specialty Coding?</h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Specialty medical coding requires deeper clinical chart comprehension, complex modifier rules, and specialized codebook navigation. Coders skilled in E/M, Surgery, IP DRG, and IVR handle high-complexity billing accounts for physician groups and hospital systems.
            </p>
          </div>
        </div>
      </section>

      {/* Reusable CTA Banner */}
      <CTABanner onOpenEnquiryModal={() => onOpenEnquiryModal()} />

    </div>
  );
};
