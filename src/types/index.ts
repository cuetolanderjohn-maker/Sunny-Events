export type SupplierCategory =
  | 'all'
  | 'catering'
  | 'styling'
  | 'photo-video'
  | 'host-entertainment'
  | 'cakes-sweets'
  | 'food-carts'
  | 'activities-rentals'
  | 'venues';

export interface Supplier {
  id: string;
  name: string;
  category: SupplierCategory;
  specialty: string;
  sampleEvents: string[];
  featured?: boolean;
  notes?: string;
  imageUrl?: string;
  facebookUrl?: string;
  verifiedCoordinated?: boolean;
}

export type PartyTypeCategory =
  | 'all'
  | '1st-birthday'
  | '7th-birthday'
  | 'kids-party'
  | 'baptism-dedication'
  | 'adult-milestone'
  | 'wedding'
  | 'corporate';

export interface EventSupplierCredit {
  role: string;
  name: string;
}

export interface EventCelebration {
  id: string;
  title: string;
  celebrant: string;
  category: PartyTypeCategory;
  milestone: string;
  venue: string;
  locationArea: string;
  theme?: string;
  itemCount: number;
  highlightDescription: string;
  suppliers: EventSupplierCredit[];
  featured?: boolean;
  imageUrl?: string;
  albumUrl?: string;
  date?: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  relationship: string;
  event: string;
  date: string;
  rating: number;
  quote: string;
  highlightTag: string;
  verified: boolean;
}

export interface InquiryFormData {
  fullName: string;
  email: string;
  phone: string;
  eventType: string;
  targetDate: string;
  venueOrCity: string;
  estimatedGuests: string;
  selectedServices: string[];
  notes: string;
}
