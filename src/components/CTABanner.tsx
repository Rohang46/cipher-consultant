import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, PhoneCall } from 'lucide-react';

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  onOpenEnquiryModal: () => void;
}

export const CTABanner: React.FC<CTABannerProps> = ({
  title = "Ready to Start Your Medical Coding Career?",
  subtitle = "Explore our medical coding and certification preparation programs in Pune.",
  onOpenEnquiryModal
}) => {
  return (
    <section className="bg-gradient-to-r from-blue-900 via-slate-900 to-teal-900 text-white py-14 px-4 sm:px-6 lg:px-8 relative overflow-hidden my-12 rounded-3xl max-w-7xl mx-auto border border-blue-800/40 shadow-2xl">
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
          {title}
        </h2>

        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
          {subtitle}
        </p>

        <div className="flex flex-wrap justify-center items-center gap-4 pt-2">
          <Link
            to="/courses"
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-bold text-sm shadow-lg shadow-blue-600/30 transition-all flex items-center gap-2"
          >
            <span>Explore Courses</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <button
            onClick={onOpenEnquiryModal}
            className="px-6 py-3.5 rounded-xl bg-white text-slate-900 hover:bg-slate-100 font-bold text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer"
          >
            <PhoneCall className="w-4 h-4 text-blue-700" />
            <span>Talk to a Training Advisor</span>
          </button>
        </div>
      </div>
    </section>
  );
};
