import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, GraduationCap, Laptop, Award, ArrowRight, CheckCircle2 } from 'lucide-react';
import type { Course } from '../types';

interface CourseCardProps {
  course: Course;
  onEnquire: (courseTitle: string) => void;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course, onEnquire }) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between overflow-hidden group text-left">
      <div>
        {/* Card Header Tag & Category */}
        <div className="bg-slate-900 text-white p-5 flex items-center justify-between border-b border-slate-800">
          <span className="text-xs font-bold font-mono uppercase tracking-wider text-teal-400">
            {course.category} Track
          </span>
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-blue-500/20 text-blue-300 border border-blue-400/30">
            {course.level}
          </span>
        </div>

        {/* Card Content Body */}
        <div className="p-6 space-y-4">
          <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
            {course.title}
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
            {course.shortDescription}
          </p>

          {/* Metadata Highlights */}
          <div className="grid grid-cols-2 gap-2 text-xs font-medium text-slate-700 pt-2 border-t border-slate-100">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Laptop className="w-3.5 h-3.5 text-teal-600 flex-shrink-0" />
              <span className="truncate">{course.trainingMode}</span>
            </div>
          </div>

          <div className="bg-slate-50 rounded-xl p-3 border border-slate-200/60 text-xs space-y-1.5">
            <div className="flex items-start gap-1.5 text-slate-700">
              <GraduationCap className="w-3.5 h-3.5 text-blue-600 flex-shrink-0 mt-0.5" />
              <span><strong>Eligibility:</strong> {course.eligibility}</span>
            </div>
            {course.certificationPrep && (
              <div className="flex items-start gap-1.5 text-slate-700">
                <Award className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span><strong>Prep Focus:</strong> {course.certificationPrep}</span>
              </div>
            )}
          </div>

          {/* Key Modules Preview */}
          <div className="space-y-1.5 pt-1">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
              Core Modules:
            </span>
            <ul className="space-y-1 text-xs text-slate-700">
              {course.keyModules.slice(0, 3).map((mod, i) => (
                <li key={i} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-teal-500 flex-shrink-0" />
                  <span className="truncate">{mod}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Card Action Buttons */}
      <div className="p-6 pt-0 grid grid-cols-2 gap-3">
        <Link
          to={`/courses/${course.slug}`}
          className="py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold text-center flex items-center justify-center gap-1 transition-colors"
        >
          <span>View Details</span>
          <ArrowRight className="w-3 h-3" />
        </Link>
        
        <button
          onClick={() => onEnquire(course.title)}
          className="py-2.5 px-3 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold text-center shadow-md shadow-blue-700/20 transition-all cursor-pointer"
        >
          Enquire Now
        </button>
      </div>
    </div>
  );
};
