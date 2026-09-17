import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import type { GalleryItem } from '../types';

interface GalleryLightboxProps {
  items: GalleryItem[];
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({ items }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);

  const categories = ['All', ...Array.from(new Set(items.map((i) => i.category)))];

  const filteredItems = items.filter(
    (item) => selectedCategory === 'All' || item.category === selectedCategory
  );

  return (
    <div className="space-y-8 text-left">
      
      {/* Category Pills */}
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              selectedCategory === cat
                ? 'bg-blue-700 text-white shadow-md'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid Display */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveImage(item)}
            className="group relative bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer aspect-[4/3]"
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            
            {/* Overlay Hover */}
            <div className="absolute inset-0 bg-slate-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-between text-white">
              <div className="flex justify-end">
                <span className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-white">
                  <ZoomIn className="w-5 h-5" />
                </span>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-teal-400">
                  {item.category}
                </span>
                <h4 className="text-base font-bold mt-0.5">{item.title}</h4>
                <p className="text-xs text-slate-300 line-clamp-2 mt-1">{item.caption}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Popup Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md p-4 flex items-center justify-center animate-fadeIn"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-slate-950/80 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close image"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="max-h-[70vh] bg-slate-950 flex items-center justify-center">
              <img
                src={activeImage.imageUrl}
                alt={activeImage.title}
                className="max-h-[70vh] w-auto object-contain"
              />
            </div>

            <div className="p-6 text-left space-y-2">
              <span className="px-2.5 py-1 rounded bg-teal-500/10 text-teal-400 text-xs font-semibold border border-teal-500/20">
                {activeImage.category}
              </span>
              <h3 className="text-xl font-bold text-white mt-1">{activeImage.title}</h3>
              <p className="text-sm text-slate-300">{activeImage.caption}</p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
