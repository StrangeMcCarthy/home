import React, { useState, useMemo, lazy, Suspense } from 'react';
import { useRouter } from './router/useRouter';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ErrorBoundary } from './components/ErrorBoundary';

import { HomeDetailModal } from './components/HomeDetailModal';
import { QuoteRequestModal } from './components/QuoteRequestModal';
import { FavoritesDrawer } from './components/FavoritesDrawer';
import { VirtualTourModal } from './components/VirtualTourModal';

import { INITIAL_HOMES } from './data/homesData';
import { HomeModel, FilterState } from './types/home';
import { Home, Sparkles } from 'lucide-react';

// Lazy-loaded Pages for Instant Initial Load Speed
const HomePage = lazy(() => import('./pages/HomePage').then((m) => ({ default: m.HomePage })));
const CatalogPage = lazy(() => import('./pages/CatalogPage').then((m) => ({ default: m.CatalogPage })));
const OurDifferencePage = lazy(() => import('./pages/OurDifferencePage').then((m) => ({ default: m.OurDifferencePage })));
const StoresPage = lazy(() => import('./pages/StoresPage').then((m) => ({ default: m.StoresPage })));
const JournalPage = lazy(() => import('./pages/JournalPage').then((m) => ({ default: m.JournalPage })));
const ReviewsPage = lazy(() => import('./pages/ReviewsPage').then((m) => ({ default: m.ReviewsPage })));
const FaqsPage = lazy(() => import('./pages/FaqsPage').then((m) => ({ default: m.FaqsPage })));
const HomeDetailPage = lazy(() => import('./pages/HomeDetailPage').then((m) => ({ default: m.HomeDetailPage })));

// Simple Page Loading Skeleton
const PageFallback = () => (
  <div className="min-h-[400px] flex flex-col items-center justify-center space-y-4 py-20 text-cozy-600">
    <div className="w-12 h-12 rounded-2xl bg-hearth-100 text-hearth-600 flex items-center justify-center animate-bounce">
      <Home className="w-6 h-6" />
    </div>
    <div className="flex items-center space-x-2 text-xs font-bold text-cozy-700">
      <Sparkles className="w-4 h-4 text-hearth-500 animate-spin" />
      <span>Loading Page Content...</span>
    </div>
  </div>
);

export const App: React.FC = () => {
  const { route, navigate } = useRouter();

  // Favorites State
  const [favorites, setFavorites] = useState<HomeModel[]>([]);

  // Filter State for Catalog
  const [filters, setFilters] = useState<FilterState>({
    sectionType: 'All',
    minPrice: 0,
    maxPrice: 300000,
    minBeds: 0,
    minBaths: 0,
    minSqft: 0,
    style: 'All',
    sortBy: 'featured',
    searchQuery: '',
    selectedState: 'All',
  });

  // Global Modal States
  const [modalDetailHome, setModalDetailHome] = useState<HomeModel | null>(null);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState<boolean>(false);
  const [quoteHome, setQuoteHome] = useState<HomeModel | null>(null);

  const [isFavoritesDrawerOpen, setIsFavoritesDrawerOpen] = useState<boolean>(false);

  const [is3dTourOpen, setIs3dTourOpen] = useState<boolean>(false);
  const [tour3dHome, setTour3dHome] = useState<HomeModel | null>(null);

  // Filter Updates
  const handleFilterChange = (updated: Partial<FilterState>) => {
    setFilters((prev) => ({ ...prev, ...updated }));
  };

  const handleResetFilters = () => {
    setFilters({
      sectionType: 'All',
      minPrice: 0,
      maxPrice: 300000,
      minBeds: 0,
      minBaths: 0,
      minSqft: 0,
      style: 'All',
      sortBy: 'featured',
      searchQuery: '',
      selectedState: 'All',
    });
  };

  // Toggle Favorite
  const handleToggleFavorite = (home: HomeModel) => {
    setFavorites((prev) => {
      const exists = prev.some((fav) => fav.id === home.id);
      if (exists) {
        return prev.filter((fav) => fav.id !== home.id);
      } else {
        return [...prev, home];
      }
    });
  };

  // Open Quote Modal
  const handleOpenQuoteModal = (home?: HomeModel) => {
    setQuoteHome(home || null);
    setIsQuoteModalOpen(true);
  };

  // Open 3D Virtual Tour
  const handleOpen3dTour = (home: HomeModel) => {
    setTour3dHome(home);
    setIs3dTourOpen(true);
  };

  // Open Customizer for Modal
  const handleSelectCustomizer = (home: HomeModel) => {
    navigate('home-detail', { id: home.id });
  };

  // Filtered Homes Computation
  const filteredHomes = useMemo(() => {
    return INITIAL_HOMES.filter((home) => {
      if (filters.sectionType !== 'All' && home.sectionType !== filters.sectionType) {
        return false;
      }
      if (home.price > filters.maxPrice) {
        return false;
      }
      if (filters.minBeds > 0 && home.beds < filters.minBeds) {
        return false;
      }
      if (filters.style !== 'All' && home.style !== filters.style) {
        return false;
      }
      if (filters.searchQuery) {
        const q = filters.searchQuery.toLowerCase();
        const matchesName = home.name.toLowerCase().includes(q);
        const matchesTagline = home.tagline.toLowerCase().includes(q);
        const matchesDesc = home.description.toLowerCase().includes(q);
        const matchesStyle = home.style.toLowerCase().includes(q);
        if (!matchesName && !matchesTagline && !matchesDesc && !matchesStyle) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (filters.sortBy === 'featured') {
        if (a.isFeatured && !b.isFeatured) return -1;
        if (!a.isFeatured && b.isFeatured) return 1;
        return 0;
      }
      if (filters.sortBy === 'price-asc') return a.price - b.price;
      if (filters.sortBy === 'price-desc') return b.price - a.price;
      if (filters.sortBy === 'sqft-desc') return b.sqft - a.sqft;
      if (filters.sortBy === 'beds-desc') return b.beds - a.beds;
      return 0;
    });
  }, [filters]);

  // Page Component Router Renderer
  const renderCurrentPage = () => {
    switch (route.path) {
      case 'home':
        return (
          <HomePage
            onNavigate={navigate}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
            onQuickView={(h) => navigate('home-detail', { id: h.id })}
            onSelectCustomizer={handleSelectCustomizer}
            onOpenQuoteModal={handleOpenQuoteModal}
            filters={filters}
            onFilterChange={handleFilterChange}
          />
        );

      case 'homes':
        return (
          <CatalogPage
            onNavigate={navigate}
            homes={filteredHomes}
            filters={filters}
            onFilterChange={handleFilterChange}
            onResetFilters={handleResetFilters}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
            onQuickView={(h) => navigate('home-detail', { id: h.id })}
            onSelectCustomizer={handleSelectCustomizer}
          />
        );

      case 'our-difference':
        return (
          <OurDifferencePage
            onNavigate={navigate}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        );

      case 'stores':
        return (
          <StoresPage onNavigate={navigate} />
        );

      case 'faqs':
        return (
          <FaqsPage
            onNavigate={navigate}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        );

      case 'journal':
        return (
          <JournalPage onNavigate={navigate} />
        );

      case 'reviews':
        return (
          <ReviewsPage onNavigate={navigate} />
        );

      case 'home-detail':
        return (
          <HomeDetailPage
            homeId={route.params.id || 'the-basecamp-lodge'}
            onNavigate={navigate}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
            onOpenQuoteModal={handleOpenQuoteModal}
            onOpenTourModal={handleOpen3dTour}
          />
        );

      default:
        return (
          <HomePage
            onNavigate={navigate}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
            onQuickView={(h) => navigate('home-detail', { id: h.id })}
            onSelectCustomizer={handleSelectCustomizer}
            onOpenQuoteModal={handleOpenQuoteModal}
            filters={filters}
            onFilterChange={handleFilterChange}
          />
        );
    }
  };

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-cozy-50 flex flex-col font-sans selection:bg-hearth-100 selection:text-hearth-800">

        {/* Top Header Navigation */}
        <Navbar
          favorites={favorites}
          onOpenFavorites={() => setIsFavoritesDrawerOpen(true)}
          onOpenQuoteModal={handleOpenQuoteModal}
          onNavigate={navigate}
          currentPath={route.path}
        />

        {/* Main Multi-Page Route View with Lazy Loading Suspense */}
        <main className="flex-1">
          <Suspense fallback={<PageFallback />}>
            {renderCurrentPage()}
          </Suspense>
        </main>

        {/* Cozy Footer */}
        <Footer onNavigate={navigate} />

        {/* Global Utility Modals & Drawers */}

        {/* 1. Quick View Modal */}
        <HomeDetailModal
          home={modalDetailHome}
          onClose={() => setModalDetailHome(null)}
          isFavorite={modalDetailHome ? favorites.some((f) => f.id === modalDetailHome.id) : false}
          onToggleFavorite={handleToggleFavorite}
          onOpenQuoteModal={handleOpenQuoteModal}
          onOpenTourModal={handleOpen3dTour}
        />

        {/* 2. Quote Request Modal */}
        <QuoteRequestModal
          isOpen={isQuoteModalOpen}
          onClose={() => setIsQuoteModalOpen(false)}
          selectedHome={quoteHome}
        />

        {/* 3. Saved Favorites Drawer */}
        <FavoritesDrawer
          isOpen={isFavoritesDrawerOpen}
          onClose={() => setIsFavoritesDrawerOpen(false)}
          favorites={favorites}
          onRemoveFavorite={handleToggleFavorite}
          onQuickView={(h) => navigate('home-detail', { id: h.id })}
          onOpenQuoteModal={handleOpenQuoteModal}
        />

        {/* 4. 3D Virtual Tour Viewer */}
        <VirtualTourModal
          isOpen={is3dTourOpen}
          onClose={() => setIs3dTourOpen(false)}
          home={tour3dHome}
        />

      </div>
    </ErrorBoundary>
  );
};

export default App;
