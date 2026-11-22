import React from 'react';
import { Search, Home, DollarSign, Bed, MapPin, Filter } from 'lucide-react';
import { FilterState } from '../types/home';

interface QuickSearchProps {
  filters: FilterState;
  onFilterChange: (updated: Partial<FilterState>) => void;
  onSearchSubmit: () => void;
}

export const QuickSearch: React.FC<QuickSearchProps> = ({
  filters,
  onFilterChange,
  onSearchSubmit,
}) => {
  return (
    <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-14">
      <div className="bg-white rounded-3xl shadow-cozy-lg border border-cozy-200/80 p-5 sm:p-7 backdrop-blur-xl">

        <div className="flex items-center justify-between pb-4 border-b border-cozy-100 mb-5">
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-hearth-600" />
            <h2 className="font-serif font-bold text-cozy-900 text-lg">Find Your Dream Pre-Made Home</h2>
          </div>
          <span className="text-xs text-cozy-500 hidden sm:inline font-medium">
            Search 50+ customizable floor plans & turnkey models
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end">

          {/* Section Type */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold uppercase tracking-wider text-cozy-700">
              Home Section Type
            </label>
            <div className="relative">
              <select
                value={filters.sectionType}
                onChange={(e) => onFilterChange({ sectionType: e.target.value })}
                className="w-full bg-cozy-50 border border-cozy-300 rounded-xl px-3.5 py-3 text-sm font-semibold text-cozy-900 focus:ring-2 focus:ring-hearth-500 focus:border-hearth-500 outline-none appearance-none cursor-pointer"
              >
                <option value="All">All Section Types</option>
                <option value="Single-Wide">Single-Wide Homes</option>
                <option value="Double-Wide">Double-Wide Homes</option>
                <option value="Modular">Modular (Multi-Section)</option>
              </select>
              <Home className="w-4 h-4 text-cozy-400 absolute right-3.5 top-3.5 pointer-events-none" />
            </div>
          </div>

          {/* Max Price */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold uppercase tracking-wider text-cozy-700">
              Budget Up To
            </label>
            <div className="relative">
              <select
                value={filters.maxPrice}
                onChange={(e) => onFilterChange({ maxPrice: Number(e.target.value) })}
                className="w-full bg-cozy-50 border border-cozy-300 rounded-xl px-3.5 py-3 text-sm font-semibold text-cozy-900 focus:ring-2 focus:ring-hearth-500 focus:border-hearth-500 outline-none appearance-none cursor-pointer"
              >
                <option value={300000}>Any Budget</option>
                <option value={100000}>Under $100,000</option>
                <option value={140000}>Under $140,000</option>
                <option value={180000}>Under $180,000</option>
                <option value={220000}>Under $220,000</option>
              </select>
              <DollarSign className="w-4 h-4 text-cozy-400 absolute right-3.5 top-3.5 pointer-events-none" />
            </div>
          </div>

          {/* Bedrooms */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold uppercase tracking-wider text-cozy-700">
              Bedrooms
            </label>
            <div className="relative">
              <select
                value={filters.minBeds}
                onChange={(e) => onFilterChange({ minBeds: Number(e.target.value) })}
                className="w-full bg-cozy-50 border border-cozy-300 rounded-xl px-3.5 py-3 text-sm font-semibold text-cozy-900 focus:ring-2 focus:ring-hearth-500 focus:border-hearth-500 outline-none appearance-none cursor-pointer"
              >
                <option value={0}>Any Beds</option>
                <option value={2}>2+ Bedrooms</option>
                <option value={3}>3+ Bedrooms</option>
                <option value={4}>4+ Bedrooms</option>
                <option value={5}>5 Bedrooms</option>
              </select>
              <Bed className="w-4 h-4 text-cozy-400 absolute right-3.5 top-3.5 pointer-events-none" />
            </div>
          </div>

          {/* Location State */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold uppercase tracking-wider text-cozy-700">
              Building State
            </label>
            <div className="relative">
              <select
                value={filters.selectedState}
                onChange={(e) => onFilterChange({ selectedState: e.target.value })}
                className="w-full bg-cozy-50 border border-cozy-300 rounded-xl px-3.5 py-3 text-sm font-semibold text-cozy-900 focus:ring-2 focus:ring-hearth-500 focus:border-hearth-500 outline-none appearance-none cursor-pointer"
              >
                <option value="All">All States (Southeast)</option>
                <option value="MS">Mississippi</option>
                <option value="AL">Alabama</option>
                <option value="TN">Tennessee</option>
                <option value="GA">Georgia</option>
                <option value="LA">Louisiana</option>
                <option value="FL">Florida</option>
              </select>
              <MapPin className="w-4 h-4 text-cozy-400 absolute right-3.5 top-3.5 pointer-events-none" />
            </div>
          </div>

          {/* Search CTA Button */}
          <div>
            <button
              onClick={onSearchSubmit}
              className="w-full bg-gradient-to-r from-hearth-600 to-hearth-700 hover:from-hearth-700 hover:to-hearth-800 text-white font-bold py-3 px-4 rounded-xl shadow-cozy hover:shadow-glow transition-all flex items-center justify-center space-x-2 cursor-pointer h-[46px]"
            >
              <Search className="w-4 h-4" />
              <span>Search Floor Plans</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
