import React from 'react';
import { Home, ShieldCheck, Sun, Sparkles, Wrench, Truck, HeartHandshake } from 'lucide-react';

export const OurDifference: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Shop & Explore',
      desc: 'Browse 40+ customizable floor plans online or walk through fully furnished model displays at our retail locations.',
      icon: Home,
    },
    {
      step: '02',
      title: 'Personalize & Design',
      desc: 'Pick your exterior Hardie board colors, solid shaker cabinets, quartz countertops, and front porch additions.',
      icon: Sparkles,
    },
    {
      step: '03',
      title: 'Site Prep & Permitting',
      desc: 'We assist with land leveling guidance, utility hookup planning, foundation support, and local zoning permits.',
      icon: Wrench,
    },
    {
      step: '04',
      title: 'Turnkey Move-In',
      desc: 'Schedule precision factory delivery, final setup inspection, and receive your keys with 10-year protection.',
      icon: Truck,
    },
  ];

  const pillars = [
    {
      icon: ShieldCheck,
      title: '100% Climate-Controlled Build',
      desc: 'Built in state-of-the-art indoor facilities where lumber stays bone-dry and precision lasers guarantee square walls.',
    },
    {
      icon: Sun,
      title: 'Energy Star® Efficiency',
      desc: 'Heavy R-30 roof insulation and Low-E argon thermal windows save families an average of $1,200+ annually on utilities.',
    },
    {
      icon: Wrench,
      title: '10-Year Extended Warranty',
      desc: 'Sleep soundly knowing your roof, chassis, plumbing, and structural framing are backed by our dedicated service network.',
    },
    {
      icon: HeartHandshake,
      title: 'Transparent Factory Pricing',
      desc: 'No hidden surprise fees. What we quote is what you pay—bringing true affordable luxury to pre-made housing.',
    },
  ];

  return (
    <section id="difference" className="py-20 bg-cozy-100/60 border-y border-cozy-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-cozy-900">
            A Simpler, Better Way to Own a Home
          </h2>
          <p className="text-cozy-600 text-sm sm:text-base leading-relaxed">
            We believe buying a manufactured or modular home should be a delightful, reassuring experience. Here is how we ensure your home is built for generations of comfort.
          </p>
        </div>

        {/* 4-Step Homeowner Journey */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 border border-cozy-200/90 shadow-cozy hover:shadow-cozy-lg transition-all space-y-4 relative group"
              >
                <div className="flex justify-between items-center">
                  <span className="text-3xl font-serif font-bold text-hearth-300 group-hover:text-hearth-600 transition-colors">
                    {item.step}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-cozy-100 text-hearth-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                <h3 className="font-serif text-lg font-bold text-cozy-900">{item.title}</h3>
                <p className="text-cozy-600 text-xs leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* 4 Pillars Grid */}
        <div className="bg-cozy-900 text-white rounded-3xl p-8 sm:p-12 shadow-cozy-lg space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-hearth-200">
              Built with Precision • Backed with Integrity
            </h3>
            <p className="text-cozy-200 text-xs sm:text-sm">
              Our factory craftsmen take pride in every joint, seam, and finish.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div key={i} className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-hearth-500/20 text-hearth-400 flex items-center justify-center border border-hearth-400/30">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif font-bold text-base text-white">{pillar.title}</h4>
                  <p className="text-cozy-300 text-xs leading-relaxed">{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
