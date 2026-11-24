import React from 'react';
import { Star, Quote, CheckCircle2, MapPin } from 'lucide-react';
import { CUSTOMER_REVIEWS } from '../data/homesData';

export const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-16 bg-cozy-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-cozy-900">
            Testimonials
          </h2>
          <p className="text-cozy-600 text-sm sm:text-base leading-relaxed">
            Read authentic stories from real homebuyers who built their dream single-wide, double-wide, and modular homes across the Southeast.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CUSTOMER_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-cozy-200/90 shadow-cozy hover:shadow-cozy-lg transition-all duration-300 flex flex-col justify-between space-y-6 relative group"
            >
              <div className="space-y-4">

                {/* Header: Stars & Model Badge */}
                <div className="flex flex-wrap justify-between items-start gap-2">
                  <div className="flex space-x-1">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-hearth-500 fill-hearth-500" />
                    ))}
                  </div>

                  <span className="bg-cozy-100 text-cozy-800 text-[11px] font-bold px-3 py-1 rounded-full border border-cozy-200">
                    {review.homeModel}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif font-bold text-lg text-cozy-900 leading-snug group-hover:text-hearth-700 transition-colors">
                  "{review.title}"
                </h3>

                {/* Quote Narrative */}
                <div className="relative">
                  <Quote className="w-8 h-8 text-hearth-100 absolute -top-2 -left-2 -z-10" />
                  <p className="text-cozy-700 text-xs sm:text-sm leading-relaxed italic">
                    "{review.quote}"
                  </p>
                </div>

              </div>

              {/* Author Footer Info */}
              <div className="pt-4 border-t border-cozy-100 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <img
                    src={review.avatarUrl}
                    alt={review.author}
                    loading="lazy"
                    decoding="async"
                    className="w-11 h-11 rounded-full object-cover border-2 border-hearth-200 shadow-sm"
                  />
                  <div>
                    <div className="font-bold text-cozy-900 text-sm flex items-center space-x-1.5">
                      <span>{review.author}</span>
                      {review.verified && (
                        <span title="Verified Homebuyer">
                          <CheckCircle2 className="w-4 h-4 text-hearth-600 flex-shrink-0" />
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-cozy-500 flex items-center space-x-1">
                      <MapPin className="w-3 h-3 text-hearth-500" />
                      <span>{review.location} • Bought in {review.purchaseYear}</span>
                    </div>
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
