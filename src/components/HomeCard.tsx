import React, { useState } from 'react';
import { Heart, Bed, Bath, Maximize2, Sparkles, ChevronLeft, ChevronRight, Eye, SlidersHorizontal } from 'lucide-react';
import { HomeModel } from '../types/home';

interface HomeCardProps {
  home: HomeModel;
  isFavorite: boolean;
  onToggleFavorite: (home: HomeModel) => void;
  onQuickView: (home: HomeModel) => void;
  onSelectCustomizer: (home: HomeModel) => void;
}

export const HomeCard: React.FC<HomeCardProps> = ({
  home,
  isFavorite,
  onToggleFavorite,
  onQuickView,
  onSelectCustomizer,
}) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev + 1) % home.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev - 1 + home.images.length) % home.images.length);
  };

  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-cozy-200/90 shadow-cozy hover:shadow-cozy-lg transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1">

      {/* Image Container */}
      <div className="relative aspect-[4/3] bg-cozy-100 overflow-hidden cursor-pointer" onClick={() => onQuickView(home)}>
        <img
          src={home.images[currentImgIndex]}
          alt={home.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />

        {/* Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-cozy-950/60 via-transparent to-cozy-950/20 opacity-80" />

        {/* Image Slideshow Arrows if > 1 image */}
        {home.images.length > 1 && (
          <div className="absolute inset-x-2 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={prevImage}
              className="pointer-events-auto p-1.5 rounded-full bg-white/80 hover:bg-white text-cozy-900 shadow transition-transform hover:scale-110"
              title="Previous photo"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextImage}
              className="pointer-events-auto p-1.5 rounded-full bg-white/80 hover:bg-white text-cozy-900 shadow transition-transform hover:scale-110"
              title="Next photo"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Image Dots Indicator */}
        {home.images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-1.5 z-10">
            {home.images.map((_, idx) => (
              <span
                key={idx}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  idx === currentImgIndex ? 'bg-white w-4' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        )}

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
          <span className="bg-cozy-900/90 text-cozy-100 text-[11px] font-bold px-2.5 py-1 rounded-full backdrop-blur-md border border-white/20">
            {home.sectionType}
          </span>
          {home.isBestSeller && (
            <span className="bg-hearth-500 text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm flex items-center space-x-1">
              <Sparkles className="w-3 h-3" />
              <span>Best Seller</span>
            </span>
          )}
        </div>

        {/* Favorite Heart Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(home);
          }}
          className={`absolute top-3 right-3 p-2.5 rounded-full backdrop-blur-md transition-all z-10 ${
            isFavorite
              ? 'bg-white text-hearth-600 shadow-md'
              : 'bg-cozy-900/40 text-white hover:bg-white hover:text-hearth-600'
          }`}
          title={isFavorite ? 'Remove from favorites' : 'Save to favorites'}
        >
          <Heart className={`w-4 h-4 ${isFavorite ? 'fill-hearth-600' : ''}`} />
        </button>

        {/* Quick View Hover Button */}
        <div className="absolute bottom-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(home);
            }}
            className="bg-white/95 text-cozy-900 hover:bg-white font-semibold text-xs px-3.5 py-2 rounded-xl shadow-md flex items-center space-x-1.5"
          >
            <Eye className="w-3.5 h-3.5 text-hearth-600" />
            <span>Quick View</span>
          </button>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">

        <div>
          {/* Style & Code */}
          <div className="flex items-center justify-between text-xs text-cozy-500 font-medium mb-1">
            <span className="text-hearth-700 font-semibold">{home.style}</span>
            <span>Dim: {home.dimensions}</span>
          </div>

          {/* Model Title */}
          <h3
            onClick={() => onQuickView(home)}
            className="font-serif text-xl font-bold text-cozy-900 group-hover:text-hearth-700 transition-colors cursor-pointer leading-tight"
          >
            {home.name}
          </h3>

          {/* Tagline */}
          <p className="text-cozy-600 text-xs mt-1.5 line-clamp-2 leading-relaxed">
            {home.tagline}
          </p>

          {/* Specs Row */}
          <div className="grid grid-cols-3 gap-2 py-3 mt-3 border-y border-cozy-100 text-cozy-800 text-xs font-semibold">
            <div className="flex items-center space-x-1.5">
              <Bed className="w-4 h-4 text-cozy-400" />
              <span>{home.beds} Beds</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <Bath className="w-4 h-4 text-cozy-400" />
              <span>{home.baths} Baths</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <Maximize2 className="w-4 h-4 text-cozy-400" />
              <span>{home.sqft.toLocaleString()} sq ft</span>
            </div>
          </div>
        </div>

        {/* Price & Action Row */}
        <div className="pt-2 flex items-center justify-between gap-2">
          <div>
            <div className="text-xs text-cozy-500">Starting From</div>
            <div className="text-xl font-serif font-bold text-hearth-700">
              ${home.price.toLocaleString()}
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => onSelectCustomizer(home)}
              className="bg-cozy-100 hover:bg-cozy-200 text-cozy-900 text-xs font-semibold px-3 py-2.5 rounded-xl transition-colors flex items-center space-x-1"
              title="Customize finishes & options"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-hearth-600" />
              <span className="hidden sm:inline">Design</span>
            </button>

            <button
              onClick={() => onQuickView(home)}
              className="bg-hearth-600 hover:bg-hearth-700 text-white text-xs font-semibold px-4 py-2.5 rounded-xl shadow transition-colors"
            >
              Details
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
