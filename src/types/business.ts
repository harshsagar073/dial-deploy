export interface Business {
  id: string;
  name: string;
  category: string;
  rating: number;
  reviewCount: number;
  address: string;
  phone: string;
  image: string;
  description: string;
  isOpen: boolean;
  timing: string;
  services: string[];
  verified: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
  image: string;
}