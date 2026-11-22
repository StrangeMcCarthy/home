import React, { useState } from 'react';
import { BookOpen, Clock, ArrowRight, Sparkles, X, User } from 'lucide-react';
import { RESOURCE_ARTICLES } from '../data/homesData';
import { ResourceArticle } from '../types/home';

export const BlogResources: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<ResourceArticle | null>(null);

  return (
    <section id="journal" className="py-20 bg-cozy-100/40 border-t border-cozy-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-hearth-700 bg-hearth-100 px-3.5 py-1 rounded-full">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Cozy Living Journal & Guides</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-cozy-900">
            Resources for Your Homebuyer Journey
          </h2>
          <p className="text-cozy-600 text-sm sm:text-base leading-relaxed">
            Expert advice on site preparation, financing, floor plan customization, and decorating your new modular home.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {RESOURCE_ARTICLES.map((art) => (
            <div
              key={art.id}
              onClick={() => setSelectedArticle(art)}
              className="group bg-white rounded-3xl overflow-hidden border border-cozy-200 shadow-cozy hover:shadow-cozy-lg transition-all duration-300 flex flex-col justify-between cursor-pointer transform hover:-translate-y-1"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-cozy-200">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-cozy-900/90 text-white text-[10px] font-bold px-2.5 py-1 rounded-full backdrop-blur-md">
                    {art.category}
                  </span>
                </div>

                <div className="p-5 space-y-3">
                  <div className="flex items-center space-x-3 text-[11px] text-cozy-500 font-medium">
                    <span className="flex items-center space-x-1">
                      <Clock className="w-3.5 h-3.5 text-hearth-600" />
                      <span>{art.readTime}</span>
                    </span>
                    <span>•</span>
                    <span>{art.date}</span>
                  </div>

                  <h3 className="font-serif text-base font-bold text-cozy-900 group-hover:text-hearth-700 transition-colors line-clamp-2 leading-snug">
                    {art.title}
                  </h3>

                  <p className="text-cozy-600 text-xs line-clamp-2 leading-relaxed">
                    {art.summary}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-1">
                <span className="text-xs font-bold text-hearth-700 group-hover:text-hearth-900 flex items-center space-x-1">
                  <span>Read Full Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Article Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-cozy-950/70 backdrop-blur-md animate-fade-in">
          <div className="bg-white w-full max-w-3xl rounded-3xl shadow-cozy-lg border border-cozy-200 overflow-hidden max-h-[90vh] flex flex-col my-auto">

            <div className="relative h-64 bg-cozy-900">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-full object-cover opacity-90"
              />
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-black/50 hover:bg-black text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-6 right-6 text-white space-y-1">
                <span className="bg-hearth-500 text-white text-[11px] font-bold px-3 py-1 rounded-full">
                  {selectedArticle.category}
                </span>
                <h2 className="font-serif text-2xl font-bold leading-tight drop-shadow-md">
                  {selectedArticle.title}
                </h2>
              </div>
            </div>

            <div className="p-6 overflow-y-auto space-y-4 text-cozy-800 text-sm leading-relaxed">
              <div className="flex items-center space-x-2 text-xs text-cozy-500 font-semibold border-b border-cozy-100 pb-3">
                <User className="w-4 h-4 text-hearth-600" />
                <span>{selectedArticle.author}</span>
                <span>•</span>
                <span>{selectedArticle.date}</span>
                <span>•</span>
                <span>{selectedArticle.readTime}</span>
              </div>

              <p className="font-semibold text-cozy-900 text-base">{selectedArticle.summary}</p>

              <p>{selectedArticle.content}</p>

              <div className="bg-hearth-50 p-4 rounded-2xl border border-hearth-200 space-y-2 mt-4">
                <h4 className="font-bold text-hearth-900 text-sm">Have Questions About Land Prep or Financing?</h4>
                <p className="text-xs text-cozy-700">
                  Our regional home specialists are available 6 days a week to assist with site surveys, utility planning, and home selection.
                </p>
              </div>
            </div>

            <div className="bg-cozy-50 px-6 py-4 border-t border-cozy-200 flex justify-end">
              <button
                onClick={() => setSelectedArticle(null)}
                className="bg-cozy-900 text-white text-xs font-bold py-2.5 px-5 rounded-xl"
              >
                Close Article
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
