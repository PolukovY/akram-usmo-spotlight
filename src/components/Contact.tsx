import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Instagram, MessageCircle } from "lucide-react";

const Contact = () => {

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Свяжитесь с нами
            </h2>
            <p className="text-lg text-muted-foreground">
              Готовы заказать незабываемое кулинарное событие?
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <Card className="bg-card border-border shadow-medium hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Instagram className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Instagram</h3>
                      <p className="text-muted-foreground mb-3">
                        Следите за нашими блюдами и акциями
                      </p>
                      <Button 
                        className="bg-accent hover:bg-accent/90 text-accent-foreground"
                        asChild
                      >
                        <a 
                          href="https://www.instagram.com/akram_usmo/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          Подписаться
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border shadow-medium hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">WhatsApp</h3>
                      <p className="text-muted-foreground mb-3">
                        Присоединяйтесь к нашему сообществу
                      </p>
                      <Button 
                        className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                        asChild
                      >
                        <a 
                          href="https://chat.whatsapp.com/L6DmLEXWU9MHkp55NVsoWy" 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          Присоединиться
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
          </div>

          <div className="mt-12 text-center">
            <Card className="bg-secondary/10 border-secondary/20 max-w-xl mx-auto">
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground">
                  📍 Обслуживаем Costa Blanca<br />
                  🥩 Магазин «Оазис» в Кальпе<br />
                  🚚 Доставка по всему региону
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
