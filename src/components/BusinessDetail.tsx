import { Business } from '@/types/business';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Star, 
  Phone, 
  MapPin, 
  Clock, 
  Shield, 
  X, 
  Globe,
  Mail,
  Share,
  Heart
} from 'lucide-react';

interface BusinessDetailProps {
  business: Business;
  onClose: () => void;
}

const BusinessDetail = ({ business, onClose }: BusinessDetailProps) => {
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <Button
            onClick={onClose}
            variant="ghost"
            size="sm"
            className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white"
          >
            <X className="w-4 h-4" />
          </Button>
          
          <div className="h-64 relative">
            <img
              src={business.image}
              alt={business.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <div className="flex items-center gap-2 mb-2">
                <h1 className="text-3xl font-bold">{business.name}</h1>
                {business.verified && (
                  <Shield className="w-6 h-6 text-success" />
                )}
              </div>
              <Badge 
                variant={business.isOpen ? "default" : "secondary"}
                className={business.isOpen ? "bg-success text-success-foreground" : ""}
              >
                {business.isOpen ? 'Open Now' : 'Closed'}
              </Badge>
            </div>
          </div>
          
          <div className="p-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <div className="flex items-center gap-1 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(business.rating)
                            ? 'text-warning fill-current'
                            : 'text-muted-foreground'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-lg font-medium">{business.rating}</span>
                  <span className="text-muted-foreground">({business.reviewCount} reviews)</span>
                </div>
                
                <p className="text-muted-foreground mb-6">{business.description}</p>
                
                <div className="space-y-4 mb-6">
                  <h3 className="text-lg font-semibold">Contact Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="w-5 h-5 mr-3" />
                      {business.address}
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Phone className="w-5 h-5 mr-3" />
                      {business.phone}
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="w-5 h-5 mr-3" />
                      {business.timing}
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Services</h3>
                  <div className="flex flex-wrap gap-2">
                    {business.services.map((service, index) => (
                      <Badge key={index} variant="secondary">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <Card className="p-4">
                  <h3 className="font-semibold mb-3">Quick Actions</h3>
                  <div className="space-y-2">
                    <Button 
                      onClick={() => window.open(`tel:${business.phone}`, '_self')}
                      className="w-full bg-gradient-primary hover:bg-primary-hover"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </Button>
                    <Button variant="outline" className="w-full">
                      <MapPin className="w-4 h-4 mr-2" />
                      Get Directions
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Globe className="w-4 h-4 mr-2" />
                      Visit Website
                    </Button>
                  </div>
                </Card>
                
                <Card className="p-4">
                  <h3 className="font-semibold mb-3">Share & Save</h3>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full">
                      <Share className="w-4 h-4 mr-2" />
                      Share
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Heart className="w-4 h-4 mr-2" />
                      Save to Favorites
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Mail className="w-4 h-4 mr-2" />
                      Send to Email
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default BusinessDetail;