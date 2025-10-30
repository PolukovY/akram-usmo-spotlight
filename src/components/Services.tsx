import { Card, CardContent } from "@/components/ui/card";
import { ChefHat, Truck, ShoppingBag, Utensils, UtensilsCrossed, Users, Store } from "lucide-react";
import config from "@/config/website-config.json";

const iconMap: Record<string, any> = {
  ChefHat,
  Truck,
  ShoppingBag,
  Utensils,
  UtensilsCrossed,
  Users,
  Store
};

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Наші послуги
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Повний спектр кулінарних послуг для вашої зручності
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {config.services.map((service: any, index: number) => {
            const Icon = iconMap[service.icon];
            return (
              <Card 
                key={index} 
                className="hover-lift bg-card border-border group overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 mx-auto rounded-full bg-secondary/10 flex items-center justify-center transition-smooth group-hover:bg-secondary/20 group-hover:scale-110">
                      <span className="text-4xl">{service.emoji}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
