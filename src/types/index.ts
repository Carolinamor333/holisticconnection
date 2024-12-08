export interface Coach {
  id: string;
  name: string;
  title: string;
  specializations: string[];
  rating: number;
  reviewCount: number;
  hourlyRate: number;
  imageUrl: string;
  location: string;
  description: string;
  education: string[];
  languages: string[];
  insuranceAccepted: string[];
  verifiedCredentials: boolean;
  nextAvailable: string;
  availability?: {
    [key: string]: string[];
  };
  reviews: Review[];
}

export interface SearchFilters {
  specialization: string;
  priceRange: [number, number];
  location: string;
  availability: string;
  insurance: string;
  language: string;
  rating: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'client' | 'coach' | 'admin';
  profileImage?: string;
  insurance?: string;
  preferredLanguages?: string[];
}

export interface BookingSlot {
  date: string;
  time: string;
  duration: number;
  type: 'online' | 'in-person';
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
  visitReason?: string;
  waitTime?: string;
  bedsideManner?: number;
}