import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { RoutePath } from '../router/useRouter';

interface FooterProps {
  onNavigate: (path: RoutePath, params?: Record<string, string>) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [emailSub, setEmailSub] = useState('');
  const [subSuccess, setSubSuccess] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailSub) {
      setSubSuccess(true);
      setEmailSub('');
    }
  };

  return (
    <footer className="bg-cozy-950 text-cozy-100 border-t border-cozy-800">

      {/* Upper Cozy Newsletter Bar */}
      <div className="bg-gradient-to-r from-cozy-900 via-hearth-950 to-cozy-900 border-b border-cozy-800/80 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="font-serif text-2xl font-bold text-hearth-200">
              Join Our Home Circle
            </h3>
            <p className="text-cozy-300 text-xs sm:text-sm max-w-xl">
              Receive seasonal factory sale alerts, new floor plan reveals, and expert site prep guides directly to your inbox.
            </p>
          </div>

          {!subSuccess ? (
            <form onSubmit={handleSubscribe} className="flex w-full md:w-auto max-w-md gap-2">
              <input
                type="email"
                placeholder="Enter your email address..."
                value={emailSub}
                onChange={(e) => setEmailSub(e.target.value)}
                className="bg-cozy-900 border border-cozy-700 rounded-xl px-4 py-3 text-xs text-white placeholder-cozy-500 focus:ring-2 focus:ring-hearth-500 outline-none flex-1 min-w-[220px]"
                required
              />
              <button
                type="submit"
                className="bg-hearth-600 hover:bg-hearth-700 text-white text-xs font-bold px-5 py-3 rounded-xl shadow transition-colors flex items-center space-x-1 whitespace-nowrap"
              >
                <span>Subscribe</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          ) : (
            <div className="bg-hearth-500/20 border border-hearth-400/40 text-hearth-200 px-5 py-3 rounded-xl text-xs font-bold flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-hearth-400" />
              <span>Welcome to the Mobile Homes family! Check your inbox soon.</span>
            </div>
          )}
        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

        {/* Brand Column */}
        <div className="lg:col-span-2 space-y-4">
          <div className="cursor-pointer inline-block bg-white p-2 rounded-2xl" onClick={() => onNavigate('home')}>
            <img
              src="/mobile-homes-logo.png"
              alt="Mobile Homes Logo"
              className="h-14 w-auto object-contain"
            />
          </div>

          <p className="text-cozy-300 text-xs leading-relaxed max-w-sm">
            The premier retailer of precision-built manufactured, double-wide, and modular pre-made homes across the USA. Crafting comfortable, energy-efficient living spaces.
          </p>

          <div className="pt-2 text-xs text-cozy-400 space-y-2">
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-hearth-400 flex-shrink-0" />
              <span>100 Vision Drive, Suite 200, Jackson, MS 39211</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-hearth-400 flex-shrink-0" />
              <span>(601) 724-4504 / (800) 555-4327</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-hearth-400 flex-shrink-0" />
              <a href="mailto:mobilehomedealership7@gmail.com" className="hover:text-hearth-300 transition-colors">
                mobilehomedealership7@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Floor Plan Directory */}
        <div className="space-y-3">
          <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
            Explore Floor Plans
          </h4>
          <ul className="space-y-2 text-xs text-cozy-300 font-medium">
            <li>
              <button onClick={() => onNavigate('homes')} className="hover:text-hearth-300 transition-colors">
                All Pre-Made Homes
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('homes')} className="hover:text-hearth-300 transition-colors">
                Single-Wide Series
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('homes')} className="hover:text-hearth-300 transition-colors">
                Double-Wide Series
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('homes')} className="hover:text-hearth-300 transition-colors">
                Modular Estates
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('homes')} className="hover:text-hearth-300 transition-colors">
                Modern Farmhouse Models
              </button>
            </li>
          </ul>
        </div>

        {/* Homebuyer Resources */}
        <div className="space-y-3">
          <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
            Resources & Stories
          </h4>
          <ul className="space-y-2 text-xs text-cozy-300 font-medium">
            <li>
              <button onClick={() => onNavigate('reviews')} className="hover:text-hearth-300 transition-colors">
                Homeowner Stories & Reviews
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('reviews')} className="hover:text-hearth-300 transition-colors">
                Land Prep & Buyer Guides
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('our-difference')} className="hover:text-hearth-300 transition-colors">
                Our 4-Step Home Journey
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('stores')} className="hover:text-hearth-300 transition-colors">
                Retail Display Locator
              </button>
            </li>
          </ul>
        </div>

        {/* Warranty & Company */}
        <div className="space-y-3">
          <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
            Owner & Warranty
          </h4>
          <ul className="space-y-2 text-xs text-cozy-300 font-medium">
            <li>
              <button onClick={() => onNavigate('our-difference')} className="hover:text-hearth-300 transition-colors">
                10-Year Warranty Information
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('faqs')} className="hover:text-hearth-300 transition-colors">
                Frequently Asked Questions
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('faqs')} className="hover:text-hearth-300 transition-colors">
                Privacy Policy & Terms
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('home')} className="hover:text-hearth-300 transition-colors">
                Site Directory
              </button>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cozy-900 py-6 px-4 text-center text-xs text-cozy-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3">
          <div>
            © {new Date().getFullYear()} Mobile Homes Inc. All rights reserved. Equal Housing Opportunity.
          </div>
          <div className="flex items-center space-x-1 text-cozy-400">
            <span>Crafted with pride for comfortable, accessible homeownership.</span>
          </div>
        </div>
      </div>

    </footer>
  );
};
