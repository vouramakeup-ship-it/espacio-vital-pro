import { Card } from "@/components/ui/card";
import { Brain, Users2, HeartHandshake, Sparkles, Wind, UserCircle } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "Terapia Individual",
      description: "Sesiones personalizadas para trabajar ansiedad, depresión, estrés y otros desafíos emocionales.",
    },
    {
      icon: Users2,
      title: "Terapia de Pareja",
      description: "Fortalece tu relación y aprende herramientas de comunicación efectiva.",
    },
    {
      icon: HeartHandshake,
      title: "Terapia Familiar",
      description: "Resuelve conflictos y mejora la dinámica familiar con un enfoque sistémico.",
    },
    {
      icon: Sparkles,
      title: "Desarrollo Personal",
      description: "Alcanza tus metas y potencia tu crecimiento personal y profesional.",
    },
    {
      icon: Wind,
      title: "Manejo del Estrés",
      description: "Técnicas de relajación y mindfulness para una vida más equilibrada.",
    },
    {
      icon: UserCircle,
      title: "Autoestima",
      description: "Fortalece tu confianza y construye una imagen positiva de ti mismo/a.",
    },
  ];

  return (
    <section id="servicios" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Servicios
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ofrezco un acompañamiento integral adaptado a tus necesidades específicas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="p-8 hover:shadow-soft transition-all duration-300 group cursor-pointer border-border bg-card animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="font-serif text-2xl font-semibold mb-3 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Card className="inline-block p-6 shadow-card border-none bg-primary/5">
            <p className="text-lg text-foreground">
              <span className="font-semibold">Modalidad:</span> Presencial y Online
            </p>
            <p className="text-muted-foreground mt-2">
              Sesiones de 45 minutos | Horarios flexibles
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;