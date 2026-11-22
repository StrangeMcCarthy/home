import React, { useState } from 'react';
import { X, FileText, CheckCircle2, User, Phone, Mail, MapPin, DollarSign } from 'lucide-react';
import { HomeModel } from '../types/home';
import { INITIAL_HOMES } from '../data/homesData';

interface QuoteRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedHome?: HomeModel | null;
}

export const QuoteRequestModal: React.FC<QuoteRequestModalProps> = ({
  isOpen,
  onClose,
  selectedHome,
}) => {
  if (!isOpen) return null;

  const [homeId, setHomeId] = useState<string>(selectedHome ? selectedHome.id : INITIAL_HOMES[0].id);
  const [landStatus, setLandStatus] = useState<string>('Own Land');
  const [stateLoc, setStateLoc] = useState<string>('Mississippi');
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [timeline, setTimeline] = useState<string>('1-3 Months');
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  const homeObj = INITIAL_HOMES.find((h) => h.id === homeId) || INITIAL_HOMES[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-cozy-950/70 backdrop-blur-md animate-fade-in">
      <div className="bg-white w-full max-w-lg rounded-3xl shadow-cozy-lg border border-cozy-200 overflow-hidden my-auto">

        {/* Header */}
        <div className="bg-hearth-900 text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <FileText className="w-5 h-5 text-hearth-400" />
            <h3 className="font-serif text-lg font-bold">Request a Personalized Quote</h3>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-full hover:bg-hearth-800 text-hearth-200">
            <X className="w-5 h-5" />
          </button>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">

            <div className="space-y-1">
              <label className="text-xs font-bold text-cozy-700">Selected Home Model</label>
              <select
                value={homeId}
                onChange={(e) => setHomeId(e.target.value)}
                className="w-full bg-cozy-50 border border-cozy-300 rounded-xl px-3 py-2.5 text-xs font-semibold text-cozy-900 outline-none"
              >
                {INITIAL_HOMES.map((h) => (
                  <option key={h.id} value={h.id}>
                    {h.name} ({h.sectionType} - ${h.price.toLocaleString()})
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-xs font-bold text-cozy-700">Land Status</label>
                <select
                  value={landStatus}
                  onChange={(e) => setLandStatus(e.target.value)}
                  className="w-full bg-cozy-50 border border-cozy-300 rounded-xl px-3 py-2 text-xs font-semibold text-cozy-900 outline-none"
                >
                  <option value="Own Land">Own Land Already</option>
                  <option value="Buying Land">Currently Shopping for Land</option>
                  <option value="Leased Park">Placing in Planned Community</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-cozy-700">Delivery State</label>
                <select
                  value={stateLoc}
                  onChange={(e) => setStateLoc(e.target.value)}
                  className="w-full bg-cozy-50 border border-cozy-300 rounded-xl px-3 py-2 text-xs font-semibold text-cozy-900 outline-none"
                >
                  <option value="Mississippi">Mississippi</option>
                  <option value="Alabama">Alabama</option>
                  <option value="Tennessee">Tennessee</option>
                  <option value="Georgia">Georgia</option>
                  <option value="Louisiana">Louisiana</option>
                  <option value="Florida">Florida</option>
                </select>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-cozy-700">Full Name</label>
              <input
                type="text"
                placeholder="e.g. Thomas Sterling"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-cozy-50 border border-cozy-300 rounded-xl px-3.5 py-2.5 text-xs text-cozy-900 outline-none"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-xs font-bold text-cozy-700">Phone</label>
                <input
                  type="tel"
                  placeholder="(555) 000-0000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-cozy-50 border border-cozy-300 rounded-xl px-3 py-2.5 text-xs text-cozy-900 outline-none"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-cozy-700">Email</label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-cozy-50 border border-cozy-300 rounded-xl px-3 py-2.5 text-xs text-cozy-900 outline-none"
                  required
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-cozy-700">Target Move-In Timeline</label>
              <select
                value={timeline}
                onChange={(e) => setTimeline(e.target.value)}
                className="w-full bg-cozy-50 border border-cozy-300 rounded-xl px-3 py-2 text-xs font-semibold text-cozy-900 outline-none"
              >
                <option value="Immediate">ASAP (Next 30 Days)</option>
                <option value="1-3 Months">1 to 3 Months</option>
                <option value="3-6 Months">3 to 6 Months</option>
                <option value="Planning">Just Researching</option>
              </select>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-hearth-600 hover:bg-hearth-700 text-white font-bold py-3 rounded-xl shadow text-xs transition-colors"
              >
                Send Me My Custom Quote Package
              </button>
            </div>
          </form>
        ) : (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-hearth-100 text-hearth-700 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="font-serif text-2xl font-bold text-cozy-900">Quote Request Received!</h4>
            <p className="text-xs text-cozy-600 leading-relaxed max-w-sm mx-auto">
              Thank you, <strong>{name}</strong>! We are preparing an itemized pricing breakdown for <strong>{homeObj.name}</strong> including delivery, site setup estimates, and current factory incentive discounts.
            </p>
            <div className="bg-cozy-50 p-3 rounded-xl text-xs text-cozy-700 border border-cozy-200">
              We’ve emailed a confirmation summary to <strong>{email}</strong>.
            </div>
            <button
              onClick={handleReset}
              className="bg-cozy-900 text-white text-xs font-bold py-2.5 px-6 rounded-xl"
            >
              Back to Browsing
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
