import React from 'react';
import { Award, Briefcase, GraduationCap, Info } from 'lucide-react';
import type { Trainer } from '../types';

interface TrainerCardProps {
  trainer: Trainer;
}

export const TrainerCard: React.FC<TrainerCardProps> = ({ trainer }) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between text-left group">
      <div>
        {/* Photo Container */}
        <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
          <img
            src={trainer.avatarUrl}
            alt={trainer.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
          
          <div className="absolute bottom-3 left-4 right-4">
            <span className="px-2.5 py-0.5 rounded bg-blue-600/90 text-white text-[10px] font-bold uppercase tracking-wider">
              Faculty Profile
            </span>
            <h3 className="text-xl font-bold text-white mt-1">
              {trainer.name}
            </h3>
            <p className="text-xs text-teal-300 font-medium">{trainer.title}</p>
          </div>
        </div>

        {/* Profile Content */}
        <div className="p-6 space-y-4">
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {trainer.bio}
          </p>

          <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-700">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-blue-600 flex-shrink-0" />
              <span><strong>Qualification:</strong> {trainer.qualification}</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span><strong>Certification:</strong> {trainer.certification}</span>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-purple-600 flex-shrink-0" />
              <span><strong>Experience:</strong> {trainer.experience}</span>
            </div>
          </div>

          <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs">
            <span className="font-bold text-slate-800 block mb-0.5">Specialization:</span>
            <span className="text-slate-600">{trainer.specialization}</span>
          </div>

          {trainer.placeholderNotice && (
            <div className="p-2.5 bg-amber-50 border border-amber-200/70 rounded-lg text-[11px] text-amber-800 flex items-start gap-2">
              <Info className="w-3.5 h-3.5 text-amber-600 flex-shrink-0 mt-0.5" />
              <span>{trainer.placeholderNotice}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
