import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-bold font-serif">Akram Usmo</h3>
          <p className="text-primary-foreground/80">
            ВЫЕЗДНОЙ ПОВАР • ИСПАНИЯ • PLOVBAR_COSTA
          </p>
          
          <div className="flex justify-center gap-4 pt-4">
            <a
              href="https://www.instagram.com/akram_usmo/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
            >
              <Instagram className="h-5 w-5" />
              <span>Подписывайтесь в Instagram</span>
            </a>
          </div>
          
          <div className="pt-8 border-t border-primary-foreground/20 text-sm text-primary-foreground/60">
            <p>© {new Date().getFullYear()} Akram Usmo. Все права защищены.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
