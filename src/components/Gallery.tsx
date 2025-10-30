import { useState } from "react";
import config from "@/config/website-config.json";
import dish1 from "@/assets/dish1.jpg";
import dish2 from "@/assets/dish2.jpg";
import dish3 from "@/assets/dish3.jpg";
import dish4 from "@/assets/dish4.jpg";
import dish5 from "@/assets/dish5.jpg";
import dish6 from "@/assets/dish6.jpg";

const imageMap: Record<string, string> = {
  dish1,
  dish2,
  dish3,
  dish4,
  dish5,
  dish6
};

const Gallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            {config.gallery.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {config.gallery.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {config.gallery.dishes.map((dish: any, index: number) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-lg shadow-medium cursor-pointer group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={imageMap[dish.image]}
                alt={dish.name}
                className="w-full h-full object-cover transition-smooth group-hover:scale-110"
              />
              
              <div 
                className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6 transition-smooth ${
                  hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <h3 className="text-2xl font-bold text-white mb-2">
                  {dish.name}
                </h3>
                <p className="text-white/90">
                  {dish.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
