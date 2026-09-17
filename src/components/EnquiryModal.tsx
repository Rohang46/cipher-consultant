import React from 'react';
import { X } from 'lucide-react';
import { ContactForm } from './ContactForm';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCourse?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({ isOpen, onClose, defaultCourse }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 md:p-8 transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-teal-800 bg-teal-50 border border-teal-200 rounded-full mb-2">
            Admission & Course Query
          </span>
          <h3 className="text-2xl font-bold text-slate-900">Enquire Now</h3>
          <p className="text-sm text-slate-600">
            Speak with our training advisor at Cipher Consultant Medical Coding Training Institute in Pune.
          </p>
        </div>

        <ContactForm defaultCourse={defaultCourse} onSuccess={onClose} isModal />
      </div>
    </div>
  );
};
