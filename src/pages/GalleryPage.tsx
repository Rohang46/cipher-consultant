import React from 'react';
import { GalleryLightbox } from '../components/GalleryLightbox';
import { CTABanner } from '../components/CTABanner';
import { galleryData } from '../data/gallery';

interface GalleryPageProps {
  onOpenEnquiryModal: () => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onOpenEnquiryModal }) => {
  return (
    <div className="space-y-16 py-12 text-left">
      
      {/* Header Banner */}
      <section className="bg-slate-950 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-400 bg-teal-500/10 border border-teal-500/20 px-3 py-1 rounded-full inline-block">
            Institute Activities
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            Institute Photo Gallery
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Visual highlights from our training sessions, classroom environments, workshops, and practical learning activities in Pune.
          </p>
        </div>
      </section>

      {/* Main Gallery Lightbox Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GalleryLightbox items={galleryData} />
      </section>

      {/* Reusable CTA Banner */}
      <CTABanner onOpenEnquiryModal={() => onOpenEnquiryModal()} />

    </div>
  );
};
