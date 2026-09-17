import React, { useState } from 'react';
import { Search, BookOpen, Layers, CheckCircle2, Award, Stethoscope, FileText, HeartPulse, Brain, Cross, HelpCircle, Shield, Briefcase, FileCode } from 'lucide-react';
import { CourseCard } from '../components/CourseCard';
import { CTABanner } from '../components/CTABanner';
import { coursesData } from '../data/courses';

interface CoursesProps {
  onOpenEnquiryModal: (courseTitle?: string) => void;
}

export const Courses: React.FC<CoursesProps> = ({ onOpenEnquiryModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Foundation', 'Certification', 'Specialty'];

  const modules14 = [
    { num: 1, title: "Medical Terminology", icon: BookOpen, desc: "Prefixes, suffixes, root words & body terms." },
    { num: 2, title: "Anatomy & Physiology", icon: HeartPulse, desc: "Human body systems & disease processes." },
    { num: 3, title: "ICD Coding", icon: FileCode, desc: "ICD-10-CM diagnostic classification system." },
    { num: 4, title: "CPT Coding", icon: Stethoscope, desc: "Outpatient surgical & diagnostic CPT procedures." },
    { num: 5, title: "HCPCS Coding", icon: Layers, desc: "HCPCS Level II national codes & supplies." },
    { num: 6, title: "Healthcare Documentation", icon: FileText, desc: "Deconstructing medical charts & progress notes." },
    { num: 7, title: "Diagnosis Coding", icon: Brain, desc: "Rules for assigning primary & secondary conditions." },
    { num: 8, title: "Procedure Coding", icon: Cross, desc: "Guidelines for multi-code surgical procedures." },
    { num: 9, title: "Coding Guidelines", icon: CheckCircle2, desc: "Official guidelines & modifier rules." },
    { num: 10, title: "Compliance Basics", icon: Shield, desc: "HIPAA, fraud/abuse rules & compliance." },
    { num: 11, title: "Medical Records", icon: FileText, desc: "Electronic health record structure." },
    { num: 12, title: "Case-Based Coding Practice", icon: Award, desc: "Real anonymized medical chart exercises." },
    { num: 13, title: "Certification Preparation", icon: Award, desc: "CPC & CCS exam-focused prep." },
    { num: 14, title: "Interview Preparation", icon: Briefcase, desc: "Technical coding interview questions." }
  ];

  const filteredCourses = coursesData.filter((c) => {
    const matchesCat = selectedCategory === 'All' || c.category === selectedCategory;
    const matchesSearch =
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.keyModules.some((m) => m.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCat && matchesSearch;
  });

  return (
    <div className="space-y-16 py-12">
      
      {/* Page Header */}
      <section className="bg-slate-950 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto text-left space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-400 bg-teal-500/10 border border-teal-500/20 px-3 py-1 rounded-full inline-block">
            Course Catalog
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            Medical Coding Training Programs
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Data-driven training curriculum covering foundational concepts, CPC & CCS certification preparation, and specialty coding modules in Pune.
          </p>
        </div>
      </section>

      {/* 14 Modules Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full inline-block mb-3">
            Core Curriculum Overview
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            What Will You Learn?
          </h2>
          <p className="mt-2 text-slate-600 text-sm">
            Our comprehensive medical coding curriculum spans 14 essential domain modules.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-left">
          {modules14.map((mod) => (
            <div
              key={mod.num}
              className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm hover:shadow-md hover:border-teal-400 transition-all flex items-start gap-3 group"
            >
              <div className="w-9 h-9 rounded-xl bg-teal-50 border border-teal-100 text-teal-700 flex items-center justify-center flex-shrink-0 font-bold group-hover:bg-teal-600 group-hover:text-white transition-colors">
                <mod.icon className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold text-teal-600 uppercase">
                  Module 0{mod.num}
                </span>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                  {mod.title}
                </h4>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-tight">
                  {mod.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Main Course Catalog Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-slate-900 p-6 rounded-3xl text-white">
          <div className="text-left">
            <h3 className="text-xl font-bold">Browse Courses</h3>
            <p className="text-xs text-slate-400">Filter by category or search by topic</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            {/* Search */}
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-950 border border-slate-800 focus:border-teal-400 focus:outline-none text-xs text-white"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-teal-500 text-slate-950 font-bold'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Courses Grid */}
        {filteredCourses.length === 0 ? (
          <div className="p-12 text-center bg-slate-50 border border-slate-200 rounded-3xl">
            <HelpCircle className="w-10 h-10 text-slate-400 mx-auto mb-2" />
            <h4 className="text-lg font-bold text-slate-800">No courses match your filter</h4>
            <p className="text-xs text-slate-500 mt-1">Try clearing your search query or selecting 'All'.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                onEnquire={(title) => onOpenEnquiryModal(title)}
              />
            ))}
          </div>
        )}
      </section>

      {/* Reusable CTA Banner */}
      <CTABanner onOpenEnquiryModal={() => onOpenEnquiryModal()} />

    </div>
  );
};
