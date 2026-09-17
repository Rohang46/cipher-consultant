import type { EnquiryFormData, Lead } from '../types';

const STORAGE_KEY = 'cipher_consultant_leads';

export const submitEnquiry = async (formData: EnquiryFormData): Promise<{ success: boolean; leadId: string; message: string }> => {
  // Simulate network request latency
  await new Promise((resolve) => setTimeout(resolve, 800));

  const leadId = `CC-LEAD-${Date.now().toString().slice(-6)}`;
  const newLead: Lead = {
    ...formData,
    id: leadId,
    status: 'New',
    createdDate: new Date().toISOString(),
    source: 'Website Enquiry Form',
    notes: 'Initial website enquiry submitted.'
  };

  try {
    const existingLeadsRaw = localStorage.getItem(STORAGE_KEY);
    const existingLeads: Lead[] = existingLeadsRaw ? JSON.parse(existingLeadsRaw) : [];
    existingLeads.unshift(newLead);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(existingLeads));
  } catch (error) {
    console.warn('Could not persist lead to local storage:', error);
  }

  return {
    success: true,
    leadId,
    message: 'Thank you for your enquiry. Our training advisor will contact you shortly.'
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
