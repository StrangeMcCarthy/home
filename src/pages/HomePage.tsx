import React from 'react';
import { Hero } from '../components/Hero';
import { QuickSearch } from '../components/QuickSearch';
import { HomeCard } from '../components/HomeCard';
import { OurDifference } from '../components/OurDifference';
import { StoreLocator } from '../components/StoreLocator';
import { Testimonials } from '../components/Testimonials';
import { BlogResources } from '../components/BlogResources';

import { HomeModel, FilterState } from '../types/home';
import { INITIAL_HOMES } from '../data/homesData';
import { ArrowRight, Sparkles } from 'lucide-react';
import { RoutePath } from '../router/useRouter';

interface HomePageProps {
  onNavigate: (path: RoutePath, params?: Record<string, string>) => void;
  favorites: HomeModel[];
  onToggleFavorite: (home: HomeModel) => void;
  onQuickView: (home: HomeModel) => void;
  onSelectCustomizer: (home: HomeModel) => void;
  onOpenQuoteModal: (home?: HomeModel) => void;
  filters: FilterState;
  onFilterChange: (updated: Partial<FilterState>) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  favorites,
  onToggleFavorite,
  onQuickView,
  onSelectCustomizer,
  onOpenQuoteModal,
  filters,
  onFilterChange,
}) => {
  const featuredHomes = INITIAL_HOMES.filter((h) => h.isFeatured).slice(0, 3);
  const isFavorite = (id: string) => favorites.some((fav) => fav.id === id);

  const handleSearchSubmit = () => {
    onNavigate('homes');
  };

  return (
    <div className="space-y-16 pb-16">

      {/* 1. Hero Banner */}
      <Hero
        onExploreClick={() => onNavigate('homes')}
        onStoreClick={() => onNavigate('stores')}
      />

      {/* 2. Floating Quick Search Finder */}
      <QuickSearch
        filters={filters}
        onFilterChange={onFilterChange}
        onSearchSubmit={handleSearchSubmit}
      />

      {/* 3. Featured Floor Plans Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 pt-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-cozy-200 pb-5">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-hearth-700 bg-hearth-100 px-3.5 py-1 rounded-full">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Handcrafted Highlights</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-cozy-900">
              Featured Pre-Made Homes
            </h2>
            <p className="text-cozy-600 text-sm max-w-xl">
              Our most popular single-wide, double-wide, and modular layouts designed for family warmth and low utility bills.
            </p>
          </div>

          <button
            onClick={() => onNavigate('homes')}
            className="bg-hearth-600 hover:bg-hearth-700 text-white font-bold text-sm px-6 py-3 rounded-xl shadow transition-colors flex items-center space-x-2"
          >
            <span>View All Floor Plans</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredHomes.map((home) => (
            <HomeCard
              key={home.id}
              home={home}
              isFavorite={isFavorite(home.id)}
              onToggleFavorite={onToggleFavorite}
              onQuickView={(h) => onNavigate('home-detail', { id: h.id })}
              onSelectCustomizer={onSelectCustomizer}
            />
          ))}
        </div>
      </section>

      {/* 4. Our Difference Teaser */}
      <OurDifference />

      {/* 5. Display Store Locations Section */}
      <StoreLocator />

      {/* 6. Real Customer Testimonials */}
      <Testimonials />

      {/* 7. Homebuyer Journal & Guides */}
      <BlogResources />

    </div>
  );
};
