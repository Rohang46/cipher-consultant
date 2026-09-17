import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, User, Tag } from 'lucide-react';
import { blogPostsData } from '../data/blogPosts';
import { CTABanner } from '../components/CTABanner';

interface BlogDetailsPageProps {
  onOpenEnquiryModal: () => void;
}

export const BlogDetailsPage: React.FC<BlogDetailsPageProps> = ({ onOpenEnquiryModal }) => {
  const { slug } = useParams<{ slug: string }>();

  const post = blogPostsData.find((p) => p.slug === slug) || blogPostsData[0];

  return (
    <div className="space-y-12 py-12 text-left">
      
      {/* Header */}
      <section className="bg-slate-950 text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-4xl mx-auto space-y-4">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-400 hover:text-teal-300 transition-colors mb-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Resources</span>
          </Link>

          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-blue-500/20 text-teal-300 text-xs font-mono font-bold border border-blue-400/30">
              {post.category}
            </span>
            <span className="text-slate-400 text-xs">{post.date}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-6 text-xs text-slate-400 font-medium pt-2">
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4 text-teal-400" />
              {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-blue-400" />
              {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Main Content Article Body */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Featured Image */}
        <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 aspect-[16/9] relative">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Paragraphs */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6 text-slate-800 leading-relaxed text-sm sm:text-base">
          {post.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-slate-200">
          <Tag className="w-4 h-4 text-slate-400" />
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Tags:</span>
          {post.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold"
            >
              #{tag}
            </span>
          ))}
        </div>

      </section>

      {/* Reusable CTA Banner */}
      <CTABanner onOpenEnquiryModal={() => onOpenEnquiryModal()} />

    </div>
  );
};
