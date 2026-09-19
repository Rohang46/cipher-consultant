import type { EnquiryFormData, Lead } from '../types';

const STORAGE_KEY = 'cipher_consultant_leads';
const TARGET_EMAIL = 'ciphertalentconsultant@gmail.com';
const TARGET_WHATSAPP = '918668409022';

export const submitEnquiry = async (formData: EnquiryFormData): Promise<{ success: boolean; leadId: string; message: string; whatsappUrl: string }> => {
  const leadId = `CC-LEAD-${Date.now().toString().slice(-6)}`;
  const newLead: Lead = {
    ...formData,
    id: leadId,
    status: 'New',
    createdDate: new Date().toISOString(),
    source: 'Website Enquiry Form',
    notes: 'Initial website enquiry submitted.'
  };

  // 1. Persist lead in browser local storage
  try {
    const existingLeadsRaw = localStorage.getItem(STORAGE_KEY);
    const existingLeads: Lead[] = existingLeadsRaw ? JSON.parse(existingLeadsRaw) : [];
    existingLeads.unshift(newLead);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(existingLeads));
  } catch (error) {
    console.warn('Could not persist lead to local storage:', error);
  }

  // 2. Dispatch email notification via Web3Forms API to ciphertalentconsultant@gmail.com
  try {
    const emailPayload = new FormData();
    emailPayload.append('access_key', '8c2f1f6d-346d-4952-bfa7-a36ff6c17e65'); // Web3Forms public endpoint trigger key
    emailPayload.append('subject', `New Student Enquiry: ${formData.fullName} (${formData.courseInterested})`);
    emailPayload.append('to', TARGET_EMAIL);
    emailPayload.append('from_name', 'Cipher Consultant Website');
    emailPayload.append('Lead ID', leadId);
    emailPayload.append('Full Name', formData.fullName);
    emailPayload.append('Mobile Number', formData.mobileNumber);
    emailPayload.append('Email', formData.email || 'Not Provided');
    emailPayload.append('Qualification', formData.qualification || 'Not Provided');
    emailPayload.append('Year of Passing', formData.yearOfPassing || 'Not Provided');
    emailPayload.append('Current Occupation', formData.currentOccupation || 'Not Provided');
    emailPayload.append('Course Interested', formData.courseInterested);
    emailPayload.append('Certification', formData.certificationInterested);
    emailPayload.append('Specialty', formData.specialtyInterested);
    emailPayload.append('Training Mode', formData.preferredTrainingMode);
    emailPayload.append('Message/Remarks', formData.message || 'No additional message');

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: emailPayload
    }).catch((err) => console.warn('Email dispatch warning:', err));
  } catch (err) {
    console.warn('Web3Forms submit error:', err);
  }

  // 3. Format WhatsApp message text for mobile notification to 8668409022
  const waMessage = `*NEW ENQUIRY - CIPHER CONSULTANT*%0A` +
    `*Ref ID:* ${leadId}%0A` +
    `*Name:* ${encodeURIComponent(formData.fullName)}%0A` +
    `*Mobile:* ${encodeURIComponent(formData.mobileNumber)}%0A` +
    `*Email:* ${encodeURIComponent(formData.email || 'N/A')}%0A` +
    `*Qualification:* ${encodeURIComponent(formData.qualification || 'N/A')}%0A` +
    `*Course:* ${encodeURIComponent(formData.courseInterested)}%0A` +
    `*Certification:* ${encodeURIComponent(formData.certificationInterested)}%0A` +
    `*Specialty:* ${encodeURIComponent(formData.specialtyInterested)}%0A` +
    `*Training Mode:* ${encodeURIComponent(formData.preferredTrainingMode)}%0A` +
    `*Message:* ${encodeURIComponent(formData.message || 'N/A')}`;

  const whatsappUrl = `https://wa.me/${TARGET_WHATSAPP}?text=${waMessage}`;

  return {
    success: true,
    leadId,
    message: 'Thank you for your enquiry! Details have been dispatched to our admissions team on Email & WhatsApp.',
    whatsappUrl
  };
};

export const getStoredLeads = (): Lead[] => {
  try {
    const existingLeadsRaw = localStorage.getItem(STORAGE_KEY);
    return existingLeadsRaw ? JSON.parse(existingLeadsRaw) : [];
  } catch (error) {
    console.error('Failed to read leads:', error);
    return [];
  }
};
