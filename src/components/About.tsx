import { ChefHat } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/20 mb-6">
            <ChefHat className="h-8 w-8 text-secondary" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            О шеф-поваре
          </h2>
          
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              🌴 <strong>Самые вкусные Восточные блюда</strong> на побережье Коста Бланка. 
              Я предлагаю аутентичную кухню с заботой о качестве каждого ингредиента.
            </p>
            
            <p>
              С многолетним опытом работы выездным поваром в Испании, я специализируюсь 
              на традиционных восточных блюдах — от ароматного плова до сочных шашлыков 
              и кебабов, приготовленных по семейным рецептам.
            </p>
            
            <p>
              Обслуживаю весь регион Коста Бланка, включая Кальпе, Альтею, Бениссу, 
              Морайру и окрестности. Каждое мероприятие — это возможность подарить 
              гостям незабываемые вкусовые впечатления.
            </p>
            
            <p className="text-2xl">
              😍 Довольные гости — моя лучшая награда!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
