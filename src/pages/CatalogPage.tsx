import React from 'react';
import { HomeCatalog } from '../components/HomeCatalog';
import { HomeModel, FilterState } from '../types/home';
import { Sparkles, Home as HomeIcon } from 'lucide-react';
import { RoutePath } from '../router/useRouter';

interface CatalogPageProps {
  onNavigate: (path: RoutePath, params?: Record<string, string>) => void;
  homes: HomeModel[];
  filters: FilterState;
  onFilterChange: (updated: Partial<FilterState>) => void;
  onResetFilters: () => void;
  favorites: HomeModel[];
  onToggleFavorite: (home: HomeModel) => void;
  onQuickView: (home: HomeModel) => void;
  onSelectCustomizer: (home: HomeModel) => void;
}

export const CatalogPage: React.FC<CatalogPageProps> = ({
  onNavigate,
  homes,
  filters,
  onFilterChange,
  onResetFilters,
  favorites,
  onToggleFavorite,
  onQuickView,
  onSelectCustomizer,
}) => {
  return (
    <div className="space-y-8 pb-16">

      {/* Page Header Banner */}
      <div className="bg-gradient-to-r from-cozy-900 via-hearth-950 to-cozy-900 text-white py-14 px-4 sm:px-6 lg:px-8 shadow-sm">
        <div className="max-w-7xl mx-auto space-y-3">
          <div className="flex items-center space-x-2 text-xs font-semibold text-hearth-300">
            <button onClick={() => onNavigate('home')} className="hover:underline">Home</button>
            <span>/</span>
            <span className="text-white">Floor Plans & Pre-Made Homes</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Explore All Home Models & Floor Plans
          </h1>

          <p className="text-cozy-200 text-sm sm:text-base max-w-2xl leading-relaxed">
            Browse our complete collection of single-section, multi-section, and modular homes. Filter by price, section type, bedrooms, or architectural style to find your dream fit.
          </p>
        </div>
      </div>

      {/* Main Catalog Component */}
      <HomeCatalog
        homes={homes}
        filters={filters}
        onFilterChange={onFilterChange}
        onResetFilters={onResetFilters}
        favorites={favorites}
        onToggleFavorite={onToggleFavorite}
        onQuickView={(h) => onNavigate('home-detail', { id: h.id })}
        onSelectCustomizer={onSelectCustomizer}
      />

    </div>
  );
};
