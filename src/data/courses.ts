import type { Course } from '../types';

export const coursesData: Course[] = [
  {
    id: "medical-coding-foundation",
    slug: "medical-coding-foundation",
    title: "Medical Coding Foundation Training",
    category: "Foundation",
    shortDescription: "Comprehensive introductory program covering human anatomy, medical terminology, ICD-10-CM, CPT, and HCPCS fundamentals for beginners.",
    fullDescription: "The Medical Coding Foundation Training program at Cipher Consultant is designed for students and healthcare professionals entering the healthcare revenue cycle management industry. It establishes a solid understanding of medical science concepts, diagnostic coding, procedural coding, and clinical documentation.",
    duration: "2 Months (8 Weeks)",
    trainingMode: "Online / Offline / Hybrid",
    eligibility: "Graduates or undergraduates in Life Sciences, Pharmacy, Nursing, Biotechnology, Science, Commerce, or any discipline interested in healthcare administrative careers.",
    level: "Beginner",
    featured: true,
    keyModules: [
      "Medical Terminology & Prefixes/Suffixes",
      "Human Anatomy & Physiology Systems",
      "Pathology & Disease Classification",
      "ICD-10-CM Diagnosis Coding Rules",
      "CPT-4 Surgical & Diagnostic Procedure Coding",
      "HCPCS Level II National Codes",
      "Healthcare Documentation & HIPAA Basics",
      "Introduction to Claim Cycles & Reimbursement"
    ],
    certificationPrep: "Provides foundational prerequisites for CPC & CCS preparation tracks.",
    learningObjectives: [
      "Master essential medical terms, root words, and anatomical systems.",
      "Navigate official ICD-10-CM guidelines and assign accurate diagnostic codes.",
      "Understand CPT procedure coding for outpatient services.",
      "Recognize the structure of medical records and physician notes.",
      "Develop speed and accuracy in code lookup."
    ],
    practicalAspects: [
      "Case-based exercises using real-world anonymized medical charts.",
      "Hands-on practice with coding manuals (ICD, CPT, HCPCS).",
      "Weekly diagnostic and procedural coding drills."
    ],
    careerOpportunities: [
      "Junior Medical Coder",
      "Medical Coding Trainee",
      "Healthcare Data Entry Analyst",
      "Billing & Coding Assistant"
    ],
    faqs: [
      {
        question: "Do I need a medical background to join this course?",
        answer: "While a life sciences or medical background is helpful, our foundation course starts from basic anatomy and terminology, making it suitable for motivated non-biology graduates as well."
      },
      {
        question: "Is certification included in the foundation course?",
        answer: "This program builds the baseline knowledge required for specialty and credential preparation courses such as CPC or CCS."
      }
    ]
  },
  {
    id: "cpc-certification-preparation",
    slug: "cpc-certification-preparation",
    title: "CPC Certification Preparation",
    category: "Certification",
    shortDescription: "Structured, exam-focused preparation for the Certified Professional Coder (CPC) credential with intensive case studies and mock tests.",
    fullDescription: "Prepare for the Certified Professional Coder (CPC) examination with structured medical coding training, official coding guidelines, extensive case-based practice, and time-managed exam preparation strategies.",
    duration: "3 Months (12 Weeks)",
    trainingMode: "Online / Offline / Hybrid",
    eligibility: "Completion of Medical Coding Foundation or prior background in anatomy, medical terminology, and basic coding.",
    level: "Intermediate",
    featured: true,
    keyModules: [
      "In-Depth ICD-10-CM Coding Guidelines",
      "CPT Coding across 10000 to 60000 Series",
      "E/M Coding & Time/MDM Guidelines",
      "Anesthesia, Radiology, Pathology & Laboratory CPT",
      "HCPCS Level II & Modifier Application",
      "Compliance, Regulatory & HIPAA Requirements",
      "Timed Exam Simulations & Strategy",
      "Rationales & Answer Key Deconstruction"
    ],
    certificationPrep: "Specifically tailored for candidates aiming to clear the CPC examination.",
    learningObjectives: [
      "Apply official outpatient coding guidelines accurately.",
      "Master code selection for complex surgical and medical procedures.",
      "Utilize CPT modifiers effectively to ensure accurate billing representation.",
      "Develop speed management skills for multi-choice board style exams."
    ],
    practicalAspects: [
      "Over 500+ practice questions and medical chart scenarios.",
      "Full-length timed mock examinations with review sessions.",
      "Section-by-section breakdown of high-yield exam topics."
    ],
    careerOpportunities: [
      "Certified Professional Coder (CPC)",
      "Outpatient Medical Coder",
      "Physician Coding Specialist",
      "Coding Quality Auditor"
    ],
    faqs: [
      {
        question: "Does Cipher Consultant directly issue the CPC credential?",
        answer: "No. CPC is awarded by AAPC upon passing their official examination. Cipher Consultant provides intensive training and preparation to help you clear the exam."
      },
      {
        question: "What materials are required for CPC preparation?",
        answer: "Learners will utilize current year code books (ICD-10-CM, CPT Professional Edition, and HCPCS Level II) along with our specialized study guides."
      }
    ]
  },
  {
    id: "ccs-certification-preparation",
    slug: "ccs-certification-preparation",
    title: "CCS Certification Preparation",
    category: "Certification",
    shortDescription: "Comprehensive training focused on inpatient and facility coding, ICD-10-PCS, DRG assignment, and clinical documentation integrity.",
    fullDescription: "Structured preparation for CCS certification with emphasis on facility coding knowledge, clinical documentation, inpatient procedural coding (ICD-10-PCS), outpatient concepts, and coding guidelines.",
    duration: "20 Days",
    trainingMode: "Online / Offline / Hybrid",
    eligibility: "Basic medical coding knowledge or completion of Medical Coding Foundation training.",
    level: "Advanced",
    featured: true,
    keyModules: [
      "ICD-10-CM Diagnostic Coding Mastery",
      "ICD-10-PCS Procedural Coding System (Inpatient)",
      "Inpatient Coding Guidelines & Principal Diagnosis Selection",
      "MS-DRG & APR-DRG Grouping Concepts",
      "Clinical Documentation Improvement (CDI) Basics",
      "Outpatient Facility Coding Rules (CPT/HCPCS)",
      "Regulatory Compliance & POA (Present on Admission)",
      "CCS Practice Exams & Scenario Analysis"
    ],
    certificationPrep: "Designed for candidates preparing for facility and hospital coding certification.",
    learningObjectives: [
      "Master root operation selection in ICD-10-PCS coding.",
      "Determine principal diagnosis and secondary conditions for inpatient stays.",
      "Understand how documentation impacts DRG assignment and hospital reimbursement.",
      "Gain confidence in facility coding guidelines."
    ],
    practicalAspects: [
      "Complex hospital discharge summaries and surgical report chart practice.",
      "DRG calculation exercises and case studies.",
      "Mock CCS examination simulations."
    ],
    careerOpportunities: [
      "Inpatient Hospital Coder",
      "Facility Medical Coder",
      "DRG Auditor",
      "Clinical Documentation Specialist"
    ],
    faqs: [
      {
        question: "What is the difference between CPC and CCS?",
        answer: "CPC focuses primarily on physician office and outpatient coding (CPT), whereas CCS emphasizes hospital inpatient facility coding (ICD-10-PCS & DRGs) as well as outpatient settings."
      }
    ]
  },
  {
    id: "evaluation-and-management-em",
    slug: "evaluation-and-management-em",
    title: "Evaluation & Management (E/M) Specialty",
    category: "Specialty",
    shortDescription: "Specialized training in E/M documentation guidelines, Medical Decision Making (MDM) scoring, and office/inpatient visit code selection.",
    fullDescription: "Develop a strong understanding of Evaluation and Management coding, documentation requirements, code selection guidelines, MDM calculations, and practical case scenarios.",
    duration: "4 Weeks",
    trainingMode: "Online / Offline",
    eligibility: "Basic knowledge of CPT coding and medical terminology.",
    level: "Intermediate",
    featured: false,
    keyModules: [
      "E/M Coding Concepts & Principles",
      "Documentation Requirements for Office & Outpatient Visits",
      "Medical Decision Making (MDM) Grid & Elements",
      "Time-Based Code Selection Rules",
      "Hospital Inpatient & Observation E/M Services",
      "Consultations, Preventive Visits & Emergency Department",
      "E/M Modifiers (25, 57, 24) Application",
      "Complex E/M Audit Case Scenarios"
    ],
    certificationPrep: "Builds advanced competence for specialty E/M coding roles.",
    learningObjectives: [
      "Evaluate clinical notes to calculate exact MDM difficulty levels.",
      "Differentiate between office, consult, emergency, and inpatient visit requirements.",
      "Apply E/M modifiers with audit-proven rationale."
    ],
    practicalAspects: [
      "Analysis of real clinical progress notes, SOAP notes, and consultations.",
      "Step-by-step scoring matrix exercises."
    ],
    careerOpportunities: [
      "E/M Specialty Coder",
      "Physician Practice Billing Specialist",
      "E/M Coding Auditor"
    ],
    faqs: [
      {
        question: "Why is E/M coding specialized?",
        answer: "E/M codes represent a major portion of physician billings and undergo frequent guideline updates regarding Medical Decision Making and time rules."
      }
    ]
  },
  {
    id: "surgery-coding-training",
    slug: "surgery-coding-training",
    title: "Surgery Coding Specialty Training",
    category: "Specialty",
    shortDescription: "Master complex surgical operative reports, CPT surgical section rules, global surgery packages, and surgical modifiers.",
    fullDescription: "Learn the fundamentals of surgical coding, procedure documentation analysis, CPT surgical concepts (10000-60000 series), modifiers, and practical surgical chart scenarios.",
    duration: "6 Weeks",
    trainingMode: "Online / Offline",
    eligibility: "Foundation in medical coding or CPT coding fundamentals.",
    level: "Intermediate",
    featured: false,
    keyModules: [
      "Surgical Terminology & Operative Note Deconstruction",
      "Integumentary, Musculoskeletal & Respiratory Surgery",
      "Cardiovascular, Digestive & Urinary Systems",
      "Nervous & Musculoskeletal Complex Procedures",
      "Global Surgery Package Rules & Pre/Post-Op Days",
      "Surgical Modifiers (51, 59, 50, 58, 78, 79, XE/XS/XP/XU)",
      "Unbundling Rules & NCCI Edits",
      "Operative Report Coding Practice"
    ],
    certificationPrep: "Prepares coders for high-value surgical billing and coding positions.",
    learningObjectives: [
      "Read and dissect detailed operative reports with precision.",
      "Identify bundled procedures and avoid unbundling errors.",
      "Apply surgical modifiers based on operative findings."
    ],
    practicalAspects: [
      "Deconstructing real surgical operative records across multiple organ systems.",
      "NCCI edit checking and bundling scenario practice."
    ],
    careerOpportunities: [
      "Surgical Medical Coder",
      "Multi-Specialty Surgical Coder",
      "Surgical Billing Auditor"
    ],
    faqs: [
      {
        question: "Are real operative notes used during practice?",
        answer: "Yes, all training is based on anonymized real-world operative summaries covering multiple surgical disciplines."
      }
    ]
  },
  {
    id: "ip-drg-training",
    slug: "ip-drg-training",
    title: "IP DRG Specialty Training",
    category: "Specialty",
    shortDescription: "Specialized inpatient hospital coding covering MS-DRG grouping, APR-DRG assignment, MCC/CC flags, and inpatient case management.",
    fullDescription: "Develop deep knowledge of inpatient coding and Diagnosis Related Group (DRG) concepts with practical case-based learning and clinical record review.",
    duration: "6 Weeks",
    trainingMode: "Online / Offline",
    eligibility: "Understanding of ICD-10-CM and ICD-10-PCS fundamentals.",
    level: "Advanced",
    featured: false,
    keyModules: [
      "Inpatient Hospital Care Coding Framework",
      "Principal Diagnosis Selection Guidelines (UHDDS)",
      "Complications & Comorbidities (CC & MCC)",
      "ICD-10-PCS Surgical Procedure Coding",
      "MS-DRG Calculation & Grouping Algorithms",
      "APR-DRG Severity of Illness & Risk of Mortality",
      "Present on Admission (POA) Indicator Rules",
      "Inpatient Hospital Discharge Chart Audits"
    ],
    certificationPrep: "Enhances readiness for hospital inpatient coding careers and CCS certification.",
    learningObjectives: [
      "Identify the true principal diagnosis according to UHDDS definitions.",
      "Recognize how CC/MCC secondary conditions impact DRG assignment.",
      "Assign correct ICD-10-PCS procedure codes for inpatient interventions."
    ],
    practicalAspects: [
      "Comprehensive hospital admission to discharge chart exercises.",
      "DRG grouper logic practice."
    ],
    careerOpportunities: [
      "IP DRG Coder",
      "Inpatient Hospital Coding Specialist",
      "HCA/Facility Billing Analyst"
    ],
    faqs: [
      {
        question: "What does DRG stand for?",
        answer: "DRG stands for Diagnosis Related Group, a system used by hospitals to classify inpatient hospital stays for statistical and payment purposes."
      }
    ]
  },
  {
    id: "ivr-specialty-training",
    slug: "ivr-specialty-training",
    title: "IVR Specialty Training",
    category: "Specialty",
    shortDescription: "Specialized medical coding training focused on IVR concepts, vascular catheterization pathways, and diagnostic/interventional coding.",
    fullDescription: "Specialized medical coding training focused on Interventional Vascular Radiology (IVR) concepts, anatomical vascular pathways, catheter placement, and practical coding applications.",
    duration: "4 Weeks",
    trainingMode: "Online / Offline",
    eligibility: "Prior coding experience or completion of surgery/cardiovascular coding modules.",
    level: "Advanced",
    featured: false,
    keyModules: [
      "Vascular Anatomy & Blood Vessel Families",
      "Catheter Placement (Selective vs Non-Selective)",
      "Diagnostic Angiography & Arteriography Coding",
      "Interventional Procedures (Angioplasty, Stenting, Thrombectomy)",
      "Radiological Supervision & Interpretation (S&I) Codes",
      "IVR Modifiers & Component Coding",
      "Case-Based IVR Report Practice",
      "Curriculum Updates as per Institute Guidelines"
    ],
    certificationPrep: "Specialized skill track for interventional radiology coding roles.",
    learningObjectives: [
      "Trace vascular catheter routes to determine correct order placements.",
      "Separate diagnostic radiological components from interventional procedures.",
      "Code complex angiograms and vascular interventions."
    ],
    practicalAspects: [
      "Mapping vascular diagrams to procedural reports.",
      "Real-world interventional radiology chart reviews."
    ],
    careerOpportunities: [
      "IVR Specialty Coder",
      "Radiology & Cardiology Coding Specialist",
      "Complex Specialty Auditor"
    ],
    faqs: [
      {
        question: "What is IVR in medical coding?",
        answer: "IVR refers to Interventional Vascular Radiology coding, a highly specialized field covering catheterization, vascular anatomy, and minimally invasive radiological procedures."
      }
    ]
  }
];
