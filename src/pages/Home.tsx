import React from 'react';
import { Link } from 'react-router-dom';
import { FileCheck, CheckCircle2, ArrowRight, BookOpen, Sparkles } from 'lucide-react';
import { Hero } from '../components/Hero';
import { StatsSection } from '../components/StatsSection';
import { LearningJourney } from '../components/LearningJourney';
import { CourseCard } from '../components/CourseCard';
import { CertificationCard } from '../components/CertificationCard';
import { SpecialtyCard } from '../components/SpecialtyCard';
import { TestimonialCard } from '../components/TestimonialCard';
import { ContactForm } from '../components/ContactForm';
import { CTABanner } from '../components/CTABanner';
import { coursesData } from '../data/courses';
import { certificationsData } from '../data/certifications';
import { specialtiesData } from '../data/specialties';
import { testimonialsData } from '../data/testimonials';

interface HomeProps {
  onOpenEnquiryModal: (courseTitle?: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenEnquiryModal }) => {
  const featuredCourses = coursesData.slice(0, 3);

  const practicalHighlights = [
    "Medical coding chart scenarios",
    "Clinical documentation review",
    "Diagnostic coding exercises (ICD-10-CM)",
    "Procedural coding exercises (CPT-4)",
    "Specialty coding case examples",
    "Mock assessments & timed tests",
    "Exam-oriented practice drills"
  ];

  const whyChooseReasons = [
    { title: "Certification-Focused Training", desc: "Structured blueprints designed to prepare learners for CPC & CCS credentials." },
    { title: "Practical Case-Based Learning", desc: "Training anchored in realistic anonymized medical charts and surgical reports." },
    { title: "Specialty Coding Training", desc: "Modules in E/M, Surgery, IP DRG, and IVR specialty coding." },
    { title: "Structured Curriculum", desc: "Progressive learning from basic anatomy to complex code lookup." },
    { title: "Experienced Trainers", desc: "Instructors with practical background in healthcare revenue cycle operations." },
    { title: "Career Guidance", desc: "Resume building, industry orientation, and interview preparation support." },
    { title: "Interview Preparation", desc: "Technical coding questions and scenario-based mock interviews." },
    { title: "Continuous Support", desc: "Ongoing mentorship and doubt clarification during study tracks." },
  ];

  return (
    <div className="space-y-0">
      
      {/* 1. Hero */}
      <Hero onOpenEnquiryModal={() => onOpenEnquiryModal()} />

      {/* 2. Stats Section */}
      <StatsSection />

      {/* 3. Brief Introduction: What is Medical Coding? */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-4 text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-teal-700 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full inline-block">
                Industry Overview
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                What is Medical Coding?
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Medical coding involves translating healthcare diagnoses, procedures, medical services, and documentation into standardized alphanumeric codes used in healthcare administration, medical billing, insurance reimbursement, data analytics, and regulatory compliance.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                At <strong>Cipher Consultant Medical Coding Training Institute</strong> in Pune, we guide students and professionals to master coding manuals (ICD-10-CM, CPT, HCPCS), understand clinical records, and build career readiness for healthcare revenue cycle management (RCM).
              </p>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-900 group"
                >
                  <span>Learn More About Cipher Consultant</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-slate-900 rounded-3xl p-6 sm:p-8 text-white text-left space-y-4 shadow-xl border border-slate-800">
                <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-teal-400 flex items-center justify-center font-bold">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white">What Will You Learn?</h3>
                    <p className="text-xs text-slate-400">Core Curriculum Modules</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2.5 text-xs text-slate-300">
                  <div className="flex items-center gap-2 bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 flex-shrink-0" />
                    <span>Medical Terminology</span>
                  </div>
                  <div className="flex items-center gap-2 bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 flex-shrink-0" />
                    <span>Anatomy & Physiology</span>
                  </div>
                  <div className="flex items-center gap-2 bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 flex-shrink-0" />
                    <span>ICD-10-CM Coding</span>
                  </div>
                  <div className="flex items-center gap-2 bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 flex-shrink-0" />
                    <span>CPT Procedural Coding</span>
                  </div>
                  <div className="flex items-center gap-2 bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 flex-shrink-0" />
                    <span>HCPCS Level II</span>
                  </div>
                  <div className="flex items-center gap-2 bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 flex-shrink-0" />
                    <span>Case-Based Practice</span>
                  </div>
                </div>

                <div className="pt-2 text-right">
                  <Link to="/courses" className="text-xs font-semibold text-teal-400 hover:text-teal-300">
                    View Full 14-Module Curriculum →
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Learning Journey */}
      <LearningJourney />

      {/* 5. Featured Courses Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 text-left">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full inline-block mb-3">
                Featured Programs
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Explore Medical Coding Training Courses
              </h2>
              <p className="mt-2 text-slate-600 text-sm max-w-xl">
                Data-driven training programs tailored for beginners, certification candidates, and specialty coders.
              </p>
            </div>

            <Link
              to="/courses"
              className="mt-4 md:mt-0 text-sm font-bold text-blue-700 hover:text-blue-900 flex items-center gap-1.5"
            >
              <span>View All 7 Courses</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                onEnquire={(title) => onOpenEnquiryModal(title)}
              />
            ))}
          </div>

        </div>
      </section>

      {/* 6. Certification Programs Preview */}
      <section className="py-16 bg-slate-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-400 bg-teal-500/10 border border-teal-500/20 px-3 py-1 rounded-full inline-block mb-3">
              Professional Credentials
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Professional Medical Coding Certifications
            </h2>
            <p className="mt-3 text-slate-300 text-sm">
              We provide structured examination preparation for professional certification tracks including CPC and CCS.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {certificationsData.map((cert) => (
              <CertificationCard
                key={cert.id}
                cert={cert}
                onEnquire={(title) => onOpenEnquiryModal(title)}
              />
            ))}
          </div>

        </div>
      </section>

      {/* 7. Specialty Training Section */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-800 bg-teal-100 border border-teal-200 px-3 py-1 rounded-full inline-block mb-3">
              Specialized Modules
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Specialty Medical Coding Training
            </h2>
            <p className="mt-3 text-slate-600 text-sm">
              Master high-demand specialty coding disciplines to enhance your technical expertise in revenue cycle operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialtiesData.map((spec) => (
              <SpecialtyCard
                key={spec.id}
                specialty={spec}
                onEnquire={(title) => onOpenEnquiryModal(title)}
              />
            ))}
          </div>

        </div>
      </section>

      {/* 8. Practical Case-Based Training */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 text-left space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full inline-block">
                Hands-on Methodology
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Learn Through Practical Case-Based Training
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Theoretical knowledge alone is not enough to excel in medical coding. At Cipher Consultant, learners analyze anonymized realistic healthcare charts, physician progress notes, and operative reports.
              </p>

              <div className="space-y-2.5 pt-2">
                {practicalHighlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm text-slate-700">
                    <FileCheck className="w-4 h-4 text-teal-600 flex-shrink-0" />
                    <span className="font-semibold">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onOpenEnquiryModal("Practical Case-Based Training")}
                  className="px-6 py-3 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-colors cursor-pointer"
                >
                  Request Sample Case Material Guidance
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80"
                  alt="Practical Medical Record Analysis"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-slate-950/40"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white text-left p-4 bg-slate-950/80 backdrop-blur-md rounded-2xl border border-slate-800">
                  <div className="flex items-center gap-2 text-teal-400 font-mono text-xs font-bold mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Real-World Chart Scenarios</span>
                  </div>
                  <p className="text-sm font-bold">Comprehensive Clinical Record Deconstruction</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 9. Why Choose Cipher Consultant */}
      <section className="py-16 bg-slate-900 text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-400 bg-teal-500/10 border border-teal-500/20 px-3 py-1 rounded-full inline-block mb-3">
              Institute Strengths
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Why Choose Cipher Consultant?
            </h2>
            <p className="mt-3 text-slate-300 text-sm">
              We combine structured healthcare education, credential prep, and practical learning in Pune.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {whyChooseReasons.map((reason, idx) => (
              <div
                key={idx}
                className="bg-slate-950/70 border border-slate-800 hover:border-teal-500/50 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-600/10 text-teal-400 flex items-center justify-center mb-4 font-bold font-mono">
                  0{idx + 1}
                </div>
                <h3 className="text-base font-bold text-white mb-2">{reason.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{reason.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 10. Student Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full inline-block mb-3">
              Learner Experience
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Student Feedback & Reviews
            </h2>
            <p className="mt-2 text-slate-600 text-sm">
              Read how our structured medical coding training approaches support student learning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonialsData.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>

        </div>
      </section>

      {/* 11. Quick Enquiry Section */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl text-left space-y-6">
            <div className="text-center max-w-xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-widest text-teal-800 bg-teal-100 px-3 py-1 rounded-full inline-block mb-2">
                Direct Admission Enquiry
              </span>
              <h3 className="text-2xl font-bold text-slate-900">Enquire Now for Medical Coding Batches</h3>
              <p className="text-xs text-slate-600 mt-1">
                Fill in your details below to speak with our training advisor.
              </p>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* 12. Reusable CTA Banner */}
      <CTABanner onOpenEnquiryModal={() => onOpenEnquiryModal()} />

    </div>
  );
};
