import React from 'react';
import { X, Heart, Trash2, ArrowRight, Eye, Bed, Bath, Maximize2 } from 'lucide-react';
import { HomeModel } from '../types/home';

interface FavoritesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  favorites: HomeModel[];
  onRemoveFavorite: (home: HomeModel) => void;
  onQuickView: (home: HomeModel) => void;
  onOpenQuoteModal: (home: HomeModel) => void;
}

export const FavoritesDrawer: React.FC<FavoritesDrawerProps> = ({
  isOpen,
  onClose,
  favorites,
  onRemoveFavorite,
  onQuickView,
  onOpenQuoteModal,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-cozy-950/60 backdrop-blur-sm animate-fade-in">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-cozy-lg flex flex-col">

          {/* Header */}
          <div className="bg-cozy-900 text-white px-6 py-5 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Heart className="w-5 h-5 text-hearth-400 fill-hearth-400" />
              <h3 className="font-serif text-lg font-bold">Saved Favorites ({favorites.length})</h3>
            </div>
            <button onClick={onClose} className="p-1.5 rounded-full hover:bg-cozy-800 text-cozy-300">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* List of Favorites */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {favorites.length > 0 ? (
              favorites.map((home) => (
                <div
                  key={home.id}
                  className="bg-cozy-50 rounded-2xl p-4 border border-cozy-200 flex space-x-4 items-center group relative"
                >
                  <img
                    src={home.images[0]}
                    alt={home.name}
                    className="w-20 h-20 rounded-xl object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0 space-y-1">
                    <span className="text-[10px] font-bold text-hearth-800 bg-hearth-100 px-2 py-0.5 rounded-full">
                      {home.sectionType}
                    </span>
                    <h4 className="font-serif font-bold text-sm text-cozy-900 truncate">{home.name}</h4>
                    <div className="text-xs text-cozy-600">
                      {home.beds} Beds • {home.baths} Baths • {home.sqft} sq ft
                    </div>
                    <div className="text-sm font-bold text-hearth-700">
                      ${home.price.toLocaleString()}
                    </div>
                  </div>

                  <div className="flex flex-col space-y-2">
                    <button
                      onClick={() => {
                        onClose();
                        onQuickView(home);
                      }}
                      className="p-2 rounded-lg bg-white border border-cozy-300 hover:bg-hearth-50 text-cozy-700 hover:text-hearth-700"
                      title="View Details"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => onRemoveFavorite(home)}
                      className="p-2 rounded-lg bg-white border border-cozy-300 hover:bg-red-50 text-cozy-500 hover:text-red-600"
                      title="Remove from favorites"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12 space-y-3">
                <Heart className="w-12 h-12 text-cozy-300 mx-auto" />
                <h4 className="font-serif font-bold text-lg text-cozy-900">No saved homes yet</h4>
                <p className="text-xs text-cozy-600">
                  Click the heart icon on any floor plan card to save your favorite models here for easy comparison!
                </p>
              </div>
            )}
          </div>

          {/* Footer */}
          {favorites.length > 0 && (
            <div className="p-6 border-t border-cozy-200 bg-cozy-50 space-y-2">
              <button
                onClick={() => {
                  onClose();
                  onOpenQuoteModal(favorites[0]);
                }}
                className="w-full bg-hearth-600 hover:bg-hearth-700 text-white font-bold py-3 rounded-xl shadow text-xs"
              >
                Request Quote on Saved Models
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
