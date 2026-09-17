import React from 'react';
import { Award, CheckCircle2, ShieldAlert, ArrowRight, Target, BookOpen } from 'lucide-react';
import type { CertificationProgram } from '../types';

interface CertificationCardProps {
  cert: CertificationProgram;
  onEnquire: (title: string) => void;
}

export const CertificationCard: React.FC<CertificationCardProps> = ({ cert, onEnquire }) => {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col justify-between text-left space-y-6 relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl group-hover:bg-blue-600/20 transition-all pointer-events-none"></div>

      <div className="space-y-6 relative z-10">
        
        {/* Header Badge & Title */}
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-teal-400 text-xs font-semibold mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Certification Preparation Track</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {cert.title}
          </h3>
          <p className="mt-2 text-sm text-slate-300 leading-relaxed">
            {cert.description}
          </p>
        </div>

        {/* Exam Focus Areas Grid */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
            <Target className="w-4 h-4 text-teal-400" />
            Exam Focus & High-Yield Domains
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
            {cert.examFocus.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-slate-950/60 p-2 rounded-lg border border-slate-800">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Topics Covered */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
            <BookOpen className="w-4 h-4 text-blue-400" />
            Topics Covered
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {cert.topicsCovered.map((topic, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 text-xs font-medium border border-slate-700"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>

        {/* Disclaimer Note */}
        <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-[11px] text-slate-400 flex items-start gap-2">
          <ShieldAlert className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
          <span>{cert.disclaimer}</span>
        </div>

      </div>

      <div className="pt-2 relative z-10">
        <button
          onClick={() => onEnquire(cert.title)}
          className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 via-blue-700 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-bold text-sm shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
        >
          <span>Enquire for {cert.shortTitle} Training</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
