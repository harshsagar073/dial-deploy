import { Business } from '@/types/business';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, Phone, MapPin, Clock, Shield } from 'lucide-react';

interface BusinessCardProps {
  business: Business;
  onClick: (business: Business) => void;
}

const BusinessCard = ({ business, onClick }: BusinessCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-business transition-all duration-300 cursor-pointer">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-48 h-48 md:h-auto">
          <img
            src={business.image}
            alt={business.name}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="flex-1 p-6">
          <div className="flex justify-between items-start mb-2">
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-semibold text-card-foreground">{business.name}</h3>
              {business.verified && (
                <Shield className="w-4 h-4 text-success" />
              )}
            </div>
            <Badge 
              variant={business.isOpen ? "default" : "secondary"}
              className={business.isOpen ? "bg-success text-success-foreground" : ""}
            >
              {business.isOpen ? 'Open' : 'Closed'}
            </Badge>
          </div>
          
          <div className="flex items-center gap-1 mb-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(business.rating)
                      ? 'text-warning fill-current'
                      : 'text-muted-foreground'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm font-medium">{business.rating}</span>
            <span className="text-sm text-muted-foreground">({business.reviewCount} reviews)</span>
          </div>
          
          <p className="text-muted-foreground mb-3 text-sm">{business.description}</p>
          
          <div className="space-y-2 mb-4">
            <div className="flex items-center text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 mr-2" />
              {business.address}
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Clock className="w-4 h-4 mr-2" />
              {business.timing}
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {business.services.slice(0, 3).map((service, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {service}
              </Badge>
            ))}
            {business.services.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{business.services.length - 3} more
              </Badge>
            )}
          </div>
          
          <div className="flex gap-3">
            <Button 
              onClick={(e) => {
                e.stopPropagation();
                window.open(`tel:${business.phone}`, '_self');
              }}
              variant="outline" 
              size="sm"
              className="flex-1"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call
            </Button>
            <Button 
              onClick={() => onClick(business)}
              className="flex-1 bg-gradient-primary hover:bg-primary-hover"
              size="sm"
            >
              View Details
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default BusinessCard;