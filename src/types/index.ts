export interface TeamMember {
  id: string;
  name: string;
  role: string;
  photo: string;
  bio: string;
  certifications?: string[];
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  quote?: string;
  videoId?: string;
  photo?: string;
}

export interface Service {
  id: string;
  name: string;
  tagline: string;
  shortDescription: string;
  href: string;
  image: string;
  benefits: ServiceBenefit[];
}

export interface ServiceBenefit {
  title: string;
  description: string;
}

export interface Location {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  lat: number;
  lng: number;
  placeId: string;
  mapEmbedUrl: string;
  directionsUrl: string;
  mapUrl: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface GoogleReview {
  authorName: string;
  authorPhotoUrl: string | null;
  rating: number;
  text: string;
  relativeTime: string;
  locationName: string;
}

export interface LocationReviewData {
  locationName: string;
  rating: number;
  totalReviews: number;
  reviews: GoogleReview[];
}
