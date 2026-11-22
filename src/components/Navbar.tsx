import React, { useState } from 'react';
import { Heart, Menu, X } from 'lucide-react';
import { HomeModel } from '../types/home';
import { RoutePath } from '../router/useRouter';

interface NavbarProps {
  favorites: HomeModel[];
  onOpenFavorites: () => void;
  onOpenQuoteModal: (home?: HomeModel) => void;
  onNavigate: (path: RoutePath, params?: Record<string, string>) => void;
  currentPath: RoutePath;
}

export const Navbar: React.FC<NavbarProps> = ({
  favorites,
  onOpenFavorites,
  onOpenQuoteModal,
  onNavigate,
  currentPath,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { path: RoutePath; label: string }[] = [
    { path: 'home', label: 'Home' },
    { path: 'homes', label: 'Explore Homes' },
    { path: 'our-difference', label: 'Our Difference' },
    { path: 'stores', label: 'Locations' },
    { path: 'faqs', label: 'FAQs' },
    { path: 'journal', label: 'Buyer Guides' },
    { path: 'reviews', label: 'Stories' },
  ];

  const handleNavClick = (path: RoutePath) => {
    onNavigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 shadow-sm transition-all duration-300">
      {/* Main Navigation Bar */}
      <nav className="glass-panel bg-cozy-50/95 border-b border-cozy-200/60 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">

            {/* Logo Image */}
            <div
              onClick={() => handleNavClick('home')}
              className="flex items-center cursor-pointer group py-2"
            >
              <img
                src="/mobile-homes-logo.png"
                alt="Mobile Homes Logo"
                className="h-14 sm:h-16 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-6">
              {navLinks.map((link) => {
                const isActive = currentPath === link.path;
                return (
                  <button
                    key={link.path}
                    onClick={() => handleNavClick(link.path)}
                    className={`text-sm font-semibold transition-all relative py-2 ${
                      isActive
                        ? 'text-hearth-700 font-bold'
                        : 'text-cozy-800 hover:text-hearth-600'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-hearth-600 rounded-full" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Desktop Right CTA Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Favorites Heart */}
              <button
                onClick={onOpenFavorites}
                className="relative p-2.5 rounded-full text-cozy-700 hover:text-hearth-600 hover:bg-cozy-100 transition-colors"
                title="Saved Favorite Homes"
              >
                <Heart className={`w-5 h-5 ${favorites.length > 0 ? 'fill-hearth-500 text-hearth-500' : ''}`} />
                {favorites.length > 0 && (
                  <span className="absolute top-0 right-0 w-5 h-5 bg-hearth-600 text-white text-[11px] font-bold rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                    {favorites.length}
                  </span>
                )}
              </button>

              {/* Get Custom Quote CTA */}
              <button
                onClick={() => onOpenQuoteModal()}
                className="bg-gradient-to-r from-hearth-600 to-cozy-700 hover:from-hearth-700 hover:to-cozy-800 text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-cozy hover:shadow-cozy-lg transition-all transform hover:-translate-y-0.5 flex items-center space-x-2"
              >
                <span>Request Custom Quote</span>
              </button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex items-center space-x-3 lg:hidden">
              <button
                onClick={onOpenFavorites}
                className="relative p-2 rounded-lg text-cozy-700 hover:bg-cozy-100"
              >
                <Heart className={`w-6 h-6 ${favorites.length > 0 ? 'fill-hearth-500 text-hearth-500' : ''}`} />
                {favorites.length > 0 && (
                  <span className="absolute top-0 right-0 w-4 h-4 bg-hearth-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                    {favorites.length}
                  </span>
                )}
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-cozy-800 hover:bg-cozy-100 transition-colors focus:outline-none"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-cozy-200 bg-cozy-50 px-4 pt-3 pb-6 space-y-3 animate-fade-in shadow-lg">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => handleNavClick(link.path)}
                className={`block w-full text-left px-4 py-2.5 rounded-xl text-base font-semibold transition-colors ${
                  currentPath === link.path
                    ? 'bg-hearth-100 text-hearth-800 font-bold'
                    : 'text-cozy-800 hover:bg-cozy-100'
                }`}
              >
                {link.label}
              </button>
            ))}

            <div className="pt-3 border-t border-cozy-200 space-y-2">
              <button
                onClick={() => {
                  onOpenQuoteModal();
                  setMobileMenuOpen(false);
                }}
                className="w-full bg-hearth-600 hover:bg-hearth-700 text-white font-semibold py-3 rounded-xl shadow text-center"
              >
                Request Custom Quote
              </button>
              <button
                onClick={() => {
                  handleNavClick('stores');
                }}
                className="w-full border border-cozy-300 text-cozy-800 font-semibold py-2.5 rounded-xl text-center flex items-center justify-center space-x-2"
              >
                <span>Find Display Store</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
