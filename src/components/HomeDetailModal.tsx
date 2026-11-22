import React, { useState } from 'react';
import { X, Heart, Bed, Bath, Maximize2, ShieldCheck, Check, ChevronLeft, ChevronRight, SlidersHorizontal, Eye, Sparkles } from 'lucide-react';
import { HomeModel, FinishOption } from '../types/home';

interface HomeDetailModalProps {
  home: HomeModel | null;
  onClose: () => void;
  isFavorite: boolean;
  onToggleFavorite: (home: HomeModel) => void;
  onOpenQuoteModal: (home: HomeModel) => void;
  onOpenTourModal: (home: HomeModel) => void;
  initialTab?: 'overview' | 'floorplan' | 'customize' | 'specs';
}

export const HomeDetailModal: React.FC<HomeDetailModalProps> = ({
  home,
  onClose,
  isFavorite,
  onToggleFavorite,
  onOpenQuoteModal,
  onOpenTourModal,
  initialTab = 'overview'
}) => {
  if (!home) return null;

  const [activeTab, setActiveTab] = useState<'overview' | 'floorplan' | 'customize' | 'specs'>(initialTab);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  // Customization Selections state
  const [selectedFinishes, setSelectedFinishes] = useState<Record<string, FinishOption>>(() => {
    const initial: Record<string, FinishOption> = {};
    home.customizations.forEach((cat) => {
      if (cat.options.length > 0) {
        initial[cat.id] = cat.options[0];
      }
    });
    return initial;
  });

  // Calculate customized total price
  const calculateTotalPrice = () => {
    let extra = 0;
    Object.values(selectedFinishes).forEach((opt) => {
      extra += opt.priceAdjustment;
    });
    return home.price + extra;
  };

  const totalPrice = calculateTotalPrice();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto bg-cozy-950/70 backdrop-blur-md animate-fade-in">

      <div className="bg-white w-full max-w-5xl rounded-3xl shadow-cozy-lg border border-cozy-200 overflow-hidden flex flex-col max-h-[92vh] my-auto">

        {/* Modal Header */}
        <div className="bg-cozy-50 px-6 py-4 border-b border-cozy-200 flex items-center justify-between sticky top-0 z-20">
          <div className="flex items-center space-x-3">
            <span className="bg-cozy-900 text-white text-xs font-bold px-3 py-1 rounded-full">
              {home.sectionType}
            </span>
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-cozy-900">{home.name}</h2>
              <p className="text-xs text-cozy-600 font-medium hidden sm:block">{home.tagline}</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => onToggleFavorite(home)}
              className={`p-2.5 rounded-full border border-cozy-200 transition-colors ${
                isFavorite ? 'bg-hearth-50 text-hearth-600 border-hearth-300' : 'text-cozy-600 hover:bg-cozy-100'
              }`}
              title="Save to favorites"
            >
              <Heart className={`w-5 h-5 ${isFavorite ? 'fill-hearth-600 text-hearth-600' : ''}`} />
            </button>
            <button
              onClick={onClose}
              className="p-2.5 rounded-full text-cozy-600 hover:bg-cozy-200 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Modal Body Container */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8">

          {/* Main Photo Gallery */}
          <div className="space-y-3">
            <div className="relative aspect-[16/9] sm:aspect-[21/9] bg-cozy-900 rounded-2xl overflow-hidden group">
              <img
                src={home.images[currentImgIndex]}
                alt={home.name}
                className="w-full h-full object-cover"
              />

              {home.images.length > 1 && (
                <>
                  <button
                    onClick={() => setCurrentImgIndex((prev) => (prev - 1 + home.images.length) % home.images.length)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-all opacity-0 group-hover:opacity-100"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setCurrentImgIndex((prev) => (prev + 1) % home.images.length)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-all opacity-0 group-hover:opacity-100"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              {/* 3D Virtual Tour Button overlay */}
              <button
                onClick={() => onOpenTourModal(home)}
                className="absolute bottom-4 right-4 bg-white/90 hover:bg-white text-cozy-900 font-bold text-xs px-4 py-2.5 rounded-xl shadow-lg backdrop-blur-md flex items-center space-x-2 transition-transform hover:scale-105"
              >
                <Eye className="w-4 h-4 text-hearth-600" />
                <span>Launch 3D Virtual Tour</span>
              </button>
            </div>

            {/* Thumbnail Strip */}
            {home.images.length > 1 && (
              <div className="flex space-x-3 overflow-x-auto pb-1 scrollbar-none">
                {home.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImgIndex(idx)}
                    className={`relative w-24 h-16 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 ${
                      idx === currentImgIndex ? 'border-hearth-600 scale-105 shadow' : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Key Specs Banner */}
          <div className="bg-cozy-100/80 rounded-2xl p-4 grid grid-cols-2 sm:grid-cols-4 gap-4 text-cozy-900 border border-cozy-200">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-hearth-600 shadow-sm">
                <Bed className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-cozy-500 font-semibold">Bedrooms</div>
                <div className="font-bold text-sm">{home.beds} Beds</div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-hearth-600 shadow-sm">
                <Bath className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-cozy-500 font-semibold">Bathrooms</div>
                <div className="font-bold text-sm">{home.baths} Baths</div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-hearth-600 shadow-sm">
                <Maximize2 className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-cozy-500 font-semibold">Living Area</div>
                <div className="font-bold text-sm">{home.sqft.toLocaleString()} sq ft</div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-hearth-600 shadow-sm">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-cozy-500 font-semibold">Dimensions</div>
                <div className="font-bold text-sm">{home.dimensions}</div>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="border-b border-cozy-200">
            <div className="flex space-x-6 overflow-x-auto scrollbar-none">
              {[
                { id: 'overview', label: 'Overview & Highlights' },
                { id: 'floorplan', label: 'Floor Plan View' },
                { id: 'customize', label: 'Design Customizer' },
                { id: 'specs', label: 'Full Factory Specs' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`py-3 text-sm font-bold border-b-2 whitespace-nowrap transition-colors ${
                    activeTab === tab.id
                      ? 'border-hearth-600 text-hearth-700'
                      : 'border-transparent text-cozy-600 hover:text-cozy-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab 1: Overview */}
          {activeTab === 'overview' && (
            <div className="space-y-6 animate-fade-in">
              <div className="space-y-2">
                <h3 className="font-serif text-xl font-bold text-cozy-900">About {home.name}</h3>
                <p className="text-cozy-700 text-sm leading-relaxed">{home.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-hearth-50/70 p-5 rounded-2xl border border-hearth-200/70 space-y-3">
                  <h4 className="font-serif font-bold text-hearth-900 text-base flex items-center space-x-2">
                    <Sparkles className="w-4 h-4 text-hearth-600" />
                    <span>Signature Home Highlights</span>
                  </h4>
                  <ul className="space-y-2 text-xs text-cozy-800 font-medium">
                    {home.highlights.map((h, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <Check className="w-4 h-4 text-hearth-600 flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-sage-50/70 p-5 rounded-2xl border border-sage-200/70 space-y-3">
                  <h4 className="font-serif font-bold text-sage-900 text-base flex items-center space-x-2">
                    <ShieldCheck className="w-4 h-4 text-sage-600" />
                    <span>Factory Construction Quality</span>
                  </h4>
                  <ul className="space-y-2 text-xs text-cozy-800 font-medium">
                    {home.features.map((f, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <Check className="w-4 h-4 text-sage-600 flex-shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Floor Plan */}
          {activeTab === 'floorplan' && (
            <div className="space-y-4 animate-fade-in text-center">
              <div className="bg-cozy-100 rounded-2xl p-4 border border-cozy-200 max-w-3xl mx-auto overflow-hidden">
                <img
                  src={home.floorPlanUrl}
                  alt={`${home.name} Floor Plan`}
                  className="w-full h-auto max-h-[480px] object-contain mx-auto rounded-xl"
                />
              </div>
              <p className="text-xs text-cozy-600">
                * Note: Reverse floor plans and minor room expansions are available upon request during custom order.
              </p>
            </div>
          )}

          {/* Tab 3: Design Customizer */}
          {activeTab === 'customize' && (
            <div className="space-y-6 animate-fade-in">
              <div className="bg-cozy-900 text-white p-5 rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h3 className="font-serif text-lg font-bold">Interactive Customizer Studio</h3>
                  <p className="text-xs text-cozy-200">
                    Select exterior colors and interior finishes to estimate your customized home price.
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-xs text-cozy-300">Total Customized Price</div>
                  <div className="text-2xl font-serif font-bold text-hearth-300">
                    ${totalPrice.toLocaleString()}
                  </div>
                </div>
              </div>

              {home.customizations.length > 0 ? (
                <div className="space-y-6">
                  {home.customizations.map((cat) => (
                    <div key={cat.id} className="bg-cozy-50 p-5 rounded-2xl border border-cozy-200 space-y-3">
                      <div>
                        <h4 className="font-bold text-cozy-900 text-sm">{cat.categoryName}</h4>
                        <p className="text-xs text-cozy-600">{cat.description}</p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                        {cat.options.map((opt) => {
                          const isSelected = selectedFinishes[cat.id]?.id === opt.id;
                          return (
                            <button
                              key={opt.id}
                              onClick={() => setSelectedFinishes({ ...selectedFinishes, [cat.id]: opt })}
                              className={`p-3.5 rounded-xl border-2 text-left transition-all flex items-center space-x-3 ${
                                isSelected
                                  ? 'border-hearth-600 bg-white shadow-md'
                                  : 'border-cozy-200 bg-white/60 hover:border-cozy-300'
                              }`}
                            >
                              <span
                                className="w-7 h-7 rounded-full border border-black/10 flex-shrink-0 shadow-inner"
                                style={{ backgroundColor: opt.colorOrPattern }}
                              />
                              <div className="flex-1 min-w-0">
                                <div className="text-xs font-bold text-cozy-900 truncate">{opt.name}</div>
                                <div className="text-[11px] font-semibold text-hearth-700">
                                  {opt.priceAdjustment === 0 ? 'Included' : `+$${opt.priceAdjustment.toLocaleString()}`}
                                </div>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-cozy-600 text-xs">
                  Standard finishes apply. Contact our design specialists for bespoke structural customizations.
                </div>
              )}
            </div>
          )}

          {/* Tab 4: Full Specifications */}
          {activeTab === 'specs' && (
            <div className="space-y-4 animate-fade-in">
              <h3 className="font-serif text-lg font-bold text-cozy-900">Technical Specifications</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {home.specs.map((spec, idx) => (
                  <div key={idx} className="bg-cozy-50 p-3.5 rounded-xl border border-cozy-200 flex justify-between items-center">
                    <span className="font-semibold text-cozy-600">{spec.label}</span>
                    <span className="font-bold text-cozy-900">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Bottom Sticky CTA Footer */}
        <div className="bg-cozy-900 text-white px-6 py-4 border-t border-cozy-800 flex flex-col sm:flex-row justify-between items-center gap-4 sticky bottom-0 z-20">
          <div>
            <div className="text-xs text-cozy-300">Base Model Price</div>
            <div className="text-2xl font-serif font-bold text-hearth-300">
              ${home.price.toLocaleString()}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onOpenQuoteModal(home);
              }}
              className="flex-1 sm:flex-none bg-gradient-to-r from-hearth-500 to-hearth-600 hover:from-hearth-600 hover:to-hearth-700 text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-xl shadow transition-all"
            >
              Request Custom Quote
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
