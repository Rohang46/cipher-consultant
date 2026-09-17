import React from 'react';
import { siteConfig } from '../config/siteConfig';

export const StatsSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-900 via-slate-900 to-teal-900 py-12 text-white border-y border-blue-800/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800/60">
          {siteConfig.stats.map((stat) => (
            <div key={stat.id} className="pt-4 md:pt-0 md:px-4 space-y-1">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-blue-200 to-white">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
