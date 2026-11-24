import React, { useState } from 'react';
import { ArrowRight, MapPin, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
  onStoreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onStoreClick }) => {
  const [heroImgSrc, setHeroImgSrc] = useState<string>(
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=80'
  );

  const handleHeroError = () => {
    setHeroImgSrc(
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80'
    );
  };

  return (
    <div className="relative overflow-hidden bg-cozy-900 text-white min-h-[580px] lg:min-h-[640px] flex items-center">
      {/* Background Image with Warm Overlay */}
      <div className="absolute inset-0 z-0 bg-cozy-950">
        <img
          src={heroImgSrc}
          onError={handleHeroError}
          alt="Cozy Modern Manufactured Home Exterior"
          loading="eager"
          decoding="async"
          // @ts-ignore
          fetchPriority="high"
          className="w-full h-full object-cover object-center scale-105 transform brightness-90 transition-opacity duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cozy-950/90 via-cozy-900/75 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-cozy-950 via-transparent to-cozy-950/40 z-10" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-3xl space-y-6">

          {/* Warm Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight drop-shadow-md">
            Where Quality Craftsmanship Meets the <span className="text-transparent bg-clip-text bg-gradient-to-r from-hearth-300 via-hearth-200 to-cozy-200 italic">Comfort of Home</span>
          </h1>

          {/* Reassuring Subtitle */}
          <p className="text-cozy-100 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-2xl text-shadow">
            Discover single-wide, double-wide, and modular pre-made homes built with heart inside climate-controlled facilities. Designed for lifetime memories, energy savings, and carefree warmth.
          </p>

          {/* Key Value Pill Highlights */}
          <div className="pt-2 flex flex-wrap gap-y-2 gap-x-5 text-xs sm:text-sm text-cozy-200 font-medium">
            <div className="flex items-center space-x-1.5">
              <CheckCircle2 className="w-4 h-4 text-hearth-400" />
              <span>Turnkey Land & Delivery</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <CheckCircle2 className="w-4 h-4 text-hearth-400" />
              <span>10-Year Protection Warranty</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <CheckCircle2 className="w-4 h-4 text-hearth-400" />
              <span>Energy Star® Savings</span>
            </div>
          </div>

          {/* Action CTA Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onExploreClick}
              className="bg-gradient-to-r from-hearth-500 to-hearth-600 hover:from-hearth-600 hover:to-hearth-700 text-white font-semibold px-8 py-4 rounded-2xl shadow-glow hover:shadow-cozy-lg transition-all transform hover:-translate-y-1 flex items-center justify-center space-x-3 text-base"
            >
              <span>Explore Home Floor Plans</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={onStoreClick}
              className="glass-panel-dark text-white hover:bg-cozy-800/80 border border-cozy-500/40 font-semibold px-6 py-4 rounded-2xl shadow transition-all flex items-center justify-center space-x-2 text-base"
            >
              <MapPin className="w-5 h-5 text-hearth-400" />
              <span>Find Display Store Near You</span>
            </button>
          </div>

          {/* Quick Social Proof Bar */}
          <div className="pt-8 border-t border-cozy-800/80 grid grid-cols-3 gap-4 max-w-lg">
            <div>
              <div className="text-2xl sm:text-3xl font-serif font-bold text-hearth-300">12,500+</div>
              <div className="text-xs text-cozy-300">Happy Homeowners</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-serif font-bold text-hearth-300">100%</div>
              <div className="text-xs text-cozy-300">Climate-Controlled Build</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-serif font-bold text-hearth-300">4.9 ★</div>
              <div className="text-xs text-cozy-300">Customer Satisfaction</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
