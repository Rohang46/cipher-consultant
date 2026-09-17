import React from 'react';
import { FAQAccordion } from '../components/FAQAccordion';
import { CTABanner } from '../components/CTABanner';
import { faqsData } from '../data/faqs';

interface FAQPageProps {
  onOpenEnquiryModal: () => void;
}

export const FAQPage: React.FC<FAQPageProps> = ({ onOpenEnquiryModal }) => {
  return (
    <div className="space-y-16 py-12 text-left">
      
      {/* Header Banner */}
      <section className="bg-slate-950 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-400 bg-teal-500/10 border border-teal-500/20 px-3 py-1 rounded-full inline-block">
            Frequently Asked Questions
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            Medical Coding Training FAQ
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Find answers to common questions about medical coding qualifications, CPC & CCS certification preparation, course duration, and admissions at Cipher Consultant in Pune.
          </p>
        </div>
      </section>

      {/* Main Accordion Container */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl">
          <FAQAccordion faqs={faqsData} showCategoryFilter={true} />
        </div>
      </section>

      {/* Reusable CTA Banner */}
      <CTABanner onOpenEnquiryModal={() => onOpenEnquiryModal()} />

    </div>
  );
};
