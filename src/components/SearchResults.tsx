import { Business } from '@/types/business';
import BusinessCard from './BusinessCard';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Filter, SortAsc } from 'lucide-react';

interface SearchResultsProps {
  businesses: Business[];
  searchQuery: string;
  location: string;
  onBusinessClick: (business: Business) => void;
}

const SearchResults = ({ businesses, searchQuery, location, onBusinessClick }: SearchResultsProps) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">
          Search Results {searchQuery && `for "${searchQuery}"`}
        </h2>
        {location && (
          <p className="text-muted-foreground">in {location}</p>
        )}
        <p className="text-sm text-muted-foreground mt-2">
          Found {businesses.length} results
        </p>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-80">
          <Card className="p-4 sticky top-24">
            <h3 className="font-semibold mb-4">Filters</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium mb-2">Rating</h4>
                <div className="space-y-2">
                  {['4+ Stars', '3+ Stars', '2+ Stars'].map((rating) => (
                    <label key={rating} className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">{rating}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium mb-2">Distance</h4>
                <div className="space-y-2">
                  {['Within 1 km', 'Within 5 km', 'Within 10 km'].map((distance) => (
                    <label key={distance} className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">{distance}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium mb-2">Open Now</h4>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">Show only open businesses</span>
                </label>
              </div>
              
              <Button variant="outline" className="w-full">
                <Filter className="w-4 h-4 mr-2" />
                Apply Filters
              </Button>
            </div>
          </Card>
        </div>
        
        <div className="flex-1">
          <div className="flex justify-between items-center mb-4">
            <div className="text-sm text-muted-foreground">
              Showing {businesses.length} businesses
            </div>
            <Button variant="outline" size="sm">
              <SortAsc className="w-4 h-4 mr-2" />
              Sort by Rating
            </Button>
          </div>
          
          <div className="space-y-4">
            {businesses.map((business) => (
              <BusinessCard
                key={business.id}
                business={business}
                onClick={onBusinessClick}
              />
            ))}
          </div>
          
          {businesses.length === 0 && (
            <Card className="p-8 text-center">
              <h3 className="text-lg font-semibold mb-2">No results found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search criteria or location
              </p>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;