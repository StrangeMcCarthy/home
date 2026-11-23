export type SectionType = 'Single-Wide' | 'Double-Wide' | 'Modular';
export type ArchitecturalStyle = 'Modern Farmhouse' | 'Rustic Cottage' | 'Craftsman Haven' | 'Southern Elegance' | 'Minimalist Lodge';

export interface FinishOption {
  id: string;
  name: string;
  colorOrPattern: string; // CSS color, gradient or thumbnail
  priceAdjustment: number;
}

export interface CustomizationCategory {
  id: string;
  categoryName: string;
  description: string;
  options: FinishOption[];
}

export interface HomeSpec {
  label: string;
  value: string;
  iconName?: string;
}

export interface HomeModel {
  id: string;
  name: string;
  tagline: string;
  sectionType: SectionType;
  price: number;
  startingEstMonthly: number;
  beds: number;
  baths: number;
  sqft: number;
  dimensions: string; // e.g. "28' x 60'"
  style: ArchitecturalStyle;
  description: string;
  highlights: string[];
  features: string[];
  specs: HomeSpec[];
  images: string[];
  floorPlanUrl: string;
  virtualTour3dUrl: string;
  isFeatured?: boolean;
  isBestSeller?: boolean;
  isTurnkeyReady?: boolean;
  customizations: CustomizationCategory[];
}

export interface RetailerStore {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  hours: string;
  rating: number;
  reviewsCount: number;
  image: string;
  modelsOnDisplay: string[]; // array of HomeModel names
  lat?: number;
  lng?: number;
  distanceMiles?: number;
}

export interface ResourceArticle {
  id: string;
  title: string;
  category: 'Buyer Guide' | 'Land Prep' | 'Design & Decor' | 'Financing';
  readTime: string;
  date: string;
  summary: string;
  content: string;
  image: string;
  author: string;
}

export interface CustomerReview {
  id: string;
  author: string;
  location: string;
  rating: number;
  homeModel: string;
  title: string;
  quote: string;
  avatarUrl: string;
  verified: boolean;
  purchaseYear: string;
}

export interface FilterState {
  sectionType: string; // 'All' | SectionType
  minPrice: number;
  maxPrice: number;
  minBeds: number;
  minBaths: number;
  minSqft: number;
  style: string; // 'All' | ArchitecturalStyle
  sortBy: 'featured' | 'price-asc' | 'price-desc' | 'sqft-desc' | 'beds-desc';
  searchQuery: string;
  selectedState: string;
}
