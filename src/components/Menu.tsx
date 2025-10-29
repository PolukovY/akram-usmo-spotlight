import { Card, CardContent } from "@/components/ui/card";

const menuItems = [
  { name: "Плов", price: "€12.00", icon: "🍚" },
  { name: "Самса", price: "€5.00", icon: "🥟" },
  { name: "Чебуреки", price: "€4.00", icon: "🥙" },
  { name: "Беляши (мясо)", price: "€2.50", icon: "🥩" },
  { name: "Беляши (картошка)", price: "€2.00", icon: "🥔" },
  { name: "Манты (1 шт.)", price: "€4.00", icon: "🥟" },
  { name: "Замороженные перцы, голубцы (1 кг)", price: "€20.00", icon: "🫑" },
  { name: "Осетрина (1 кг)", price: "€16.00", icon: "🐟" },
  { name: "Икра (250 г)", price: "€30.00", icon: "🥚" }
];

const Menu = () => {
  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Меню и цены
            </h2>
            <p className="text-lg text-muted-foreground">
              Аутентичные восточные блюда с доставкой
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {menuItems.map((item, index) => (
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
              💬 Для заказа свяжитесь с нами через WhatsApp или Instagram
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
