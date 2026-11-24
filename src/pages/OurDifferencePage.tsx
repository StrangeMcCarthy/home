import React from 'react';
import { OurDifference } from '../components/OurDifference';
import { CheckCircle2 } from 'lucide-react';
import { RoutePath } from '../router/useRouter';

interface OurDifferencePageProps {
  onNavigate: (path: RoutePath) => void;
  onOpenQuoteModal: () => void;
}

export const OurDifferencePage: React.FC<OurDifferencePageProps> = ({
  onNavigate,
  onOpenQuoteModal,
}) => {
  const comparisonMatrix = [
    { feature: 'Building Environment', factory: '100% Indoor Climate-Controlled Facility', traditional: 'Outdoor Jobsite Exposed to Rain & Humidity' },
    { feature: 'Framing Precision', factory: 'Computerized Laser Jig Alignment', traditional: 'Manual Hand-Framing on Uneven Dirt' },
    { feature: 'Build Timeline', factory: '2 to 4 Weeks Total Production Time', traditional: '6 to 12 Months Subject to Weather Delays' },
    { feature: 'Material Waste', factory: '< 5% Waste (Bulk Reused Materials)', traditional: '30%+ Dumpster Waste & Weather Damage' },
    { feature: 'Energy Efficiency', factory: 'Standard Energy Star® Envelope (R-30 Roof)', traditional: 'Varies Widely Depending on Contractor' },
    { feature: 'Structural Warranty', factory: '10-Year Full Extended Structural Protection', traditional: 'Typically 1-Year Builder Limited Warranty' },
  ];

  return (
    <div className="space-y-16 pb-16">

      {/* Page Header */}
      <div className="bg-gradient-to-r from-cozy-900 via-hearth-950 to-cozy-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-4 text-center md:text-left">
          <div className="flex justify-center md:justify-start items-center space-x-2 text-xs font-semibold text-hearth-300">
            <button onClick={() => onNavigate('home')} className="hover:underline">Home</button>
            <span>/</span>
            <span className="text-white">Our Difference</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            The Mobile Homes Craftsmanship Difference
          </h1>

          <p className="text-cozy-200 text-sm sm:text-base max-w-2xl leading-relaxed">
            Discover why climate-controlled factory precision delivers stronger frames, dry lumber, faster move-in timelines, and unbeatable energy savings.
          </p>
        </div>
      </div>

      {/* Main 4-Step Journey Section */}
      <OurDifference />

      {/* Factory vs Traditional Comparison Matrix */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="font-serif text-3xl font-bold text-cozy-900">
            Factory Precision vs. Traditional Site Construction
          </h2>
          <p className="text-cozy-600 text-sm">
            See how precision pre-made construction outperforms traditional outdoor site-built methods across every category.
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-cozy-200 shadow-cozy overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-cozy-900 text-white text-xs uppercase tracking-wider font-serif">
                  <th className="py-4 px-6 font-bold">Construction Metric</th>
                  <th className="py-4 px-6 font-bold text-hearth-300">Mobile Homes Factory Build</th>
                  <th className="py-4 px-6 font-bold text-cozy-300">Traditional Site-Built</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-cozy-100 text-xs text-cozy-800">
                {comparisonMatrix.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-cozy-50/50' : 'bg-white'}>
                    <td className="py-4 px-6 font-bold text-cozy-900">{row.feature}</td>
                    <td className="py-4 px-6 font-semibold text-hearth-700 bg-hearth-50/40 flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-hearth-600 flex-shrink-0" />
                      <span>{row.factory}</span>
                    </td>
                    <td className="py-4 px-6 text-cozy-600">{row.traditional}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-cozy-900 text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-cozy-lg">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-hearth-200">
            Ready to Find Your New Home?
          </h3>
          <p className="text-cozy-300 text-xs sm:text-sm max-w-xl mx-auto">
            Explore our customizable floor plans or speak with a housing consultant today for a free itemized quote.
          </p>
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => onNavigate('homes')}
              className="bg-hearth-600 hover:bg-hearth-700 text-white text-xs sm:text-sm font-bold py-3.5 px-6 rounded-xl shadow transition-colors"
            >
              Browse Home Catalog
            </button>
            <button
              onClick={onOpenQuoteModal}
              className="bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold py-3.5 px-6 rounded-xl border border-white/20 transition-colors"
            >
              Request Custom Quote
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
