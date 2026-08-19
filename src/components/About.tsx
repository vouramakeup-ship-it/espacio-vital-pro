import { Card } from "@/components/ui/card";
import { GraduationCap, Heart, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Formación Profesional",
      description: "Psicología con especialización en terapia cognitivo-conductual",
    },
    {
      icon: Heart,
      title: "Enfoque Humanista",
      description: "Terapia centrada en la persona, con empatía y respeto hacia tu proceso",
    },
    {
      icon: Users,
      title: "Experiencia Comprobada",
      description: "Más de 5 años ayudando a personas a superar sus desafíos emocionales",
    },
  ];

  return (
    <section id="sobre-mi" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Sobre Mí
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8" />
            <p className="text-xl text-muted-foreground leading-relaxed">
              Soy psicóloga especializada en acompañar a personas en su proceso de crecimiento
              personal y superación de dificultades emocionales.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={index}
                  className="p-6 text-center hover:shadow-soft transition-all duration-300 animate-scale-in border-none bg-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              );
            })}
          </div>

          <Card className="p-8 shadow-card border-none bg-white">
            <p className="text-lg text-foreground leading-relaxed mb-4">
              Mi enfoque terapéutico se basa en crear un espacio seguro donde puedas expresarte
              libremente. Creo firmemente en el potencial de cada persona para crecer y sanar,
              y mi rol es acompañarte en ese camino.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              Trabajo con un enfoque integrativo, combinando diferentes metodologías según las
              necesidades únicas de cada cliente. Mi objetivo es brindarte herramientas prácticas
              que puedas aplicar en tu vida diaria para alcanzar el bienestar que mereces.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;