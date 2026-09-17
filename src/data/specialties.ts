import type { SpecialtyProgram } from '../types';

export const specialtiesData: SpecialtyProgram[] = [
  {
    id: "evaluation-and-management",
    title: "Evaluation & Management (E/M)",
    displayTitle: "Evaluation & Management (E/M)",
    description: "Develop a strong understanding of Evaluation and Management coding, documentation requirements, code selection, and practical case scenarios.",
    topics: [
      "E/M concepts & principles",
      "Documentation requirements",
      "Code selection guidelines",
      "Medical Decision Making (MDM) level selection",
      "Case-based practice exercises",
      "Official coding guidelines"
    ],
    ctaText: "View Training"
  },
  {
    id: "surgery-coding",
    title: "Surgery Coding",
    displayTitle: "Surgery Coding",
    description: "Learn the fundamentals of surgical coding, procedure documentation, CPT concepts, modifiers, and practical surgical coding scenarios.",
    topics: [
      "Surgical terminology & anatomy",
      "Procedure documentation analysis",
      "CPT surgical coding (10000-60000 series)",
      "Global surgery package concepts",
      "Surgical modifiers (51, 59, 50, XE/XS/XP/XU)",
      "Case-based surgical chart practice"
    ],
    ctaText: "View Training"
  },
  {
    id: "ip-drg",
    title: "IP DRG",
    displayTitle: "IP DRG",
    description: "Develop knowledge of inpatient coding and Diagnosis Related Group concepts with practical case-based learning.",
    topics: [
      "Inpatient coding concepts",
      "ICD-10-CM & ICD-10-PCS coding",
      "Principal diagnosis documentation",
      "Procedure coding & approaches",
      "DRG concepts & CC/MCC flags",
      "Case studies & inpatient record audits"
    ],
    ctaText: "View Training"
  },
  {
    id: "ivr-specialty",
    title: "IVR Specialty Training",
    displayTitle: "IVR Specialty Training",
    description: "Specialized medical coding training focused on IVR concepts and practical coding applications.",
    topics: [
      "Vascular anatomical families & order selection",
      "Catheter placement guidelines (selective vs non-selective)",
      "Diagnostic arteriography & venography coding",
      "Interventional procedures (angioplasty, stenting, thrombectomy)",
      "Radiological supervision and interpretation (S&I) codes",
      "Case-based IVR coding practice"
    ],
    ctaText: "View Training",
    configurableNote: "Course topics will be updated based on the institute's training curriculum."
  }
];
