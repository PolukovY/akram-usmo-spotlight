import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Мария С.",
    text: "Заказывали кейтеринг на семейный праздник. Все гости в восторге! Плов был невероятно вкусным, а шашлык просто тает во рту. Спасибо!",
    rating: 5
  },
  {
    name: "Хуан Р.",
    text: "Mejor chef de cocina oriental en Costa Blanca. El pilaf es auténtico y delicioso. Servicio profesional y amable.",
    rating: 5
  },
  {
    name: "Elena K.",
    text: "Регулярно заказываем доставку. Всегда свежее, всегда вкусно, всегда вовремя. Рекомендую магазин Оазис — отличное мясо!",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            😍 Довольные гости
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Что говорят наши клиенты
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="hover-lift bg-background border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <p className="font-semibold text-foreground">
                  — {testimonial.name}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
