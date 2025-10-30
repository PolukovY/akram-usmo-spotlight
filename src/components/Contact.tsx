import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Instagram, MessageCircle } from "lucide-react";
import config from "@/config/website-config.json";

const Contact = () => {

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              {config.contact.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {config.contact.subtitle}
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
                      <h3 className="font-bold text-lg mb-2">{config.contact.instagram.title}</h3>
                      <p className="text-muted-foreground mb-3">
                        {config.contact.instagram.description}
                      </p>
                      <Button 
                        className="bg-accent hover:bg-accent/90 text-accent-foreground"
                        asChild
                      >
                        <a 
                          href={config.contact.instagram.url}
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          {config.contact.instagram.buttonText}
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
                      <h3 className="font-bold text-lg mb-2">{config.contact.whatsapp.title}</h3>
                      <p className="text-muted-foreground mb-3">
                        {config.contact.whatsapp.description}
                      </p>
                      <Button 
                        className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                        asChild
                      >
                        <a 
                          href={config.contact.whatsapp.url}
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          {config.contact.whatsapp.buttonText}
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
                  {config.contact.location.lines.map((line, index) => (
                    <span key={index}>
                      {line}
                      {index < config.contact.location.lines.length - 1 && <br />}
                    </span>
                  ))}
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
