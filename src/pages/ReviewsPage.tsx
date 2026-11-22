import React from 'react';
import { Testimonials } from '../components/Testimonials';
import { RoutePath } from '../router/useRouter';
import { Star } from 'lucide-react';

interface ReviewsPageProps {
  onNavigate: (path: RoutePath) => void;
}

export const ReviewsPage: React.FC<ReviewsPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-8 pb-16">

      {/* Page Header */}
      <div className="bg-gradient-to-r from-cozy-900 via-hearth-950 to-cozy-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-4 text-center md:text-left">
          <div className="flex justify-center md:justify-start items-center space-x-2 text-xs font-semibold text-hearth-300">
            <button onClick={() => onNavigate('home')} className="hover:underline">Home</button>
            <span>/</span>
            <span className="text-white">Customer Stories</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Real Homeowner Stories & Ratings
          </h1>

          <p className="text-cozy-200 text-sm sm:text-base max-w-2xl leading-relaxed">
            See how over 12,500 families across the USA found their forever home with Mobile Homes. Read verified customer reviews and experiences.
          </p>

          <div className="pt-2 flex items-center justify-center md:justify-start space-x-2 text-hearth-300 text-sm font-bold">
            <div className="flex space-x-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 text-hearth-400 fill-hearth-400" />
              ))}
            </div>
            <span>4.9 out of 5 Stars (450+ Verified Reviews)</span>
          </div>
        </div>
      </div>

      {/* Main Testimonials Grid */}
      <Testimonials />

    </div>
  );
};
