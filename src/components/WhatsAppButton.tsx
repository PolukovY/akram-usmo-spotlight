import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  return (
    <a
      href="https://chat.whatsapp.com/L6DmLEXWU9MHkp55NVsoWy"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 animate-scale-in"
    >
      <Button
        size="lg"
        className="rounded-full w-14 h-14 shadow-strong bg-secondary hover:bg-secondary/90 transition-bounce hover:scale-110"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </a>
  );
};

export default WhatsAppButton;
