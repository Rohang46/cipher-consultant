import React from 'react';
import { Star, Quote } from 'lucide-react';
import type { Testimonial } from '../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between text-left space-y-4 relative">
      <Quote className="w-8 h-8 text-blue-100 absolute top-4 right-4" />

      <div className="space-y-3 relative z-10">
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < testimonial.rating
                  ? 'fill-amber-400 text-amber-400'
                  : 'text-slate-200'
              }`}
            />
          ))}
        </div>

        <p className="text-sm text-slate-700 leading-relaxed italic">
          "{testimonial.review}"
        </p>
      </div>

      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
        <div>
          <h4 className="font-bold text-slate-900">{testimonial.studentName}</h4>
          <p className="text-slate-500">{testimonial.course}</p>
        </div>
        <span className="text-[10px] font-mono text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
          {testimonial.year}
        </span>
      </div>
    </div>
  );
};
