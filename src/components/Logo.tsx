import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'dark', className = '' }) => {
  const isLight = variant === 'light';

  return (
    <Link to="/" className={`flex items-center gap-3 group text-left ${className}`}>
      {/* SVG Healthcare/Coding Icon */}
      <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-blue-700 via-blue-600 to-teal-500 p-0.5 shadow-md group-hover:shadow-blue-500/20 transition-all duration-300 flex-shrink-0">
        <div className="w-full h-full bg-slate-950/90 rounded-[10px] flex items-center justify-center relative overflow-hidden">
          {/* Subtle grid background */}
          <div className="absolute inset-0 bg-blue-500/10 opacity-30"></div>
          
          <svg className="w-6 h-6 text-teal-400 group-hover:scale-105 transition-transform duration-300 relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            {/* Coding brackets combined with medical pulse line */}
            <polyline points="7 8 3 12 7 16" />
            <polyline points="17 8 21 12 17 16" />
            <path d="M10 16l1.5-5 2.5 6 1.5-5" stroke="#38bdf8" />
          </svg>
        </div>
      </div>

      <div className="flex flex-col">
        <span className={`text-xl md:text-2xl font-black tracking-wider leading-none font-mono uppercase ${isLight ? 'text-white' : 'text-slate-900'}`}>
          CIPHER
        </span>
        <div className="flex items-center gap-1.5 mt-0.5">
          <span className={`text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase ${isLight ? 'text-teal-300' : 'text-blue-700'}`}>
            CONSULTANT
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse"></span>
        </div>
      </div>
    </Link>
  );
};
