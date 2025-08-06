import { Category } from '@/types/business';
import { Card } from '@/components/ui/card';

interface CategoryCardProps {
  category: Category;
  onClick: (category: Category) => void;
}

const CategoryCard = ({ category, onClick }: CategoryCardProps) => {
  return (
    <Card 
      className="p-6 cursor-pointer hover:shadow-business transition-all duration-300 hover:scale-105 bg-card"
      onClick={() => onClick(category)}
    >
      <div className="text-center">
        <div className="text-4xl mb-3">{category.icon}</div>
        <h3 className="font-semibold text-card-foreground mb-2">{category.name}</h3>
        <p className="text-sm text-muted-foreground">{category.count} listings</p>
      </div>
    </Card>
  );
};

export default CategoryCard;