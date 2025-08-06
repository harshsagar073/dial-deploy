import { Business, Category } from '@/types/business';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Restaurants',
    icon: '🍽️',
    count: 2847,
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=300&h=200&fit=crop'
  },
  {
    id: '2',
    name: 'Healthcare',
    icon: '🏥',
    count: 1523,
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=300&h=200&fit=crop'
  },
  {
    id: '3',
    name: 'Education',
    icon: '🎓',
    count: 934,
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=300&h=200&fit=crop'
  },
  {
    id: '4',
    name: 'Automotive',
    icon: '🚗',
    count: 756,
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=300&h=200&fit=crop'
  },
  {
    id: '5',
    name: 'Beauty & Spa',
    icon: '💄',
    count: 612,
    image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=300&h=200&fit=crop'
  },
  {
    id: '6',
    name: 'Home Services',
    icon: '🏠',
    count: 891,
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=200&fit=crop'
  },
  {
    id: '7',
    name: 'Shopping',
    icon: '🛍️',
    count: 1245,
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=200&fit=crop'
  },
  {
    id: '8',
    name: 'Travel',
    icon: '✈️',
    count: 423,
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=300&h=200&fit=crop'
  }
];

export const businesses: Business[] = [
  {
    id: '1',
    name: 'Pizza Palace',
    category: 'Restaurants',
    rating: 4.5,
    reviewCount: 1247,
    address: '123 Main Street, Downtown',
    phone: '+1 234 567 8900',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
    description: 'Best pizza in town with authentic Italian flavors and fresh ingredients.',
    isOpen: true,
    timing: '10:00 AM - 11:00 PM',
    services: ['Dine-in', 'Takeaway', 'Home Delivery'],
    verified: true
  },
  {
    id: '2',
    name: 'City General Hospital',
    category: 'Healthcare',
    rating: 4.2,
    reviewCount: 856,
    address: '456 Health Avenue, Medical District',
    phone: '+1 234 567 8901',
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=400&h=300&fit=crop',
    description: 'Multi-specialty hospital with 24/7 emergency services and experienced doctors.',
    isOpen: true,
    timing: '24/7',
    services: ['Emergency', 'Surgery', 'Consultation', 'Lab Tests'],
    verified: true
  },
  {
    id: '3',
    name: 'Elite Academy',
    category: 'Education',
    rating: 4.7,
    reviewCount: 432,
    address: '789 Education Road, Academic Zone',
    phone: '+1 234 567 8902',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop',
    description: 'Premier coaching institute for competitive exams with experienced faculty.',
    isOpen: true,
    timing: '9:00 AM - 9:00 PM',
    services: ['JEE Coaching', 'NEET Coaching', 'Online Classes', 'Test Series'],
    verified: true
  },
  {
    id: '4',
    name: 'AutoCare Service Center',
    category: 'Automotive',
    rating: 4.3,
    reviewCount: 678,
    address: '321 Motor Street, Industrial Area',
    phone: '+1 234 567 8903',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=300&fit=crop',
    description: 'Complete automotive solutions with genuine parts and skilled technicians.',
    isOpen: true,
    timing: '8:00 AM - 8:00 PM',
    services: ['Car Service', 'Oil Change', 'Tire Replacement', 'AC Repair'],
    verified: true
  },
  {
    id: '5',
    name: 'Glamour Beauty Salon',
    category: 'Beauty & Spa',
    rating: 4.6,
    reviewCount: 234,
    address: '654 Beauty Lane, Fashion District',
    phone: '+1 234 567 8904',
    image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=400&h=300&fit=crop',
    description: 'Premium beauty and wellness services with latest equipment and products.',
    isOpen: true,
    timing: '10:00 AM - 8:00 PM',
    services: ['Hair Styling', 'Facial', 'Manicure', 'Spa Treatments'],
    verified: true
  },
  {
    id: '6',
    name: 'QuickFix Home Services',
    category: 'Home Services',
    rating: 4.4,
    reviewCount: 567,
    address: '987 Service Street, Residential Area',
    phone: '+1 234 567 8905',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop',
    description: 'Reliable home repair and maintenance services for all your household needs.',
    isOpen: true,
    timing: '7:00 AM - 7:00 PM',
    services: ['Plumbing', 'Electrical', 'Cleaning', 'AC Service'],
    verified: true
  }
];