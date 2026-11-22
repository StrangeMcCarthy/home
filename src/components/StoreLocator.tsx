import React, { useState, useMemo } from 'react';
import { MapPin, Phone, Clock, Star, Search, CheckCircle2, Navigation, ExternalLink } from 'lucide-react';
import { RETAILER_STORES } from '../data/homesData';
import { RetailerStore } from '../types/home';
import { InteractiveMap } from './InteractiveMap';

export const StoreLocator: React.FC = () => {
  const [selectedStateFilter, setSelectedStateFilter] = useState<string>('All');
  const [distanceRadius, setDistanceRadius] = useState<number>(500);
  const [zipQuery, setZipQuery] = useState<string>('');

  const [selectedStore, setSelectedStore] = useState<RetailerStore | null>(RETAILER_STORES[0]);
  const [activeTabMobile, setActiveTabMobile] = useState<'split' | 'list' | 'map'>('split');

  // Extract all unique US states dynamically
  const availableStates = useMemo(() => {
    const states = [...new Set(RETAILER_STORES.map((s) => s.state))].sort();
    return states;
  }, []);

  const filteredStores = RETAILER_STORES.filter((store) => {
    const matchesState = selectedStateFilter === 'All' || store.state === selectedStateFilter;
    const matchesDistance = !store.distanceMiles || store.distanceMiles <= distanceRadius;
    const matchesZipOrCity =
      !zipQuery ||
      store.city.toLowerCase().includes(zipQuery.toLowerCase()) ||
      store.zip.includes(zipQuery) ||
      store.state.toLowerCase().includes(zipQuery.toLowerCase()) ||
      store.name.toLowerCase().includes(zipQuery.toLowerCase());
    return matchesState && matchesDistance && matchesZipOrCity;
  });

  return (
    <section id="stores" className="py-16 bg-cozy-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-hearth-700 bg-hearth-100 px-3.5 py-1 rounded-full">
            <MapPin className="w-3.5 h-3.5" />
            <span>Retail Display Centers Across USA ({RETAILER_STORES.length} Stores)</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-cozy-900">
            Find Your Nearest Display Center
          </h2>
          <p className="text-cozy-600 text-sm sm:text-base leading-relaxed">
            Tour fully furnished single-wide, double-wide, and modular display homes in person across our locations nationwide.
          </p>
        </div>

        {/* Top Search & Filter Bar */}
        <div className="bg-white rounded-3xl border border-cozy-200 p-5 shadow-cozy space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 items-end">

            {/* Search Input */}
            <div className="space-y-1.5 lg:col-span-2">
              <label className="block text-xs font-bold text-cozy-700 uppercase tracking-wider">
                Enter ZIP Code, City, or Store Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="e.g. 39272, Byram, Hattiesburg, Houston, Waco..."
                  value={zipQuery}
                  onChange={(e) => setZipQuery(e.target.value)}
                  className="w-full bg-cozy-50 border border-cozy-300 rounded-xl pl-10 pr-4 py-3 text-sm font-semibold text-cozy-900 placeholder-cozy-400 focus:ring-2 focus:ring-hearth-500 outline-none"
                />
                <Search className="w-4 h-4 text-cozy-400 absolute left-3.5 top-3.5" />
              </div>
            </div>

            {/* Distance Radius Selector */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-cozy-700 uppercase tracking-wider">
                Distance Radius
              </label>
              <select
                value={distanceRadius}
                onChange={(e) => setDistanceRadius(Number(e.target.value))}
                className="w-full bg-cozy-50 border border-cozy-300 rounded-xl px-3.5 py-3 text-sm font-semibold text-cozy-900 focus:ring-2 focus:ring-hearth-500 outline-none cursor-pointer"
              >
                <option value={500}>All Distances</option>
                <option value={25}>Within 25 Miles</option>
                <option value={50}>Within 50 Miles</option>
                <option value={100}>Within 100 Miles</option>
                <option value={250}>Within 250 Miles</option>
              </select>
            </div>

            {/* State Filter */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-cozy-700 uppercase tracking-wider">
                Select State ({availableStates.length} States)
              </label>
              <select
                value={selectedStateFilter}
                onChange={(e) => setSelectedStateFilter(e.target.value)}
                className="w-full bg-cozy-50 border border-cozy-300 rounded-xl px-3.5 py-3 text-sm font-semibold text-cozy-900 focus:ring-2 focus:ring-hearth-500 outline-none cursor-pointer"
              >
                <option value="All">All States ({availableStates.length})</option>
                {availableStates.map((st) => (
                  <option key={st} value={st}>
                    {st === 'MS' ? 'Mississippi (MS)' :
                     st === 'AL' ? 'Alabama (AL)' :
                     st === 'FL' ? 'Florida (FL)' :
                     st === 'LA' ? 'Louisiana (LA)' :
                     st === 'TX' ? 'Texas (TX)' :
                     st === 'NC' ? 'North Carolina (NC)' :
                     st === 'SC' ? 'South Carolina (SC)' :
                     st === 'TN' ? 'Tennessee (TN)' :
                     st === 'GA' ? 'Georgia (GA)' :
                     st === 'ND' ? 'North Dakota (ND)' :
                     st === 'NE' ? 'Nebraska (NE)' :
                     st === 'IN' ? 'Indiana (IN)' : st}
                  </option>
                ))}
              </select>
            </div>

          </div>

          {/* Results Summary Bar */}
          <div className="pt-2 border-t border-cozy-100 flex flex-wrap justify-between items-center text-xs text-cozy-600 font-semibold gap-2">
            <span>Showing <strong className="text-cozy-900">{filteredStores.length}</strong> active display centers across the USA</span>
            <div className="flex space-x-2 lg:hidden">
              <button
                onClick={() => setActiveTabMobile('split')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold ${activeTabMobile === 'split' ? 'bg-hearth-600 text-white' : 'bg-cozy-100 text-cozy-800'}`}
              >
                Split
              </button>
              <button
                onClick={() => setActiveTabMobile('list')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold ${activeTabMobile === 'list' ? 'bg-hearth-600 text-white' : 'bg-cozy-100 text-cozy-800'}`}
              >
                List
              </button>
              <button
                onClick={() => setActiveTabMobile('map')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold ${activeTabMobile === 'map' ? 'bg-hearth-600 text-white' : 'bg-cozy-100 text-cozy-800'}`}
              >
                Map
              </button>
            </div>
          </div>
        </div>

        {/* Regional Homes Split Layout Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start min-h-[640px]">

          {/* Left Panel: Store Cards Scrollable Sidebar (5 Cols) */}
          <div className={`lg:col-span-5 space-y-4 max-h-[680px] overflow-y-auto pr-1 scrollbar-thin ${
            activeTabMobile === 'map' ? 'hidden lg:block' : 'block'
          }`}>
            {filteredStores.length > 0 ? (
              filteredStores.map((store) => {
                const isSelected = selectedStore?.id === store.id;
                return (
                  <div
                    key={store.id}
                    onClick={() => setSelectedStore(store)}
                    className={`bg-white rounded-3xl p-5 border-2 shadow-cozy hover:shadow-cozy-lg transition-all duration-300 cursor-pointer space-y-4 relative ${
                      isSelected
                        ? 'border-hearth-600 bg-hearth-50/20 ring-2 ring-hearth-400/40 shadow-cozy-lg'
                        : 'border-cozy-200/90 hover:border-cozy-300'
                    }`}
                  >
                    {/* Header: Name & Rating */}
                    <div className="flex justify-between items-start gap-2">
                      <div>
                        <h3 className="font-serif text-lg font-bold text-cozy-900 leading-snug">
                          {store.name}
                        </h3>
                        <div className="flex items-center space-x-2 text-xs text-cozy-500 font-medium mt-1">
                          <span className="flex items-center text-hearth-600 font-bold">
                            <Star className="w-3.5 h-3.5 fill-hearth-500 text-hearth-500 mr-1" />
                            {store.rating} ({store.reviewsCount})
                          </span>
                        </div>
                      </div>

                      {isSelected && (
                        <span className="bg-hearth-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full flex-shrink-0 flex items-center space-x-1">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>Selected</span>
                        </span>
                      )}
                    </div>

                    {/* Address & Contact */}
                    <div className="space-y-2 text-xs text-cozy-700 font-medium">
                      <div className="flex items-start space-x-2">
                        <MapPin className="w-4 h-4 text-hearth-600 flex-shrink-0 mt-0.5" />
                        <span>{store.address}, {store.city}, {store.state} {store.zip}</span>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-hearth-600 flex-shrink-0" />
                        <a href={`tel:${store.phone}`} className="font-bold text-cozy-900 hover:text-hearth-700">
                          {store.phone}
                        </a>
                      </div>

                      <div className="flex items-start space-x-2">
                        <Clock className="w-4 h-4 text-hearth-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sage-800 font-semibold">{store.hours}</span>
                      </div>
                    </div>

                    {/* Display Models Tags */}
                    {store.modelsOnDisplay && store.modelsOnDisplay.length > 0 && (
                      <div className="pt-2 border-t border-cozy-100">
                        <div className="text-[10px] font-bold text-cozy-500 uppercase tracking-wider mb-1.5">
                          Display Manufacturers On Lot:
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {store.modelsOnDisplay.map((model, idx) => (
                            <span key={idx} className="bg-cozy-100 text-cozy-800 text-[11px] font-semibold px-2.5 py-0.5 rounded-md border border-cozy-200">
                              {model}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Card Action Button */}
                    <div className="pt-3 border-t border-cozy-100 flex items-center space-x-3">
                      <a
                        href={`https://maps.google.com/?q=${encodeURIComponent(store.address + ' ' + store.city + ' ' + store.state)}`}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="w-full bg-hearth-600 hover:bg-hearth-700 text-white text-xs font-bold py-2.5 px-4 rounded-xl shadow transition-colors flex items-center justify-center space-x-2"
                      >
                        <Navigation className="w-3.5 h-3.5" />
                        <span>Get GPS Directions</span>
                      </a>
                    </div>

                  </div>
                );
              })
            ) : (
              <div className="bg-white rounded-3xl p-8 text-center border border-cozy-200 space-y-3">
                <MapPin className="w-10 h-10 text-cozy-300 mx-auto" />
                <h4 className="font-serif text-lg font-bold text-cozy-900">No display centers found</h4>
                <p className="text-xs text-cozy-600">Try selecting "All States" or searching for another city.</p>
              </div>
            )}
          </div>

          {/* Right Panel: Interactive Map Canvas (7 Cols) */}
          <div className={`lg:col-span-7 h-full min-h-[620px] ${
            activeTabMobile === 'list' ? 'hidden lg:block' : 'block'
          }`}>
            <InteractiveMap
              stores={filteredStores}
              selectedStore={selectedStore}
              onSelectStore={(st) => setSelectedStore(st)}
            />
          </div>

        </div>

      </div>
    </section>
  );
};
