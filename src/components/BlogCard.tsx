import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, User, ArrowRight } from 'lucide-react';
import type { BlogPost } from '../types';

interface BlogCardProps {
  post: BlogPost;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between text-left group">
      <div>
        <div className="relative aspect-[16/9] bg-slate-100 overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <span className="absolute top-3 left-3 px-3 py-1 rounded-lg bg-blue-900/90 text-white text-[11px] font-bold tracking-wide uppercase shadow">
            {post.category}
          </span>
        </div>

        <div className="p-6 space-y-3">
          <div className="flex items-center gap-4 text-xs text-slate-500 font-medium">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-blue-600" />
              {post.readTime}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <User className="w-3.5 h-3.5 text-teal-600" />
              {post.author}
            </span>
          </div>

          <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors line-clamp-2">
            {post.title}
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
            {post.shortDescription}
          </p>
        </div>
      </div>

      <div className="p-6 pt-0 border-t border-slate-100 mt-4">
        <Link
          to={`/blog/${post.slug}`}
          className="pt-3 flex items-center gap-2 text-xs font-bold text-blue-700 hover:text-blue-900 uppercase tracking-wider group-hover:translate-x-1 transition-transform"
        >
          <span>Read Full Article</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
};
