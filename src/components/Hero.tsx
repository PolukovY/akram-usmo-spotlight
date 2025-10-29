import { Button } from "@/components/ui/button";
import { Instagram, MessageCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 tracking-tight">
          Akram Usmo
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-8 font-light">
          ВЫЕЗДНОЙ ПОВАР • ИСПАНИЯ • ДОСТАВКА • PLOVBAR_COSTA
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
          <Button 
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white shadow-strong transition-smooth hover:scale-105 text-lg px-8"
            asChild
          >
            <a 
              href="https://www.instagram.com/akram_usmo/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Instagram className="h-5 w-5" />
              Instagram
            </a>
          </Button>
          
          <Button 
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-primary shadow-strong transition-smooth hover:scale-105 text-lg px-8"
            asChild
          >
            <a 
              href="https://chat.whatsapp.com/L6DmLEXWU9MHkp55NVsoWy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <MessageCircle className="h-5 w-5" />
              Join WhatsApp
            </a>
          </Button>
        </div>

        {/* Alternative languages (commented for easy switching) */}
        {/* 
        Spanish: CHEF A DOMICILIO • ESPAÑA • ENTREGA • PLOVBAR_COSTA
        English: PRIVATE CHEF • SPAIN • DELIVERY • PLOVBAR_COSTA
        */}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
