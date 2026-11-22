import React from 'react';
import { Search, SlidersHorizontal, RotateCcw, Home as HomeIcon, Sparkles } from 'lucide-react';
import { HomeModel, FilterState, SectionType } from '../types/home';
import { HomeCard } from './HomeCard';

interface HomeCatalogProps {
  homes: HomeModel[];
  filters: FilterState;
  onFilterChange: (updated: Partial<FilterState>) => void;
  onResetFilters: () => void;
  favorites: HomeModel[];
  onToggleFavorite: (home: HomeModel) => void;
  onQuickView: (home: HomeModel) => void;
  onSelectCustomizer: (home: HomeModel) => void;
}

export const HomeCatalog: React.FC<HomeCatalogProps> = ({
  homes,
  filters,
  onFilterChange,
  onResetFilters,
  favorites,
  onToggleFavorite,
  onQuickView,
  onSelectCustomizer,
}) => {
  const sectionTypes: { label: string; value: string }[] = [
    { label: 'All Home Types', value: 'All' },
    { label: 'Single-Wide', value: 'Single-Wide' },
    { label: 'Double-Wide', value: 'Double-Wide' },
    { label: 'Modular Homes', value: 'Modular' },
  ];

  const styles = [
    'All',
    'Modern Farmhouse',
    'Craftsman Haven',
    'Rustic Cottage',
    'Southern Elegance',
    'Minimalist Lodge'
  ];

  const isFavorite = (id: string) => favorites.some((fav) => fav.id === id);

  return (
    <section id="catalog" className="py-16 md:py-24 bg-cozy-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-hearth-700 bg-hearth-100 px-3.5 py-1 rounded-full">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Handcrafted Floor Plans</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-cozy-900">
            Find Your Dream Pre-Made Home
          </h2>
          <p className="text-cozy-600 text-sm sm:text-base leading-relaxed">
            Every home is built inside our climate-controlled manufacturing facility using premium lumber, energy-efficient insulation, and artisan finish options.
          </p>
        </div>

        {/* Section Type Navigation Tabs */}
        <div className="flex justify-center overflow-x-auto pb-2 scrollbar-none">
          <div className="bg-cozy-100 p-1.5 rounded-2xl flex space-x-1 border border-cozy-200 shadow-inner">
            {sectionTypes.map((tab) => (
              <button
                key={tab.value}
                onClick={() => onFilterChange({ sectionType: tab.value })}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all whitespace-nowrap ${
                  filters.sectionType === tab.value
                    ? 'bg-white text-hearth-800 shadow-cozy font-bold'
                    : 'text-cozy-700 hover:text-cozy-900 hover:bg-white/50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-white rounded-2xl border border-cozy-200/90 p-4 shadow-sm space-y-4">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center">

            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search by model name, tagline, or feature..."
                value={filters.searchQuery}
                onChange={(e) => onFilterChange({ searchQuery: e.target.value })}
                className="w-full bg-cozy-50 border border-cozy-300 rounded-xl pl-10 pr-4 py-2.5 text-sm text-cozy-900 placeholder-cozy-400 focus:ring-2 focus:ring-hearth-500 focus:border-hearth-500 outline-none"
              />
              <Search className="w-4 h-4 text-cozy-400 absolute left-3.5 top-3.5" />
            </div>

            {/* Sort Dropdown & Reset Button */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center space-x-2">
                <span className="text-xs font-semibold text-cozy-600 whitespace-nowrap">Sort By:</span>
                <select
                  value={filters.sortBy}
                  onChange={(e) => onFilterChange({ sortBy: e.target.value as FilterState['sortBy'] })}
                  className="bg-cozy-50 border border-cozy-300 rounded-xl px-3 py-2 text-xs font-semibold text-cozy-900 focus:ring-2 focus:ring-hearth-500 outline-none cursor-pointer"
                >
                  <option value="featured">Featured First</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="sqft-desc">Largest Sq Ft</option>
                  <option value="beds-desc">Most Bedrooms</option>
                </select>
              </div>

              {(filters.sectionType !== 'All' || filters.searchQuery || filters.style !== 'All' || filters.minBeds > 0 || filters.maxPrice < 300000) && (
                <button
                  onClick={onResetFilters}
                  className="text-xs font-semibold text-hearth-700 hover:text-hearth-900 bg-hearth-50 hover:bg-hearth-100 px-3 py-2 rounded-xl transition-colors flex items-center space-x-1"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Clear Filters</span>
                </button>
              )}
            </div>

          </div>

          {/* Style Filter Pills */}
          <div className="pt-2 border-t border-cozy-100 flex items-center space-x-2 overflow-x-auto pb-1 scrollbar-none">
            <span className="text-xs font-bold text-cozy-500 uppercase tracking-wider whitespace-nowrap mr-1">
              Architectural Style:
            </span>
            {styles.map((style) => (
              <button
                key={style}
                onClick={() => onFilterChange({ style })}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-all whitespace-nowrap ${
                  filters.style === style
                    ? 'bg-cozy-800 text-white'
                    : 'bg-cozy-100 text-cozy-700 hover:bg-cozy-200'
                }`}
              >
                {style}
              </button>
            ))}
          </div>

        </div>

        {/* Results Counter */}
        <div className="flex justify-between items-center text-xs text-cozy-600 font-semibold px-1">
          <span>Showing <strong className="text-cozy-900">{homes.length}</strong> available floor plan models</span>
          <span className="text-sage-700">✓ All homes come with 10-Year Extended Structural Protection</span>
        </div>

        {/* Homes Grid */}
        {homes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {homes.map((home) => (
              <HomeCard
                key={home.id}
                home={home}
                isFavorite={isFavorite(home.id)}
                onToggleFavorite={onToggleFavorite}
                onQuickView={onQuickView}
                onSelectCustomizer={onSelectCustomizer}
              />
            ))}
          </div>
        ) : (
          /* Empty Search State */
          <div className="bg-white rounded-3xl p-12 text-center border border-cozy-200 space-y-4 max-w-md mx-auto my-8">
            <div className="w-16 h-16 bg-cozy-100 text-cozy-500 rounded-full flex items-center justify-center mx-auto">
              <HomeIcon className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-xl font-bold text-cozy-900">No matching floor plans found</h3>
            <p className="text-cozy-600 text-xs leading-relaxed">
              We couldn't find any homes matching your current filter criteria. Try broadening your price range, bed count, or section type.
            </p>
            <button
              onClick={onResetFilters}
              className="bg-hearth-600 hover:bg-hearth-700 text-white font-semibold text-xs px-6 py-3 rounded-xl shadow transition-colors"
            >
              Reset All Search Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
