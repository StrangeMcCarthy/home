import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Search, Phone } from 'lucide-react';
import { FAQS_DATA } from '../data/faqsData';
import { RoutePath } from '../router/useRouter';

interface FaqsPageProps {
  onNavigate: (path: RoutePath) => void;
  onOpenQuoteModal: () => void;
}

export const FaqsPage: React.FC<FaqsPageProps> = ({ onNavigate, onOpenQuoteModal }) => {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-7');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Buying Process', 'Customization & Delivery', 'Warranty & Care', 'Site & Land Prep'];

  const filteredFaqs = FAQS_DATA.filter((faq) => {
    const matchesCat = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesSearch =
      !searchQuery ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="space-y-12 pb-16">

      {/* Page Header */}
      <div className="bg-gradient-to-r from-cozy-900 via-hearth-950 to-cozy-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-4 text-center md:text-left">
          <div className="flex justify-center md:justify-start items-center space-x-2 text-xs font-semibold text-hearth-300">
            <button onClick={() => onNavigate('home')} className="hover:underline">Home</button>
            <span>/</span>
            <span className="text-white">FAQs</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Frequently Asked Questions
          </h1>

          <p className="text-cozy-200 text-sm sm:text-base max-w-2xl leading-relaxed">
            Everything you need to know about site preparation, warranties, custom floor plan options, and home delivery.
          </p>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

        {/* Search & Category Filter Bar */}
        <div className="bg-white rounded-3xl p-6 border border-cozy-200 shadow-cozy space-y-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search FAQ questions or topic keywords (e.g. land, delivery, warranty)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-cozy-50 border border-cozy-300 rounded-xl pl-10 pr-4 py-3 text-sm text-cozy-900 placeholder-cozy-400 focus:ring-2 focus:ring-hearth-500 outline-none"
            />
            <Search className="w-4 h-4 text-cozy-400 absolute left-3.5 top-3.5" />
          </div>

          <div className="flex items-center space-x-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-hearth-600 text-white shadow'
                    : 'bg-cozy-100 text-cozy-700 hover:bg-cozy-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQs Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl border border-cozy-200/90 shadow-sm overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-5 text-left flex justify-between items-center space-x-4 hover:bg-cozy-50/50 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <HelpCircle className="w-5 h-5 text-hearth-600 flex-shrink-0" />
                      <span className="font-serif font-bold text-base text-cozy-900">{faq.question}</span>
                    </div>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-hearth-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-cozy-400 flex-shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-cozy-700 text-sm leading-relaxed border-t border-cozy-100 bg-cozy-50/30 animate-fade-in pl-12">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="bg-white rounded-3xl p-12 text-center border border-cozy-200 space-y-3">
              <HelpCircle className="w-12 h-12 text-cozy-300 mx-auto" />
              <h3 className="font-serif text-lg font-bold text-cozy-900">No matching questions found</h3>
              <p className="text-xs text-cozy-600">Try searching with a different keyword or select "All".</p>
            </div>
          )}
        </div>

        {/* Still Have Questions Banner */}
        <div className="bg-cozy-900 text-white rounded-3xl p-8 flex flex-col sm:flex-row justify-between items-center gap-6 shadow-cozy-lg">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-serif text-2xl font-bold text-hearth-200">Have a Specific Question?</h3>
            <p className="text-xs text-cozy-300">
              Our regional housing specialists are available to guide you through site preparation and floor plan selection.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="tel:18005554327"
              className="bg-hearth-600 hover:bg-hearth-700 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl shadow transition-colors flex items-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>(800) 555-HEARTH</span>
            </a>
            <button
              onClick={onOpenQuoteModal}
              className="bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl border border-white/20 transition-colors"
            >
              Ask a Specialist
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
