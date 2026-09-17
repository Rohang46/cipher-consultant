import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, GraduationCap, Laptop, Award, CheckCircle2, ArrowLeft, Send, HelpCircle, Briefcase, FileText } from 'lucide-react';
import { coursesData } from '../data/courses';
import { CTABanner } from '../components/CTABanner';

interface CourseDetailsPageProps {
  onOpenEnquiryModal: (courseTitle?: string) => void;
}

export const CourseDetailsPage: React.FC<CourseDetailsPageProps> = ({ onOpenEnquiryModal }) => {
  const { slug } = useParams<{ slug: string }>();

  const course = coursesData.find((c) => c.slug === slug) || coursesData[0];

  return (
    <div className="space-y-12 py-12 text-left">
      
      {/* Header Banner */}
      <section className="bg-slate-950 text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto space-y-4">
          <Link
            to="/courses"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-400 hover:text-teal-300 transition-colors mb-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Courses</span>
          </Link>

          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-mono font-bold border border-blue-400/30">
              {course.category} Program
            </span>
            <span className="px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-mono font-bold border border-teal-400/30">
              {course.level} Level
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            {course.title}
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            {course.shortDescription}
          </p>

          <div className="pt-4 flex flex-wrap gap-4">
            <button
              onClick={() => onOpenEnquiryModal(course.title)}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-bold text-sm shadow-lg shadow-blue-600/30 transition-all flex items-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Enquire for this Course</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Details Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Main Content */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Course Overview */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-blue-600 pl-3">
                Course Overview
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed">
                {course.fullDescription}
              </p>
            </div>

            {/* Learning Objectives */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-teal-600 pl-3">
                Learning Objectives
              </h2>
              <div className="space-y-2.5">
                {course.learningObjectives.map((obj, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span>{obj}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Course Curriculum */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-blue-600 pl-3">
                Course Curriculum & Key Modules
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-800 font-semibold">
                {course.keyModules.map((mod, i) => (
                  <div key={i} className="bg-slate-50 p-3 rounded-xl border border-slate-200 flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-lg bg-blue-100 text-blue-700 text-[10px] font-mono flex items-center justify-center font-bold flex-shrink-0">
                      0{i + 1}
                    </span>
                    <span>{mod}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Practical Training & Case Studies */}
            <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <FileText className="w-6 h-6 text-teal-400" />
                Practical Case-Based Training
              </h2>
              <div className="space-y-2 text-xs sm:text-sm text-slate-300">
                {course.practicalAspects.map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Career Opportunities */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-emerald-600 pl-3 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-emerald-600" />
                Potential Career Opportunities
              </h2>
              <div className="flex flex-wrap gap-2">
                {course.careerOpportunities.map((role, i) => (
                  <span key={i} className="px-3.5 py-1.5 rounded-xl bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
                    {role}
                  </span>
                ))}
              </div>
            </div>

            {/* Course FAQs */}
            {course.faqs && course.faqs.length > 0 && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
                <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-amber-500 pl-3 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-amber-500" />
                  Course FAQs
                </h2>
                <div className="space-y-4">
                  {course.faqs.map((f, i) => (
                    <div key={i} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm space-y-1">
                      <h4 className="font-bold text-slate-900">Q: {f.question}</h4>
                      <p className="text-slate-600">A: {f.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Right Sidebar Metadata Card */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-lg space-y-6 sticky top-24">
              <h3 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                Course Summary
              </h3>

              <div className="space-y-4 text-xs text-slate-700">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-slate-900">Duration:</span>
                    <span>{course.duration}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Laptop className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-slate-900">Training Mode:</span>
                    <span>{course.trainingMode}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <GraduationCap className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-slate-900">Eligibility:</span>
                    <span>{course.eligibility}</span>
                  </div>
                </div>

                {course.certificationPrep && (
                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold block text-slate-900">Certification Prep:</span>
                      <span>{course.certificationPrep}</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="pt-2 border-t border-slate-100 space-y-2">
                <button
                  onClick={() => onOpenEnquiryModal(course.title)}
                  className="w-full py-3.5 px-4 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-colors cursor-pointer"
                >
                  Enquire Now
                </button>
                <a
                  href={`https://wa.me/${coursesData[0] ? '919876543210' : ''}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold text-xs text-center block border border-emerald-200 transition-colors"
                >
                  Ask via WhatsApp
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Reusable CTA Banner */}
      <CTABanner onOpenEnquiryModal={() => onOpenEnquiryModal(course.title)} />

    </div>
  );
};
