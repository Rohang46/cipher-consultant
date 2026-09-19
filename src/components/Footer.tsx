import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MessageSquare, ShieldCheck } from 'lucide-react';
import { Logo } from './Logo';
import { siteConfig } from '../config/siteConfig';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Tagline */}
          <div className="space-y-4 text-left">
            <Logo variant="light" />
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Cipher Consultant Medical Coding Training Institute provides industry-focused medical coding training, CPC and CCS certification preparation, and specialty coding education.
            </p>
            <div className="flex items-center gap-3 pt-2">
              {/* LinkedIn SVG */}
              <a
                href={siteConfig.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z"/>
                </svg>
              </a>

              {/* Instagram SVG */}
              <a
                href={siteConfig.socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-pink-600 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* Facebook SVG */}
              <a
                href={siteConfig.socialLinks.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-700 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* YouTube SVG */}
              <a
                href={siteConfig.socialLinks.youtube}
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-rose-600 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="text-left">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4 border-l-2 border-teal-500 pl-2">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-slate-400 hover:text-teal-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-teal-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/courses" className="text-slate-400 hover:text-teal-400 transition-colors">Courses</Link>
              </li>
              <li>
                <Link to="/certifications" className="text-slate-400 hover:text-teal-400 transition-colors">Certifications</Link>
              </li>
              <li>
                <Link to="/specialties" className="text-slate-400 hover:text-teal-400 transition-colors">Specialty Training</Link>
              </li>
              <li>
                <Link to="/career" className="text-slate-400 hover:text-teal-400 transition-colors">Career Opportunities</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-slate-400 hover:text-teal-400 transition-colors">Institute Gallery</Link>
              </li>
              <li>
                <Link to="/blog" className="text-slate-400 hover:text-teal-400 transition-colors">Resources & Blog</Link>
              </li>
              <li>
                <Link to="/faq" className="text-slate-400 hover:text-teal-400 transition-colors">FAQ</Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-teal-400 transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Programs & Specialties */}
          <div className="text-left">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4 border-l-2 border-blue-500 pl-2">
              Training Tracks
            </h4>
            <div className="space-y-4">
              <div>
                <span className="text-xs font-semibold text-teal-400 uppercase tracking-wider block mb-1.5">
                  Certification Prep
                </span>
                <ul className="space-y-1.5 text-sm text-slate-400">
                  <li>
                    <Link to="/certifications" className="hover:text-white transition-colors">CPC Certification Prep</Link>
                  </li>
                  <li>
                    <Link to="/certifications" className="hover:text-white transition-colors">CCS Certification Prep</Link>
                  </li>
                </ul>
              </div>

              <div>
                <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider block mb-1.5">
                  Specialty Modules
                </span>
                <ul className="space-y-1.5 text-sm text-slate-400">
                  <li>
                    <Link to="/specialties" className="hover:text-white transition-colors">Evaluation & Management (E/M)</Link>
                  </li>
                  <li>
                    <Link to="/specialties" className="hover:text-white transition-colors">Surgery Coding</Link>
                  </li>
                  <li>
                    <Link to="/specialties" className="hover:text-white transition-colors">IP DRG</Link>
                  </li>
                  <li>
                    <Link to="/specialties" className="hover:text-white transition-colors">IVR Specialty Training</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Col 4: Contact */}
          <div className="text-left">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4 border-l-2 border-teal-500 pl-2">
              Contact Details
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>{siteConfig.contact.phoneDisplay}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span className="break-all">{siteConfig.contact.emailDisplay}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>WhatsApp: {siteConfig.contact.whatsappDisplay}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Disclaimer Banner */}
        <div className="py-6 border-b border-slate-800/80 text-xs text-slate-400 leading-relaxed bg-slate-900/50 p-4 rounded-xl my-6 text-left">
          <div className="flex items-center gap-2 text-slate-300 font-semibold mb-1">
            <ShieldCheck className="w-4 h-4 text-teal-400" />
            <span>Important Credential & Training Disclaimer</span>
          </div>
          <p>{siteConfig.disclaimers.general}</p>
          <p className="mt-1">{siteConfig.disclaimers.affiliation}</p>
          <p className="mt-1">{siteConfig.disclaimers.employment}</p>
        </div>

        {/* Bottom Copyright Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 pt-2">
          <p>© 2026 Cipher Consultant Medical Coding Training Institute. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};
