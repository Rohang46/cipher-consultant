import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import type { EnquiryFormData } from '../types';
import { submitEnquiry } from '../services/leadService';
import { coursesData } from '../data/courses';

interface ContactFormProps {
  defaultCourse?: string;
  onSuccess?: () => void;
  isModal?: boolean;
}

export const ContactForm: React.FC<ContactFormProps> = ({ defaultCourse, onSuccess, isModal = false }) => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: '',
    mobileNumber: '',
    email: '',
    qualification: '',
    yearOfPassing: '',
    currentOccupation: '',
    courseInterested: defaultCourse || 'Medical Coding Foundation Training',
    certificationInterested: 'Not Sure',
    specialtyInterested: 'None',
    preferredTrainingMode: 'Hybrid',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof EnquiryFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{ success: boolean; leadId?: string; message: string } | null>(null);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof EnquiryFormData, string>> = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = 'Mobile number is required';
    } else if (!/^[0-9+\-\s]{8,15}$/.test(formData.mobileNumber.trim())) {
      newErrors.mobileNumber = 'Please enter a valid phone number';
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof EnquiryFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const res = await submitEnquiry(formData);
      setSubmitResult(res);
      if (res.success && onSuccess) {
        setTimeout(() => {
          onSuccess();
        }, 2000);
      }
    } catch {
      setSubmitResult({
        success: false,
        message: 'Something went wrong. Please try again or contact us directly on WhatsApp.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitResult?.success) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 md:p-8 text-center space-y-4 animate-fadeIn">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h4 className="text-xl font-bold text-slate-900">Enquiry Submitted Successfully!</h4>
        <p className="text-sm text-slate-700 max-w-md mx-auto">
          {submitResult.message}
        </p>
        <div className="inline-block bg-white px-4 py-2 rounded-lg border border-emerald-200 text-xs font-mono text-emerald-800">
          Reference ID: <span className="font-bold">{submitResult.leadId}</span>
        </div>
        <div className="pt-2">
          <button
            onClick={() => setSubmitResult(null)}
            className="text-xs font-semibold text-teal-700 hover:text-teal-900 underline"
          >
            Submit Another Enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left">
      {submitResult && !submitResult.success && (
        <div className="p-4 bg-rose-50 border border-rose-200 text-rose-700 rounded-xl flex items-center gap-3 text-sm">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <span>{submitResult.message}</span>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Full Name */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
            Full Name <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="e.g. Rahul Sharma"
            className={`w-full px-3.5 py-2.5 rounded-lg border ${errors.fullName ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300 focus:border-blue-600'} focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-sm text-slate-900`}
          />
          {errors.fullName && <p className="mt-1 text-xs text-rose-600">{errors.fullName}</p>}
        </div>

        {/* Mobile Number */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
            Mobile / WhatsApp Number <span className="text-rose-500">*</span>
          </label>
          <input
            type="tel"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            className={`w-full px-3.5 py-2.5 rounded-lg border ${errors.mobileNumber ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300 focus:border-blue-600'} focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-sm text-slate-900`}
          />
          {errors.mobileNumber && <p className="mt-1 text-xs text-rose-600">{errors.mobileNumber}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Email */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="name@example.com"
            className={`w-full px-3.5 py-2.5 rounded-lg border ${errors.email ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300 focus:border-blue-600'} focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-sm text-slate-900`}
          />
          {errors.email && <p className="mt-1 text-xs text-rose-600">{errors.email}</p>}
        </div>

        {/* Qualification */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
            Qualification
          </label>
          <input
            type="text"
            name="qualification"
            value={formData.qualification}
            onChange={handleChange}
            placeholder="e.g. BSc Life Sciences / B.Pharm / Any Graduate"
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-sm text-slate-900"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Year of Passing */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
            Year of Passing
          </label>
          <input
            type="text"
            name="yearOfPassing"
            value={formData.yearOfPassing}
            onChange={handleChange}
            placeholder="e.g. 2025"
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-sm text-slate-900"
          />
        </div>

        {/* Current Occupation */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
            Current Occupation
          </label>
          <input
            type="text"
            name="currentOccupation"
            value={formData.currentOccupation}
            onChange={handleChange}
            placeholder="e.g. Student / Healthcare Staff / Working Professional"
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-sm text-slate-900"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Course Interested In */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
            Course Interested In
          </label>
          <select
            name="courseInterested"
            value={formData.courseInterested}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-sm text-slate-900 bg-white"
          >
            {coursesData.map((c) => (
              <option key={c.id} value={c.title}>
                {c.title}
              </option>
            ))}
          </select>
        </div>

        {/* Certification Interested In */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
            Certification Track
          </label>
          <select
            name="certificationInterested"
            value={formData.certificationInterested}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-sm text-slate-900 bg-white"
          >
            <option value="Not Sure">Not Sure / Want Guidance</option>
            <option value="CPC">Certified Professional Coder (CPC)</option>
            <option value="CCS">Certified Coding Specialist (CCS)</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Specialty Interested In */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
            Specialty Interested In
          </label>
          <select
            name="specialtyInterested"
            value={formData.specialtyInterested}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-sm text-slate-900 bg-white"
          >
            <option value="None">None / General Medical Coding</option>
            <option value="E/M">Evaluation & Management (E/M)</option>
            <option value="Surgery">Surgery Coding</option>
            <option value="IP DRG">IP DRG (Inpatient)</option>
            <option value="IVR">IVR Specialty Training</option>
          </select>
        </div>

        {/* Preferred Training Mode */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
            Preferred Training Mode
          </label>
          <select
            name="preferredTrainingMode"
            value={formData.preferredTrainingMode}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-sm text-slate-900 bg-white"
          >
            <option value="Online">Online Interactive</option>
            <option value="Offline">Offline Classroom (Pune)</option>
            <option value="Hybrid">Hybrid Mode</option>
            <option value="Not Sure">Not Sure</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
          Your Question or Remarks
        </label>
        <textarea
          name="message"
          rows={isModal ? 2 : 3}
          value={formData.message}
          onChange={handleChange}
          placeholder="Ask about batch timings, fees structure, curriculum details..."
          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-sm text-slate-900"
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-blue-700 via-blue-800 to-teal-700 hover:from-blue-800 hover:to-teal-800 text-white font-bold shadow-lg shadow-blue-700/20 hover:shadow-blue-700/30 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Submitting Enquiry...</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            <span>Submit Enquiry</span>
          </>
        )}
      </button>
    </form>
  );
};
