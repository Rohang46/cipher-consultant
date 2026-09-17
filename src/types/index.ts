export type TrainingMode = 'Online' | 'Offline' | 'Hybrid' | 'Not Sure';
export type CertificationType = 'CPC' | 'CCS' | 'Not Sure';
export type SpecialtyType = 'E/M' | 'Surgery' | 'IP DRG' | 'IVR' | 'None';
export type LeadStatus = 'New' | 'Contacted' | 'Interested' | 'Follow-up' | 'Enrolled' | 'Not Interested' | 'Closed';

export interface Course {
  id: string;
  slug: string;
  title: string;
  category: 'Foundation' | 'Certification' | 'Specialty';
  shortDescription: string;
  fullDescription: string;
  duration: string;
  trainingMode: string;
  eligibility: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  keyModules: string[];
  certificationPrep: string;
  learningObjectives: string[];
  practicalAspects: string[];
  careerOpportunities: string[];
  faqs: { question: string; answer: string }[];
  featured?: boolean;
}

export interface CertificationProgram {
  id: string;
  title: string;
  shortTitle: string;
  credentialName: string;
  description: string;
  overview: string;
  examFocus: string[];
  topicsCovered: string[];
  targetAudience: string;
  preparationStrategy: string[];
  disclaimer: string;
}

export interface SpecialtyProgram {
  id: string;
  title: string;
  displayTitle: string;
  description: string;
  topics: string[];
  ctaText: string;
  configurableNote?: string;
}

export interface Trainer {
  id: string;
  name: string;
  title: string;
  qualification: string;
  certification: string;
  experience: string;
  specialization: string;
  bio: string;
  avatarUrl: string;
  placeholderNotice?: string;
}

export interface Testimonial {
  id: string;
  studentName: string;
  course: string;
  rating: number;
  review: string;
  year: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Medical Coding' | 'Certifications' | 'Specialties' | 'Admissions';
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  shortDescription: string;
  content: string[];
  tags: string[];
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Training Sessions' | 'Classroom' | 'Practical Learning' | 'Workshops' | 'Student Activities' | 'Certification Preparation';
  imageUrl: string;
  caption: string;
}

export interface EnquiryFormData {
  fullName: string;
  mobileNumber: string;
  email: string;
  qualification: string;
  yearOfPassing: string;
  currentOccupation: string;
  courseInterested: string;
  certificationInterested: CertificationType;
  specialtyInterested: SpecialtyType;
  preferredTrainingMode: TrainingMode;
  message: string;
}

export interface Lead extends EnquiryFormData {
  id: string;
  status: LeadStatus;
  createdDate: string;
  followUpDate?: string;
  notes?: string;
  source: string;
}
