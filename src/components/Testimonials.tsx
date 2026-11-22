import React from 'react';
import { Star, Heart, Quote, CheckCircle2, Sparkles } from 'lucide-react';
import { CUSTOMER_REVIEWS } from '../data/homesData';

export const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-cozy-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-hearth-700 bg-hearth-100 px-3.5 py-1 rounded-full">
            <Heart className="w-3.5 h-3.5 fill-hearth-600 text-hearth-600" />
            <span>Homeowner Stories</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-cozy-900">
            Real Warmth from Real Homeowners
          </h2>
          <p className="text-cozy-600 text-sm sm:text-base leading-relaxed">
            Read how families across Mississippi, Alabama, Tennessee, and Georgia turned their homeownership dreams into reality with Hearth & Haven.
          </p>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CUSTOMER_REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-3xl p-7 border border-cozy-200/90 shadow-cozy hover:shadow-cozy-lg transition-all flex flex-col justify-between space-y-6 relative"
            >
              <div className="space-y-4">
                {/* Rating Stars & Model Tag */}
                <div className="flex justify-between items-center">
                  <div className="flex space-x-1">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-hearth-500 fill-hearth-500" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-hearth-800 bg-hearth-50 px-2.5 py-1 rounded-full border border-hearth-200">
                    {rev.homeModelBought}
                  </span>
                </div>

                {/* Quote */}
                <p className="font-serif text-base font-semibold text-cozy-900 italic leading-snug">
                  "{rev.quote}"
                </p>

                {/* Full Story */}
                <p className="text-cozy-600 text-xs leading-relaxed">
                  {rev.story}
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-cozy-100 flex items-center space-x-3.5">
                <img
                  src={rev.photo}
                  alt={rev.author}
                  className="w-11 h-11 rounded-full object-cover border-2 border-hearth-300"
                />
                <div>
                  <div className="font-bold text-sm text-cozy-900 flex items-center space-x-1.5">
                    <span>{rev.author}</span>
                    <CheckCircle2 className="w-4 h-4 text-sage-600 fill-sage-100" />
                  </div>
                  <div className="text-xs text-cozy-500">
                    {rev.location} • Verified Homeowner
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
