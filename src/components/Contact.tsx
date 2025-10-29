import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Instagram, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Имя обязательно").max(100),
  contact: z.string().trim().min(1, "Контакт обязателен").max(255),
  eventDate: z.string().trim().min(1, "Дата события обязательна"),
  message: z.string().trim().min(1, "Сообщение обязательно").max(1000)
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    eventDate: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      contactSchema.parse(formData);
      
      const whatsappMessage = encodeURIComponent(
        `Здравствуйте! Меня зовут ${formData.name}.\n\nКонтакт: ${formData.contact}\nДата события: ${formData.eventDate}\n\nСообщение: ${formData.message}`
      );
      
      window.open(
        `https://wa.me/34${formData.contact.replace(/\D/g, '')}?text=${whatsappMessage}`,
        '_blank'
      );
      
      toast({
        title: "Отлично!",
        description: "Перенаправляем вас в WhatsApp для завершения заказа.",
      });
      
      setFormData({ name: "", contact: "", eventDate: "", message: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Ошибка",
          description: error.errors[0].message,
          variant: "destructive"
        });
      }
    }
  };

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

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card border-border shadow-medium">
              <CardHeader>
                <CardTitle className="text-2xl">Форма заказа</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-background border-input"
                      maxLength={100}
                    />
                  </div>
                  
                  <div>
                    <Input
                      placeholder="Телефон или Email"
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      className="bg-background border-input"
                      maxLength={255}
                    />
                  </div>
                  
                  <div>
                    <Input
                      type="date"
                      placeholder="Дата события"
                      value={formData.eventDate}
                      onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                      className="bg-background border-input"
                    />
                  </div>
                  
                  <div>
                    <Textarea
                      placeholder="Расскажите о вашем мероприятии..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-background border-input min-h-[120px]"
                      maxLength={1000}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-accent hover:bg-accent/90 text-white transition-smooth"
                    size="lg"
                  >
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
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
                        variant="outline" 
                        className="border-accent text-accent hover:bg-accent hover:text-white"
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
                        variant="outline" 
                        className="border-secondary text-secondary hover:bg-secondary hover:text-white"
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

              <Card className="bg-secondary/10 border-secondary/20">
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground text-center">
                    📍 Обслуживаем Costa Blanca<br />
                    🥩 Магазин «Оазис» в Кальпе<br />
                    🚚 Доставка по всему региону
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
