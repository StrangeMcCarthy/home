export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'Buying Process' | 'Customization & Delivery' | 'Warranty & Care' | 'Site & Land Prep';
}

export const FAQS_DATA: FaqItem[] = [
  {
    id: 'faq-4',
    question: 'I don’t have any land. Can you help me find some to put my home on?',
    answer: 'When we said we work hard to earn your business, we meant it! We have a number of local sources to help you find land within your area and coordinate land site preparation.',
    category: 'Site & Land Prep'
  },
  {
    id: 'faq-7',
    question: 'How long does the buying process take?',
    answer: 'For cash buyers purchasing a lot display model, transactions can take place in just a couple of hours. For custom factory-built homes, the timeline depends on current manufacturer build schedules.',
    category: 'Buying Process'
  },
  {
    id: 'faq-8',
    question: 'When can I expect my home to be delivered after purchase?',
    answer: 'If you purchase a lot display model and weather is cooperating, we can often deliver a home within days. For custom factory orders, construction and delivery usually take a few weeks to a couple of months.',
    category: 'Customization & Delivery'
  },
  {
    id: 'faq-9',
    question: 'If I order a home, what customization options are available?',
    answer: 'Each manufacturer provides different customization options. Most commonly, buyers can choose exterior Hardie siding colors, interior paint, cabinetry, granite/quartz countertops, flooring, appliances, wind zone packages, and porch additions.',
    category: 'Customization & Delivery'
  },
  {
    id: 'faq-10',
    question: 'Will my home come with a warranty?',
    answer: 'All new manufactured and modular home purchases come with a standard one-year manufacturer warranty. We also offer an extended 10-Year Structural Protection Warranty on all new homes.',
    category: 'Warranty & Care'
  },
  {
    id: 'faq-11',
    question: 'What comes with a home purchase?',
    answer: 'Did we mention we are turnkey? Purchase packages typically include the home, delivery, site installation, underpinning/skirting, and set of entry steps.',
    category: 'Buying Process'
  },
  {
    id: 'faq-12',
    question: 'Where do you deliver?',
    answer: 'To keep delivery costs affordable for you, we typically deliver throughout the state, neighboring states, or within 150 miles of our display center locations.',
    category: 'Customization & Delivery'
  },
  {
    id: 'faq-13',
    question: 'I live near the coastline. Do I need to consider Wind Zone type?',
    answer: 'Yes. Every manufactured home is built to Wind Zone 1, 2, or 3 specifications. If you live near the coastline, you will need to select a Zone 2 or 3 reinforced construction model.',
    category: 'Customization & Delivery'
  },
  {
    id: 'faq-14',
    question: 'I’m moving to a neighboring state. Should I contact a local dealership or one near my new area?',
    answer: 'You should contact the display center closest to your destination site. They can optimize transportation logistics and local site prep permits for lower overall costs.',
    category: 'Buying Process'
  },
  {
    id: 'faq-15',
    question: 'Do you sell modular homes?',
    answer: 'Yes. We carry a wide selection of full modular homes built to state and local building codes with in-depth structural customization options.',
    category: 'Buying Process'
  },
  {
    id: 'faq-16',
    question: 'Do you carry “Tiny” homes?',
    answer: 'While they share some compact characteristics, manufactured homes differ from tiny homes. We do not offer tiny travel trailers, but we carry compact, permanent 1-2 bed + 1 bath single-wide homes that offer a superior, durable alternative.',
    category: 'Buying Process'
  }
];
