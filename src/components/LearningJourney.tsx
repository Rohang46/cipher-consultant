import React from 'react';
import { BookOpen, FileText, Code2, Award, Briefcase } from 'lucide-react';

export const LearningJourney: React.FC = () => {
  const steps = [
    {
      num: "01",
      icon: BookOpen,
      title: "Learn the Fundamentals",
      desc: "Build strong scientific baselines in human anatomy, medical terminology, and physiological disease classification systems."
    },
    {
      num: "02",
      icon: FileText,
      title: "Understand Medical Documentation",
      desc: "Learn to read and deconstruct physician notes, hospital discharge summaries, and surgical operative records."
    },
    {
      num: "03",
      icon: Code2,
      title: "Practice Realistic Coding Cases",
      desc: "Apply ICD-10-CM, CPT, and HCPCS code sets across anonymized case studies and diagnostic exercises."
    },
    {
      num: "04",
      icon: Award,
      title: "Prepare for Certification",
      desc: "Engage in exam-focused review, manual lookup speed training, and timed mock test sessions for CPC or CCS."
    },
    {
      num: "05",
      icon: Briefcase,
      title: "Prepare for Your Career",
      desc: "Develop interview skills, understand RCM industry workflows, and refine your professional portfolio."
    }
  ];

  return (
    <section className="py-16 bg-slate-50 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-700 bg-teal-100/70 border border-teal-200 px-3 py-1 rounded-full inline-block mb-3">
            Training Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How We Train: Our 5-Step Learning Journey
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            A structured, step-by-step pathway engineered to transform aspiring learners into competent medical coding professionals.
          </p>
        </div>

        {/* Timeline Desktop & Mobile Grid */}
        <div className="relative">
          
          {/* Connector Line for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-teal-500 to-emerald-500 -translate-y-6 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-500 transition-all duration-300 flex flex-col justify-between text-left group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600 font-mono">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <step.icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
