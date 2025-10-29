import { Card, CardContent } from "@/components/ui/card";
import { ChefHat, Truck, ShoppingBag, Utensils } from "lucide-react";

const services = [
  {
    icon: ChefHat,
    emoji: "👨🏽‍🍳",
    title: "Кейтеринг",
    description: "Профессиональное обслуживание мероприятий любого масштаба. От семейных праздников до корпоративных событий."
  },
  {
    icon: Truck,
    emoji: "🚚",
    title: "Доставка",
    description: "Свежие восточные блюда с доставкой по всей Costa Blanca. Быстро, вкусно, удобно."
  },
  {
    icon: ShoppingBag,
    emoji: "🥩",
    title: "Магазин «Оазис»",
    description: "Мясной магазин в Кальпе с отборным мясом высшего качества для приготовления настоящих восточных блюд."
  },
  {
    icon: Utensils,
    emoji: "🍚",
    title: "Плов-пикники",
    description: "Незабываемые кулинарные мероприятия на природе. Свежий плов, приготовленный на открытом огне."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Наши услуги
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Полный спектр кулинарных услуг для вашего удобства
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
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
