import React, { useState } from 'react';
import { Star, Quote, CheckCircle2, MapPin, Send, MessageSquarePlus, Sparkles, Check } from 'lucide-react';
import { CUSTOMER_REVIEWS, INITIAL_HOMES } from '../data/homesData';

export const Testimonials: React.FC = () => {
  const [showForm, setShowForm] = useState<boolean>(false);

  // Form State
  const [authorName, setAuthorName] = useState<string>('');
  const [locationStr, setLocationStr] = useState<string>('');
  const [selectedHomeModel, setSelectedHomeModel] = useState<string>(INITIAL_HOMES[0].name);
  const [starRating, setStarRating] = useState<number>(5);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [storyTitle, setStoryTitle] = useState<string>('');
  const [storyQuote, setStoryQuote] = useState<string>('');

  // Submission Success State
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const errs: Record<string, string> = {};
    if (!authorName.trim()) errs.authorName = 'Please enter your name.';
    if (!locationStr.trim()) errs.locationStr = 'Please enter your city and state.';
    if (!storyTitle.trim()) errs.storyTitle = 'Please enter a title for your story.';
    if (!storyQuote.trim() || storyQuote.trim().length < 15) {
      errs.storyQuote = 'Please write at least 15 characters about your experience.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
      // Reset input fields
      setAuthorName('');
      setLocationStr('');
      setStoryTitle('');
      setStoryQuote('');
      setStarRating(5);
      setErrors({});
    }
  };

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

          <div className="pt-2">
            <button
              onClick={() => {
                setShowForm(!showForm);
                setIsSubmitted(false);
              }}
              className="inline-flex items-center space-x-2 bg-hearth-600 hover:bg-hearth-700 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow transition-colors cursor-pointer"
            >
              <MessageSquarePlus className="w-4 h-4" />
              <span>{showForm ? 'Close Story Form' : 'Share Your Home Story'}</span>
            </button>
          </div>
        </div>

        {/* Share Your Story Form Container */}
        {showForm && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-hearth-200 shadow-cozy-lg max-w-2xl mx-auto space-y-6 animate-fade-in">
            <div className="text-center space-y-1 border-b border-cozy-100 pb-4">
              <div className="inline-flex items-center space-x-1.5 text-xs font-bold text-hearth-700 bg-hearth-100 px-3 py-1 rounded-full mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Homeowner Feedback</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-cozy-900">
                Share Your Homebuyer Experience
              </h3>
              <p className="text-xs text-cozy-600">
                Tell us about your home delivery, setup process, and how you are enjoying your new home.
              </p>
            </div>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">

                {/* Name & Location */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-cozy-700 uppercase tracking-wider">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. David & Jennifer Smith"
                      value={authorName}
                      onChange={(e) => setAuthorName(e.target.value)}
                      className="w-full bg-cozy-50 border border-cozy-300 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-cozy-900 outline-none focus:ring-2 focus:ring-hearth-500"
                    />
                    {errors.authorName && (
                      <p className="text-[11px] text-red-600 font-medium">{errors.authorName}</p>
                    )}
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-cozy-700 uppercase tracking-wider">
                      City & State *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Jackson, MS"
                      value={locationStr}
                      onChange={(e) => setLocationStr(e.target.value)}
                      className="w-full bg-cozy-50 border border-cozy-300 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-cozy-900 outline-none focus:ring-2 focus:ring-hearth-500"
                    />
                    {errors.locationStr && (
                      <p className="text-[11px] text-red-600 font-medium">{errors.locationStr}</p>
                    )}
                  </div>
                </div>

                {/* Home Model & Rating */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-end">
                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-cozy-700 uppercase tracking-wider">
                      Home Model Purchased *
                    </label>
                    <select
                      value={selectedHomeModel}
                      onChange={(e) => setSelectedHomeModel(e.target.value)}
                      className="w-full bg-cozy-50 border border-cozy-300 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-cozy-900 outline-none focus:ring-2 focus:ring-hearth-500 cursor-pointer"
                    >
                      {INITIAL_HOMES.map((h) => (
                        <option key={h.id} value={h.name}>
                          {h.name} ({h.sectionType})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-cozy-700 uppercase tracking-wider">
                      Overall Rating *
                    </label>
                    <div className="flex items-center space-x-1.5 py-1">
                      {Array.from({ length: 5 }).map((_, idx) => {
                        const starNum = idx + 1;
                        const isFilled = starNum <= (hoverRating || starRating);
                        return (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => setStarRating(starNum)}
                            onMouseEnter={() => setHoverRating(starNum)}
                            onMouseLeave={() => setHoverRating(0)}
                            className="p-1 cursor-pointer transition-transform hover:scale-125 focus:outline-none"
                          >
                            <Star
                              className={`w-6 h-6 ${
                                isFilled ? 'text-hearth-500 fill-hearth-500' : 'text-cozy-300'
                              }`}
                            />
                          </button>
                        );
                      })}
                      <span className="text-xs font-bold text-cozy-700 ml-2">
                        {starRating} Stars
                      </span>
                    </div>
                  </div>
                </div>

                {/* Story Title */}
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-cozy-700 uppercase tracking-wider">
                    Story Headline / Title *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Outstanding craftsmanship and smooth delivery process!"
                    value={storyTitle}
                    onChange={(e) => setStoryTitle(e.target.value)}
                    className="w-full bg-cozy-50 border border-cozy-300 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-cozy-900 outline-none focus:ring-2 focus:ring-hearth-500"
                  />
                  {errors.storyTitle && (
                    <p className="text-[11px] text-red-600 font-medium">{errors.storyTitle}</p>
                  )}
                </div>

                {/* Detailed Story Narrative */}
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-cozy-700 uppercase tracking-wider">
                    Your Homebuyer Experience Story *
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about how your home was delivered, customer service, or how your family feels in your new home..."
                    value={storyQuote}
                    onChange={(e) => setStoryQuote(e.target.value)}
                    className="w-full bg-cozy-50 border border-cozy-300 rounded-xl p-3.5 text-xs font-medium text-cozy-900 outline-none focus:ring-2 focus:ring-hearth-500"
                  />
                  {errors.storyQuote && (
                    <p className="text-[11px] text-red-600 font-medium">{errors.storyQuote}</p>
                  )}
                </div>

                {/* Submit Action */}
                <div className="pt-2 flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="bg-cozy-100 hover:bg-cozy-200 text-cozy-800 text-xs font-bold px-5 py-3 rounded-xl transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-hearth-600 hover:bg-hearth-700 text-white text-xs font-bold px-6 py-3 rounded-xl shadow transition-colors flex items-center space-x-2"
                  >
                    <span>Submit Story</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>

              </form>
            ) : (
              /* Success Confirmation Banner */
              <div className="p-6 text-center space-y-4 bg-hearth-50 rounded-2xl border border-hearth-200 animate-fade-in">
                <div className="w-12 h-12 bg-hearth-600 text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                  <Check className="w-6 h-6 stroke-[3]" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif text-xl font-bold text-cozy-900">Thank You for Your Story!</h4>
                  <p className="text-xs text-cozy-700 leading-relaxed max-w-md mx-auto">
                    Your homebuyer review has been received! Our team is reviewing your submission for verification before publication.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setShowForm(false);
                  }}
                  className="bg-cozy-900 text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow hover:bg-cozy-800 transition-colors"
                >
                  Return to Testimonials
                </button>
              </div>
            )}
          </div>
        )}

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
