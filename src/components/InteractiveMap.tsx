import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapPin, Navigation, Phone, ExternalLink, Layers, Layers3, Globe } from 'lucide-react';
import { RetailerStore } from '../types/home';

interface InteractiveMapProps {
  stores: RetailerStore[];
  selectedStore: RetailerStore | null;
  onSelectStore: (store: RetailerStore) => void;
}

export const InteractiveMap: React.FC<InteractiveMapProps> = ({
  stores,
  selectedStore,
  onSelectStore,
}) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const leafletMapRef = useRef<L.Map | null>(null);
  const markersRef = useRef<Record<string, L.Marker>>({});

  const [mapEngine, setMapEngine] = useState<'google-single' | 'leaflet-all'>('google-single');
  const [googleMapType, setGoogleMapType] = useState<'m' | 'k'>('m'); // 'm' = roadmap, 'k' = satellite

  const currentStore = selectedStore || stores[0];

  // Construct official Google Maps public embed URL (100% reliable, zero API Key / Billing errors)
  const googleMapEmbedUrl = currentStore
    ? `https://maps.google.com/maps?q=${encodeURIComponent(
        `${currentStore.name}, ${currentStore.address}, ${currentStore.city}, ${currentStore.state} ${currentStore.zip}`
      )}&t=${googleMapType}&z=14&ie=UTF8&iwloc=&output=embed`
    : `https://maps.google.com/maps?q=32.29,-90.18&t=m&z=7&ie=UTF8&iwloc=&output=embed`;

  // Initialize and manage Leaflet Multi-Pin Map Canvas safely
  useEffect(() => {
    if (!mapContainerRef.current) return;

    try {
      if (!leafletMapRef.current) {
        // Reset container _leaflet_id if left over from previous mount
        if ((mapContainerRef.current as any)._leaflet_id) {
          (mapContainerRef.current as any)._leaflet_id = null;
        }

        // Center near Jackson, MS (32.35, -89.40) with zoom 6
        const map = L.map(mapContainerRef.current, {
          center: [32.35, -89.40],
          zoom: 6,
          zoomControl: false,
        });

        // CartoDB Voyager clean tiles
        L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
          subdomains: 'abcd',
          maxZoom: 19,
        }).addTo(map);

        L.control.zoom({ position: 'topright' }).addTo(map);

        leafletMapRef.current = map;
      }

      const map = leafletMapRef.current;

      // Clear previous markers
      Object.values(markersRef.current).forEach((marker) => marker.remove());
      markersRef.current = {};

      // Custom Pin Icon generator
      const createCustomIcon = (isSelected: boolean, name: string) => {
        return L.divIcon({
          className: 'custom-leaflet-marker',
          html: `
            <div style="position: relative; transform: translate(-50%, -100%); cursor: pointer;">
              <div style="
                background: ${isSelected ? '#DC6012' : '#342114'};
                color: #ffffff;
                padding: 6px 10px;
                border-radius: 12px;
                border: 2px solid #ffffff;
                box-shadow: 0 10px 20px rgba(0,0,0,0.3);
                display: flex;
                align-items: center;
                gap: 4px;
                font-family: system-ui, sans-serif;
                font-size: 11px;
                font-weight: 700;
                white-space: nowrap;
                transition: all 0.3s ease;
                ${isSelected ? 'transform: scale(1.15); z-index: 1000;' : ''}
              ">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#F88229" stroke-width="2.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>${name.replace('Regional Homes of ', '').replace('Regional Outlet Center - ', '')}</span>
              </div>
              <div style="
                width: 0;
                height: 0;
                border-left: 6px solid transparent;
                border-right: 6px solid transparent;
                border-top: 8px solid ${isSelected ? '#DC6012' : '#342114'};
                margin: 0 auto;
              "></div>
            </div>
          `,
          iconSize: [0, 0],
        });
      };

      // Plot all 54 store locations
      stores.forEach((store) => {
        if (!store.lat || !store.lng) return;

        const isSelected = selectedStore?.id === store.id;
        const icon = createCustomIcon(isSelected, store.name);

        const marker = L.marker([store.lat, store.lng], { icon }).addTo(map);

        const popupHtml = `
          <div style="font-family: system-ui, sans-serif; padding: 4px; max-width: 240px;">
            <div style="font-size: 13px; font-weight: 800; color: #342114; margin-bottom: 4px;">${store.name}</div>
            <div style="font-size: 11px; color: #625447; margin-bottom: 6px;">
              ${store.address}, ${store.city}, ${store.state} ${store.zip}
            </div>
            <div style="font-size: 12px; font-weight: 700; color: #DC6012; margin-bottom: 8px;">
              📞 ${store.phone}
            </div>
            <a
              href="https://maps.google.com/?q=${encodeURIComponent(store.address + ' ' + store.city + ' ' + store.state)}"
              target="_blank"
              style="display: block; width: 100%; text-align: center; background: #DC6012; color: #ffffff; padding: 6px 12px; border-radius: 8px; text-decoration: none; font-size: 11px; font-weight: 700; box-shadow: 0 2px 4px rgba(0,0,0,0.1);"
            >
              Get GPS Directions
            </a>
          </div>
        `;

        marker.bindPopup(popupHtml);

        marker.on('click', () => {
          onSelectStore(store);
        });

        markersRef.current[store.id] = marker;
      });

      // Fly map to selected store
      if (selectedStore && selectedStore.lat && selectedStore.lng) {
        map.flyTo([selectedStore.lat, selectedStore.lng], 12, { duration: 1.2 });
        const marker = markersRef.current[selectedStore.id];
        if (marker) {
          marker.openPopup();
        }
      }
    } catch (e) {
      console.error('Leaflet initialization warning:', e);
    }

    return () => {
      if (leafletMapRef.current) {
        try {
          leafletMapRef.current.remove();
        } catch (e) {}
        leafletMapRef.current = null;
      }
    };
  }, [stores, selectedStore]);

  return (
    <div className="relative w-full h-full min-h-[600px] bg-cozy-900 rounded-3xl overflow-hidden border border-cozy-700 shadow-cozy-lg flex flex-col justify-between">

      {/* Map Header Toolbar */}
      <div className="bg-cozy-900 px-5 py-3 border-b border-cozy-800 flex flex-wrap justify-between items-center gap-3 z-20">
        <div className="flex items-center space-x-2">
          <MapPin className="w-4 h-4 text-hearth-400" />
          <span className="text-white text-xs font-bold">
            {mapEngine === 'google-single'
              ? `Google Maps • ${currentStore ? currentStore.name : 'Store Location'}`
              : `USA Store Locations Map (${stores.length} Active Centers Plotted)`}
          </span>
        </div>

        {/* View Mode & Map Type Controls */}
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setMapEngine('google-single')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-colors flex items-center space-x-1.5 ${
              mapEngine === 'google-single'
                ? 'bg-hearth-600 text-white border-hearth-500 shadow'
                : 'bg-cozy-800 text-cozy-200 border-cozy-700 hover:bg-cozy-700'
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>Google Map View</span>
          </button>

          <button
            onClick={() => setMapEngine('leaflet-all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-colors flex items-center space-x-1.5 ${
              mapEngine === 'leaflet-all'
                ? 'bg-hearth-600 text-white border-hearth-500 shadow'
                : 'bg-cozy-800 text-cozy-200 border-cozy-700 hover:bg-cozy-700'
            }`}
          >
            <Layers3 className="w-3.5 h-3.5" />
            <span>All Stores Map</span>
          </button>

          {mapEngine === 'google-single' && (
            <button
              onClick={() => setGoogleMapType((prev) => (prev === 'm' ? 'k' : 'm'))}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-colors flex items-center space-x-1.5 ${
                googleMapType === 'k'
                  ? 'bg-hearth-600 text-white border-hearth-500 shadow'
                  : 'bg-cozy-800 text-cozy-200 border-cozy-700 hover:bg-cozy-700'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>{googleMapType === 'k' ? 'Satellite' : 'Roadmap'}</span>
            </button>
          )}

          {currentStore && (
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(
                `${currentStore.name} ${currentStore.address} ${currentStore.city} ${currentStore.state}`
              )}`}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1.5 bg-cozy-800 hover:bg-cozy-700 text-white text-xs font-bold rounded-xl border border-cozy-700 transition-colors flex items-center space-x-1"
              title="Open Directions in Google Maps"
            >
              <ExternalLink className="w-3.5 h-3.5 text-hearth-400" />
              <span className="hidden sm:inline">GPS Directions</span>
            </a>
          )}
        </div>
      </div>

      {/* Main Map View Container */}
      <div className="relative flex-1 w-full h-full min-h-[460px] bg-cozy-950 overflow-hidden">

        {/* Mode 1: Embedded Google Map View (100% Reliable, Zero Billing/API Key Errors) */}
        {mapEngine === 'google-single' && (
          <iframe
            key={`${currentStore.id}-${googleMapType}`}
            title={`Google Maps - ${currentStore.name}`}
            src={googleMapEmbedUrl}
            className="w-full h-full min-h-[460px] border-0 filter saturate-[1.05]"
            loading="lazy"
            allowFullScreen
          />
        )}

        {/* Mode 2: Leaflet Interactive Map displaying ALL 54 Store Pins simultaneously */}
        <div
          ref={mapContainerRef}
          className={`w-full h-full min-h-[460px] z-10 ${
            mapEngine === 'leaflet-all' ? 'block' : 'hidden'
          }`}
        />

        {/* Floating Pin Count Badge */}
        <div className="absolute bottom-4 left-4 z-20 bg-cozy-900/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/20 text-white text-[11px] font-bold shadow-md flex items-center space-x-1.5 pointer-events-none">
          <MapPin className="w-3.5 h-3.5 text-hearth-400" />
          <span>Showing {stores.length} Retail Center Locations</span>
        </div>
      </div>

      {/* Active Store Footer Bar */}
      {currentStore && (
        <div className="p-4 bg-cozy-900/95 backdrop-blur-md border-t border-cozy-800 text-white flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 z-20">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <span className="bg-hearth-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                {currentStore.city}, {currentStore.state} Center
              </span>
              <h4 className="font-serif font-bold text-base text-white">{currentStore.name}</h4>
            </div>
            <p className="text-xs text-cozy-300 flex items-center space-x-1">
              <Navigation className="w-3.5 h-3.5 text-hearth-400 inline flex-shrink-0" />
              <span>{currentStore.address}, {currentStore.city}, {currentStore.state} {currentStore.zip}</span>
            </p>
          </div>

          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <a
              href={`tel:${currentStore.phone}`}
              className="bg-cozy-800 hover:bg-cozy-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl border border-cozy-600 flex items-center space-x-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-hearth-400" />
              <span>{currentStore.phone}</span>
            </a>

            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(
                `${currentStore.name} ${currentStore.address} ${currentStore.city} ${currentStore.state}`
              )}`}
              target="_blank"
              rel="noreferrer"
              className="bg-hearth-600 hover:bg-hearth-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow flex items-center space-x-1.5"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Get Directions</span>
            </a>
          </div>
        </div>
      )}

    </div>
  );
};
