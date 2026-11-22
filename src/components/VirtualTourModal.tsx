import React, { useState } from 'react';
import { X, Eye, Maximize2, Sparkles, ChevronLeft, ChevronRight, Compass } from 'lucide-react';
import { HomeModel } from '../types/home';

interface VirtualTourModalProps {
  isOpen: boolean;
  onClose: () => void;
  home: HomeModel | null;
}

export const VirtualTourModal: React.FC<VirtualTourModalProps> = ({
  isOpen,
  onClose,
  home,
}) => {
  if (!isOpen || !home) return null;

  const [currentPanorama, setCurrentPanorama] = useState(0);

  const rooms = [
    { title: 'Living Room & Kitchen Island', image: home.images[0] || 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80' },
    { title: 'Primary Suite & Master Bath', image: home.images[1] || 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=80' },
    { title: 'Guest Bedroom & Dining Nook', image: home.images[2] || 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-cozy-950/85 backdrop-blur-md animate-fade-in">
      <div className="bg-cozy-900 w-full max-w-5xl rounded-3xl shadow-cozy-lg border border-cozy-700 overflow-hidden flex flex-col max-h-[90vh] my-auto text-white">

        {/* Header */}
        <div className="px-6 py-4 border-b border-cozy-800 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Compass className="w-5 h-5 text-hearth-400 animate-spin-slow" />
            <div>
              <h3 className="font-serif text-lg font-bold">{home.name} — Interactive 360° Walkthrough</h3>
              <p className="text-xs text-cozy-300">Simulated 3D Virtual Tour Preview</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-cozy-800 text-cozy-300">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Viewport */}
        <div className="relative flex-1 min-h-[420px] bg-black flex items-center justify-center overflow-hidden">
          <img
            src={rooms[currentPanorama].image}
            alt={rooms[currentPanorama].title}
            className="w-full h-full object-cover transition-all duration-700 filter brightness-95"
          />

          {/* Interactive Overlay Tag */}
          <div className="absolute top-4 left-4 bg-cozy-900/80 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20 text-xs font-bold flex items-center space-x-2">
            <Sparkles className="w-4 h-4 text-hearth-400" />
            <span>Viewing: {rooms[currentPanorama].title}</span>
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-cozy-900/80 backdrop-blur-md px-5 py-2.5 rounded-2xl border border-white/20 text-xs text-cozy-200 flex items-center space-x-4">
            <span>Hold & drag or use arrows to view surrounding finishes</span>
          </div>

          <button
            onClick={() => setCurrentPanorama((prev) => (prev - 1 + rooms.length) % rooms.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md text-white transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => setCurrentPanorama((prev) => (prev + 1) % rooms.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md text-white transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Room Switcher Footer */}
        <div className="p-4 border-t border-cozy-800 bg-cozy-950 flex justify-center space-x-3">
          {rooms.map((room, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentPanorama(idx)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                idx === currentPanorama
                  ? 'bg-hearth-600 text-white shadow'
                  : 'bg-cozy-800 text-cozy-300 hover:bg-cozy-700'
              }`}
            >
              {room.title}
            </button>
          ))}
        </div>

      </div>
    </div>
  );
};
