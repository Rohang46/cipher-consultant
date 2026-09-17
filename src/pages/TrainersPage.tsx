import React from 'react';
import { TrainerCard } from '../components/TrainerCard';
import { CTABanner } from '../components/CTABanner';
import { trainersData } from '../data/trainers';

interface TrainersPageProps {
  onOpenEnquiryModal: () => void;
}

export const TrainersPage: React.FC<TrainersPageProps> = ({ onOpenEnquiryModal }) => {
  return (
    <div className="space-y-16 py-12 text-left">
      
      {/* Header Banner */}
      <section className="bg-slate-950 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-400 bg-teal-500/10 border border-teal-500/20 px-3 py-1 rounded-full inline-block">
            Faculty Directory
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            Our Faculty & Instructors
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Meet the instructors at Cipher Consultant Medical Coding Training Institute in Pune, dedicated to practical learning, guideline mastery, and certification readiness.
          </p>
        </div>
      </section>

      {/* Trainers Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainersData.map((trainer) => (
            <TrainerCard key={trainer.id} trainer={trainer} />
          ))}
        </div>
      </section>

      {/* Reusable CTA Banner */}
      <CTABanner onOpenEnquiryModal={() => onOpenEnquiryModal()} />

    </div>
  );
};
