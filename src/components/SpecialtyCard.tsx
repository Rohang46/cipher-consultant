import React from 'react';
import { Stethoscope, Scissors, Building2, Radio, CheckCircle2, ArrowRight, Info } from 'lucide-react';
import type { SpecialtyProgram } from '../types';

interface SpecialtyCardProps {
  specialty: SpecialtyProgram;
  onEnquire: (title: string) => void;
}

export const SpecialtyCard: React.FC<SpecialtyCardProps> = ({ specialty, onEnquire }) => {
  const getIcon = () => {
    switch (specialty.id) {
      case 'evaluation-and-management':
        return Stethoscope;
      case 'surgery-coding':
        return Scissors;
      case 'ip-drg':
        return Building2;
      case 'ivr-specialty':
        return Radio;
      default:
        return Stethoscope;
    }
  };

  const IconComponent = getIcon();

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm hover:shadow-xl hover:border-teal-300 transition-all duration-300 flex flex-col justify-between text-left space-y-6 group">
      <div className="space-y-4">
        
        {/* Icon & Title */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 text-teal-600 flex items-center justify-center group-hover:bg-teal-600 group-hover:text-white transition-colors flex-shrink-0">
            <IconComponent className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[11px] font-bold text-teal-700 uppercase tracking-widest block">
              Specialty Track
            </span>
            <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
              {specialty.displayTitle}
            </h3>
          </div>
        </div>

        <p className="text-sm text-slate-600 leading-relaxed">
          {specialty.description}
        </p>

        {/* Topics Covered list */}
        <div className="pt-2 border-t border-slate-100">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
            Specialty Topics:
          </span>
          <ul className="space-y-1.5 text-xs text-slate-700">
            {specialty.topics.map((topic, i) => (
              <li key={i} className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-500 flex-shrink-0" />
                <span>{topic}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Configurable note for IVR if present */}
        {specialty.configurableNote && (
          <div className="p-3 bg-teal-50/60 border border-teal-100 rounded-xl text-[11px] text-teal-800 flex items-center gap-2">
            <Info className="w-3.5 h-3.5 flex-shrink-0 text-teal-600" />
            <span>{specialty.configurableNote}</span>
          </div>
        )}

      </div>

      <div className="pt-4 border-t border-slate-100">
        <button
          onClick={() => onEnquire(specialty.displayTitle)}
          className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-teal-700 text-white font-bold text-xs uppercase tracking-wider shadow transition-colors flex items-center justify-center gap-2 cursor-pointer"
        >
          <span>{specialty.ctaText}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
