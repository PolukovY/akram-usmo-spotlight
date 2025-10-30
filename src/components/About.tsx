import { ChefHat } from "lucide-react";
import config from "@/config/website-config.json";

const About = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/20 mb-6">
            <ChefHat className="h-8 w-8 text-secondary" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            {config.about.title}
          </h2>
          
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            {config.about.description.map((paragraph: string, index: number) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
