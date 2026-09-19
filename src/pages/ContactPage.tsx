import React from 'react';
import { Phone, Mail, MessageSquare, Clock } from 'lucide-react';
import { ContactForm } from '../components/ContactForm';
import { siteConfig } from '../config/siteConfig';

export const Contact: React.FC = () => {
  return (
    <div className="space-y-16 py-12 text-left">
      
      {/* Header Banner */}
      <section className="bg-slate-950 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-400 bg-teal-500/10 border border-teal-500/20 px-3 py-1 rounded-full inline-block">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            Contact Cipher Consultant
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Reach out to our training advisors for batch schedules, course details, and certification preparation guidance.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Contact Cards & Quick Action Buttons */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                Institute Contact Details
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                
                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold block text-slate-900">Call Us:</span>
                    <span className="text-slate-600">{siteConfig.contact.phoneDisplay}</span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold block text-slate-900">Email Us:</span>
                    <span className="text-slate-600">{siteConfig.contact.emailDisplay}</span>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold block text-slate-900">WhatsApp Query:</span>
                    <span className="text-slate-600">{siteConfig.contact.whatsappDisplay}</span>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold block text-slate-900">Office Hours:</span>
                    <span className="text-slate-600">{siteConfig.contact.officeHours}</span>
                  </div>
                </div>

              </div>

              {/* Direct Action Buttons */}
              <div className="grid grid-cols-3 gap-2 pt-2">
                <a
                  href={`tel:${siteConfig.contact.phoneValue}`}
                  className="py-2.5 px-2 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold text-center flex flex-col items-center justify-center gap-1 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Us</span>
                </a>

                <a
                  href={`https://wa.me/${siteConfig.contact.whatsappValue}`}
                  target="_blank"
                  rel="noreferrer"
                  className="py-2.5 px-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold text-center flex flex-col items-center justify-center gap-1 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href={`mailto:${siteConfig.contact.emailValue}`}
                  className="py-2.5 px-2 rounded-xl bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold text-center flex flex-col items-center justify-center gap-1 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email</span>
                </a>
              </div>

            </div>

          </div>

          {/* Right Column: Admission Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-teal-800 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full inline-block mb-2">
                  Direct Form
                </span>
                <h3 className="text-2xl font-bold text-slate-900">Send an Enquiry</h3>
                <p className="text-xs text-slate-600 mt-1">
                  Fill out the form below to receive detailed course brochures, batch timings, and fee structures.
                </p>
              </div>

              <ContactForm />
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
