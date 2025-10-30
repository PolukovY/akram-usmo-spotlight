import { Card, CardContent } from "@/components/ui/card";
import config from "@/config/website-config.json";

const Menu = () => {
  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              {config.menu.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {config.menu.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {config.menu.items.map((item, index) => (
              <Card 
                key={index} 
                className="bg-card border-border shadow-medium hover-lift"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{item.icon}</span>
                      <h3 className="font-semibold text-lg text-foreground">
                        {item.name}
                      </h3>
                    </div>
                    <span className="text-xl font-bold text-accent">
                      {item.price}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground text-sm">
              {config.menu.footer}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
