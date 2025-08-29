import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollTo } from "@/hooks/use-scroll-to";

interface ServiceCardProps {
  title: string;
  description: string;
  price: number;
  image: string;
  imageAlt: string;
}

export function ServiceCard({ title, description, price, image, imageAlt }: ServiceCardProps) {
  const { scrollToSection } = useScrollTo();

  return (
    <Card className="card-hover" data-testid={`card-service-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <CardContent className="p-6">
        <img 
          src={image} 
          alt={imageAlt} 
          className="w-full h-48 object-cover rounded-lg mb-4" 
        />
        <h3 className="text-xl font-semibold mb-3 text-card-foreground" data-testid={`text-service-title-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          {title}
        </h3>
        <p className="text-muted-foreground mb-4" data-testid={`text-service-description-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          {description}
        </p>
        <div className="flex justify-between items-center mb-4">
          <span className="text-2xl font-bold text-primary" data-testid={`text-service-price-${title.toLowerCase().replace(/\s+/g, '-')}`}>
            ${price}
          </span>
          <span className="text-sm text-muted-foreground">Starting price</span>
        </div>
        <Button
          onClick={() => scrollToSection("contact")}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
          data-testid={`button-order-${title.toLowerCase().replace(/\s+/g, '-')}`}
        >
          Order Now
        </Button>
      </CardContent>
    </Card>
  );
}
