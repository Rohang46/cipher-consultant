import React from 'react';
import { Briefcase, Compass, ShieldAlert, CheckCircle2, Award, TrendingUp, Building } from 'lucide-react';
import { CTABanner } from '../components/CTABanner';
import { siteConfig } from '../config/siteConfig';

interface CareerProps {
  onOpenEnquiryModal: () => void;
}

export const Career: React.FC<CareerProps> = ({ onOpenEnquiryModal }) => {
  const careerPaths = [
    {
      title: "Medical Coder",
      desc: "Assigns diagnostic (ICD-10-CM) and procedural (CPT/HCPCS) codes to routine healthcare encounters.",
      icon: Briefcase
    },
    {
      title: "Certified Professional Coder (CPC)",
      desc: "Handles outpatient physician billing, clinic visits, and multi-specialty office coding after credentialing.",
      icon: Award
    },
    {
      title: "Inpatient Coder",
      desc: "Deconstructs complex hospital discharge summaries, ICD-10-PCS root operations, and MS-DRG grouping.",
      icon: Building
    },
    {
      title: "Outpatient Coder",
      desc: "Specializes in ambulatory surgery centers, emergency department charts, and outpatient diagnostic procedures.",
      icon: Compass
    },
    {
      title: "Specialty Coder",
      desc: "Focuses on high-value disciplines like Evaluation & Management (E/M), Surgery, Interventional Radiology (IVR), or Cardiology.",
      icon: TrendingUp
    },
    {
      title: "Clinical Documentation-Related Roles",
      desc: "Reviews medical charts to ensure clinical documentation clarity before final bill generation.",
      icon: CheckCircle2
    },
    {
      title: "Healthcare Revenue Cycle (RCM) Roles",
      desc: "Supports claims submission, denial management analysis, and healthcare reimbursement workflows.",
      icon: Briefcase
    },
    {
      title: "Medical Coding Quality Specialist",
      desc: "Monitors internal coding accuracy standards, guidelines compliance, and error rate reductions.",
      icon: ShieldAlert
    },
    {
      title: "Coding Audit-Related Roles",
      desc: "Conducts independent coding chart audits to ensure regulatory and payer guidelines compliance.",
      icon: Award
    }
  ];

  return (
    <div className="space-y-16 py-12 text-left">
      
      {/* Header Banner */}
      <section className="bg-slate-950 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-400 bg-teal-500/10 border border-teal-500/20 px-3 py-1 rounded-full inline-block">
            Career Guidance & Pathways
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            Where Can Medical Coding Take You?
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Explore potential career opportunities in the healthcare revenue cycle and medical coding sector in Pune and across global healthcare delivery organizations.
          </p>
        </div>
      </section>

      {/* Non-Guarantee Disclaimer Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 bg-slate-900 border border-slate-800 text-slate-300 rounded-3xl text-xs sm:text-sm leading-relaxed space-y-2">
          <div className="flex items-center gap-2 font-bold text-amber-400">
            <ShieldAlert className="w-5 h-5 flex-shrink-0" />
            <span>Employment Disclaimer & Realistic Expectations</span>
          </div>
          <p>{siteConfig.disclaimers.employment}</p>
        </div>
      </section>

      {/* Potential Career Paths Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full inline-block mb-3">
            Industry Opportunities
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Potential Career Paths
          </h2>
          <p className="mt-2 text-slate-600 text-sm">
            Detailed overview of roles within healthcare revenue cycle management and medical chart administration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {careerPaths.map((path, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md hover:border-blue-300 transition-all space-y-3"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
                <path.icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">{path.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{path.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Interview & Placement Guidance Section */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-teal-800 bg-teal-100 border border-teal-200 px-3 py-1 rounded-full inline-block">
                Professional Preparation
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                How Cipher Consultant Prepares Learners for the Industry
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Beyond medical coding theory, our students participate in structured career preparation modules designed to build technical confidence.
              </p>

              <div className="space-y-2 text-xs sm:text-sm text-slate-700 font-semibold pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                  <span>Resume Formatting & Healthcare RCM Skills Highlight</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                  <span>Technical Coding Questions Practice</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                  <span>Scenario-based Chart Coding Mock Interviews</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                  <span>Industry Orientation for Outpatient & Inpatient Workflows</span>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-slate-900 text-white p-8 rounded-3xl border border-slate-800 shadow-xl space-y-4">
                <h3 className="text-xl font-bold text-white">Need Personal Career Guidance?</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Speak with our training advisors in Pune to understand how your academic background (BSc, BPharm, Nursing, Life Sciences, etc.) aligns with medical coding learning tracks.
                </p>
                <button
                  onClick={onOpenEnquiryModal}
                  className="w-full py-3.5 px-4 rounded-xl bg-teal-500 hover:bg-teal-600 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Schedule Career Guidance Query
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Reusable CTA Banner */}
      <CTABanner onOpenEnquiryModal={() => onOpenEnquiryModal()} />

    </div>
  );
};
