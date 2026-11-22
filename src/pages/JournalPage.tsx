import React from 'react';
import { BlogResources } from '../components/BlogResources';
import { RoutePath } from '../router/useRouter';

interface JournalPageProps {
  onNavigate: (path: RoutePath) => void;
}

export const JournalPage: React.FC<JournalPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-8 pb-16">

      {/* Page Header */}
      <div className="bg-gradient-to-r from-cozy-900 via-hearth-950 to-cozy-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-4 text-center md:text-left">
          <div className="flex justify-center md:justify-start items-center space-x-2 text-xs font-semibold text-hearth-300">
            <button onClick={() => onNavigate('home')} className="hover:underline">Home</button>
            <span>/</span>
            <span className="text-white">Buyer Guides & Journal</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Cozy Living Journal & Guides
          </h1>

          <p className="text-cozy-200 text-sm sm:text-base max-w-2xl leading-relaxed">
            Your homebuyer toolkit! Read site prep checklists, modular vs manufactured comparisons, financing tips, and interior decorating advice.
          </p>
        </div>
      </div>

      {/* Main Journal Component */}
      <BlogResources />

    </div>
  );
};
