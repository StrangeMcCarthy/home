import React from 'react';
import { StoreLocator } from '../components/StoreLocator';
import { RoutePath } from '../router/useRouter';

interface StoresPageProps {
  onNavigate: (path: RoutePath) => void;
}

export const StoresPage: React.FC<StoresPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-8 pb-16">

      {/* Page Header */}
      <div className="bg-gradient-to-r from-cozy-900 via-hearth-950 to-cozy-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-4 text-center md:text-left">
          <div className="flex justify-center md:justify-start items-center space-x-2 text-xs font-semibold text-hearth-300">
            <button onClick={() => onNavigate('home')} className="hover:underline">Home</button>
            <span>/</span>
            <span className="text-white">Locations</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Retail Display Centers & Showrooms
          </h1>

          <p className="text-cozy-200 text-sm sm:text-base max-w-2xl leading-relaxed">
            Walk through fully furnished single-wide, double-wide, and modular display homes at our retail locations across Mississippi, Alabama, Tennessee, Georgia, Louisiana, and Texas.
          </p>
        </div>
      </div>

      {/* Main Split-Screen Map & Store Locator Component */}
      <StoreLocator />

    </div>
  );
};
