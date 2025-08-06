import { useState } from 'react';
import Header from '@/components/Header';
import CategoryCard from '@/components/CategoryCard';
import BusinessCard from '@/components/BusinessCard';
import BusinessDetail from '@/components/BusinessDetail';
import SearchResults from '@/components/SearchResults';
import { categories, businesses } from '@/data/mockData';
import { Business, Category } from '@/types/business';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, Users, Shield, Clock } from 'lucide-react';

const Index = () => {
  const [currentView, setCurrentView] = useState<'home' | 'search' | 'category'>('home');
  const [selectedBusiness, setSelectedBusiness] = useState<Business | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  const [filteredBusinesses, setFilteredBusinesses] = useState<Business[]>([]);

  const handleSearch = (query: string, location: string) => {
    setSearchQuery(query);
    setSearchLocation(location);
    
    const filtered = businesses.filter(business => 
      business.name.toLowerCase().includes(query.toLowerCase()) ||
      business.category.toLowerCase().includes(query.toLowerCase()) ||
      business.description.toLowerCase().includes(query.toLowerCase())
    );
    
    setFilteredBusinesses(filtered);
    setCurrentView('search');
  };

  const handleCategoryClick = (category: Category) => {
    const filtered = businesses.filter(business => 
      business.category === category.name
    );
    setFilteredBusinesses(filtered);
    setSearchQuery(category.name);
    setCurrentView('category');
  };

  const handleBusinessClick = (business: Business) => {
    setSelectedBusiness(business);
  };

  const renderHome = () => (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Find Local Businesses Near You
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Discover the best restaurants, services, and businesses in your area
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <div className="flex items-center">
              <Users className="w-5 h-5 mr-2" />
              2M+ Users Trust Us
            </div>
            <div className="flex items-center">
              <Shield className="w-5 h-5 mr-2" />
              Verified Businesses
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              Real-time Updates
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Popular Categories</h2>
            <p className="text-muted-foreground">Browse businesses by category</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                onClick={handleCategoryClick}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Businesses */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Businesses</h2>
            <p className="text-muted-foreground">Top-rated businesses in your area</p>
          </div>
          
          <div className="space-y-6">
            {businesses.slice(0, 3).map((business) => (
              <BusinessCard
                key={business.id}
                business={business}
                onClick={handleBusinessClick}
              />
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button 
              onClick={() => handleSearch('', '')}
              variant="outline" 
              size="lg"
            >
              View All Businesses
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <Card className="p-6">
              <TrendingUp className="w-8 h-8 mx-auto mb-3 text-primary" />
              <h3 className="text-2xl font-bold mb-2">10,000+</h3>
              <p className="text-muted-foreground">Listed Businesses</p>
            </Card>
            <Card className="p-6">
              <Users className="w-8 h-8 mx-auto mb-3 text-primary" />
              <h3 className="text-2xl font-bold mb-2">2M+</h3>
              <p className="text-muted-foreground">Happy Users</p>
            </Card>
            <Card className="p-6">
              <Shield className="w-8 h-8 mx-auto mb-3 text-primary" />
              <h3 className="text-2xl font-bold mb-2">98%</h3>
              <p className="text-muted-foreground">Verified Listings</p>
            </Card>
            <Card className="p-6">
              <Clock className="w-8 h-8 mx-auto mb-3 text-primary" />
              <h3 className="text-2xl font-bold mb-2">24/7</h3>
              <p className="text-muted-foreground">Customer Support</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header onSearch={handleSearch} />
      
      {currentView === 'home' && renderHome()}
      
      {(currentView === 'search' || currentView === 'category') && (
        <SearchResults
          businesses={filteredBusinesses}
          searchQuery={searchQuery}
          location={searchLocation}
          onBusinessClick={handleBusinessClick}
        />
      )}
      
      {selectedBusiness && (
        <BusinessDetail
          business={selectedBusiness}
          onClose={() => setSelectedBusiness(null)}
        />
      )}
    </div>
  );
};

export default Index;
