import React from 'react';
import { Testimonials } from '../components/Testimonials';
import { BlogResources } from '../components/BlogResources';
import { RoutePath } from '../router/useRouter';
import { Star, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface ReviewsPageProps {
  onNavigate: (path: RoutePath, params?: Record<string, string>) => void;
}

export const ReviewsPage: React.FC<ReviewsPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-12 pb-16">

      {/* Page Header */}
      <div className="bg-gradient-to-r from-cozy-900 via-hearth-950 to-cozy-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-4 text-center md:text-left">
          <div className="flex justify-center md:justify-start items-center space-x-2 text-xs font-semibold text-hearth-300">
            <button onClick={() => onNavigate('home')} className="hover:underline">Home</button>
            <span>/</span>
            <span className="text-white">Stories & Guides</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Homeowner Stories & Buyer Guides
          </h1>

          <p className="text-cozy-200 text-sm sm:text-base max-w-2xl leading-relaxed">
            Read authentic experiences from over 12,500 real families across the Southeast and explore expert checklists on site preparation, foundation setup, and floor plan selection.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-4 text-hearth-300 text-xs sm:text-sm font-bold">
            <div className="flex items-center space-x-1.5 bg-white/10 px-3 py-1.5 rounded-full border border-white/15">
              <div className="flex space-x-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-hearth-400 fill-hearth-400" />
                ))}
              </div>
              <span className="text-white">4.9 / 5.0 Rating</span>
            </div>
            <div className="flex items-center space-x-1.5 text-cozy-200">
              <CheckCircle2 className="w-4 h-4 text-hearth-400" />
              <span>100% Verified Homebuyers</span>
            </div>
            <div className="flex items-center space-x-1.5 text-cozy-200">
              <ShieldCheck className="w-4 h-4 text-hearth-400" />
              <span>10-Year Protection Backed</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Combined Content Sections: Buyer Guides FIRST, Testimonials SECOND */}
      <div className="space-y-16">
        <BlogResources />
        <Testimonials />
      </div>

    </div>
  );
};
